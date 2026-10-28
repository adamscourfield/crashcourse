// Pearson Edexcel GCSE (9–1) History 1HI0, Option P4: Superpower relations and the Cold War, 1941–91.
// Depth lessons for key topic 3 (specification 3.1–3.3). Each follows its subsection's overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.coldwar.kt3';

export const coldwarDepth3 = [
lesson(T, 'coldwar.salt-helsinki', 'SALT 1 and the Helsinki Agreements', ['P4 3.1'], [
  ['A changing world', 'In 1969 Soviet and Chinese troops clashed on their border, ending any idea of a united communist world. President Nixon visited China in 1972, and the USSR, worried about a US–China alliance, became keener to deal with the USA. In Europe, West Germany\'s Chancellor Willy Brandt improved relations with the East through his policy of Ostpolitik.'],
  ['SALT 1, May 1972', 'Nixon and Brezhnev signed SALT 1 in Moscow. The Anti-Ballistic Missile Treaty limited each side to two missile-defence sites, so neither could hope to survive a nuclear war, and an Interim Agreement froze the number of long-range missile launchers for five years. But it did not cover missiles carrying several warheads, which both sides went on building.'],
  ['The Helsinki Final Act, 1975', 'Thirty-five countries signed agreements in three areas, called "baskets". In security, they accepted Europe\'s existing borders and agreed to give notice of large military exercises. In cooperation, they promised more trade and scientific exchange. In human rights, they promised freedom of movement, speech and the reuniting of divided families.'],
  ['Helsinki\'s unexpected effect', 'The USSR saw Helsinki as a victory, because the West accepted the borders it had drawn after 1945. But groups in the Eastern bloc, such as the Moscow Helsinki Group in 1976 and Charter 77 in Czechoslovakia, used the human-rights promises to expose abuses. Their members were arrested, which the West used as evidence that the USSR broke its word.'],
], view.factors('What each side gained', [
  ['USSR at Helsinki', 'Western acceptance of the post-war borders'],
  ['West at Helsinki', 'Soviet promises on human rights'],
  ['Both from SALT 1', 'a limit on missile defences and launchers; lower risk of war'],
  ['Limit of SALT 1', 'multiple-warhead missiles were not covered'],
]), [
  view.timeline('Détente takes shape', [
    ['1969', 'Sino-Soviet border clashes'],
    ['1970', 'West Germany\'s treaty with the USSR under Ostpolitik'],
    ['Feb 1972', 'Nixon visits China'],
    ['May 1972', 'SALT 1 signed in Moscow'],
    ['1975', 'Helsinki Final Act; joint Apollo–Soyuz space flight'],
    ['1976–77', 'Moscow Helsinki Group and Charter 77 formed'],
  ]),
  view.people('People', [
    ['Richard Nixon', 'US President who signed SALT 1 and visited China'],
    ['Leonid Brezhnev', 'Soviet leader during détente'],
    ['Willy Brandt', 'West German Chancellor behind Ostpolitik'],
    ['Charter 77', 'Czechoslovak group that monitored human rights'],
  ]),
  view.source('A source type: the Helsinki Final Act', 'The signed text setting out the three "baskets" of agreement on security, cooperation and human rights.', 'Very useful for what was promised; it shows commitments on paper, not whether governments kept them.'),
], [
  ['Why did the Sino-Soviet split encourage détente?', ['The USSR feared a US–China alliance and wanted better relations with the USA', 'China and the USSR united and asked the USA to join their alliance', 'It meant the USSR had no enemies left and could disarm completely'], 0, 'Triangular diplomacy.'],
  ['What did the ABM Treaty do?', ['Limited each side to two missile-defence sites so neither felt safe to attack', 'Banned all nuclear weapons held by the USA and the Soviet Union', 'Allowed each side to build as many missile defences as it wanted'], 0, 'It kept mutual vulnerability.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the Helsinki Agreements?', ['Eastern bloc groups used its human-rights promises to expose abuses, increasing pressure on the USSR.', 'Thirty-five countries, including both superpowers, signed the Helsinki Final Act in the year 1975.', 'The agreements were divided into three separate areas that were known as baskets.'], 0, 'A consequence explains what followed.'],
  ['What was the main weakness of SALT 1?', ['It did not cover missiles carrying several warheads', 'It was never signed by the Soviet leader Brezhnev', 'It applied only to weapons held by Britain and France'], 0, 'A loophole in the arms race.'],
], [
  Q('cwd19.p1', 'When was SALT 1 signed?', ['May 1972', 'August 1975', 'June 1979'], 0, 'In Moscow, by Nixon and Brezhnev.', 'salt-one'),
  Q('cwd19.p2', 'How many countries signed the Helsinki Final Act?', ['Thirty-five', 'Three', 'Three hundred'], 0, 'Including the USA and USSR.', 'helsinki'),
  Q('cwd19.p3', 'What was Ostpolitik?', ['West Germany\'s policy of better relations with the East', 'A Soviet plan to invade and occupy West Germany', 'An American spy network operating in Berlin'], 0, 'Led by Willy Brandt.', 'causes'),
  Q('cwd19.p4', 'Which US President visited China in 1972?', ['Nixon', 'Carter', 'Reagan'], 0, 'Worrying the USSR.', 'causes'),
  Q('cwd19.p5', 'How many missile-defence sites did the ABM Treaty allow each side?', ['Two', 'Twenty', 'None'], 0, 'Keeping both vulnerable.', 'salt-one'),
], [
  Q('cwd19.c1', 'What did the USSR gain at Helsinki?', ['Acceptance of Europe\'s borders', 'Control of all of West Berlin', 'Full membership of NATO'], 0, 'Its post-war borders.', 'helsinki'),
  Q('cwd19.c2', 'What did the West gain at Helsinki?', ['Promises on human rights', 'Control of East Berlin', 'An end to communism'], 0, 'Later used as a lever.', 'helsinki'),
  Q('cwd19.c3', 'Which group monitored rights in Czechoslovakia?', ['Charter 77', 'Solidarity', 'The Stasi'], 0, 'It was formed in 1977.', 'helsinki-effect'),
  Q('cwd19.c4', 'Which weapons did SALT 1 fail to cover?', ['Multiple-warhead missiles', 'Missile-defence sites', 'Long-range missile launchers'], 0, 'This was a loophole.', 'salt-one'),
  Q('cwd19.c5', 'When did Soviet and Chinese troops clash?', ['1969', '1979', '1959'], 0, 'On their border.', 'causes'),
  Q('cwd19.c6', 'What happened to Helsinki group members?', ['They were arrested', 'They were promoted', 'They joined NATO'], 0, 'Showing broken promises.', 'helsinki-effect'),
  Q('cwd19.c7', 'For how long did the Interim Agreement freeze launchers?', ['Five years', 'Fifty years', 'Five months'], 0, 'The freeze began in 1972.', 'salt-one'),
  Q('cwd19.c8', 'What joint space flight took place in 1975?', ['Apollo–Soyuz', 'Sputnik 1', 'Apollo 11'], 0, 'A symbol of détente.', 'causes'),
], {exam: 'Explain two consequences of the Helsinki Agreements of 1975. (8 marks)'}),

lesson(T, 'coldwar.salt2', 'SALT 2 and the end of détente', ['P4 3.1'], [
  ['Negotiating SALT 2', 'Talks on a second treaty began soon after SALT 1. In 1974 President Ford and Brezhnev agreed a framework at Vladivostok, and in June 1979 President Carter and Brezhnev signed SALT 2 in Vienna. It set equal limits on each side\'s long-range missile launchers and bombers, and limits on missiles with multiple warheads.'],
  ['Growing distrust', 'Many Americans believed the USSR was using détente to gain advantages. It was deploying new SS-20 missiles aimed at Western Europe, and it supported communist forces in African conflicts such as Angola and Ethiopia. Carter\'s criticism of Soviet human-rights abuses angered Moscow.'],
  ['Opposition in the Senate', 'A treaty needs the approval of two-thirds of the US Senate. Many senators doubted that Soviet compliance could be checked and thought SALT 2 favoured the USSR. In December 1979 NATO agreed to deploy new American missiles in Europe if the SS-20s were not withdrawn.'],
  ['The end of détente', 'When the USSR invaded Afghanistan in December 1979, Carter withdrew SALT 2 from the Senate, and it was never ratified. Both sides broadly kept to its limits for some years, but the period of détente was over, and the early 1980s became known as a "Second Cold War".'],
], view.factors('Why détente ended', [
  ['Arms', 'Soviet SS-20 missiles; NATO plans for new missiles'],
  ['Conflicts', 'Soviet support for communists in Africa; the invasion of Afghanistan'],
  ['Politics', 'Senate opposition and doubts about verification'],
  ['Values', 'Carter\'s human-rights criticism angered the USSR'],
]), [
  view.timeline('1974–80', [
    ['1974', 'Vladivostok framework for SALT 2'],
    ['1975–78', 'Soviet support for communists in Angola and Ethiopia'],
    ['1977', 'SS-20 missiles start to be deployed'],
    ['Jun 1979', 'SALT 2 signed in Vienna'],
    ['Dec 1979', 'NATO missile decision; Soviet invasion of Afghanistan'],
    ['Jan 1980', 'Carter withdraws SALT 2 from the Senate'],
  ]),
  view.people('People', [
    ['Jimmy Carter', 'US President who signed and then withdrew SALT 2'],
    ['Leonid Brezhnev', 'Signed SALT 2 in Vienna'],
    ['Gerald Ford', 'Agreed the Vladivostok framework in 1974'],
    ['The US Senate', 'Needed to ratify the treaty by a two-thirds vote'],
  ]),
  view.source('A source type: a senator\'s speech', 'A speech by a US senator arguing that SALT 2 could not be checked and would let the USSR gain an advantage.', 'Useful for the arguments against ratification; it was made to persuade other senators, so it gives one side.'),
], [
  ['Why did many Americans distrust détente by the late 1970s?', ['The USSR deployed new missiles and backed communists in Africa', 'The USSR had agreed to leave Eastern Europe within five years', 'The USSR had refused to sign the Helsinki Final Act in 1975'], 0, 'Actions seemed to contradict détente.'],
  ['Why was SALT 2 never ratified?', ['Carter withdrew it from the Senate after the invasion of Afghanistan', 'Brezhnev refused to sign it at the Vienna meeting in 1979', 'The United Nations banned the treaty before it could start'], 0, 'Afghanistan was the final blow.'],
  ['Exam skill · Narrative account. Which sequence of events is in the right order?', ['The Vladivostok framework; SALT 2 signed; Soviet invasion of Afghanistan; SALT 2 withdrawn from the Senate.', 'SALT 2 signed; SALT 2 withdrawn from the Senate; the Vladivostok framework; invasion of Afghanistan.', 'Invasion of Afghanistan; the Vladivostok framework; SALT 2 withdrawn from the Senate; SALT 2 signed.'], 0, 'A narrative links events in order.'],
  ['What did NATO decide in December 1979?', ['To deploy new US missiles in Europe unless the SS-20s were withdrawn', 'To leave West Germany and move all its forces back to the USA', 'To join the Warsaw Pact in a single European security alliance'], 0, 'The arms race in Europe revived.'],
], [
  Q('cwd20.p1', 'When was SALT 2 signed?', ['June 1979', 'May 1972', 'December 1987'], 0, 'It was signed in Vienna.', 'salt-two'),
  Q('cwd20.p2', 'Who signed SALT 2 for the USA?', ['Jimmy Carter', 'Richard Nixon', 'Ronald Reagan'], 0, 'He signed with Brezhnev.', 'salt-two'),
  Q('cwd20.p3', 'Which Soviet missiles alarmed Western Europe?', ['SS-20s', 'Pershing IIs', 'Polaris missiles'], 0, 'Deployed from 1977.', 'distrust'),
  Q('cwd20.p4', 'Where was the 1974 framework agreed?', ['Vladivostok', 'Helsinki', 'Reykjavik'], 0, 'By Ford and Brezhnev.', 'salt-two'),
  Q('cwd20.p5', 'What share of the Senate is needed to ratify a treaty?', ['Two-thirds', 'One-half', 'One-third'], 0, 'This was a high bar.', 'senate'),
], [
  Q('cwd20.c1', 'Where did the USSR back communists in the 1970s?', ['Angola and Ethiopia', 'France and Italy', 'Canada and Mexico'], 0, 'These were in Africa.', 'distrust'),
  Q('cwd20.c2', 'Why did senators doubt SALT 2?', ['Compliance could not be checked', 'It banned all nuclear weapons', 'It gave the USA far too much'], 0, 'Verification worries.', 'senate'),
  Q('cwd20.c3', 'What did Carter criticise the USSR for?', ['Human-rights abuses', 'Its space programme', 'Its sport'], 0, 'Angering Moscow.', 'distrust'),
  Q('cwd20.c4', 'Was SALT 2 ever ratified?', ['No', 'Yes, in 1980', 'Yes, in 1979'], 0, 'It was withdrawn.', 'end'),
  Q('cwd20.c5', 'What did the early 1980s become known as?', ['A "Second Cold War"', 'The era of détente', 'The Prague Spring'], 0, 'Tension returned.', 'end'),
  Q('cwd20.c6', 'Did both sides follow SALT 2 limits informally?', ['Broadly, for some years', 'Never at all, from the start', 'Only the USSR kept to them'], 0, 'Despite no ratification.', 'end'),
  Q('cwd20.c7', 'What did SALT 2 limit besides launchers?', ['Missiles with multiple warheads', 'Conventional troops in Europe', 'Satellites orbiting in space'], 0, 'Closing a SALT 1 gap.', 'salt-two'),
  Q('cwd20.c8', 'When did Carter withdraw SALT 2?', ['January 1980', 'June 1979', 'December 1987'], 0, 'After Afghanistan.', 'end'),
], {exam: 'Write a narrative account analysing the key events that led to the end of détente in the years 1975–80. (8 marks)'}),

lesson(T, 'coldwar.carter-doctrine', 'The invasion of Afghanistan and the Carter Doctrine', ['P4 3.2'], [
  ['Why the USSR invaded', 'A communist government took power in Afghanistan in 1978 but faced rebellion from Islamic fighters, the mujahideen. In 1979 its leader, Hafizullah Amin, seized power by killing his rival; Moscow distrusted him and feared he might turn to the USA. The Islamic revolution in Iran that year raised fears that radical Islam could spread to the USSR\'s Muslim republics.'],
  ['The invasion, December 1979', 'At the end of December 1979 Soviet troops entered Afghanistan, killed Amin and installed Babrak Karmal as leader. The USSR expected a short operation, but became trapped in a long war against the mujahideen in difficult mountain terrain.'],
  ['The Carter Doctrine, January 1980', 'Carter believed the USSR might be moving towards the oil of the Persian Gulf. In January 1980 he declared that any attempt to gain control of the Gulf would be treated as an attack on the USA and resisted by force. This was the Carter Doctrine.'],
  ['Other US measures', 'Carter banned grain sales to the USSR, withdrew SALT 2 from the Senate, increased defence spending and set up a rapid deployment force for the Gulf. The CIA, working through Pakistan, supplied money and weapons to the mujahideen. The war cost the USSR thousands of lives and huge sums until it withdrew in 1988–89.'],
], view.factors('Reasons for the invasion', [
  ['Distrust of Amin', 'fear that he might turn to the USA'],
  ['Islamic revolution', 'fear of radical Islam spreading into Soviet republics'],
  ['Security', 'an unstable neighbour on the USSR\'s southern border'],
  ['Expectation', 'a short, easy operation'],
]), [
  view.timeline('Afghanistan', [
    ['1978', 'Communists take power in Afghanistan'],
    ['Jan 1979', 'The Shah falls in Iran'],
    ['Sept 1979', 'Amin seizes power'],
    ['Dec 1979', 'Soviet invasion; Karmal installed'],
    ['Jan 1980', 'The Carter Doctrine; grain embargo'],
    ['1988–89', 'Soviet troops withdraw'],
  ]),
  view.people('People and groups', [
    ['Hafizullah Amin', 'Afghan leader killed in the invasion'],
    ['Babrak Karmal', 'Leader installed by the USSR'],
    ['The mujahideen', 'Islamic fighters backed by the USA'],
    ['Jimmy Carter', 'Announced the Carter Doctrine'],
  ]),
  view.source('A source type: Carter\'s State of the Union address', 'President Carter\'s January 1980 speech to Congress setting out the Carter Doctrine.', 'Very useful for the official US position; it was a public speech meant to show strength, at home and abroad.'),
], [
  ['Why did the Iranian revolution worry the USSR?', ['It raised fears that radical Islam would spread to Soviet Muslim republics', 'It brought a communist government to power right next to Afghanistan', 'It meant Iran had joined NATO and invited US troops onto its land'], 0, 'Security on the southern border.'],
  ['What did the Carter Doctrine state?', ['Any attempt to control the Persian Gulf would be resisted by force', 'The USA would leave the Middle East and stop buying its oil', 'The USA would invade Afghanistan to remove the Soviet army'], 0, 'Oil was at stake.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the Soviet invasion of Afghanistan?', ['The USA armed the mujahideen, trapping the USSR in a costly war that lasted almost ten years.', 'Soviet troops entered Afghanistan at the very end of December in the year 1979.', 'Babrak Karmal was installed by the Soviet Union as the new leader of Afghanistan.'], 0, 'A consequence explains a result.'],
  ['How did the USA supply the mujahideen?', ['Through the CIA, working via Pakistan', 'By sending US soldiers to fight alongside them', 'Through the United Nations peacekeeping force'], 0, 'This was covert support.'],
], [
  Q('cwd21.p1', 'When did the USSR invade Afghanistan?', ['December 1979', 'August 1968', 'December 1991'], 0, 'At the very end of the year.', 'invasion'),
  Q('cwd21.p2', 'Who were the mujahideen?', ['Islamic fighters', 'Soviet soldiers', 'US advisers'], 0, 'Backed by the USA.', 'invasion'),
  Q('cwd21.p3', 'Who was installed as leader in 1979?', ['Babrak Karmal', 'Hafizullah Amin', 'Mohammad Najibullah'], 0, 'He was installed by the USSR.', 'invasion'),
  Q('cwd21.p4', 'When was the Carter Doctrine announced?', ['January 1980', 'December 1979', 'March 1983'], 0, 'In the State of the Union.', 'doctrine'),
  Q('cwd21.p5', 'What did Carter ban sales of to the USSR?', ['Grain', 'Oil', 'Computers only'], 0, 'It was an embargo.', 'measures'),
], [
  Q('cwd21.c1', 'Which region\'s oil did Carter fear for?', ['The Persian Gulf', 'The North Sea', 'Western Siberia'], 0, 'Hence the doctrine.', 'doctrine'),
  Q('cwd21.c2', 'Which country did the CIA work through?', ['Pakistan', 'India', 'Iran'], 0, 'To arm the rebels.', 'measures'),
  Q('cwd21.c3', 'Why did Moscow distrust Amin?', ['He might turn to the USA', 'He was too loyal to Moscow', 'He had become a Maoist'], 0, 'He seized power by force.', 'causes'),
  Q('cwd21.c4', 'When did Soviet troops withdraw?', ['1988–89', '1980–81', '1991–92'], 0, 'Under Gorbachev.', 'measures'),
  Q('cwd21.c5', 'What did the USSR expect from the invasion?', ['A short operation', 'A long, costly war', 'An alliance with the USA'], 0, 'It was proved wrong.', 'invasion'),
  Q('cwd21.c6', 'What did Carter set up for the Gulf?', ['A rapid deployment force', 'A new international trade union', 'A military space station'], 0, 'To back the doctrine.', 'measures'),
  Q('cwd21.c7', 'Which revolution happened in 1979?', ['The Iranian revolution', 'The Cuban revolution', 'The Russian revolution'], 0, 'Radical Islam rose.', 'causes'),
  Q('cwd21.c8', 'What happened to Amin in the invasion?', ['He was killed', 'He fled to the USA', 'He was promoted'], 0, 'Karmal replaced him.', 'invasion'),
], {exam: 'Explain two consequences of the Soviet invasion of Afghanistan in 1979. (8 marks)'}),

lesson(T, 'coldwar.olympics', 'The Olympic boycotts', ['P4 3.2'], [
  ['Moscow, 1980', 'Moscow was due to host the 1980 Olympics, the first in a communist country, and the USSR planned to use them to show off its achievements. After the invasion of Afghanistan, Carter called for a boycott, and around sixty countries, including the USA, West Germany and Japan, stayed away.'],
  ['A divided response', 'Not all Western governments could stop their athletes. The British government supported the boycott, but the British Olympic Association sent a team anyway, and some athletes competed under the Olympic flag rather than their national flag. Many athletes resented losing the chance of a lifetime.'],
  ['Los Angeles, 1984', 'In 1984 the USSR and most of its allies boycotted the Los Angeles Olympics, claiming that their athletes\' safety could not be guaranteed. Most people saw it as revenge for 1980. Romania defied Moscow and competed.'],
  ['Significance', 'The boycotts showed how far the Cold War had spread into culture and sport. They did not change Soviet policy in Afghanistan, but they showed that détente was over and they deepened mistrust. Each side used the Games, and the boycotts, as propaganda.'],
], view.factors('What the boycotts showed', [
  ['Propaganda', 'both sides used the Games to show off their systems'],
  ['Protest', 'the 1980 boycott protested against Afghanistan'],
  ['Revenge', 'the 1984 boycott answered 1980'],
  ['Limits', 'Soviet policy in Afghanistan did not change'],
]), [
  view.timeline('The boycotts', [
    ['Dec 1979', 'Soviet invasion of Afghanistan'],
    ['Jan 1980', 'Carter calls for a boycott of Moscow'],
    ['Jul 1980', 'Moscow Olympics, with around sixty countries absent'],
    ['May 1984', 'USSR announces it will boycott Los Angeles'],
    ['Jul 1984', 'Los Angeles Olympics; Romania competes'],
  ]),
  view.people('People and groups', [
    ['Jimmy Carter', 'Led the 1980 boycott'],
    ['The British Olympic Association', 'Sent a team despite government opposition'],
    ['Romania', 'Defied the 1984 Soviet-bloc boycott'],
    ['Athletes', 'Lost the chance to compete'],
  ]),
  view.source('A source type: a 1980 Soviet newspaper report', 'A Soviet newspaper praising the success of the Moscow Games and dismissing the boycott as a failure.', 'Useful for how the USSR presented the Games; as state-controlled media it presents only a positive view.'),
], [
  ['Why did Carter call for the 1980 boycott?', ['To protest against the Soviet invasion of Afghanistan', 'Because the Moscow stadiums had not been finished in time', 'Because the USSR had banned American athletes from Moscow'], 0, 'A response to Afghanistan.'],
  ['Why did the USSR boycott the 1984 Games?', ['Officially over safety, but widely seen as revenge for 1980', 'Because Los Angeles refused to allow any Soviet athletes in', 'Because the Soviet team had been banned for cheating'], 0, 'It was tit for tat.'],
  ['Exam skill · Explain the importance. Which best explains the importance of the Olympic boycotts?', ['They showed détente was over and spread rivalry into sport, deepening mistrust.', 'The 1980 Olympic Games were held in Moscow and the 1984 Games in Los Angeles.', 'Around sixty countries stayed away from the Moscow Games in July 1980.'], 0, 'Importance explains significance.'],
  ['Did the 1980 boycott change Soviet policy?', ['No; Soviet troops stayed in Afghanistan', 'Yes; the USSR withdrew from Afghanistan at once', 'Yes; Brezhnev resigned and apologised'], 0, 'Its effect was symbolic.'],
], [
  Q('cwd22.p1', 'Where were the 1980 Olympics held?', ['Moscow', 'Los Angeles', 'Munich'], 0, 'The first in a communist country.', 'moscow'),
  Q('cwd22.p2', 'Roughly how many countries boycotted Moscow?', ['About sixty', 'About six', 'About six hundred'], 0, 'Including the USA.', 'moscow'),
  Q('cwd22.p3', 'Which Eastern bloc country competed in 1984?', ['Romania', 'Poland', 'East Germany'], 0, 'It defied Moscow.', 'la'),
  Q('cwd22.p4', 'Who called for the 1980 boycott?', ['Carter', 'Reagan', 'Nixon'], 0, 'In January 1980.', 'moscow'),
  Q('cwd22.p5', 'What did the USSR officially cite in 1984?', ['Athletes\' safety', 'The cost of travel', 'Bad weather forecasts'], 0, 'Seen as revenge.', 'la'),
], [
  Q('cwd22.c1', 'Did Britain\'s team go to Moscow?', ['Yes, despite the government', 'No, it stayed at home', 'Only its coaches went'], 0, 'The BOA decided.', 'moscow'),
  Q('cwd22.c2', 'Under which flag did some athletes compete?', ['The Olympic flag', 'The Soviet flag', 'No flag'], 0, 'They did so in protest.', 'moscow'),
  Q('cwd22.c3', 'Where were the 1984 Olympics held?', ['Los Angeles', 'Moscow', 'Seoul'], 0, 'Boycotted by the Soviet bloc.', 'la'),
  Q('cwd22.c4', 'What did the boycotts show about détente?', ['It was over', 'It was growing', 'It had begun'], 0, 'Mistrust deepened.', 'significance'),
  Q('cwd22.c5', 'How did the USSR plan to use the 1980 Games?', ['To show off its achievements', 'To hold peace talks with Carter', 'To announce the end of the war'], 0, 'It was propaganda.', 'moscow'),
  Q('cwd22.c6', 'Who suffered most from the boycotts?', ['Athletes', 'Generals', 'Diplomats'], 0, 'They lost a lifetime\'s chance.', 'significance'),
  Q('cwd22.c7', 'Which event led to the 1980 boycott?', ['The invasion of Afghanistan', 'The building of the Berlin Wall', 'The crushing of the Prague Spring'], 0, 'It began in December 1979.', 'moscow'),
  Q('cwd22.c8', 'How was the 1984 boycott widely seen?', ['As revenge for 1980', 'As a safety measure', 'As a protest about SDI'], 0, 'It was tit for tat.', 'la'),
], {exam: 'Explain the importance of the Olympic boycotts for relations between the superpowers. (8 marks)'}),

lesson(T, 'coldwar.reagan-sdi', 'Reagan and the Strategic Defense Initiative', ['P4 3.2'], [
  ['A new approach', 'Ronald Reagan became President in January 1981. He believed détente had let the USSR gain ground, and that the USA should negotiate only from strength. He greatly increased defence spending and supported anti-communist fighters around the world, from Afghanistan to Nicaragua, a policy later called the Reagan Doctrine. In 1983 he described the USSR as an "evil empire".'],
  ['The Strategic Defense Initiative', 'In March 1983 Reagan announced SDI, nicknamed "Star Wars": a plan to develop space-based weapons that could destroy Soviet missiles in flight. Much of the technology did not yet exist. Soviet leaders feared it would let the USA attack without fear of retaliation, ending the balance of mutually assured destruction.'],
  ['1983: a dangerous year', 'In September 1983 the USSR shot down a South Korean airliner that had strayed into its airspace, killing all on board. In November, NATO\'s Able Archer exercise simulated preparations for nuclear war so realistically that some Soviet leaders feared a real attack. The same month, new US Pershing II and cruise missiles began arriving in Western Europe.'],
  ['The Soviet problem', 'The USSR had a struggling economy and elderly, short-lived leaders: Brezhnev died in 1982, Andropov in 1984 and Chernenko in 1985. It could not afford to match American spending or SDI research. This pressure is one reason later Soviet leaders looked for agreement.'],
], view.factors('Why SDI mattered', [
  ['Threat to MAD', 'it could make the USA safe from retaliation'],
  ['Cost', 'the USSR could not afford to match it'],
  ['Tension', 'it raised Soviet fears during a dangerous period'],
  ['Bargaining', 'later a sticking point in arms talks'],
]), [
  view.timeline('The "Second Cold War"', [
    ['Jan 1981', 'Reagan becomes President'],
    ['Nov 1982', 'Brezhnev dies; Andropov becomes leader'],
    ['Mar 1983', 'SDI announced'],
    ['Sept 1983', 'Korean airliner shot down'],
    ['Nov 1983', 'Able Archer exercise; US missiles arrive in Europe'],
    ['1984–85', 'Andropov and Chernenko die'],
  ]),
  view.people('People', [
    ['Ronald Reagan', 'US President from 1981'],
    ['Yuri Andropov', 'Soviet leader, 1982–84'],
    ['Konstantin Chernenko', 'Soviet leader, 1984–85'],
    ['Mujahideen and Contras', 'Anti-communist fighters backed by the USA'],
  ]),
  view.source('A source type: a cartoon of SDI', 'A cartoon showing Reagan as a cowboy in space shooting down Soviet missiles.', 'Useful for how critics mocked SDI as fantasy; it is a cartoonist\'s view, not evidence of what the technology could do.'),
], [
  ['Why did Soviet leaders fear SDI?', ['It might let the USA attack without fear of retaliation', 'It would be used to launch satellites to spy on Soviet farms', 'It meant the USA would leave NATO and stop defending Europe'], 0, 'It threatened mutual deterrence.'],
  ['Why was 1983 so dangerous?', ['An airliner was shot down and a NATO exercise was mistaken for a real attack', 'The USSR invaded West Germany and fought NATO forces for a month', 'Reagan and Andropov met and agreed to abolish all nuclear weapons'], 0, 'Misunderstanding could have led to war.'],
  ['Exam skill · Explain the importance. Which best explains the importance of SDI?', ['The USSR could not afford to match it, increasing pressure on Soviet leaders to seek agreement.', 'SDI was announced by President Reagan in March 1983 and was nicknamed "Star Wars".', 'SDI was a plan for space-based weapons, and much of its technology did not yet exist.'], 0, 'Importance explains an effect.'],
  ['What was the Reagan Doctrine?', ['Support for anti-communist fighters around the world', 'A promise never to build any new nuclear weapons', 'An agreement to share technology with the USSR'], 0, 'Rolling back communism.'],
], [
  Q('cwd23.p1', 'When did Reagan become President?', ['January 1981', 'January 1977', 'January 1989'], 0, 'After beating Carter.', 'reagan'),
  Q('cwd23.p2', 'When was SDI announced?', ['March 1983', 'May 1972', 'December 1987'], 0, 'Nicknamed "Star Wars".', 'sdi'),
  Q('cwd23.p3', 'What was Able Archer?', ['A NATO exercise', 'A Soviet missile', 'A spy plane'], 0, 'It took place in November 1983.', 'danger-year'),
  Q('cwd23.p4', 'Which US missiles arrived in Europe in 1983?', ['Pershing II and cruise', 'Soviet SS-20 missiles', 'Old Jupiter missiles'], 0, 'They arrived in November.', 'danger-year'),
  Q('cwd23.p5', 'Who led the USSR from 1982 to 1984?', ['Andropov', 'Brezhnev', 'Gorbachev'], 0, 'He died in 1984.', 'soviet-problem'),
], [
  Q('cwd23.c1', 'How did Reagan describe the USSR in 1983?', ['An "evil empire"', 'A "trusted partner"', 'A "fellow democracy"'], 0, 'He took a hard line.', 'reagan'),
  Q('cwd23.c2', 'Where did Reagan back anti-communist fighters?', ['Afghanistan and Nicaragua', 'France and Spain', 'Canada and Mexico'], 0, 'The Reagan Doctrine.', 'reagan'),
  Q('cwd23.c3', 'What did SDI threaten?', ['Mutually assured destruction', 'The space race to the Moon', 'The NATO alliance itself'], 0, 'The balance of deterrence.', 'sdi'),
  Q('cwd23.c4', 'What was shot down in September 1983?', ['A South Korean airliner', 'An American spy plane', 'A Soviet weather satellite'], 0, 'All on board died.', 'danger-year'),
  Q('cwd23.c5', 'Why could the USSR not match SDI?', ['Its economy was struggling', 'It had no scientists at all', 'It was banned by treaty'], 0, 'Cost was decisive.', 'soviet-problem'),
  Q('cwd23.c6', 'Who led the USSR from 1984 to 1985?', ['Chernenko', 'Andropov', 'Khrushchev'], 0, 'Another elderly leader.', 'soviet-problem'),
  Q('cwd23.c7', 'What did Reagan do to defence spending?', ['Greatly increased it', 'Cut it very sharply', 'Froze it at 1980 levels'], 0, 'Peace through strength.', 'reagan'),
  Q('cwd23.c8', 'Did SDI\'s technology exist in 1983?', ['Much of it did not', 'Yes, all of it', 'Only in the USSR'], 0, 'It was a research plan.', 'sdi'),
], {exam: 'Explain the importance of Reagan\'s Strategic Defense Initiative for relations between the superpowers. (8 marks)'}),

lesson(T, 'coldwar.inf', 'Gorbachev\'s new thinking and the INF Treaty', ['P4 3.2'], [
  ['Gorbachev\'s "new thinking"', 'Mikhail Gorbachev became Soviet leader in March 1985. He believed the USSR\'s economy could not support the arms race and the war in Afghanistan. His "new thinking" in foreign policy aimed to reduce tension, cut military spending and rely on "reasonable sufficiency": enough weapons for defence, not to match the USA weapon for weapon.'],
  ['Geneva, 1985, and Reykjavik, 1986', 'At Geneva in November 1985 Reagan and Gorbachev reached no treaty but issued a joint statement that a nuclear war could not be won. At Reykjavik in October 1986 they came close to agreeing to scrap all ballistic missiles, but the talks collapsed because Reagan would not give up SDI. The nuclear disaster at Chernobyl earlier that year had strengthened Gorbachev\'s fear of nuclear weapons.'],
  ['The INF Treaty, 1987', 'In December 1987 in Washington they signed the Intermediate-Range Nuclear Forces Treaty. It abolished all ground-launched missiles with ranges between 500 and 5,500 kilometres, including the SS-20s and the Pershing IIs. About 2,600 missiles were destroyed by 1991, and each side allowed the other to carry out inspections.'],
  ['Further steps', 'In December 1988 Gorbachev announced at the United Nations that the USSR would cut its armed forces by half a million men, and Soviet troops left Afghanistan by February 1989. Trust between the leaders had grown, and the arms race began to go into reverse.'],
], view.factors('Why agreement became possible', [
  ['Soviet economy', 'the USSR could no longer afford the arms race'],
  ['Gorbachev', 'new thinking and reasonable sufficiency'],
  ['Personal trust', 'summits built a working relationship with Reagan'],
  ['Fear', 'Chernobyl and the near-misses of 1983'],
]), [
  view.timeline('1985–89', [
    ['Mar 1985', 'Gorbachev becomes Soviet leader'],
    ['Nov 1985', 'Geneva summit'],
    ['Apr 1986', 'Chernobyl nuclear disaster'],
    ['Oct 1986', 'Reykjavik summit'],
    ['Dec 1987', 'INF Treaty signed in Washington'],
    ['Dec 1988', 'Gorbachev announces troop cuts at the UN'],
    ['Feb 1989', 'Last Soviet troops leave Afghanistan'],
  ]),
  view.people('People', [
    ['Mikhail Gorbachev', 'Soviet leader from 1985'],
    ['Ronald Reagan', 'US President until January 1989'],
    ['Eduard Shevardnadze', 'Soviet foreign minister'],
    ['George Shultz', 'US Secretary of State'],
  ]),
  view.source('A source type: a joint statement from Geneva', 'The joint statement issued after the 1985 Geneva summit agreeing that a nuclear war could not be won and must never be fought.', 'Useful for the change in tone between the leaders; a joint statement shows agreed words, not each side\'s private aims.'),
], [
  ['What was "reasonable sufficiency"?', ['Having enough weapons for defence rather than matching the USA', 'Building as many weapons as the USA, weapon for weapon', 'Giving up every Soviet weapon immediately in 1985'], 0, 'A new Soviet idea.'],
  ['Why did the Reykjavik summit fail?', ['Reagan would not give up SDI', 'Gorbachev refused to talk about missiles', 'Britain and France blocked the deal'], 0, 'SDI was the sticking point.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the INF Treaty?', ['A whole class of missiles was destroyed, with inspections, so the arms race began to reverse.', 'The INF Treaty was signed by Reagan and Gorbachev in Washington in December 1987.', 'INF stands for Intermediate-Range Nuclear Forces, a type of missile in Europe.'], 0, 'A consequence explains a result.'],
  ['Why did Chernobyl matter?', ['It strengthened Gorbachev\'s fear of nuclear weapons', 'It destroyed most of the Soviet missile force', 'It led the USA to give up SDI at once'], 0, 'Nuclear danger felt real.'],
], [
  Q('cwd24.p1', 'When did Gorbachev become Soviet leader?', ['March 1985', 'December 1979', 'November 1989'], 0, 'After Chernenko died.', 'new-thinking'),
  Q('cwd24.p2', 'When was the INF Treaty signed?', ['December 1987', 'October 1986', 'May 1972'], 0, 'It was signed in Washington.', 'inf'),
  Q('cwd24.p3', 'Where did the 1986 summit take place?', ['Reykjavik', 'Geneva', 'Vienna'], 0, 'It is in Iceland.', 'summits'),
  Q('cwd24.p4', 'What ranges did the INF Treaty cover?', ['500 to 5,500 kilometres', 'Over 10,000 kilometres', 'Under 50 kilometres'], 0, 'Intermediate range.', 'inf'),
  Q('cwd24.p5', 'Roughly how many missiles were destroyed by 1991?', ['About 2,600', 'About 26', 'About 26,000'], 0, 'With inspections.', 'inf'),
], [
  Q('cwd24.c1', 'Where was the 1985 summit?', ['Geneva', 'Reykjavik', 'Moscow'], 0, 'No treaty, but a joint statement.', 'summits'),
  Q('cwd24.c2', 'What did the Geneva statement say?', ['A nuclear war could not be won', 'SDI research would be banned', 'Germany would soon be reunited'], 0, 'A change of tone.', 'summits'),
  Q('cwd24.c3', 'When did the Chernobyl disaster happen?', ['April 1986', 'April 1979', 'April 1991'], 0, 'Before Reykjavik.', 'summits'),
  Q('cwd24.c4', 'How large were the cuts Gorbachev announced in 1988?', ['Half a million men', 'Five thousand men', 'Five million men'], 0, 'He announced them at the UN.', 'further'),
  Q('cwd24.c5', 'When did the last Soviet troops leave Afghanistan?', ['February 1989', 'December 1979', 'August 1991'], 0, 'After almost ten years.', 'further'),
  Q('cwd24.c6', 'Which Soviet missiles did the INF Treaty remove?', ['SS-20s', 'Pershing IIs', 'Cruise missiles'], 0, 'And US Pershings.', 'inf'),
  Q('cwd24.c7', 'What allowed each side to check the INF Treaty?', ['Inspections', 'Trust alone', 'The UN army'], 0, 'This was a first.', 'inf'),
  Q('cwd24.c8', 'Who was Gorbachev\'s foreign minister?', ['Eduard Shevardnadze', 'Andrei Gromyko', 'Vyacheslav Molotov'], 0, 'A partner in new thinking.', 'new-thinking'),
], {exam: 'Explain two consequences of the INF Treaty of 1987. (8 marks)'}),

lesson(T, 'coldwar.revolutions-1989', 'The revolutions of 1989', ['P4 3.3'], [
  ['Poland', 'The independent trade union Solidarity, led by Lech Wałęsa, had been banned under martial law in 1981. In early 1989 the communist government held round-table talks with Solidarity and agreed to partly free elections in June, in which Solidarity won almost every seat it could contest. In August a Solidarity member became prime minister, and Moscow did not intervene.'],
  ['Hungary and East Germany', 'In May 1989 Hungary began removing its border fence with Austria, and in September it let East Germans cross freely, so thousands escaped west. In East Germany weekly demonstrations grew, especially in Leipzig, where tens of thousands marched in October. The hard-line leader Erich Honecker was forced to resign.'],
  ['Czechoslovakia, Bulgaria and Romania', 'In November 1989 mass peaceful protests in Prague, the "Velvet Revolution", brought down the communist government, and the playwright Václav Havel became president in December. Bulgaria\'s leader resigned in November. In Romania the revolution was violent: the dictator Nicolae Ceaușescu was overthrown and executed in December.'],
  ['Why Moscow let it happen', 'Gorbachev had abandoned the Brezhnev Doctrine and would not send troops to save unpopular governments. The USSR also could not afford to prop up Eastern Europe, and using force would have destroyed his relationship with the West. Without Soviet tanks behind them, the communist governments fell one after another.'],
], view.factors('Why communist rule collapsed in 1989', [
  ['Gorbachev', 'no Soviet troops to support the governments'],
  ['Economics', 'debt, shortages and falling living standards'],
  ['People power', 'Solidarity, mass demonstrations and escapes'],
  ['A chain reaction', 'success in one country encouraged the next'],
]), [
  view.timeline('1989', [
    ['Feb–Apr', 'Round-table talks in Poland'],
    ['May', 'Hungary begins removing its border fence'],
    ['Jun', 'Partly free elections in Poland; Solidarity wins'],
    ['Sept', 'Hungary opens its border to East Germans'],
    ['Oct', 'Mass protests in Leipzig; Honecker resigns'],
    ['Nov', 'The Berlin Wall opens; the Velvet Revolution in Prague'],
    ['Dec', 'Havel president; Ceaușescu overthrown and executed'],
  ]),
  view.people('People', [
    ['Lech Wałęsa', 'Leader of Solidarity in Poland'],
    ['Erich Honecker', 'East German leader forced out in 1989'],
    ['Václav Havel', 'Playwright who became Czechoslovak president'],
    ['Nicolae Ceaușescu', 'Romanian dictator overthrown in December'],
  ]),
  view.source('A source type: a television broadcast', 'Western television footage, also watched in the East, of crowds of East Germans crossing into Austria through Hungary.', 'Useful for the scale of the exodus; footage also spread news across the bloc and so helped events unfold.'),
], [
  ['Why did Hungary\'s opening of its border matter?', ['Thousands of East Germans used it to escape, weakening East Germany', 'It allowed Soviet tanks to drive straight into Austria and West Germany', 'It closed the only route East Germans had used to travel abroad'], 0, 'The Iron Curtain was breached.'],
  ['Why did Gorbachev not send troops?', ['He had abandoned the Brezhnev Doctrine and wanted good relations with the West', 'The Warsaw Pact had already been dissolved before 1989 began', 'NATO troops were guarding every communist capital in Europe'], 0, 'The decisive change.'],
  ['Exam skill · Narrative account. Which sequence of events is in the right order?', ['Solidarity wins Polish elections; Hungary opens its border; the Wall opens; Ceaușescu is overthrown.', 'Ceaușescu is overthrown; the Wall opens; Hungary opens its border; Solidarity wins Polish elections.', 'The Wall opens; Solidarity wins Polish elections; Ceaușescu is overthrown; Hungary opens its border.'], 0, 'A narrative links events in order.'],
  ['How was Romania\'s revolution different?', ['It was violent, and its leader was executed', 'It was peaceful, and its leader became president', 'It did not happen until 1995'], 0, 'Elsewhere change was mostly peaceful.'],
], [
  Q('cwd25.p1', 'Who led Solidarity?', ['Lech Wałęsa', 'Václav Havel', 'Erich Honecker'], 0, 'It was a Polish union.', 'poland'),
  Q('cwd25.p2', 'Which country opened its border to East Germans?', ['Hungary', 'Poland', 'Romania'], 0, 'In September 1989.', 'hungary-gdr'),
  Q('cwd25.p3', 'What was the Velvet Revolution?', ['Peaceful protests in Czechoslovakia', 'A Soviet invasion of Czechoslovakia', 'A free election held in Poland'], 0, 'It came in November 1989.', 'others'),
  Q('cwd25.p4', 'Who became Czechoslovak president in December 1989?', ['Václav Havel', 'Alexander Dubček', 'Gustáv Husák'], 0, 'He was a playwright.', 'others'),
  Q('cwd25.p5', 'Where were the biggest East German protests?', ['Leipzig', 'Dresden', 'Rostock'], 0, 'Marches there were weekly.', 'hungary-gdr'),
], [
  Q('cwd25.c1', 'When was Solidarity banned?', ['1981', '1989', '1968'], 0, 'Under martial law.', 'poland'),
  Q('cwd25.c2', 'Who was forced to resign in East Germany?', ['Erich Honecker', 'Walter Ulbricht', 'Helmut Kohl'], 0, 'In October 1989.', 'hungary-gdr'),
  Q('cwd25.c3', 'Which revolution was violent?', ['Romania\'s', 'Poland\'s', 'Czechoslovakia\'s'], 0, 'Ceaușescu was executed.', 'others'),
  Q('cwd25.c4', 'What did Hungary remove in May 1989?', ['Its border fence with Austria', 'Its ruling communist party', 'All Soviet troops in Hungary'], 0, 'The Iron Curtain opened.', 'hungary-gdr'),
  Q('cwd25.c5', 'When were partly free elections held in Poland?', ['June 1989', 'June 1981', 'June 1991'], 0, 'Solidarity won them.', 'poland'),
  Q('cwd25.c6', 'What had Gorbachev abandoned?', ['The Brezhnev Doctrine', 'His policy of glasnost', 'His policy of perestroika'], 0, 'No Soviet tanks.', 'moscow'),
  Q('cwd25.c7', 'Why could the USSR not prop up Eastern Europe?', ['It could not afford to', 'NATO had forbidden it', 'It had no army left'], 0, 'Economic weakness.', 'moscow'),
  Q('cwd25.c8', 'What helped spread change from country to country?', ['A chain reaction of success', 'Orders sent from Moscow', 'Pressure from NATO troops'], 0, 'Each encouraged the next.', 'moscow'),
], {exam: 'Write a narrative account analysing the key events of the collapse of communist rule in Eastern Europe in 1989. (8 marks)'}),

lesson(T, 'coldwar.wall-falls', 'The fall of the Berlin Wall and reunification', ['P4 3.3'], [
  ['9 November 1989', 'Facing mass protests and an exodus through Hungary and Czechoslovakia, the East German government decided to ease travel rules. At a press conference on 9 November a spokesman, Günter Schabowski, mistakenly said the new rules applied immediately. Crowds gathered at the crossings, and guards, without clear orders, opened the gates.'],
  ['Breaking down the Wall', 'That night and in the following days thousands crossed freely, and people began chipping pieces off the Wall. The border guards stood aside. For many, the Wall\'s opening symbolised the end of the division of Europe.'],
  ['The road to reunification', 'West German Chancellor Helmut Kohl quickly proposed a plan for unity. In March 1990 East Germany held its first free elections, won by parties supporting rapid reunification. The "Two Plus Four" Treaty in September 1990, between the two Germanies and the four wartime powers, settled the international questions.'],
  ['Germany united, October 1990', 'Germany was reunited on 3 October 1990. Gorbachev accepted that a united Germany could be a member of NATO, in return for financial help from West Germany and limits on German forces. The division of Germany, a central issue of the Cold War since 1945, was over.'],
], view.factors('Why the Wall fell when it did', [
  ['Pressure', 'mass protests and escapes through Hungary and Czechoslovakia'],
  ['Policy', 'the government\'s decision to ease travel rules'],
  ['Accident', 'Schabowski\'s mistaken announcement'],
  ['Moscow', 'Gorbachev would not use force to stop it'],
]), [
  view.timeline('From Wall to reunification', [
    ['9 Nov 1989', 'The Wall opens'],
    ['Nov 1989', 'Kohl proposes a plan for German unity'],
    ['Mar 1990', 'First free elections in East Germany'],
    ['Jul 1990', 'Gorbachev accepts a united Germany in NATO'],
    ['Sept 1990', 'The Two Plus Four Treaty'],
    ['3 Oct 1990', 'Germany reunited'],
  ]),
  view.people('People', [
    ['Günter Schabowski', 'East German spokesman who announced the new rules'],
    ['Helmut Kohl', 'West German Chancellor who drove reunification'],
    ['Mikhail Gorbachev', 'Accepted a united Germany in NATO'],
    ['Berliners', 'Crossed and broke down the Wall'],
  ]),
  view.source('A source type: a photograph of the Wall, November 1989', 'A photograph of crowds standing on top of the Wall at the Brandenburg Gate the night after it opened.', 'Powerful evidence of the public mood; one celebratory image does not show the political negotiations that followed.'),
], [
  ['Why did the Wall open on 9 November?', ['A spokesman mistakenly announced new travel rules applied immediately', 'Soviet tanks knocked it down on Gorbachev\'s orders', 'NATO troops crossed into East Berlin and removed the guards'], 0, 'An accident at a time of pressure.'],
  ['What did Gorbachev accept in 1990?', ['A united Germany inside NATO', 'A permanent division of Germany', 'Soviet control of West Berlin'], 0, 'In return for aid and limits.'],
  ['Exam skill · Explain the importance. Which best explains the importance of the fall of the Wall?', ['It opened the way to reunification, ending the division of Germany that had been central to the Cold War.', 'The Wall opened on 9 November 1989 after a confused press conference in East Berlin.', 'People began chipping pieces off the Wall in the days and weeks after it opened.'], 0, 'Importance explains the significance.'],
  ['What did the Two Plus Four Treaty do?', ['Settled the international questions about reunification', 'Divided Germany into four zones again after 1990', 'Created the Warsaw Pact to protect East Germany'], 0, 'The wartime powers agreed.'],
], [
  Q('cwd26.p1', 'When did the Wall open?', ['9 November 1989', '13 August 1961', '3 October 1990'], 0, 'After the press conference.', 'wall'),
  Q('cwd26.p2', 'Who made the mistaken announcement?', ['Günter Schabowski', 'Erich Honecker', 'Helmut Kohl'], 0, 'He was a spokesman.', 'wall'),
  Q('cwd26.p3', 'When was Germany reunited?', ['3 October 1990', '9 November 1989', 'December 1991'], 0, 'Less than a year later.', 'reunification'),
  Q('cwd26.p4', 'Who was West German Chancellor?', ['Helmut Kohl', 'Willy Brandt', 'Konrad Adenauer'], 0, 'He drove German unity.', 'reunification'),
  Q('cwd26.p5', 'When did East Germany hold free elections?', ['March 1990', 'June 1989', 'October 1990'], 0, 'They were its first.', 'reunification'),
], [
  Q('cwd26.c1', 'Which treaty settled reunification abroad?', ['Two Plus Four', 'The INF Treaty', 'The Helsinki Act'], 0, 'It was signed in September 1990.', 'reunification'),
  Q('cwd26.c2', 'What did the guards do on 9 November?', ['Opened the gates', 'Opened fire', 'Closed the border'], 0, 'Without clear orders.', 'wall'),
  Q('cwd26.c3', 'Which alliance could a united Germany join?', ['NATO', 'The Warsaw Pact', 'Comecon'], 0, 'Gorbachev agreed.', 'reunification'),
  Q('cwd26.c4', 'What did Gorbachev receive in return?', ['Financial help', 'Control of East Berlin', 'Nothing in return'], 0, 'And limits on forces.', 'reunification'),
  Q('cwd26.c5', 'Where did crowds stand on the Wall?', ['The Brandenburg Gate', 'Checkpoint Charlie only', 'Tempelhof'], 0, 'It became a famous image.', 'wall'),
  Q('cwd26.c6', 'Who won East Germany\'s 1990 election?', ['Parties for rapid reunification', 'Hard-line communist parties', 'No party won any seats'], 0, 'Unity followed quickly.', 'reunification'),
  Q('cwd26.c7', 'Which routes had East Germans used to escape?', ['Hungary and Czechoslovakia', 'Poland and nowhere else', 'Boats across the Baltic Sea'], 0, 'Pressure built up.', 'wall'),
  Q('cwd26.c8', 'Did Gorbachev use force?', ['No', 'Yes', 'Only in Berlin'], 0, 'A decisive choice.', 'wall'),
], {exam: 'Explain the importance of the fall of the Berlin Wall for the ending of the Cold War. (8 marks)'}),

lesson(T, 'coldwar.ussr-ends', 'The end of the Warsaw Pact and the USSR', ['P4 3.3'], [
  ['The end of the Soviet bloc', 'With communist governments gone in Eastern Europe, the new governments had no wish to stay in Soviet-led organisations. Comecon was dissolved in June 1991 and the Warsaw Pact in July 1991. Soviet troops began leaving Eastern Europe.'],
  ['Crisis inside the USSR', 'Gorbachev\'s reforms had not fixed the economy: there were shortages of food and basic goods, and prices rose. Glasnost allowed open criticism, and nationalist movements grew in the republics. Lithuania declared independence in March 1990, and others followed. Soviet troops killed protesters in Lithuania in January 1991.'],
  ['The August coup, 1991', 'On 19 August 1991 hard-line communists, opposed to a new treaty giving the republics more power, placed Gorbachev under house arrest in Crimea and tried to seize power. Boris Yeltsin, the elected President of Russia, rallied crowds in Moscow, standing on a tank to defy the plotters. The coup collapsed within three days, but Gorbachev\'s authority was fatally weakened.'],
  ['December 1991', 'In the autumn more republics declared independence. On 8 December the leaders of Russia, Ukraine and Belarus agreed to replace the USSR with a loose Commonwealth of Independent States. On 25 December Gorbachev resigned, and the Soviet Union ceased to exist. The Cold War was over.'],
], view.factors('Why the USSR collapsed', [
  ['Economy', 'shortages, debt and the failure of reform'],
  ['Nationalism', 'republics demanding independence'],
  ['Glasnost', 'openness allowed criticism of the system'],
  ['The coup', 'its failure discredited the hardliners and weakened Gorbachev'],
]), [
  view.timeline('1990–91', [
    ['Mar 1990', 'Lithuania declares independence'],
    ['Jan 1991', 'Soviet troops kill protesters in Lithuania'],
    ['Jun–Jul 1991', 'Comecon and the Warsaw Pact dissolved'],
    ['Jul 1991', 'START I arms treaty signed'],
    ['19–21 Aug 1991', 'The failed coup'],
    ['8 Dec 1991', 'Russia, Ukraine and Belarus agree to end the USSR'],
    ['25 Dec 1991', 'Gorbachev resigns'],
  ]),
  view.people('People', [
    ['Mikhail Gorbachev', 'Last Soviet leader'],
    ['Boris Yeltsin', 'President of Russia who defied the coup'],
    ['The coup plotters', 'Hard-line communists'],
    ['Nationalists in the republics', 'Demanded independence'],
  ]),
  view.source('A source type: a photograph of Yeltsin on a tank', 'A photograph of Boris Yeltsin standing on a tank outside the Russian parliament in August 1991, speaking to crowds.', 'Useful for showing resistance to the coup; it also made Yeltsin a hero, so it presents his role in the best light.'),
], [
  ['Why did nationalism threaten the USSR?', ['The republics demanded independence and began to break away', 'Russia wanted to take over Eastern Europe again by force', 'The republics wanted Gorbachev to become a dictator'], 0, 'The union was multinational.'],
  ['Why did the August coup weaken Gorbachev?', ['It showed his authority had collapsed, and Yeltsin emerged as the hero', 'It made him leader for life and ended all opposition to his rule', 'It forced him to restore the Brezhnev Doctrine in Eastern Europe'], 0, 'Power shifted to Yeltsin.'],
  ['Exam skill · Narrative account. Which sequence of events is in the right order?', ['The Warsaw Pact is dissolved; the August coup fails; Russia, Ukraine and Belarus agree to end the USSR; Gorbachev resigns.', 'Gorbachev resigns; the August coup fails; the Warsaw Pact is dissolved; Russia, Ukraine and Belarus agree to end the USSR.', 'The August coup fails; Gorbachev resigns; the Warsaw Pact is dissolved; Russia, Ukraine and Belarus agree to end the USSR.'], 0, 'A narrative links events in order.'],
  ['What replaced the USSR?', ['A loose Commonwealth of Independent States', 'A new Soviet Union under Yeltsin', 'A NATO-run government in Moscow'], 0, 'Agreed in December 1991.'],
], [
  Q('cwd27.p1', 'When was the Warsaw Pact dissolved?', ['July 1991', 'May 1955', 'November 1989'], 0, 'After Comecon in June.', 'bloc'),
  Q('cwd27.p2', 'Who defied the August coup?', ['Boris Yeltsin', 'Mikhail Gorbachev', 'Eduard Shevardnadze'], 0, 'Standing on a tank.', 'coup'),
  Q('cwd27.p3', 'When did Gorbachev resign?', ['25 December 1991', '19 August 1991', '9 November 1989'], 0, 'The USSR ended with it.', 'december'),
  Q('cwd27.p4', 'Which republic declared independence in March 1990?', ['Lithuania', 'Russia', 'Ukraine'], 0, 'Others followed.', 'crisis'),
  Q('cwd27.p5', 'Where was Gorbachev held during the coup?', ['Crimea', 'Moscow', 'Leningrad'], 0, 'Under house arrest.', 'coup'),
], [
  Q('cwd27.c1', 'When was Comecon dissolved?', ['June 1991', 'January 1949', 'June 1989'], 0, 'Before the Warsaw Pact.', 'bloc'),
  Q('cwd27.c2', 'How long did the coup last?', ['About three days', 'About three months', 'About three years'], 0, 'Then it collapsed.', 'coup'),
  Q('cwd27.c3', 'Which three republics ended the USSR?', ['Russia, Ukraine and Belarus', 'Poland, Hungary, Romania', 'Lithuania, Latvia, Estonia'], 0, 'On 8 December 1991.', 'december'),
  Q('cwd27.c4', 'What were Soviet shops short of?', ['Food and basic goods', 'Nothing at all', 'Only cars and fridges'], 0, 'Reform had failed.', 'crisis'),
  Q('cwd27.c5', 'What did the coup plotters oppose?', ['More power for the republics', 'The communist system', 'The Soviet army'], 0, 'A new union treaty.', 'coup'),
  Q('cwd27.c6', 'Which arms treaty was signed in July 1991?', ['START I', 'SALT 2', 'INF'], 0, 'Cutting long-range weapons.', 'bloc'),
  Q('cwd27.c7', 'What did glasnost allow?', ['Open criticism', 'Stricter censorship', 'More secret police'], 0, 'Problems were exposed.', 'crisis'),
  Q('cwd27.c8', 'What happened in Lithuania in January 1991?', ['Troops killed protesters', 'A free election was held', 'A peace treaty was signed'], 0, 'Showing tensions.', 'crisis'),
], {exam: 'Write a narrative account analysing the key events that led to the end of the Soviet Union in the years 1989–91. (8 marks)'}),
];
