// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 option 31: Weimar and Nazi Germany, 1918–39.
// Depth lessons for key topic 3, Nazi control and dictatorship 1933–39 (specification 3.1–3.4). Each follows its overview.
// All text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.germany.kt3';

export const germanyDepth3 = [
lesson(T, 'germany.enabling-act', 'The Reichstag Fire and the Enabling Act', ['31 3.1'], [
  ['The emergency decree', 'The day after the Reichstag Fire, 28 February 1933, Hindenburg signed the Decree for the Protection of the People and the State. It suspended freedom of speech, the press and assembly, and allowed people to be held without trial. About 4,000 communists were arrested within days, and communist newspapers were banned.'],
  ['The March election', 'In the election of 5 March 1933, held amid SA violence, the Nazis won about 44 per cent of the vote and 288 seats. With their nationalist allies they had a slim majority, but not the two-thirds needed to change the constitution. The 81 communist deputies were arrested or in hiding.'],
  ['Passing the Act', 'The Reichstag met in the Kroll Opera House on 23 March, surrounded by SA and SS men. Hitler won the votes of the Catholic Centre Party by promising to protect the Church. The Act passed by 444 votes to 94: only the Social Democrats voted against, and some of their deputies had already been arrested. It let the government make laws without the Reichstag for four years.'],
  ['Coordination', 'The Nazis then brought every part of the state into line, a process called Gleichschaltung (coordination). State parliaments were closed and Nazi governors appointed; Jews and opponents were removed from the civil service in April; unions were abolished on 2 May; the SPD was banned in June; and in July 1933 the Nazis became the only legal party.'],
], view.factors('How Hitler built a dictatorship legally', [
  ['Emergency powers', 'the decree of 28 February suspended rights'],
  ['Elections', '288 seats in March, won amid intimidation'],
  ['The Enabling Act', 'two-thirds majority won with Centre Party votes and SA pressure'],
  ['Coordination', 'states, civil service, unions and parties brought under control'],
]), [
  view.timeline('February–July 1933', [
    ['27 Feb 1933', 'Reichstag Fire'],
    ['28 Feb 1933', 'Emergency decree suspends civil rights'],
    ['5 Mar 1933', 'Election: Nazis win 288 seats'],
    ['23 Mar 1933', 'Enabling Act passed, 444 to 94'],
    ['Apr 1933', 'Civil service law removes Jews and opponents'],
    ['2 May 1933', 'Trade unions abolished'],
    ['14 Jul 1933', 'Nazis the only legal party'],
  ]),
  view.people('People and groups', [
    ['Marinus van der Lubbe', 'Dutch communist arrested at the fire'],
    ['The Centre Party', 'Voted for the Act after promises to the Church'],
    ['The Social Democrats', 'The only party to vote against'],
    ['The SA and SS', 'Surrounded the building during the vote'],
  ]),
  view.source('A source type: a photograph of the Kroll Opera House, 23 March 1933', 'A photograph of Hitler speaking to the Reichstag with a huge swastika banner behind him and uniformed SA men lining the room.', 'Useful for the atmosphere of intimidation at the vote; it cannot show the deals made with the Centre Party.'),
], [
  ['Why did the Centre Party vote for the Enabling Act?', ['Hitler promised to protect the Catholic Church', 'The Centre Party had merged with the Nazi Party', 'Hindenburg ordered it to vote for the Act'], 0, 'Promises to the Church.'],
  ['Why was the emergency decree so important?', ['It removed civil rights and let opponents be held without trial', 'It gave the Nazis a two-thirds majority in the Reichstag', 'It ended the Treaty of Versailles and its reparations'], 0, 'The legal basis for terror.'],
  ['Exam skill · Explain why. Which sentence explains why the Enabling Act passed?', ['Communists were barred and the Centre Party was won over, so the Nazis reached two-thirds.', 'The Reichstag met in the Kroll Opera House on 23 March 1933 to vote on the Act.', 'The Enabling Act was passed by 444 votes to 94 in the Reichstag in March 1933.'], 0, 'An explanation links the cause to its effect.'],
  ['What did Gleichschaltung mean?', ['Bringing every part of the state and society into line', 'A trade agreement signed with Italy and Austria', 'Holding fair elections every four years'], 0, 'Coordination under the Nazis.'],
], [
  Q('gd21.p1', 'When was the emergency decree signed?', ['28 February 1933', '30 January 1933', '23 March 1933'], 0, 'The day after the fire.', 'decree'),
  Q('gd21.p2', 'How many seats did the Nazis win in March 1933?', ['288', '230', '196'], 0, 'Still short of two-thirds.', 'election'),
  Q('gd21.p3', 'Where did the Reichstag meet on 23 March?', ['The Kroll Opera House', 'The Reichstag building', 'The Munich beer hall'], 0, 'The Reichstag had burned.', 'act'),
  Q('gd21.p4', 'Which party alone voted against the Act?', ['The Social Democrats', 'The Centre Party', 'The nationalist DNVP'], 0, 'Some of its deputies had been arrested.', 'act'),
  Q('gd21.p5', 'When were trade unions abolished?', ['2 May 1933', '14 July 1933', '30 June 1934'], 0, 'Replaced by the Labour Front.', 'coordination'),
], [
  Q('gd21.c1', 'About how many communists were arrested within days?', ['About 4,000', 'About 40', 'About 400,000'], 0, 'After the emergency decree.', 'decree'),
  Q('gd21.c2', 'What was the vote on the Enabling Act?', ['444 to 94', '288 to 81', '230 to 100'], 0, 'A two-thirds majority.', 'act'),
  Q('gd21.c3', 'For how long could the government make laws alone?', ['Four years', 'Four months', 'Forty years'], 0, 'It was later renewed.', 'act'),
  Q('gd21.c4', 'What does Gleichschaltung mean?', ['Coordination', 'Living space', 'Leader principle'], 0, 'Bringing things into line.', 'coordination'),
  Q('gd21.c5', 'What share of the vote did the Nazis win in March 1933?', ['About 44 per cent', 'About 64 per cent', 'About 24 per cent'], 0, 'Not a majority alone.', 'election'),
  Q('gd21.c6', 'When did the Nazis become the only legal party?', ['July 1933', 'January 1933', 'August 1934'], 0, 'By the law of 14 July.', 'coordination'),
  Q('gd21.c7', 'Who was removed from the civil service in April 1933?', ['Jews and opponents', 'Long-serving Nazi members', 'Senior army officers'], 0, 'By a new civil service law.', 'coordination'),
  Q('gd21.c8', 'Why were the 81 communist deputies absent?', ['Arrested or in hiding', 'They boycotted Weimar', 'They had joined the Nazis'], 0, 'After the emergency decree.', 'election'),
], {exam: 'Explain why Hitler was able to pass the Enabling Act in March 1933. (12 marks)'}),

lesson(T, 'germany.long-knives', 'The Night of the Long Knives and the Führer', ['31 3.1'], [
  ['The problem of the SA', 'By 1934 the SA had around three million members, far more than the 100,000-strong army. Röhm wanted a "second revolution" against the old elites and to merge the army into the SA under his command. Army leaders, industrialists and conservatives were alarmed, and SA violence was making the regime unpopular.'],
  ['Pressure on Hitler', 'Hitler needed the army\'s support, especially as President Hindenburg was ill and Hitler wanted to succeed him. In June 1934 Vice-Chancellor Papen gave a speech at Marburg criticising SA violence. Himmler and Göring, who saw Röhm as a rival, gave Hitler evidence, much of it invented, that the SA was planning a coup.'],
  ['30 June – 2 July 1934', 'Hitler flew to Bavaria and personally arrested Röhm at the resort of Bad Wiessee; Röhm was shot the next day. SS squads killed SA leaders and settled old scores: Schleicher and his wife, Gregor Strasser, Gustav von Kahr and two of Papen\'s assistants. The official total was 85, but the real number was probably higher.'],
  ['The Führer', 'A law of 3 July declared the killings legal. Army leaders were pleased, and the SS became independent of the SA. When Hindenburg died on 2 August, Hitler merged the offices of Chancellor and President and became Führer. Every soldier swore an oath of loyalty to Hitler personally, and about 90 per cent of voters approved the change in a vote that August.'],
], view.factors('Why Hitler purged the SA', [
  ['The army', 'Hitler needed its support; it feared the SA'],
  ['Röhm', 'a rival with his own private army'],
  ['Elites', 'business and conservatives wanted SA violence stopped'],
  ['Results', 'army loyalty; SS power; Hitler as Führer'],
]), [
  view.timeline('Becoming Führer', [
    ['Early 1934', 'SA about three million strong'],
    ['17 Jun 1934', 'Papen\'s Marburg speech'],
    ['30 Jun 1934', 'Röhm arrested; purge begins'],
    ['3 Jul 1934', 'Killings declared legal'],
    ['2 Aug 1934', 'Hindenburg dies; Hitler becomes Führer'],
    ['19 Aug 1934', 'About 90% approve in a national vote'],
  ]),
  view.people('People', [
    ['Ernst Röhm', 'SA leader; killed in the purge'],
    ['Heinrich Himmler', 'SS leader who gained from the purge'],
    ['Kurt von Schleicher', 'Former Chancellor murdered in the purge'],
    ['The army leaders', 'Swore personal loyalty to Hitler'],
  ]),
  view.source('A source type: a speech to the Reichstag, 13 July 1934', 'Hitler\'s speech justifying the killings as action against a planned SA revolt and naming himself as the nation\'s judge.', 'Useful for how Hitler justified the purge; it was meant to persuade, so its claims about a coup are unreliable.'),
], [
  ['Why did the army leaders fear the SA?', ['Röhm wanted to merge the army into the SA under his command', 'The SA wanted the army to become much larger and better paid', 'The SA had promised to restore the Kaiser and the old army'], 0, 'A threat to the army itself.'],
  ['Why did the purge strengthen Hitler?', ['It won the army\'s loyalty and removed rivals', 'It ended all opposition to Hitler in Europe', 'It gave the SA control of the police'], 0, 'Loyalty and fear.'],
  ['Exam skill · Explain why. Which sentence explains why Hitler purged the SA?', ['He needed the army\'s support to succeed Hindenburg, and the army feared Röhm\'s SA.', 'Röhm was arrested at the resort of Bad Wiessee in Bavaria on 30 June 1934.', 'The official total of those killed in the purge was 85, though more probably died.'], 0, 'An explanation links the cause to its effect.'],
  ['What did the army\'s oath of August 1934 do?', ['Bound every soldier to obey Hitler personally', 'Made the army independent of the government', 'Promised that the army would defend democracy'], 0, 'Personal loyalty.'],
], [
  Q('gd22.p1', 'About how many members did the SA have in 1934?', ['Three million', 'Thirty thousand', 'Three hundred'], 0, 'Far more than the army.', 'sa-problem'),
  Q('gd22.p2', 'Where was Röhm arrested?', ['Bad Wiessee', 'Berchtesgaden', 'Nuremberg'], 0, 'A lakeside resort in Bavaria.', 'purge'),
  Q('gd22.p3', 'What was the official death toll?', ['85', '8', '850'], 0, 'Probably higher in reality.', 'purge'),
  Q('gd22.p4', 'When did Hindenburg die?', ['2 August 1934', '30 January 1933', '30 June 1934'], 0, 'Hitler became Führer.', 'fuhrer'),
  Q('gd22.p5', 'To whom did soldiers swear loyalty?', ['Hitler personally', 'The constitution', 'The Reichstag'], 0, 'The oath of August 1934.', 'fuhrer'),
], [
  Q('gd22.c1', 'Which former Chancellor was murdered?', ['Kurt von Schleicher', 'Franz von Papen', 'Heinrich Brüning'], 0, 'He was killed with his wife.', 'purge'),
  Q('gd22.c2', 'Who criticised SA violence at Marburg?', ['Franz von Papen', 'Ernst Röhm', 'Joseph Goebbels'], 0, 'In a speech in June 1934.', 'pressure'),
  Q('gd22.c3', 'What did Röhm call for?', ['A "second revolution"', 'A return to democracy', 'The Kaiser\'s return'], 0, 'Against the old elites.', 'sa-problem'),
  Q('gd22.c4', 'Which group became independent of the SA?', ['The SS', 'The army', 'The Gestapo'], 0, 'After the purge.', 'fuhrer'),
  Q('gd22.c5', 'What share approved Hitler as Führer?', ['About 90 per cent', 'About 50 per cent', 'About 10 per cent'], 0, 'In the vote of August 1934.', 'fuhrer'),
  Q('gd22.c6', 'Who gave Hitler evidence of a planned coup?', ['Himmler and Göring', 'Papen and Hindenburg', 'Strasser and Kahr'], 0, 'Much of it invented.', 'pressure'),
  Q('gd22.c7', 'How large was the army in 1934?', ['About 100,000', 'About 3 million', 'About 10,000'], 0, 'Limited by Versailles.', 'sa-problem'),
  Q('gd22.c8', 'What did the law of 3 July do?', ['Declared the killings legal', 'Banned the SS completely', 'Brought back the Reichstag'], 0, 'After the purge.', 'fuhrer'),
], {exam: 'Explain why Hitler carried out the Night of the Long Knives in 1934. (12 marks)'}),

lesson(T, 'germany.gestapo', 'The SS, the SD and the Gestapo', ['31 3.2'], [
  ['The SS', 'Heinrich Himmler led the SS from 1929. It grew from about 50,000 members in 1933 to about 240,000 by 1939. Members had to prove "Aryan" ancestry back to 1800 and needed permission to marry. Its Death\'s Head units ran the concentration camps, and from 1936 Himmler controlled all German police.'],
  ['The SD', 'The SD (Security Service), set up in 1931 under Reinhard Heydrich, was the SS intelligence service. It kept files on opponents and on the mood of the people, and its agents reported on what Germans were saying in workplaces, shops and churches.'],
  ['The Gestapo', 'The Gestapo, the secret state police, was formed in Prussia in 1933 and taken over by Himmler in 1934. It could place people in "protective custody" without trial and send them to camps. Its methods included interrogation, torture and the threat of the camps.'],
  ['Informers and fear', 'The Gestapo had only about 30,000 officers for 80 million people. Studies of its files show that many cases began with tip-offs from ordinary Germans, sometimes for personal reasons such as quarrels with neighbours. Nazi block wardens, each watching a few dozen households, also reported. The belief that the Gestapo was everywhere did much of its work for it.'],
], view.factors('How the police state worked', [
  ['The SS', 'elite force; ran the camps and the police'],
  ['The SD', 'intelligence: files on opponents and public mood'],
  ['The Gestapo', 'arrest without trial; interrogation; torture'],
  ['The public', 'informers and block wardens; fear did the rest'],
]), [
  view.timeline('Building the police state', [
    ['1929', 'Himmler becomes SS leader'],
    ['1931', 'The SD set up under Heydrich'],
    ['Apr 1933', 'The Gestapo formed in Prussia'],
    ['1934', 'Himmler takes over the Gestapo'],
    ['1936', 'Himmler controls all German police'],
    ['1939', 'SS about 240,000 strong'],
  ]),
  view.people('People and groups', [
    ['Heinrich Himmler', 'Leader of the SS and the police'],
    ['Reinhard Heydrich', 'Head of the SD'],
    ['Block wardens', 'Watched groups of households'],
    ['Informers', 'Ordinary Germans who reported others'],
  ]),
  view.source('A source type: a Gestapo case file', 'A file opened after a neighbour reported that a man had told a joke about Hitler, with the record of his interrogation.', 'Useful for how one case started and was handled; one file cannot show how typical it was.'),
], [
  ['Why could a small Gestapo control a large population?', ['Many Germans informed on others and fear kept people quiet', 'It had more officers than there were adults in Germany', 'Every German was required to work for it part-time'], 0, 'Fear and informers.'],
  ['Why did SS members have to prove their ancestry?', ['The SS was meant to be a racial elite', 'The army refused to accept them otherwise', 'It was required by the Treaty of Versailles'], 0, 'Racial ideology.'],
  ['Exam skill · Interpretations. One historian stresses Gestapo terror; another stresses informers. Why might they differ?', ['They give different weight to the state and to ordinary Germans.', 'One of the historians did not know that the Gestapo existed.', 'The Gestapo was formed in Prussia in April 1933.'], 0, 'Different emphasis, same evidence.'],
  ['What was "protective custody"?', ['Holding people without trial', 'Guarding Hitler at rallies', 'Protecting the borders'], 0, 'A tool of terror.'],
], [
  Q('gd23.p1', 'Who led the SS from 1929?', ['Heinrich Himmler', 'Reinhard Heydrich', 'Ernst Röhm'], 0, 'He later ran all the police.', 'ss'),
  Q('gd23.p2', 'Who led the SD?', ['Reinhard Heydrich', 'Hermann Göring', 'Joseph Goebbels'], 0, 'The SS intelligence service.', 'sd'),
  Q('gd23.p3', 'What was the Gestapo?', ['The secret state police', 'The army\'s intelligence', 'A youth group'], 0, 'It was formed in 1933.', 'gestapo'),
  Q('gd23.p4', 'About how many Gestapo officers were there?', ['30,000', '3 million', '300'], 0, 'For 80 million people.', 'informers'),
  Q('gd23.p5', 'Which SS units ran the camps?', ['Death\'s Head units', 'Brownshirt units', 'Panzer units'], 0, 'They were part of the SS.', 'ss'),
], [
  Q('gd23.c1', 'How far back did SS members prove ancestry?', ['To 1800', 'To 1918', 'To 1500'], 0, 'To show "Aryan" descent.', 'ss'),
  Q('gd23.c2', 'About how big was the SS by 1939?', ['240,000', '24,000', '2.4 million'], 0, 'From 50,000 in 1933.', 'ss'),
  Q('gd23.c3', 'When did Himmler control all police?', ['1936', '1929', '1945'], 0, 'Police and SS combined.', 'ss'),
  Q('gd23.c4', 'What did the SD keep files on?', ['Opponents and public mood', 'Foreign armies and navies', 'Sports clubs and their results'], 0, 'Intelligence work.', 'sd'),
  Q('gd23.c5', 'Where did many Gestapo cases begin?', ['Tip-offs from the public', 'Reports from foreign spies', 'Reports from army officers'], 0, 'Shown by its files.', 'informers'),
  Q('gd23.c6', 'Who watched groups of households?', ['Block wardens', 'Local judges', 'Schoolteachers'], 0, 'Reporting to the party.', 'informers'),
  Q('gd23.c7', 'What needed SS permission?', ['Marriage', 'Voting', 'Travel abroad'], 0, 'To keep "racial purity".', 'ss'),
  Q('gd23.c8', 'Where was the Gestapo first formed?', ['Prussia', 'Bavaria', 'Austria'], 0, 'It was formed in April 1933.', 'gestapo'),
], {exam: 'Explain why the Gestapo was effective in controlling the German people. (12 marks)'}),

lesson(T, 'germany.camps-courts', 'Concentration camps and the courts', ['31 3.2'], [
  ['The first camps', 'In 1933 the SA set up makeshift "wild" camps in cellars and warehouses. The SS opened Dachau, near Munich, in March 1933 as a model camp. Tens of thousands of political prisoners were held in 1933, many released after weeks of beatings and forced labour once they promised to keep quiet.'],
  ['Who was held', 'At first most prisoners were communists, socialists and trade unionists. Later the camps held Jehovah\'s Witnesses, homosexual men, Roma and Sinti, people labelled "work-shy" or "asocial", and Jews. Prisoners wore coloured badges showing their category. After Kristallnacht in 1938 about 30,000 Jewish men were sent to camps.'],
  ['Expanding the system', 'New camps opened at Sachsenhausen (1936), Buchenwald (1937) and, for women, Ravensbrück (1939). Prisoners did heavy forced labour, such as quarrying stone. Many died from overwork, beatings and disease. Concentration camps were not yet the extermination camps of the war, but they were places of terror and death.'],
  ['The courts', 'Judges had to join a Nazi lawyers\' association, and those seen as unreliable were removed. Special Courts set up in 1933 tried political cases without juries. The People\'s Court, set up in 1934, tried treason cases in secret, often with little defence. The number of crimes carrying the death penalty rose sharply, and the regime could send people acquitted by a court straight to a camp.'],
], view.factors('Camps and courts as tools of control', [
  ['Camps', 'held opponents and groups the Nazis targeted, without trial'],
  ['Terror', 'forced labour, beatings and death made people afraid'],
  ['Courts', 'Nazi-controlled judges; Special Courts; the People\'s Court'],
  ['No protection', 'the police could override the courts'],
]), [
  view.timeline('Camps and courts', [
    ['Mar 1933', 'Dachau opens; Special Courts set up'],
    ['1934', 'The People\'s Court set up'],
    ['1936', 'Sachsenhausen opens'],
    ['1937', 'Buchenwald opens'],
    ['Nov 1938', 'About 30,000 Jewish men sent to camps'],
    ['1939', 'Ravensbrück opens for women'],
  ]),
  view.people('People and groups', [
    ['Political prisoners', 'Communists, socialists, trade unionists'],
    ['Jehovah\'s Witnesses', 'Refused to give the Hitler salute or serve'],
    ['The People\'s Court', 'Tried treason cases'],
    ['Nazi judges', 'Were expected to rule in the Nazis\' interest'],
  ]),
  view.source('A source type: a 1933 newspaper photograph of Dachau', 'A photograph printed in a German newspaper showing prisoners standing in rows at Dachau with the camp guards.', 'Useful because it shows the regime openly publicised the camps to frighten people; it presents the camp as orderly and hides the brutality.'),
], [
  ['Why did the Nazis publicise Dachau?', ['To frighten people into obedience', 'To recruit guards from abroad', 'To show that the camps were empty'], 0, 'Terror works through fear.'],
  ['Why did the courts offer little protection?', ['Judges were Nazi-controlled and the police could override verdicts', 'Every court in Germany had been closed down for good in 1933', 'The courts only heard cases about trade and business'], 0, 'Justice served the regime.'],
  ['Exam skill · Explain why. Which sentence explains why the camps helped the Nazis control Germany?', ['Opponents could be held and brutalised without trial, so others were afraid to resist.', 'Dachau concentration camp opened near the city of Munich in the March of 1933.', 'Ravensbrück camp for women opened in 1939, close to the start of the Second World War.'], 0, 'An explanation links the cause to its effect.'],
  ['Who were the first prisoners at Dachau?', ['Mainly communists, socialists and trade unionists', 'Mainly soldiers who had deserted from the army', 'Mainly foreign tourists and visiting journalists'], 0, 'Political opponents first.'],
], [
  Q('gd24.p1', 'When did Dachau open?', ['March 1933', 'November 1938', 'June 1934'], 0, 'Dachau was near Munich.', 'camps'),
  Q('gd24.p2', 'Which camp was for women?', ['Ravensbrück', 'Dachau', 'Buchenwald'], 0, 'It opened in 1939.', 'camps'),
  Q('gd24.p3', 'When was the People\'s Court set up?', ['1934', '1919', '1945'], 0, 'For treason cases.', 'courts'),
  Q('gd24.p4', 'About how many Jewish men were sent to camps after Kristallnacht?', ['30,000', '300', '3 million'], 0, 'In November 1938.', 'prisoners'),
  Q('gd24.p5', 'Who set up the early "wild" camps?', ['The SA', 'The army', 'The churches'], 0, 'In cellars and warehouses.', 'camps'),
], [
  Q('gd24.c1', 'When did Buchenwald open?', ['1937', '1933', '1941'], 0, 'Part of the expansion.', 'camps'),
  Q('gd24.c2', 'What did prisoners\' badges show?', ['Their category', 'Their army rank', 'Their wages'], 0, 'Coloured badges.', 'prisoners'),
  Q('gd24.c3', 'What forced labour did prisoners do?', ['Quarrying stone', 'Office work', 'Farming their own land'], 0, 'Heavy, often deadly labour.', 'camps'),
  Q('gd24.c4', 'Which courts tried political cases without juries?', ['Special Courts', 'Church courts', 'League courts'], 0, 'They were set up from 1933.', 'courts'),
  Q('gd24.c5', 'What did judges have to join?', ['A Nazi lawyers\' association', 'The SA\'s legal section', 'The army\'s officer corps'], 0, 'Or face removal.', 'courts'),
  Q('gd24.c6', 'Which religious group was persecuted?', ['Jehovah\'s Witnesses', 'German Lutherans', 'English Methodists'], 0, 'They refused to serve.', 'prisoners'),
  Q('gd24.c7', 'What could happen to someone acquitted?', ['Sent straight to a camp', 'Given compensation', 'Made a court official'], 0, 'Police overrode courts.', 'courts'),
  Q('gd24.c8', 'When did Sachsenhausen open?', ['1936', '1933', '1939'], 0, 'Sachsenhausen was near Berlin.', 'camps'),
], {exam: 'Explain why the Nazis used concentration camps and the courts to control Germany. (12 marks)'}),

lesson(T, 'germany.media-rallies', 'Goebbels, the media and rallies', ['31 3.3'], [
  ['Controlling the press', 'Communist and socialist papers were shut in 1933. The Editors\' Law of October 1933 made editors responsible to the state, and Jewish and politically unreliable journalists were removed. Each day the Propaganda Ministry told newspapers what to report. The number of newspapers fell sharply, and the rest printed much the same news.'],
  ['Radio', 'Goebbels saw radio as the most powerful tool. The cheap People\'s Receiver went on sale in 1933 and could easily pick up only German stations. By 1939 about 70 per cent of households had a radio. Hitler\'s speeches were broadcast to loudspeakers in streets, cafés and factories, and listening to foreign stations became a crime in 1939.'],
  ['Film and posters', 'Every cinema showing had to include a newsreel produced under Goebbels\' control. Most films were entertainment with a Nazi message in the background. Posters, often showing Hitler as a heroic leader or the "ideal" Aryan family, were everywhere.'],
  ['The Nuremberg rallies', 'Every September hundreds of thousands gathered at Nuremberg for the party rally. Huge marching columns, flags, music and speeches showed the power and unity of the "national community". From 1934 Albert Speer surrounded the arena with more than 100 searchlights pointing into the sky, the "cathedral of light". Rallies were filmed and broadcast to reach the whole nation.'],
], view.factors('How the Nazis controlled information', [
  ['Press', 'opposition papers closed; daily instructions to editors'],
  ['Radio', 'cheap receivers; loudspeakers; foreign stations banned'],
  ['Film and posters', 'compulsory newsreels; images of Hitler and the ideal family'],
  ['Rallies', 'spectacle at Nuremberg showed power and unity'],
]), [
  view.timeline('Propaganda', [
    ['Mar 1933', 'Ministry of Propaganda set up under Goebbels'],
    ['1933', 'The People\'s Receiver on sale'],
    ['Oct 1933', 'The Editors\' Law'],
    ['1934', 'Nuremberg rally filmed for Triumph of the Will'],
    ['1934–38', 'The "cathedral of light" at night rallies'],
    ['1939', 'About 70% of households have a radio'],
  ]),
  view.people('People', [
    ['Joseph Goebbels', 'Minister of Propaganda'],
    ['Albert Speer', 'Designed rally settings'],
    ['Newspaper editors', 'Responsible to the state'],
    ['Radio wardens', 'Encouraged group listening'],
  ]),
  view.source('A source type: an advertisement for the People\'s Receiver', 'A 1930s poster showing crowds gathered around a giant radio, with the message that all Germany listens to the Führer.', 'Useful for the regime\'s aims for radio; it shows the ideal, not how people actually listened or whether they believed.'),
], [
  ['Why did Goebbels value radio so highly?', ['It could carry Hitler\'s voice into homes, streets and workplaces', 'It was the only way to send any messages to the German army', 'Radios were far too expensive for most Germans to own'], 0, 'Reaching everyone.'],
  ['Why were rallies effective propaganda?', ['Spectacle made people feel part of a powerful, united nation', 'They were secret, so only party leaders attended them', 'They let people vote on which laws the Nazis passed'], 0, 'Belonging and power.'],
  ['Exam skill · Source utility. How useful is a newsreel of a Nuremberg rally for an enquiry into how Germans felt about the Nazis?', ['Useful for the image the regime projected, but it was staged propaganda, so it shows little about private feelings.', 'Not useful at all, because newsreels were only ever made to be shown to foreign audiences abroad.', 'Completely useful, because everyone filmed at the rally was there by choice and showed true feelings.'], 0, 'Judge content and provenance together.'],
  ['What did the Editors\' Law do?', ['Made editors responsible to the state', 'Gave editors complete freedom to print', 'Closed every newspaper in Germany'], 0, 'Control of the press.'],
], [
  Q('gd25.p1', 'What was the cheap Nazi radio called?', ['The People\'s Receiver', 'The Führer\'s Own Voice', 'The National Wireless'], 0, 'On sale from 1933.', 'radio'),
  Q('gd25.p2', 'Where was the annual party rally held?', ['Nuremberg', 'Munich', 'Heidelberg'], 0, 'It was held every September.', 'rallies'),
  Q('gd25.p3', 'What share of households had radios by 1939?', ['About 70 per cent', 'About 7 per cent', 'All of them'], 0, 'A huge audience.', 'radio'),
  Q('gd25.p4', 'When was the Editors\' Law passed?', ['October 1933', 'March 1936', 'January 1939'], 0, 'Controlling the press.', 'press'),
  Q('gd25.p5', 'Who created the "cathedral of light"?', ['Albert Speer', 'Leni Riefenstahl', 'Joseph Goebbels'], 0, 'With searchlights.', 'rallies'),
], [
  Q('gd25.c1', 'What did every cinema showing include?', ['A newsreel', 'A party speech', 'A national anthem only'], 0, 'Under Goebbels\' control.', 'film'),
  Q('gd25.c2', 'What became a crime in 1939?', ['Listening to foreign radio', 'Owning more than one radio', 'Going to party rallies'], 0, 'To block other news.', 'radio'),
  Q('gd25.c3', 'Where were loudspeakers placed?', ['Streets and factories', 'Only inside churches', 'Only inside schools'], 0, 'So all could hear.', 'radio'),
  Q('gd25.c4', 'What did the Propaganda Ministry tell papers daily?', ['What to report', 'How to vote', 'What to charge'], 0, 'Daily instructions.', 'press'),
  Q('gd25.c5', 'What did posters often show?', ['Hitler as a hero', 'Weimar leaders', 'Communist workers'], 0, 'And the ideal family.', 'film'),
  Q('gd25.c6', 'How many searchlights made the "cathedral of light"?', ['More than 100', 'About 10', 'About 10,000'], 0, 'Pointing into the sky.', 'rallies'),
  Q('gd25.c7', 'Which papers were shut in 1933?', ['Communist and socialist', 'Nazi party papers', 'Sports and hobby papers'], 0, 'Opponents were silenced.', 'press'),
  Q('gd25.c8', 'What were most Nazi films?', ['Entertainment', 'Documentaries', 'Foreign imports'], 0, 'With a message in the background.', 'film'),
], {exam: 'How useful are a newsreel and a radio advertisement for an enquiry into the methods of Nazi propaganda? (8 marks)'}),

lesson(T, 'germany.olympics', 'The 1936 Olympics', ['31 3.3'], [
  ['Winning the Games', 'Berlin was chosen to host the 1936 Olympics in 1931, before the Nazis came to power. Hitler at first disliked the Olympics as international, but Goebbels saw the chance to show the world a strong, modern Germany. The Winter Games were held at Garmisch-Partenkirchen in February 1936, and the Summer Games in Berlin in August.'],
  ['Boycott and cover-up', 'In the USA and Britain some campaigners called for a boycott because of Nazi treatment of Jews, but the US Olympic committee narrowly voted to attend. Before the Games, anti-Jewish signs were taken down and the antisemitic newspaper Der Stürmer was removed from news-stands. Roma living in Berlin were rounded up into a camp on the city\'s edge. Only one athlete with a Jewish father, the fencer Helene Mayer, was allowed in the German team.'],
  ['The spectacle', 'A new stadium held about 100,000 people. The Games had the first torch relay from Olympia in Greece and were the first to be shown on television, in public viewing rooms. Leni Riefenstahl filmed them for her documentary Olympia (1938). Germany topped the medal table with 33 gold medals.'],
  ['Jesse Owens', 'The African-American athlete Jesse Owens won four gold medals, in the 100 metres, 200 metres, long jump and relay, contradicting Nazi claims of "Aryan" superiority. The German long jumper Luz Long befriended him publicly. Foreign visitors were largely impressed by Germany; the cover-up had worked, and anti-Jewish measures resumed after the Games.'],
], view.factors('The Olympics as propaganda', [
  ['Success', 'Germany won the most medals; visitors were impressed'],
  ['Spectacle', 'new stadium, torch relay, television, Olympia film'],
  ['Cover-up', 'antisemitic signs removed; Roma rounded up'],
  ['Limits', 'Jesse Owens undermined racial claims'],
]), [
  view.timeline('The Olympics', [
    ['1931', 'Berlin chosen to host'],
    ['Dec 1935', 'US committee votes to attend'],
    ['Feb 1936', 'Winter Games at Garmisch-Partenkirchen'],
    ['Jul 1936', 'Roma in Berlin rounded up'],
    ['Aug 1936', 'Summer Games in Berlin'],
    ['1938', 'Riefenstahl\'s Olympia released'],
  ]),
  view.people('People', [
    ['Jesse Owens', 'Won four gold medals'],
    ['Luz Long', 'German athlete who befriended Owens'],
    ['Helene Mayer', 'Fencer with a Jewish father in the German team'],
    ['Leni Riefenstahl', 'Filmed the Games'],
  ]),
  view.source('A source type: a foreign visitor\'s letter home', 'A letter from a British visitor describing clean streets, friendly crowds and efficient organisation in Berlin in August 1936.', 'Useful for showing the impression the cover-up created; the visitor saw only what the regime wanted visitors to see.'),
], [
  ['Why did Goebbels want the Games?', ['To show the world a strong, modern Germany', 'To raise money to pay off reparations', 'To prove that Germany wanted to join the League'], 0, 'A propaganda opportunity.'],
  ['Why were antisemitic signs removed before the Games?', ['To hide Nazi persecution from foreign visitors', 'Because the Nazis had ended antisemitic policies', 'Because the signs were needed for the stadium'], 0, 'A temporary cover-up.'],
  ['Exam skill · Inference. A photograph shows Owens and Long talking on the grass. What can you infer?', ['Not every German shared Nazi racial ideas.', 'The photograph was taken in Berlin in August 1936.', 'Owens won four gold medals at the Games.'], 0, 'An inference goes beyond what is shown.'],
  ['How did Jesse Owens undermine Nazi propaganda?', ['His victories contradicted claims of "Aryan" superiority', 'He refused to take part in any of the Olympic events', 'He criticised Hitler openly in a radio broadcast'], 0, 'Results spoke for themselves.'],
], [
  Q('gd26.p1', 'Where were the 1936 Summer Games?', ['Berlin', 'Munich', 'Nuremberg'], 0, 'They were held in August 1936.', 'games'),
  Q('gd26.p2', 'How many gold medals did Jesse Owens win?', ['Four', 'Two', 'Seven'], 0, 'Including the 100 metres.', 'owens'),
  Q('gd26.p3', 'When was Berlin chosen to host?', ['1931', '1934', '1936'], 0, 'Before the Nazis took power.', 'games'),
  Q('gd26.p4', 'Who filmed the Games?', ['Leni Riefenstahl', 'Fritz Lang', 'Marlene Dietrich'], 0, 'For her film Olympia.', 'spectacle'),
  Q('gd26.p5', 'Which country topped the medal table?', ['Germany', 'The USA', 'Britain'], 0, 'With 33 gold medals.', 'spectacle'),
], [
  Q('gd26.c1', 'Where were the Winter Games held?', ['Garmisch-Partenkirchen', 'Berchtesgaden in Bavaria', 'Innsbruck in Austria'], 0, 'In February 1936.', 'games'),
  Q('gd26.c2', 'Which newspaper was removed from news-stands?', ['Der Stürmer', 'The Times', 'Völkischer Beobachter'], 0, 'An antisemitic paper.', 'cover-up'),
  Q('gd26.c3', 'Who was rounded up before the Games?', ['Roma living in Berlin', 'Foreign athletes', 'Foreign journalists'], 0, 'They were held in a camp.', 'cover-up'),
  Q('gd26.c4', 'Which German athlete befriended Owens?', ['Luz Long', 'Max Schmeling', 'Helene Mayer'], 0, 'Long was a long jumper.', 'owens'),
  Q('gd26.c5', 'Which innovation started in 1936?', ['The torch relay', 'The marathon', 'Women\'s events'], 0, 'From Olympia in Greece.', 'spectacle'),
  Q('gd26.c6', 'About how many did the stadium hold?', ['100,000', '10,000', '1 million'], 0, 'The stadium was newly built.', 'spectacle'),
  Q('gd26.c7', 'What happened after the Games?', ['Anti-Jewish measures resumed', 'Persecution ended', 'Germany joined the League'], 0, 'The cover-up was temporary.', 'cover-up'),
  Q('gd26.c8', 'How were the Games first shown?', ['On television', 'On the internet', 'Only in newspapers'], 0, 'In public viewing rooms.', 'spectacle'),
], {exam: 'Give two things you can infer from a photograph of the 1936 Olympic stadium about Nazi aims for the Games. (4 marks)'}),

lesson(T, 'germany.nazi-culture', 'Nazi control of culture and the arts', ['31 3.3'], [
  ['The Reich Chamber of Culture', 'Set up in September 1933 under Goebbels, the Reich Chamber of Culture had sections for music, film, theatre, radio, the press, literature and the visual arts. Anyone working in these fields had to be a member. Jews and political opponents were refused membership, so they could no longer work.'],
  ['Books', 'On 10 May 1933 students and SA men burned around 20,000 books in Berlin\'s Opera Square, and similar burnings happened in university towns. Works by Jewish, communist and pacifist writers, such as Erich Maria Remarque, Heinrich Mann and Sigmund Freud, were banned. Thousands of writers and artists, including Bertolt Brecht and Thomas Mann, left Germany.'],
  ['Art and music', 'Modern art was condemned as "degenerate". In 1937 the Degenerate Art exhibition in Munich mocked works by artists such as Otto Dix and Paul Klee; more than two million people visited it. Approved art showed heroic workers, soldiers and peasant families. Jazz was attacked as "un-German", and music by Jewish composers such as Mendelssohn was banned, while Wagner and Beethoven were promoted.'],
  ['Architecture and film', 'Hitler and Albert Speer favoured huge classical buildings to show the power of the state, such as the Nuremberg rally grounds and the new Reich Chancellery (1939). Film was supervised by Goebbels: Hitler Youth Quex (1933) presented a Hitler Youth boy as a martyr, while Triumph of the Will (1935) glorified Hitler.'],
], view.factors('How the Nazis controlled culture', [
  ['Organisation', 'Reich Chamber of Culture: membership required to work'],
  ['Censorship', 'book burning; bans on Jewish and anti-Nazi writers'],
  ['Approved culture', 'heroic realism; Wagner; classical architecture'],
  ['Exclusion', '"degenerate" art; jazz attacked; artists left Germany'],
]), [
  view.timeline('Culture under the Nazis', [
    ['10 May 1933', 'Book burnings'],
    ['Sep 1933', 'Reich Chamber of Culture set up'],
    ['1933', 'Hitler Youth Quex released'],
    ['1935', 'Triumph of the Will released'],
    ['1937', 'Degenerate Art exhibition'],
    ['1939', 'New Reich Chancellery completed'],
  ]),
  view.people('People', [
    ['Joseph Goebbels', 'Head of the Reich Chamber of Culture'],
    ['Albert Speer', 'Hitler\'s architect'],
    ['Thomas Mann and Bertolt Brecht', 'Writers who left Germany'],
    ['Otto Dix and Paul Klee', 'Artists condemned as "degenerate"'],
  ]),
  view.source('A source type: a photograph of the book burning', 'A photograph of students throwing books onto a bonfire in Berlin on the night of 10 May 1933, watched by a large crowd.', 'Useful for showing the event and the public audience; it cannot show how many Germans approved of it.'),
], [
  ['Why did the Nazis set up the Reich Chamber of Culture?', ['To control who could work in the arts and what they produced', 'To protect artists\' freedom to criticise the government', 'To bring more Jewish artists into German culture'], 0, 'Control through membership.'],
  ['Why was modern art labelled "degenerate"?', ['The Nazis saw it as un-German and a sign of decay', 'It was too expensive for ordinary people to buy', 'It was mostly painted by members of the Nazi Party'], 0, 'Ideology decided taste.'],
  ['Exam skill · Explain why. Which sentence explains why many artists left Germany?', ['Jews and opponents were refused membership of the Chamber, so they could no longer work.', 'Thomas Mann and Bertolt Brecht were both very well-known German writers of the time.', 'The Degenerate Art exhibition opened in the city of Munich in the summer of 1937.'], 0, 'An explanation links the cause to its effect.'],
  ['What did Nazi architecture aim to show?', ['The power and permanence of the state', 'The freedom of individual designers', 'The influence of American style'], 0, 'Monumental style.'],
], [
  Q('gd27.p1', 'When were books burned in Berlin?', ['10 May 1933', '9 November 1938', '30 June 1934'], 0, 'In Opera Square.', 'books'),
  Q('gd27.p2', 'When was the Reich Chamber of Culture set up?', ['September 1933', 'January 1939', 'November 1936'], 0, 'It was run by Goebbels.', 'chamber'),
  Q('gd27.p3', 'Where was the Degenerate Art exhibition?', ['Munich', 'Berlin', 'Vienna'], 0, 'It opened in 1937.', 'art'),
  Q('gd27.p4', 'Which composer did the Nazis promote?', ['Wagner', 'Mendelssohn', 'Gershwin'], 0, 'Beethoven was promoted too.', 'art'),
  Q('gd27.p5', 'Who was Hitler\'s architect?', ['Albert Speer', 'Walter Gropius', 'Paul Klee'], 0, 'He favoured classical style.', 'architecture'),
], [
  Q('gd27.c1', 'About how many books were burned in Berlin?', ['20,000', '200', '2 million'], 0, 'By students and SA.', 'books'),
  Q('gd27.c2', 'Whose music was banned?', ['Mendelssohn\'s', 'Richard Wagner\'s', 'Beethoven\'s'], 0, 'He was a Jewish composer.', 'art'),
  Q('gd27.c3', 'Who had to join the Chamber?', ['Anyone working in the arts', 'Only Nazi Party members', 'Only foreign artists'], 0, 'To be allowed to work.', 'chamber'),
  Q('gd27.c4', 'Which writer left Germany?', ['Thomas Mann', 'Joseph Goebbels', 'Albert Speer'], 0, 'With Brecht and many others.', 'books'),
  Q('gd27.c5', 'About how many visited the Degenerate Art exhibition?', ['Over two million', 'About two hundred', 'About twenty thousand'], 0, 'A huge audience.', 'art'),
  Q('gd27.c6', 'Which film showed a Hitler Youth martyr?', ['Hitler Youth Quex', 'Metropolis', 'The Blue Angel'], 0, 'It was released in 1933.', 'architecture'),
  Q('gd27.c7', 'Which music was attacked as un-German?', ['Jazz', 'Folk songs', 'Military marches'], 0, 'Popular in the 1920s.', 'art'),
  Q('gd27.c8', 'When was the new Reich Chancellery completed?', ['1939', '1919', '1929'], 0, 'Designed by Speer.', 'architecture'),
], {exam: 'Explain why the Nazis tried to control culture and the arts. (12 marks)'}),

lesson(T, 'germany.churches', 'The Nazis and the Churches', ['31 3.3'], [
  ['Religion in Germany', 'About two-thirds of Germans were Protestants and about a third were Catholics. Many Protestants were nationalist and had disliked the Republic; Catholics had their own party, the Centre Party, and strong youth groups and schools. Hitler publicly claimed to support "positive Christianity", but saw the Churches as rivals for people\'s loyalty.'],
  ['The Concordat, 1933', 'In July 1933 the Nazi government and the Pope signed a Concordat. The Catholic Church agreed to stay out of politics, and the Centre Party dissolved itself; in return the Church was promised freedom of worship and control of its schools and youth groups. Within a few years the Nazis broke these promises.'],
  ['Pressure on Catholics', 'Catholic youth groups were closed and members pushed into the Hitler Youth. Catholic schools were turned into state "community schools", crucifixes were removed from some classrooms, and Catholic newspapers were closed. Monasteries were shut and hundreds of priests were arrested and sent to camps.'],
  ['The Reich Church', 'In 1933 pro-Nazi Protestants, the "German Christians", created a single Reich Church and the Nazi supporter Ludwig Müller became Reich Bishop. Some churches flew swastika flags and banned pastors of Jewish descent. A Ministry for Church Affairs was set up in 1935 to control the Churches, and the Nazis also encouraged the pagan German Faith Movement.'],
], view.factors('Nazi policy towards the Churches', [
  ['Agreement', 'the Concordat with the Catholic Church, 1933'],
  ['Broken promises', 'Catholic youth groups, schools and newspapers closed'],
  ['Control', 'the Reich Church, the German Christians, a Ministry for Church Affairs'],
  ['Replacement', 'the German Faith Movement and Nazi ceremonies'],
]), [
  view.timeline('The Churches', [
    ['Jul 1933', 'Concordat signed with the Pope'],
    ['1933', 'Reich Church formed; Müller Reich Bishop'],
    ['1935', 'Ministry for Church Affairs set up'],
    ['1936', 'Catholic youth groups pushed into the Hitler Youth'],
    ['1937–39', 'Catholic schools converted; priests arrested'],
  ]),
  view.people('People and groups', [
    ['Pope Pius XI', 'Signed the Concordat'],
    ['Ludwig Müller', 'Reich Bishop'],
    ['The German Christians', 'Pro-Nazi Protestants'],
    ['Catholic priests', 'Hundreds arrested'],
  ]),
  view.source('A source type: a photograph of a German Christian service', 'A photograph of a 1933 church service with swastika banners hanging beside the altar and uniformed SA men in the pews.', 'Useful for the German Christians\' support for the Nazis; it shows one congregation, not every Protestant church.'),
], [
  ['Why did the Nazis sign the Concordat?', ['To remove the Catholic Church and Centre Party from politics', 'Because Hitler wanted to become a Catholic priest', 'To make the Catholic Church the only church in Germany'], 0, 'Neutralising a rival.'],
  ['Why did the Nazis want a single Reich Church?', ['To bring Protestant churches under Nazi control', 'To give pastors more independence from the state', 'To unite all the Churches against the government'], 0, 'Coordination of religion.'],
  ['Exam skill · Explain why. Which sentence explains why the Nazis saw the Churches as a threat?', ['The Churches commanded loyalty and ran schools and youth groups the Nazis wanted to control.', 'About two-thirds of Germans were Protestants and about one-third were Catholics.', 'Ludwig Müller became the Reich Bishop of the new Reich Church in 1933.'], 0, 'An explanation links the cause to its effect.'],
  ['How did the Nazis break the Concordat?', ['By closing Catholic youth groups, schools and newspapers', 'By making every German attend a Catholic Mass', 'By giving the Catholic Church seats in the Reichstag'], 0, 'Promises broken.'],
], [
  Q('gd28.p1', 'When was the Concordat signed?', ['July 1933', 'January 1933', 'March 1937'], 0, 'It was signed with the Pope.', 'concordat'),
  Q('gd28.p2', 'Who became Reich Bishop?', ['Ludwig Müller', 'Martin Niemöller', 'Clemens von Galen'], 0, 'A Nazi supporter.', 'reich-church'),
  Q('gd28.p3', 'What were pro-Nazi Protestants called?', ['The German Christians', 'The Confessing Church', 'The Centre Party'], 0, 'They formed the Reich Church.', 'reich-church'),
  Q('gd28.p4', 'About what share of Germans were Catholic?', ['About a third', 'About two-thirds', 'Almost all'], 0, 'Most were Protestant.', 'religion'),
  Q('gd28.p5', 'What did the Catholic Church agree in the Concordat?', ['To stay out of politics', 'To support the SA', 'To close its schools'], 0, 'In return for freedoms.', 'concordat'),
], [
  Q('gd28.c1', 'When was the Ministry for Church Affairs set up?', ['1935', '1933', '1939'], 0, 'To control the Churches.', 'reich-church'),
  Q('gd28.c2', 'What were Catholic schools turned into?', ['Community schools', 'Army barracks', 'Hitler Youth camps'], 0, 'Under state control.', 'catholics'),
  Q('gd28.c3', 'Which pagan movement did the Nazis encourage?', ['The German Faith Movement', 'The Confessing Church', 'The Pastors\' Emergency League'], 0, 'To replace Christianity.', 'reich-church'),
  Q('gd28.c4', 'What happened to the Centre Party?', ['It dissolved itself', 'It won a majority', 'It joined the SPD'], 0, 'After the Concordat.', 'concordat'),
  Q('gd28.c5', 'What did Hitler publicly claim to support?', ['"Positive Christianity"', 'Complete atheism', 'Rule by the Catholic Church'], 0, 'A deliberately vague phrase.', 'religion'),
  Q('gd28.c6', 'Which group were Catholic youth pushed into?', ['The Hitler Youth', 'The SS', 'The Labour Front'], 0, 'Their own groups were closed.', 'catholics'),
  Q('gd28.c7', 'What was removed from some classrooms?', ['Crucifixes', 'Blackboards', 'Maps of Europe'], 0, 'Religious symbols.', 'catholics'),
  Q('gd28.c8', 'Who signed the Concordat for the Church?', ['Pope Pius XI', 'Ludwig Müller', 'Martin Niemöller'], 0, 'It was signed in Rome.', 'concordat'),
], {exam: 'Explain why the Nazis tried to control the Churches. (12 marks)'}),

lesson(T, 'germany.conformity', 'Support and conformity', ['31 3.4'], [
  ['Reasons for support', 'Many Germans genuinely supported the regime. Unemployment fell from about six million to almost nothing by 1939; order seemed restored after years of street fighting; and Germany looked strong again, winning back the Saar in 1935, remilitarising the Rhineland in 1936 and uniting with Austria in 1938. Official votes showed huge approval, though they were not free.'],
  ['The Hitler myth', 'Propaganda presented Hitler as a leader above politics who cared for ordinary Germans. Many people blamed local Nazi officials for problems while believing that Hitler himself would put things right if only he knew. This helped the regime keep support even when people grumbled.'],
  ['Conforming out of fear', 'Others went along because of fear of the Gestapo, informers and the camps, or because they wanted to keep their jobs. They gave the Hitler salute, joined Nazi organisations and kept their private doubts to themselves. Some later described this as "inner emigration".'],
  ['Grumbling and quiet refusal', 'Reports smuggled to the exiled Social Democrats show that many workers grumbled about low wages and long hours, but did not resist. Small acts of refusal, such as avoiding the salute or listening to foreign radio, were risky. Jehovah\'s Witnesses openly refused military service and the salute; about 10,000 of them were imprisoned and about 1,500 died.'],
], view.factors('Why most Germans did not resist', [
  ['Real support', 'jobs, order, national pride, foreign successes'],
  ['The Hitler myth', 'Hitler seen as above everyday problems'],
  ['Fear', 'Gestapo, informers, camps'],
  ['Self-interest', 'keeping jobs and staying out of trouble'],
]), [
  view.timeline('Support for the regime', [
    ['Aug 1934', 'About 90% approve Hitler as Führer'],
    ['Jan 1935', 'The Saar votes to return to Germany'],
    ['Mar 1936', 'Rhineland remilitarised'],
    ['Mar 1938', 'Union with Austria'],
    ['1939', 'Unemployment almost gone'],
  ]),
  view.people('Groups', [
    ['Workers', 'Grumbled but mostly conformed'],
    ['The middle classes', 'Welcomed order and anti-communism'],
    ['Jehovah\'s Witnesses', 'Openly refused to conform'],
    ['Exiled Social Democrats', 'Collected secret reports on public mood'],
  ]),
  view.source('A source type: a secret report on public opinion', 'A report smuggled out of Germany in 1936 for the exiled Social Democrats, describing workers complaining about wages but praising Hitler.', 'Useful for private opinion that the regime\'s own figures hid; it was written by opponents hoping to find discontent.'),
], [
  ['Why did many Germans support the regime?', ['Jobs, order and national pride seemed restored', 'They were paid by the state to vote for the Nazis', 'The regime allowed free and open elections'], 0, 'Real benefits for many.'],
  ['What was the "Hitler myth"?', ['The belief that Hitler cared for ordinary people and was above local problems', 'A rumour that Hitler would soon retire from politics and leave Germany', 'The story that Hitler had been born in Germany rather than Austria'], 0, 'Image protected the leader.'],
  ['Exam skill · Interpretations. One historian says Germans obeyed through fear; another says many consented. Why might they differ?', ['They use different evidence, such as Gestapo files or reports of public mood.', 'One historian wrote in German and the other historian wrote in English.', 'Hitler became Führer in August 1934, which both of the historians agree on.'], 0, 'Different evidence, different emphasis.'],
  ['Why were official votes poor evidence of support?', ['They were not free and were held under pressure', 'They were held only in the city of Berlin', 'They were counted by neutral foreign observers'], 0, 'Results under a dictatorship.'],
], [
  Q('gd29.p1', 'When did the Saar return to Germany?', ['1935', '1938', '1919'], 0, 'Its people voted to return.', 'support'),
  Q('gd29.p2', 'When was the Rhineland remilitarised?', ['1936', '1933', '1939'], 0, 'A foreign success.', 'support'),
  Q('gd29.p3', 'What did people sometimes blame instead of Hitler?', ['Local Nazi officials', 'The German army', 'Foreign governments'], 0, 'The Hitler myth.', 'myth'),
  Q('gd29.p4', 'Which religious group openly refused the salute?', ['Jehovah\'s Witnesses', 'German Lutherans', 'English Methodists'], 0, 'And military service.', 'refusal'),
  Q('gd29.p5', 'What was "inner emigration"?', ['Keeping private doubts', 'Leaving Germany for good', 'Joining the SS'], 0, 'Outward conformity.', 'fear'),
], [
  Q('gd29.c1', 'When did Germany unite with Austria?', ['1938', '1935', '1933'], 0, 'This was the Anschluss.', 'support'),
  Q('gd29.c2', 'Who received secret reports on public mood?', ['Exiled Social Democrats', 'The Gestapo in Berlin', 'The Pope in Rome'], 0, 'Smuggled out of Germany.', 'refusal'),
  Q('gd29.c3', 'What did many workers grumble about?', ['Wages and hours', 'Too much leisure', 'Too many holidays'], 0, 'But they conformed.', 'refusal'),
  Q('gd29.c4', 'Why did some people join Nazi organisations?', ['To keep their jobs', 'To pay higher taxes', 'To travel abroad'], 0, 'Out of self-interest.', 'fear'),
  Q('gd29.c5', 'What had unemployment fallen to by 1939?', ['Almost nothing', 'Six million', 'Three million'], 0, 'From six million.', 'support'),
  Q('gd29.c6', 'Which small act of refusal was risky?', ['Avoiding the salute', 'Buying a radio set', 'Going to work early'], 0, 'Others might report it.', 'refusal'),
  Q('gd29.c7', 'Were official votes free?', ['No', 'Yes', 'Only in cities'], 0, 'Held under pressure.', 'support'),
  Q('gd29.c8', 'What restored many people\'s sense of order?', ['An end to street fighting', 'Holding more free elections', 'Having weaker police forces'], 0, 'After the early 1930s.', 'support'),
], {exam: 'Explain why there was little opposition to the Nazis in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.church-opposition', 'Opposition from the Churches', ['31 3.4'], [
  ['The Pastors\' Emergency League', 'In September 1933 Martin Niemöller, a Berlin pastor and First World War U-boat commander, set up the Pastors\' Emergency League against the Reich Church\'s ban on pastors of Jewish descent. By early 1934 about 7,000 pastors, over a third of the total, had joined.'],
  ['The Confessing Church', 'In May 1934 Protestant leaders met at Barmen and declared that the Church answered to God, not to the state. This founded the Confessing Church, which refused to accept the Reich Church. Its pastors were watched by the Gestapo, and hundreds were arrested; Dietrich Bonhoeffer ran a secret seminary to train its pastors.'],
  ['Niemöller\'s arrest', 'Niemöller preached against Nazi interference in the Church. He was arrested in July 1937 and tried in 1938; the court gave him a short sentence, but on his release he was rearrested on Hitler\'s orders and held in Sachsenhausen and then Dachau until 1945 as Hitler\'s "personal prisoner".'],
  ['Catholic protest and its limits', 'In March 1937 Pope Pius XI\'s letter "With Burning Concern" (Mit brennender Sorge), smuggled into Germany, was read from Catholic pulpits; it condemned Nazi breaches of the Concordat and Nazi racial ideas. The Gestapo seized copies and arrested priests. Most clergy, Catholic and Protestant, defended their Church\'s independence rather than opposing the regime as a whole, and few spoke out for Jews.'],
], view.factors('Church opposition: what it did and its limits', [
  ['Protestant', 'Emergency League; Confessing Church; Barmen 1934'],
  ['Catholic', 'the Pope\'s 1937 letter; individual priests and bishops'],
  ['Response', 'surveillance, arrests, camps'],
  ['Limits', 'mainly defended the Church, not wider rights; most clergy conformed'],
]), [
  view.timeline('Church opposition', [
    ['Sep 1933', 'Pastors\' Emergency League founded'],
    ['Early 1934', 'About 7,000 pastors members'],
    ['May 1934', 'Barmen declaration; Confessing Church'],
    ['Mar 1937', 'Papal letter read in Catholic churches'],
    ['Jul 1937', 'Niemöller arrested'],
    ['1938–45', 'Niemöller held in camps'],
  ]),
  view.people('People', [
    ['Martin Niemöller', 'Founded the Emergency League'],
    ['Dietrich Bonhoeffer', 'Trained Confessing Church pastors in secret'],
    ['Pope Pius XI', 'Issued the 1937 letter'],
    ['Clemens von Galen', 'Catholic bishop of Münster who criticised Nazi ideas'],
  ]),
  view.source('A source type: a Gestapo report on a sermon', 'A Gestapo report from 1937 summarising a Confessing Church sermon and noting the names of those attending.', 'Useful for the regime\'s surveillance of the Churches; written by the police, it reflects what they looked for.'),
], [
  ['Why was the Pastors\' Emergency League formed?', ['To oppose the Reich Church\'s ban on pastors of Jewish descent', 'To support the Nazi Party in the 1933 elections', 'To organise an armed uprising against Hitler\'s government'], 0, 'A protest over church rules.'],
  ['Why was church opposition limited?', ['Most clergy defended their Church rather than opposing the regime', 'The Churches had almost no members left by 1934', 'The Nazis never interfered in religion or the Churches'], 0, 'Their aims were narrow.'],
  ['Exam skill · Explain why. Which sentence explains why the regime treated Niemöller harshly?', ['He was a well-known critic, so making an example of him warned other pastors.', 'Niemöller had been a U-boat commander in the German navy during the First World War.', 'Niemöller was arrested in July 1937 and was then tried by a court in 1938.'], 0, 'An explanation links the cause to its effect.'],
  ['What did the Barmen declaration say?', ['The Church answered to God, not to the state', 'The Church fully supported the Nazi state', 'The Church would close all its schools'], 0, 'Independence of the Church.'],
], [
  Q('gd30.p1', 'Who founded the Pastors\' Emergency League?', ['Martin Niemöller', 'Ludwig Müller', 'Clemens von Galen'], 0, 'In September 1933.', 'league'),
  Q('gd30.p2', 'Where was the 1934 declaration made?', ['Barmen', 'Nuremberg', 'Munich'], 0, 'Founding the Confessing Church.', 'confessing'),
  Q('gd30.p3', 'When was Niemöller arrested?', ['July 1937', 'May 1933', 'June 1934'], 0, 'For his preaching.', 'niemoller'),
  Q('gd30.p4', 'Which Pope issued the 1937 letter?', ['Pius XI', 'Pius XII', 'John XXIII'], 0, 'Read from pulpits.', 'catholic'),
  Q('gd30.p5', 'About how many pastors joined the League by 1934?', ['7,000', '70', '700,000'], 0, 'Over a third of all pastors.', 'league'),
], [
  Q('gd30.c1', 'Who ran a secret seminary?', ['Dietrich Bonhoeffer', 'Ludwig Müller', 'Joseph Goebbels'], 0, 'For the Confessing Church.', 'confessing'),
  Q('gd30.c2', 'Which camps held Niemöller?', ['Sachsenhausen and Dachau', 'Buchenwald and Belsen', 'Ravensbrück only'], 0, 'He was held until 1945.', 'niemoller'),
  Q('gd30.c3', 'What did the 1937 letter condemn?', ['Breaches of the Concordat', 'The Treaty of Versailles', 'Communism only'], 0, 'And racial ideas.', 'catholic'),
  Q('gd30.c4', 'What was Niemöller in the First World War?', ['A U-boat commander', 'A fighter pilot', 'A cavalry general'], 0, 'A nationalist at first.', 'league'),
  Q('gd30.c5', 'What did the Gestapo do with the letter?', ['Seized copies', 'Printed more', 'Ignored it'], 0, 'And arrested priests.', 'catholic'),
  Q('gd30.c6', 'What did most clergy defend?', ['Their Church\'s independence', 'The rights of all Germans', 'The Weimar Republic'], 0, 'It was a limited aim.', 'limits'),
  Q('gd30.c7', 'What was Niemöller called in the camps?', ['Hitler\'s personal prisoner', 'The Reich Bishop\'s guest', 'An honoured camp guard'], 0, 'On Hitler\'s orders.', 'niemoller'),
  Q('gd30.c8', 'Which Catholic bishop criticised Nazi ideas?', ['Clemens von Galen', 'Ludwig Müller', 'Martin Niemöller'], 0, 'Bishop of Münster.', 'catholic'),
], {exam: 'Explain why the Churches were able to oppose the Nazis only to a limited extent. (12 marks)'}),

lesson(T, 'germany.youth-opposition', 'Opposition from young people', ['31 3.4'], [
  ['Why some young people resisted', 'By the late 1930s membership of the Hitler Youth was compulsory. Many teenagers grew tired of its drill, marching and military discipline. Working-class teenagers who had left school at 14 resented being ordered about in their free time, while some middle-class teenagers disliked the regime\'s attacks on the music and fashions they loved.'],
  ['The Edelweiss Pirates', 'Groups of working-class teenagers in western cities, with names such as the Navajos in Cologne, wore an edelweiss badge and checked shirts. They went hiking and camping on their own, sang songs mocking the Nazis and sometimes ambushed Hitler Youth patrols. Some groups had hundreds of members.'],
  ['The Swing Youth', 'Mostly middle-class teenagers in Hamburg, Berlin and other cities held dances to American jazz and swing, which the Nazis called degenerate. They wore long hair and English-style clothes, greeted each other with "Swing Heil" and mocked the Hitler Youth. A swing festival in Hamburg in 1940 drew about 500 young people.'],
  ['How the regime responded', 'The Gestapo raided meetings, shaved the heads of offenders and sent some to youth concentration camps. Opposition grew during the war, when some Edelweiss Pirates helped deserters and escaped prisoners; in November 1944 thirteen people, several of them Edelweiss Pirates, were publicly hanged in Cologne. Youth opposition was mainly about freedom and lifestyle, and it involved only a small minority.'],
], view.factors('Youth opposition: causes and limits', [
  ['Causes', 'compulsory Hitler Youth; drill and discipline; attacks on music and fashion'],
  ['Edelweiss Pirates', 'working-class; hiking; fights with the Hitler Youth'],
  ['Swing Youth', 'middle-class; jazz and swing; mocking the regime'],
  ['Limits', 'small numbers; mostly lifestyle rather than politics'],
]), [
  view.timeline('Youth opposition', [
    ['1936', 'Hitler Youth made the official youth organisation'],
    ['1939', 'Hitler Youth membership compulsory'],
    ['Late 1930s', 'Edelweiss Pirate groups spread in western cities'],
    ['1940', 'Swing festival in Hamburg'],
    ['Nov 1944', 'Thirteen hanged in Cologne'],
  ]),
  view.people('Groups', [
    ['The Edelweiss Pirates', 'Working-class teenagers in western cities'],
    ['The Navajos', 'An Edelweiss Pirate group in Cologne'],
    ['The Swing Youth', 'Middle-class jazz fans'],
    ['Hitler Youth patrols', 'Clashed with the Pirates'],
  ]),
  view.source('A source type: a Hitler Youth report', 'A 1938 report by a Hitler Youth leader complaining that gangs of youths were attacking patrols and avoiding duty.', 'Useful for showing that the regime saw youth gangs as a problem; written by an opponent of the gangs, it may exaggerate them.'),
], [
  ['Why did some working-class teenagers join the Edelweiss Pirates?', ['They resented being ordered about in their free time', 'They were paid by the Allies to oppose the Nazis', 'They wanted the Hitler Youth to be compulsory'], 0, 'Freedom from control.'],
  ['Why was youth opposition limited?', ['Only a small minority took part, mostly over lifestyle', 'The Nazis allowed open youth protest after 1936', 'Young people could vote the Nazis out of power'], 0, 'Small and mostly non-political.'],
  ['Exam skill · Inference. A photograph shows teenagers in checked shirts camping by a lake. What can you infer?', ['They chose their own leisure instead of Hitler Youth activities.', 'The photograph was taken near the city of Cologne in 1938.', 'The Edelweiss Pirates wore an edelweiss flower badge.'], 0, 'An inference goes beyond what is shown.'],
  ['How did the Swing Youth mock the regime?', ['Greeting each other with "Swing Heil"', 'Joining the SS in very large numbers', 'Burning their jazz records in public'], 0, 'Humour as defiance.'],
], [
  Q('gd31.p1', 'What badge did the Edelweiss Pirates wear?', ['An edelweiss flower', 'A small swastika', 'A red star badge'], 0, 'Hence their name.', 'pirates'),
  Q('gd31.p2', 'Which music did the Swing Youth love?', ['American jazz and swing', 'Wagner\'s long operas', 'German military marches'], 0, 'The Nazis called it degenerate.', 'swing'),
  Q('gd31.p3', 'Where was the Navajos group?', ['Cologne', 'Munich', 'Hamburg'], 0, 'An Edelweiss Pirate group.', 'pirates'),
  Q('gd31.p4', 'How many were hanged in Cologne in 1944?', ['Thirteen', 'Three', 'Three hundred'], 0, 'Several were Pirates.', 'response'),
  Q('gd31.p5', 'When did Hitler Youth membership become compulsory?', ['1939', '1926', '1933'], 0, 'It was required by law.', 'causes'),
], [
  Q('gd31.c1', 'Which class were most Edelweiss Pirates?', ['Working class', 'Upper class', 'Landed nobility'], 0, 'In western cities.', 'pirates'),
  Q('gd31.c2', 'Where did the Swing Youth hold a festival in 1940?', ['Hamburg', 'Munich', 'Nuremberg'], 0, 'About 500 attended.', 'swing'),
  Q('gd31.c3', 'What did the Pirates sometimes do to patrols?', ['Ambush them', 'Join them', 'Lead them'], 0, 'Hitler Youth patrols.', 'pirates'),
  Q('gd31.c4', 'What punishment did some offenders receive?', ['Shaved heads', 'Medals', 'Promotions'], 0, 'And youth camps.', 'response'),
  Q('gd31.c5', 'What clothes did the Swing Youth wear?', ['English-style clothes', 'Hitler Youth uniform', 'Traditional lederhosen'], 0, 'They also wore long hair.', 'swing'),
  Q('gd31.c6', 'At what age did many working-class teenagers leave school?', ['14', '18', '21'], 0, 'Then resented control.', 'causes'),
  Q('gd31.c7', 'Whom did some Pirates help during the war?', ['Deserters and escaped prisoners', 'Gestapo officers on patrol', 'SS units guarding the city'], 0, 'Opposition grew.', 'response'),
  Q('gd31.c8', 'What was youth opposition mainly about?', ['Freedom and lifestyle', 'Restoring the Kaiser', 'Communist revolution'], 0, 'Mostly not political.', 'response'),
], {exam: 'Explain why some young people opposed the Nazi regime. (12 marks)'}),
];
