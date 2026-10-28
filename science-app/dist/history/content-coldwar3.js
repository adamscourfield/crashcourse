// Pearson Edexcel GCSE (9–1) History 1HI0, Option P4: Superpower relations and the Cold War,
// 1941–91. Key topic 3: The end of the Cold War, 1970–91 (specification 3.1–3.3). All teaching text
// and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

export const coldwarTopic3 = {id: 'history.coldwar.kt3', unit: 'P4', title: 'The end of the Cold War, 1970–91', paper: 'Paper 2 · Period study'};
const T = coldwarTopic3.id;

export const coldwarLessons3 = [
lesson(T, 'coldwar.detente', 'Détente in the 1970s', ['P4 3.1'], [
  ['Why détente?', 'By the late 1960s both superpowers had reasons to reduce tension. The arms race was hugely expensive; the USA was trapped in Vietnam; the Soviet economy was struggling; and both feared nuclear war after Cuba. The USSR had also split with communist China. Détente meant an easing of tension, not an end to rivalry.'],
  ['SALT 1, 1972', 'Nixon and Brezhnev signed the first Strategic Arms Limitation Treaty in 1972. It limited anti-ballistic missile systems and froze the number of long-range missile launchers for five years. It did not reduce existing weapons, but it was the first agreement to limit the arms race.'],
  ['The Helsinki Agreements, 1975', 'Thirty-five countries, including the USA and USSR, signed the Helsinki Final Act. It accepted Europe\'s post-war borders, which the USSR wanted; encouraged cooperation in trade and technology; and committed signatories to respect human rights, which the West wanted. Groups in the Eastern bloc later used it to monitor Soviet abuses.'],
  ['SALT 2, 1979', 'Carter and Brezhnev signed SALT 2 in 1979, setting limits on the numbers of strategic weapons. Many in the US Senate distrusted it, and after the Soviet invasion of Afghanistan later that year it was never ratified. Détente was already fading.'],
], view.factors('Why did détente happen?', [
  ['Cost', 'the arms race strained both economies'],
  ['Vietnam', 'the USA wanted to reduce its commitments abroad'],
  ['Soviet problems', 'a weak economy and a split with China'],
  ['Fear', 'Cuba had shown how close nuclear war could come'],
]), [
  view.timeline('Détente, 1969–79', [
    ['1969', 'SALT talks begin'],
    ['1972', 'Nixon visits Moscow; SALT 1 signed'],
    ['1975', 'Helsinki Final Act signed; joint Apollo–Soyuz space mission'],
    ['1979', 'SALT 2 signed (June); Soviet invasion of Afghanistan (December)'],
  ]),
  view.people('Leaders', [
    ['Richard Nixon', 'US President 1969–74; signed SALT 1'],
    ['Leonid Brezhnev', 'Soviet leader 1964–82; signed SALT 1 and SALT 2'],
    ['Gerald Ford', 'US President at Helsinki in 1975'],
    ['Jimmy Carter', 'US President 1977–81; signed SALT 2'],
  ]),
  view.source('A document type: the Helsinki Final Act, 1975', 'A long agreement signed by 35 states, arranged in sections on European security and borders, cooperation in trade and science, and human rights.', 'Shows what both sides formally accepted; it was not legally binding, so it tells us more about promises than about what governments then did.'),
], [
  ['What did détente mean?', ['An easing of tension while rivalry continued', 'A formal alliance between the USA and the USSR', 'The end of all nuclear weapons by both sides'], 0, 'Competition went on in a calmer form.'],
  ['What did each side gain at Helsinki?', ['The USSR got its borders accepted; the West got human rights promises', 'The USA got Soviet troops withdrawn from all of Eastern Europe by 1980', 'The USSR got the right to station its missiles in Western Europe'], 0, 'Each side won something it valued.'],
  ['Exam skill · Explain importance. Which explains the importance of SALT 1?', ['It was the first agreement to limit the arms race, showing the superpowers could negotiate limits.', 'SALT 1 was signed in Moscow in May 1972 by President Nixon and the Soviet leader Brezhnev.', 'SALT stands for the Strategic Arms Limitation Talks, which had first begun in the year 1969.'], 0, 'Importance explains what changed.'],
  ['Why was SALT 2 never ratified?', ['Senators distrusted it, and the invasion of Afghanistan ended support', 'The USSR refused to sign it after Carter changed its terms in 1979', 'It was replaced at once by a new treaty banning all long-range missiles'], 0, 'Afghanistan ended détente.'],
], [
  Q('cw9.p1', 'Which treaty of 1972 limited anti-ballistic missiles?', ['SALT 1', 'SALT 2', 'The INF Treaty'], 0, 'SALT 2 came in 1979 and INF in 1987.', 'salt'),
  Q('cw9.p2', 'How many countries signed the Helsinki Final Act?', ['35', '2', '150'], 0, 'Most European states plus the USA and Canada.', 'helsinki'),
  Q('cw9.p3', 'Which US President signed SALT 2?', ['Jimmy Carter', 'Richard Nixon', 'Ronald Reagan'], 0, 'He signed it with Brezhnev in 1979.', 'salt'),
  Q('cw9.p4', 'What did the USSR want from Helsinki?', ['Recognition of Europe\'s post-war borders', 'Western investment in Soviet industry', 'Membership of NATO'], 0, 'It confirmed Soviet gains after 1945.', 'helsinki'),
  Q('cw9.p5', 'Which war made the USA keen to reduce commitments abroad?', ['Vietnam', 'Korea', 'Afghanistan'], 0, 'The Vietnam War was long and costly.', 'detente'),
], [
  Q('cw9.c1', 'What did SALT 1 freeze?', ['The number of long-range missile launchers', 'All nuclear testing by both sides', 'Soviet troops stationed in Eastern Europe'], 0, 'It limited growth rather than cutting numbers.', 'salt'),
  Q('cw9.c2', 'What did the West want from Helsinki?', ['Commitments to human rights', 'Control of the whole of Berlin', 'A share of Soviet oil and gas'], 0, 'Human rights became a lever against the USSR.', 'helsinki'),
  Q('cw9.c3', 'Why did the SALT 2 treaty fail?', ['It was not ratified after the invasion of Afghanistan', 'The USSR refused to sign it at the last minute', 'Carter lost the 1976 election before it was signed'], 0, 'The Senate never approved it.', 'salt'),
  Q('cw9.c4', 'Which was a reason for détente?', ['The high cost of the arms race', 'The fall of the Berlin Wall in 1969', 'The failure of the Bay of Pigs invasion'], 0, 'Both economies were strained.', 'detente'),
  Q('cw9.c5', 'Which Soviet leader signed SALT 1 and SALT 2?', ['Leonid Brezhnev', 'Nikita Khrushchev', 'Mikhail Gorbachev'], 0, 'He led the USSR from 1964 to 1982.', 'salt'),
  Q('cw9.c6', 'Who used the Helsinki Agreements against the Soviet government?', ['Human rights groups in the Eastern bloc', 'Members of the US Senate', 'The Chinese Communist Party in Beijing'], 0, 'They monitored abuses.', 'helsinki'),
  Q('cw9.c7', 'Which joint space mission took place in 1975?', ['Apollo–Soyuz', 'Sputnik', 'Apollo 11', 'Vostok 1'], 0, 'It symbolised détente.', 'detente'),
  Q('cw9.c8', 'Which country had split with the USSR, encouraging détente?', ['China', 'Cuba', 'Poland'], 0, 'The Sino-Soviet split changed calculations.', 'detente'),
], {exam: 'Explain the importance of the Helsinki Agreements (1975) for relations between the superpowers. (8 marks)'}),

lesson(T, 'coldwar.afghanistan', 'Afghanistan and the \'Second Cold War\'', ['P4 3.2'], [
  ['The invasion of Afghanistan, 1979', 'In December 1979 Soviet troops invaded Afghanistan to support a communist government threatened by Islamic rebels, the mujahideen. Brezhnev feared an unstable, Islamist neighbour on the USSR\'s southern border. The war lasted almost ten years and became the USSR\'s "Vietnam".'],
  ['The Carter Doctrine', 'President Carter saw the invasion as a threat to the oil-rich Persian Gulf. In January 1980 he announced that the USA would use military force to defend its interests in the Gulf. He also stopped grain sales to the USSR, withdrew SALT 2 from the Senate and increased support for the mujahideen.'],
  ['The Olympic boycotts', 'The USA led a boycott of the 1980 Moscow Olympics, joined by many countries. In 1984 the USSR and most of its allies boycotted the Los Angeles Olympics in return. Sport became part of Cold War rivalry.'],
  ['Reagan and the \'Second Cold War\'', 'Ronald Reagan, President from 1981, called the USSR an evil empire and greatly increased military spending. In 1983 he announced the Strategic Defense Initiative (SDI), nicknamed "Star Wars", a plan for space-based defences against missiles. The USSR could not afford to match it. Tension in 1983 was the highest for twenty years.'],
], view.factors('Why did détente end?', [
  ['Afghanistan', 'the invasion convinced the USA the USSR was expanding'],
  ['The Carter Doctrine', 'the USA threatened force to protect the Gulf'],
  ['Reagan', 'a hard line, heavy military spending and SDI'],
  ['Mutual distrust', 'boycotts and propaganda replaced cooperation'],
]), [
  view.timeline('The Second Cold War, 1979–84', [
    ['Dec 1979', 'Soviet invasion of Afghanistan'],
    ['Jan 1980', 'Carter Doctrine'],
    ['Jul 1980', 'Moscow Olympics boycotted by the USA and many others'],
    ['Jan 1981', 'Reagan becomes President'],
    ['Mar 1983', 'SDI announced'],
    ['1984', 'Soviet bloc boycotts the Los Angeles Olympics'],
  ]),
  view.people('Leaders', [
    ['Leonid Brezhnev', 'Ordered the invasion of Afghanistan'],
    ['Jimmy Carter', 'Announced the Carter Doctrine and the Olympic boycott'],
    ['Ronald Reagan', 'US President 1981–89; increased military spending and launched SDI'],
    ['The mujahideen', 'Afghan rebels fighting the Soviet occupation, armed by the USA'],
  ]),
  view.source('A source type: a speech by a President', 'A public speech, such as Reagan\'s speeches about the Soviet Union in 1983, delivered to an American audience.', 'Shows how a leader wanted the public to see the enemy; a speech is meant to persuade, so it is not a neutral description of Soviet policy.'),
], [
  ['Why did Brezhnev invade Afghanistan?', ['To support a communist government against Islamic rebels on the Soviet border', 'To seize the oil fields of the Persian Gulf from the USA and Britain', 'To punish Afghanistan for joining NATO and CENTO in 1978'], 0, 'He feared instability on the USSR\'s border.'],
  ['What did the Carter Doctrine say?', ['The USA would use force to defend its interests in the Persian Gulf', 'The USA would never again sell weapons to any foreign government', 'The USA would accept Soviet control of Afghanistan in return for peace'], 0, 'It was a direct response to the invasion.'],
  ['Exam skill · Explain consequences. Which explains a consequence of the invasion of Afghanistan?', ['It ended détente, because the USA saw it as Soviet expansion and withdrew SALT 2.', 'Soviet troops entered Afghanistan in December 1979 and stayed there for almost ten years.', 'The mujahideen were Afghan fighters who fought against the Soviet army in the mountains.'], 0, 'A consequence explains what followed and why.'],
  ['Why did SDI worry the USSR?', ['It threatened to make Soviet missiles useless, and the USSR could not afford to match it', 'It had already destroyed several Soviet satellites in orbit by the end of 1983', 'It was a secret plan to invade the USSR through Afghanistan and through Iran'], 0, 'It upset the balance of deterrence.'],
], [
  Q('cw10.p1', 'When did the USSR invade Afghanistan?', ['December 1979', 'August 1968', 'October 1985'], 0, 'It ended détente.', 'afghanistan'),
  Q('cw10.p2', 'Which Olympic Games did the USA boycott?', ['Moscow, 1980', 'Los Angeles, 1984', 'Munich, 1972'], 0, 'The USSR boycotted Los Angeles in return.', 'boycotts'),
  Q('cw10.p3', 'What was SDI nicknamed?', ['Star Wars', 'The hotline', 'Détente'], 0, 'It planned defences in space.', 'reagan'),
  Q('cw10.p4', 'Who were the mujahideen?', ['Afghan Islamic rebels fighting the Soviet occupation', 'Soviet special forces based in the capital, Kabul', 'American military advisers working from Pakistan'], 0, 'The USA supplied them with weapons.', 'afghanistan'),
  Q('cw10.p5', 'Which President announced SDI?', ['Ronald Reagan', 'Jimmy Carter', 'George H. W. Bush'], 0, 'He announced it in March 1983.', 'reagan'),
], [
  Q('cw10.c1', 'Which region did the Carter Doctrine aim to protect?', ['The Persian Gulf', 'Central America', 'South-East Asia'], 0, 'Its oil was vital to the West.', 'carter'),
  Q('cw10.c2', 'What did Carter stop selling to the USSR?', ['Grain', 'Computers', 'Aircraft'], 0, 'The grain embargo hurt Soviet food supplies.', 'carter'),
  Q('cw10.c3', 'Which Games did the Soviet bloc boycott?', ['Los Angeles, 1984', 'Moscow, 1980', 'Seoul, 1988', 'Montreal, 1976'], 0, 'It was a response to 1980.', 'boycotts'),
  Q('cw10.c4', 'How did Reagan change US defence policy?', ['He greatly increased military spending', 'He scrapped all American nuclear weapons', 'He withdrew the USA from NATO in 1982'], 0, 'He believed in negotiating from strength.', 'reagan'),
  Q('cw10.c5', 'Why is the war in Afghanistan called the USSR\'s "Vietnam"?', ['It was long, costly and could not be won', 'It was actually fought in Vietnam', 'The USA fought on the Soviet side there'], 0, 'It drained the Soviet economy and morale.', 'afghanistan'),
  Q('cw10.c6', 'What happened to SALT 2 after the invasion?', ['Carter withdrew it from the Senate', 'It was ratified at once by the Senate', 'It was replaced by a new SALT 3 treaty'], 0, 'It never came into force.', 'carter'),
  Q('cw10.c7', 'When did Reagan become President?', ['January 1981', 'January 1977', 'January 1989'], 0, 'He served until 1989.', 'reagan'),
  Q('cw10.c8', 'Why could the USSR not match SDI?', ['Its economy could not afford it', 'It had banned all space research', 'The USA had shared it freely'], 0, 'Cost was decisive.', 'reagan'),
], {exam: 'Explain two consequences of the Soviet invasion of Afghanistan (1979). (8 marks)'}),

lesson(T, 'coldwar.gorbachev', 'Reagan, Gorbachev and the thaw', ['P4 3.2'], [
  ['A new Soviet leader', 'Mikhail Gorbachev became Soviet leader in 1985. He believed the USSR could not afford the arms race or the war in Afghanistan, and that its economy needed reform. His policies were perestroika (restructuring the economy) and glasnost (openness).'],
  ['Summits', 'Reagan and Gorbachev met at Geneva (1985) and Reykjavik (1986). At Reykjavik they discussed abolishing nuclear weapons but disagreed over SDI. The personal trust they built mattered: each came to believe the other wanted to avoid war.'],
  ['The INF Treaty, 1987', 'At the Washington summit in 1987 they signed the Intermediate-Range Nuclear Forces Treaty, which removed a whole class of nuclear missiles from Europe. For the first time, the superpowers agreed to cut nuclear weapons rather than just limit their growth, with inspections to check.'],
  ['Who ended the tension?', 'Historians debate how far Reagan\'s pressure forced the USSR to change and how far Gorbachev\'s choices made agreement possible. Gorbachev also withdrew Soviet troops from Afghanistan (1988–89) and announced cuts in Soviet forces in Europe.'],
], view.factors('Who reduced tension?', [
  ['Reagan', 'military pressure and SDI; later willing to negotiate personally'],
  ['Gorbachev', 'new thinking, reform at home and arms cuts'],
  ['Economic pressure', 'the USSR could not afford the arms race'],
  ['Trust', 'personal relations built at the summits'],
]), [
  view.timeline('The thaw, 1985–89', [
    ['Mar 1985', 'Gorbachev becomes Soviet leader'],
    ['Nov 1985', 'Geneva summit'],
    ['Oct 1986', 'Reykjavik summit'],
    ['Dec 1987', 'INF Treaty signed in Washington'],
    ['1988–89', 'Soviet troops leave Afghanistan'],
  ]),
  view.people('Leaders', [
    ['Mikhail Gorbachev', 'Soviet leader 1985–91; perestroika and glasnost'],
    ['Ronald Reagan', 'US President 1981–89; moved from confrontation to negotiation'],
    ['Margaret Thatcher', 'British Prime Minister; said the West could do business with Gorbachev'],
    ['George H. W. Bush', 'US President from 1989'],
  ]),
  view.source('A document type: the INF Treaty, 1987', 'A treaty text setting out which missiles both sides would destroy and how inspectors would check.', 'Clear evidence of what was agreed; it shows the outcome, not why each leader chose to agree.'),
], [
  ['What did glasnost mean?', ['Greater openness, including more freedom to criticise', 'A plan to rebuild and expand the Soviet army quickly', 'A new alliance between the USSR and communist China'], 0, 'Openness allowed criticism of the system.'],
  ['What made the INF Treaty different from SALT 1?', ['It cut weapons and allowed inspections, rather than just limiting growth', 'It was signed by China and France as well as by the two superpowers', 'It removed every single nuclear weapon held by the USA and the USSR'], 0, 'It eliminated a class of missiles.'],
  ['Exam skill · Explain importance. Which explains Gorbachev\'s importance?', ['His decision that the USSR could not afford the arms race made real arms cuts possible.', 'Gorbachev became the leader of the Soviet Union in March 1985, after Chernenko died.', 'Gorbachev met Reagan at Geneva in 1985 and again at Reykjavik in Iceland in 1986.'], 0, 'Importance explains how he changed relations.'],
  ['Why did the Reykjavik summit fail to reach a full deal?', ['They disagreed over SDI', 'Gorbachev refused to meet Reagan at all', 'Reagan wanted to keep troops in Afghanistan'], 0, 'Reagan would not give up SDI.'],
], [
  Q('cw11.p1', 'When did Gorbachev become Soviet leader?', ['1985', '1979', '1991'], 0, 'Gorbachev became leader in March 1985.', 'gorbachev'),
  Q('cw11.p2', 'What did perestroika mean?', ['Restructuring the economy', 'Openness in the media and politics', 'Military expansion into Asia'], 0, 'Glasnost meant openness.', 'gorbachev'),
  Q('cw11.p3', 'Which treaty in 1987 removed intermediate-range missiles?', ['The INF Treaty', 'SALT 1', 'The Helsinki Final Act'], 0, 'It was signed in Washington.', 'inf'),
  Q('cw11.p4', 'Where did Reagan and Gorbachev meet in 1986?', ['Reykjavik', 'Yalta', 'Vienna', 'Helsinki'], 0, 'They discussed abolishing nuclear weapons.', 'summits'),
  Q('cw11.p5', 'Which war did Gorbachev end Soviet involvement in?', ['Afghanistan', 'Vietnam', 'Korea', 'Angola'], 0, 'Troops left in 1988–89.', 'gorbachev'),
], [
  Q('cw11.c1', 'Where was the first Reagan–Gorbachev summit held?', ['Geneva, 1985', 'Moscow, 1972', 'Helsinki, 1975'], 0, 'It began their personal relationship.', 'summits'),
  Q('cw11.c2', 'What was the main sticking point at Reykjavik?', ['SDI', 'Berlin', 'Cuba'], 0, 'Reagan would not abandon it.', 'summits'),
  Q('cw11.c3', 'What was new about the INF Treaty?', ['It eliminated a whole class of nuclear missiles', 'It banned all nuclear tests in the atmosphere', 'It set up a new hotline between the two capitals'], 0, 'It was the first real reduction.', 'inf'),
  Q('cw11.c4', 'Why did Gorbachev want to cut arms spending?', ['The Soviet economy could not afford it', 'The USA had disarmed already', 'China had promised to protect the USSR'], 0, 'Reform needed resources.', 'gorbachev'),
  Q('cw11.c5', 'What did glasnost allow?', ['More open criticism and discussion', 'Soviet troops to enter Poland and Hungary', 'A return to Stalin\'s policies and purges'], 0, 'It loosened censorship.', 'gorbachev'),
  Q('cw11.c6', 'How did the INF Treaty make sure both sides kept to it?', ['Inspections of each other\'s sites', 'Payments to the United Nations', 'Hostages exchanged between capitals'], 0, 'Verification built trust.', 'inf'),
  Q('cw11.c7', 'Which British leader said the West could work with Gorbachev?', ['Margaret Thatcher', 'Winston Churchill', 'Harold Wilson'], 0, 'She met him in 1984.', 'summits'),
  Q('cw11.c8', 'Which view of the end of tension stresses Reagan?', ['US pressure forced the USSR to change', 'Gorbachev acted entirely alone, without pressure', 'China forced both superpowers to make peace'], 0, 'Historians debate the balance.', 'interpretations'),
], {exam: 'Explain the importance of Gorbachev\'s leadership for relations between the USA and the USSR in the years 1985–91. (8 marks)'}),

lesson(T, 'coldwar.collapse', 'The collapse of Soviet control, 1985–91', ['P4 3.3'], [
  ['New thinking and the satellite states', 'Gorbachev told Eastern European leaders that the USSR would no longer use force to keep them in power. This abandoned the Brezhnev Doctrine; a Soviet spokesman joked it had been replaced by the "Sinatra Doctrine", letting each state do things its own way.'],
  ['1989: revolutions in Eastern Europe', 'In 1989 communist control collapsed. Poland held partly free elections and Solidarity won. Hungary opened its border with Austria, and East Germans used it to escape. Mass protests spread to East Germany, Czechoslovakia, Bulgaria and Romania.'],
  ['The fall of the Berlin Wall', 'On 9 November 1989, after weeks of protests, East Germany announced that its citizens could cross the border. Crowds gathered and the guards opened the checkpoints; people began to break down the Wall. Germany was reunited in October 1990, inside NATO.'],
  ['The end of the Warsaw Pact and the USSR', 'With the satellite states gone, the Warsaw Pact was dissolved in 1991. Inside the USSR, republics demanded independence. A failed coup by hardliners in August 1991 weakened Gorbachev further. In December 1991 the Soviet Union was dissolved and Gorbachev resigned: the Cold War was over.'],
], view.factors('Why did Soviet control collapse?', [
  ['New thinking', 'Gorbachev would not use force to save communist governments'],
  ['Economic weakness', 'the Soviet bloc lagged far behind the West'],
  ['People power', 'mass protests and escape routes in 1989'],
  ['Nationalism', 'republics inside the USSR demanded independence'],
]), [
  view.timeline('1989–91', [
    ['Jun 1989', 'Solidarity wins elections in Poland'],
    ['Summer 1989', 'Hungary opens its border with Austria'],
    ['9 Nov 1989', 'The Berlin Wall opens'],
    ['Oct 1990', 'Germany reunited'],
    ['Jul 1991', 'Warsaw Pact formally dissolved'],
    ['Aug 1991', 'Failed coup against Gorbachev'],
    ['Dec 1991', 'USSR dissolved; Gorbachev resigns'],
  ]),
  view.people('People and groups', [
    ['Mikhail Gorbachev', 'Refused to use force to keep Eastern Europe communist'],
    ['Solidarity', 'Polish trade union and opposition movement led by Lech Wałęsa'],
    ['East German protesters', 'Mass demonstrations in Leipzig and Berlin in 1989'],
    ['Boris Yeltsin', 'Russian leader who resisted the 1991 coup'],
  ]),
  view.source('A source type: television footage of the Wall, November 1989', 'Film of crowds crossing the border and breaking the Wall, broadcast around the world.', 'Powerful evidence of public joy and the moment itself; it shows Berlin, not the decisions in Moscow that made it possible.'),
], [
  ['Why did Gorbachev not send tanks in 1989, as in 1956 and 1968?', ['His new thinking rejected force and the USSR could not afford repression', 'The Warsaw Pact had already been formally dissolved in the spring of 1989', 'The USA had promised to invade Eastern Europe if any Soviet tanks moved'], 0, 'He abandoned the Brezhnev Doctrine.'],
  ['Why did Hungary\'s open border matter?', ['East Germans used it to escape to the West, weakening their government', 'It allowed Soviet troops to move freely into Austria and beyond it', 'It made Hungary the first Eastern bloc country to join NATO in 1989'], 0, 'It broke the Iron Curtain.'],
  ['Exam skill · Explain importance. Which explains the importance of the fall of the Berlin Wall?', ['It showed that the USSR would not defend the division of Europe, which led to German reunification.', 'The Berlin Wall was opened on 9 November 1989, after weeks of large protests across East Germany.', 'People used hammers and chisels to break off pieces of the Berlin Wall and took them home as souvenirs.'], 0, 'Importance explains what it led to.'],
  ['Why did the Warsaw Pact end?', ['Its members had left communist control, so the alliance had no purpose', 'NATO had defeated it in a short war in central Europe in 1990', 'The USA had bought out its members with new Marshall Aid'], 0, 'The satellite states were gone.'],
], [
  Q('cw12.p1', 'When did the Berlin Wall open?', ['9 November 1989', '13 August 1961', '25 December 1991'], 0, 'The USSR ended in December 1991.', 'wall-falls'),
  Q('cw12.p2', 'Which Polish movement won elections in 1989?', ['Solidarity', 'Comecon', 'The mujahideen'], 0, 'It was led by Lech Wałęsa.', 'revolutions'),
  Q('cw12.p3', 'Which doctrine did Gorbachev abandon?', ['The Brezhnev Doctrine', 'The Truman Doctrine', 'The Carter Doctrine', 'The Monroe Doctrine'], 0, 'He would not use force to save communism.', 'new-thinking'),
  Q('cw12.p4', 'When was Germany reunited?', ['October 1990', 'May 1945', 'August 1961'], 0, 'It joined NATO as one state.', 'wall-falls'),
  Q('cw12.p5', 'When was the USSR dissolved?', ['December 1991', 'November 1989', 'March 1985'], 0, 'Gorbachev resigned.', 'ussr-ends'),
], [
  Q('cw12.c1', 'Which country opened its border with Austria in 1989?', ['Hungary', 'Poland', 'Romania'], 0, 'East Germans escaped this way.', 'revolutions'),
  Q('cw12.c2', 'What was the "Sinatra Doctrine"?', ['Letting Eastern European states choose their own way', 'Sending tanks into any rebellious satellite state', 'Building a new wall around the whole of Berlin'], 0, 'It replaced the Brezhnev Doctrine.', 'new-thinking'),
  Q('cw12.c3', 'When was the Warsaw Pact formally dissolved?', ['1991', '1985', '1989'], 0, 'It was formally dissolved in July 1991.', 'ussr-ends'),
  Q('cw12.c4', 'What happened in August 1991?', ['A failed coup against Gorbachev', 'The Berlin Wall was rebuilt in concrete', 'SALT 1 was signed in Moscow'], 0, 'It weakened Gorbachev further.', 'ussr-ends'),
  Q('cw12.c5', 'Who resisted the 1991 coup in Moscow?', ['Boris Yeltsin', 'Leonid Brezhnev', 'Erich Honecker'], 0, 'He became the Russian leader.', 'ussr-ends'),
  Q('cw12.c6', 'Why did republics inside the USSR demand independence?', ['Nationalism and weakening central control', 'They wanted to join the Warsaw Pact as members', 'The USA had ordered them to leave the USSR'], 0, 'Glasnost allowed national feeling to grow.', 'ussr-ends'),
  Q('cw12.c7', 'Which alliance did reunited Germany join?', ['NATO', 'The Warsaw Pact', 'Comecon'], 0, 'Gorbachev accepted this.', 'wall-falls'),
  Q('cw12.c8', 'What did the collapse of the USSR mean for the Cold War?', ['It ended it', 'It restarted it', 'It moved it to Asia'], 0, 'One superpower no longer existed.', 'ussr-ends'),
], {exam: 'Write a narrative account analysing the key events of 1989–91 that led to the end of the Cold War. (8 marks)'}),
];
