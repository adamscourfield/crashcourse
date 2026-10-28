// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 Option 31: Weimar and Nazi Germany, 1918–39.
// Key topic 3: Nazi control and dictatorship, 1933–39 (specification 3.1–3.4).
// All teaching text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

export const germanyTopic3 = {id: 'history.germany.kt3', unit: '31', title: 'Nazi control and dictatorship, 1933–39', paper: 'Paper 3 · Modern depth study'};
const T = germanyTopic3.id;

export const germanyLessons3 = [
lesson(T, 'germany.dictatorship', 'Creating the dictatorship, 1933–34', ['31 3.1'], [
  ['The Reichstag Fire', 'On 27 February 1933 the Reichstag building burned down. A young Dutch communist, Marinus van der Lubbe, was arrested at the scene. Hitler claimed it was the start of a communist revolution and persuaded Hindenburg to issue an emergency decree that suspended civil rights. Thousands of communists were arrested. Historians still debate whether van der Lubbe acted alone.'],
  ['The Enabling Act', 'In the March 1933 election the Nazis won 288 seats, still short of a majority. On 23 March the Reichstag passed the Enabling Act, with SA men surrounding the building and the communists absent. It let Hitler\'s government make laws without the Reichstag for four years. Only the Social Democrats voted against.'],
  ['A one-party state', 'Local governments were taken over by Nazis. In May 1933 trade unions were banned and replaced by the German Labour Front. In July 1933 a law made the Nazi Party the only legal party.'],
  ['The Night of the Long Knives and the Führer', 'The SA, led by Ernst Röhm, wanted a "second revolution" and to control the army, which alarmed army leaders. On 30 June 1934 Hitler had the SS arrest and murder Röhm and other SA leaders, along with old enemies such as Schleicher and Strasser; at least 85 were killed, and probably more. When Hindenburg died on 2 August 1934, Hitler combined the posts of Chancellor and President as Führer, and the army swore an oath of personal loyalty to him.'],
], view.factors('Steps to dictatorship', [
  ['Emergency powers', 'the Reichstag Fire decree suspended civil rights'],
  ['Legal power', 'the Enabling Act let Hitler make laws without the Reichstag'],
  ['Removing rivals', 'unions banned; other parties banned; the SA leadership murdered'],
  ['Total control', 'Hitler became Führer; the army swore loyalty to him personally'],
]), [
  view.timeline('1933–34', [
    ['30 Jan 1933', 'Hitler appointed Chancellor'],
    ['27 Feb 1933', 'The Reichstag Fire'],
    ['5 Mar 1933', 'Election: the Nazis win 288 seats'],
    ['23 Mar 1933', 'The Enabling Act'],
    ['May–Jul 1933', 'Trade unions and other parties banned'],
    ['30 Jun 1934', 'The Night of the Long Knives'],
    ['2 Aug 1934', 'Hindenburg dies; Hitler becomes Führer'],
  ]),
  view.people('People', [
    ['Marinus van der Lubbe', 'Dutch communist arrested for the Reichstag Fire'],
    ['Ernst Röhm', 'SA leader murdered in June 1934'],
    ['Paul von Hindenburg', 'President until his death in August 1934'],
    ['The army', 'Swore an oath of loyalty to Hitler'],
  ]),
  view.source('A source type: a Nazi newspaper report, March 1933', 'A Nazi newspaper article claiming the Reichstag Fire proved that communists were planning a violent revolution.', 'Useful for how the Nazis used the fire to justify arrests; as propaganda it is not reliable on who started it.'),
], [
  ['How did the Nazis use the Reichstag Fire?', ['They claimed a communist plot and got an emergency decree suspending civil rights', 'They used it to call for new elections in which the Communists won a majority', 'They blamed the army and replaced its generals with leaders of the SA'], 0, 'A crisis was turned into power.'],
  ['Why did Hitler turn against the SA in 1934?', ['Its demands worried the army, whose support Hitler needed', 'The SA had voted against the Enabling Act in March 1933', 'Röhm had tried to have Hitler arrested by the police'], 0, 'Hitler chose the army over the SA.'],
  ['Exam skill · Explain why. Which explains why the Enabling Act was so important?', ['It let Hitler make laws without the Reichstag, so he could remove opponents legally.', 'The Enabling Act was passed by the Reichstag on the twenty-third of March 1933.', 'Only the Social Democrats voted against the Enabling Act when it was passed.'], 0, 'Explanation shows the consequence.'],
  ['Why did the army\'s oath matter?', ['Soldiers swore loyalty to Hitler personally, not to the constitution', 'It made the army fully independent of the Nazi government', 'It meant the SA would now command the whole German army'], 0, 'Loyalty to a person bound the army to Hitler.'],
], [
  Q('ger9.p1', 'When was the Reichstag Fire?', ['27 February 1933', '30 January 1933', '30 June 1934'], 0, 'Four weeks after Hitler became Chancellor.', 'fire'),
  Q('ger9.p2', 'Who was arrested for the Reichstag Fire?', ['Marinus van der Lubbe', 'Ernst Röhm of the SA', 'Ernst Thälmann of the KPD'], 0, 'A Dutch communist.', 'fire'),
  Q('ger9.p3', 'When was the Enabling Act passed?', ['23 March 1933', '2 August 1934', '14 July 1933'], 0, 'It lasted four years at first.', 'enabling'),
  Q('ger9.p4', 'When was the Night of the Long Knives?', ['30 June 1934', '9 November 1938', '27 February 1933'], 0, 'Kristallnacht was 1938.', 'long-knives'),
  Q('ger9.p5', 'Who became Führer in August 1934?', ['Hitler', 'Göring', 'Himmler'], 0, 'After Hindenburg died.', 'fuhrer'),
], [
  Q('ger9.c1', 'What replaced the trade unions?', ['The German Labour Front', 'The SA stormtroopers', 'A new Reichstag committee'], 0, 'Unions were banned in May 1933.', 'one-party'),
  Q('ger9.c2', 'Which party voted against the Enabling Act?', ['The Social Democrats', 'The Nazi Party itself', 'The Catholic Centre Party'], 0, 'The Communists were absent.', 'enabling'),
  Q('ger9.c3', 'How many seats did the Nazis win in March 1933?', ['288', '230', '107'], 0, 'Still short of a majority.', 'enabling'),
  Q('ger9.c4', 'Who carried out the Night of the Long Knives?', ['The SS', 'The SA', 'The army'], 0, 'On Hitler\'s orders.', 'long-knives'),
  Q('ger9.c5', 'When did Germany become a one-party state?', ['July 1933', 'January 1933', 'August 1934'], 0, 'A law made it so.', 'one-party'),
  Q('ger9.c6', 'Which former Chancellor was killed in June 1934?', ['Schleicher', 'Franz von Papen', 'Heinrich Brüning'], 0, 'Old enemies were murdered too.', 'long-knives'),
  Q('ger9.c7', 'What did the Reichstag Fire decree suspend?', ['Civil rights', 'The army', 'Reparations'], 0, 'Such as free speech.', 'fire'),
  Q('ger9.c8', 'Which posts did Hitler combine as Führer?', ['Chancellor and President', 'President and army chief', 'Chancellor and party treasurer'], 0, 'He did this in August 1934.', 'fuhrer'),
], {exam: 'Explain why Hitler was able to create a dictatorship in the years 1933–34. (12 marks)'}),

lesson(T, 'germany.police-state', 'The police state', ['31 3.2'], [
  ['The SS and SD', 'The SS, led by Heinrich Himmler, began as Hitler\'s bodyguard and became the most powerful organisation in Nazi Germany, running the police and the camps. Its members were chosen for loyalty and "racial purity". The SD, its intelligence service led by Reinhard Heydrich, gathered information on opponents.'],
  ['The Gestapo', 'The Gestapo, the secret state police set up in 1933, could arrest and hold people without trial. It relied heavily on informers: neighbours, colleagues and Nazi "block wardens" reported suspicious behaviour. Historians have argued that fear of the Gestapo was greater than its actual numbers, because many Germans informed on each other.'],
  ['Concentration camps and the courts', 'The first concentration camp opened at Dachau in March 1933, holding communists, socialists, trade unionists and later Jews, Roma, homosexuals and others. Judges had to join a Nazi lawyers\' association and were expected to rule in the Nazis\' interests. A People\'s Court, set up in 1934, tried cases of treason, often with no proper defence.'],
  ['The Churches', 'In 1933 Hitler signed a Concordat with the Pope: the Catholic Church would stay out of politics in return for keeping its schools and freedom of worship. The Nazis broke the agreement within a few years. Protestants were pushed to join a Nazi-controlled Reich Church led by Reich Bishop Ludwig Müller; those who refused, led by Pastor Martin Niemöller, formed the Confessing Church.'],
], view.factors('Methods of control', [
  ['Terror', 'the SS, Gestapo and concentration camps'],
  ['Surveillance', 'the SD and a network of informers and block wardens'],
  ['The law', 'judges loyal to the Nazis; the People\'s Court'],
  ['Religion', 'the Concordat; the Reich Church'],
]), [
  view.timeline('The police state', [
    ['Mar 1933', 'Dachau concentration camp opens'],
    ['Apr 1933', 'The Gestapo is set up'],
    ['Jul 1933', 'The Concordat with the Pope'],
    ['1934', 'The People\'s Court set up; the Confessing Church formed'],
    ['1936', 'Himmler becomes head of all German police'],
    ['1937', 'Niemöller arrested'],
  ]),
  view.people('People', [
    ['Heinrich Himmler', 'Leader of the SS and later all police'],
    ['Reinhard Heydrich', 'Head of the SD'],
    ['Ludwig Müller', 'Reich Bishop of the Nazi-controlled Protestant Church'],
    ['Martin Niemöller', 'Pastor who led Protestant opposition'],
  ]),
  view.source('A source type: a Gestapo file', 'A Gestapo record of a report from a neighbour accusing a man of telling jokes about Hitler.', 'Useful evidence of how informers helped the Gestapo; it records an accusation, not whether it was true.'),
], [
  ['Why did the Gestapo rely so much on informers?', ['It had relatively few officers, so it needed ordinary people to report others', 'Informers were the only people allowed to make arrests in Nazi Germany', 'The SS had banned the Gestapo from gathering information itself'], 0, 'Ordinary Germans helped enforce control.'],
  ['What did the Concordat promise the Catholic Church?', ['It could keep its schools and freedom of worship if it stayed out of politics', 'It could choose the members of the Reichstag in Catholic areas of Germany', 'It would become the only legal Church and take over Protestant churches'], 0, 'The Nazis later broke these promises.'],
  ['Exam skill · Interpretations. One interpretation stresses Gestapo terror; another stresses that many Germans informed on each other. Which best explains why they differ?', ['They use different evidence: one focuses on the police and camps, the other on Gestapo files showing informers.', 'The first historian was writing only about Italy, while the second was writing about Germany.', 'One interpretation was written by the Gestapo itself and the other by the Confessing Church.'], 0, 'Different evidence can support different views.'],
  ['Why did the Confessing Church form?', ['Protestants refused to join the Nazi-controlled Reich Church', 'The Pope ordered Catholics to leave the Concordat in 1933', 'The Nazis asked Niemöller to run the Reich Church for them'], 0, 'It was a form of religious opposition.'],
], [
  Q('ger10.p1', 'Who led the SS?', ['Heinrich Himmler', 'Ernst Röhm', 'Joseph Goebbels'], 0, 'He later controlled all police.', 'ss'),
  Q('ger10.p2', 'What was the Gestapo?', ['The secret state police', 'The Nazi youth group', 'The Labour Front'], 0, 'It was set up in 1933.', 'gestapo'),
  Q('ger10.p3', 'Where was the first concentration camp?', ['Dachau', 'Auschwitz', 'Landsberg'], 0, 'It opened in March 1933.', 'camps'),
  Q('ger10.p4', 'Who led the Confessing Church?', ['Martin Niemöller', 'Ludwig Müller', 'Clemens von Galen'], 0, 'Müller led the Reich Church.', 'churches'),
  Q('ger10.p5', 'When was the Concordat signed?', ['1933', '1938', '1929'], 0, 'With Pope Pius XI.', 'churches'),
], [
  Q('ger10.c1', 'Who led the SD?', ['Reinhard Heydrich', 'Heinrich Himmler', 'Hermann Göring'], 0, 'The SS intelligence service.', 'ss'),
  Q('ger10.c2', 'Who reported on neighbours for the Nazis?', ['Block wardens and informers', 'Only senior SS officers', 'Foreign journalists in Berlin'], 0, 'Surveillance was everywhere.', 'gestapo'),
  Q('ger10.c3', 'What did the People\'s Court try?', ['Cases of treason', 'Traffic offences', 'Church disputes'], 0, 'It did so from 1934.', 'courts'),
  Q('ger10.c4', 'Who was first held in the camps?', ['Political opponents', 'Foreign tourists and visitors', 'Soldiers who had deserted'], 0, 'Communists and socialists.', 'camps'),
  Q('ger10.c5', 'What did judges have to join?', ['A Nazi lawyers\' association', 'The Confessing Church', 'The SA stormtroopers'], 0, 'To keep their posts.', 'courts'),
  Q('ger10.c6', 'Did the Nazis keep the Concordat?', ['No, they broke it', 'Yes, fully', 'It was never signed'], 0, 'Catholic schools and groups were attacked.', 'churches'),
  Q('ger10.c7', 'Who was the Reich Bishop?', ['Ludwig Müller', 'Martin Niemöller', 'Pope Pius XI'], 0, 'Of the Nazi-run Protestant Church.', 'churches'),
  Q('ger10.c8', 'What could the Gestapo do?', ['Arrest and hold people without trial', 'Pass new laws without Hitler', 'Elect judges to the People\'s Court'], 0, 'No legal limits.', 'gestapo'),
], {exam: 'Explain why the Nazis were able to control Germany through a police state in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.propaganda', 'Propaganda and culture', ['31 3.3'], [
  ['Goebbels and the Ministry of Propaganda', 'In March 1933 Joseph Goebbels became head of the new Ministry of Popular Enlightenment and Propaganda. Its aim was to make Germans believe in Nazi ideas and in Hitler, and to control what they read, heard and saw.'],
  ['Media and rallies', 'Newspapers that opposed the Nazis were closed, and the rest were told what to print. The Nazis sold cheap radios, the "People\'s Receiver", and put loudspeakers in streets and workplaces so Hitler\'s speeches reached everyone. Huge annual rallies at Nuremberg, with marching, music and floodlights, showed Nazi power and unity.'],
  ['Sport and the 1936 Olympics', 'Berlin hosted the 1936 Olympic Games, which the Nazis used to show the world a modern, successful Germany. Anti-Jewish signs were temporarily removed. Germany won the most medals, but the African-American athlete Jesse Owens won four gold medals, undermining Nazi racial claims.'],
  ['Culture and the arts', 'The Reich Chamber of Culture (1933) controlled artists, writers and musicians, who had to be members to work. Books by Jewish and anti-Nazi authors were publicly burned in May 1933. Modern art was condemned as "degenerate" and mocked in a 1937 exhibition. Architecture, led by Albert Speer, favoured huge classical buildings, and films such as Leni Riefenstahl\'s Triumph of the Will (1935) glorified Hitler.'],
], view.factors('How effective was propaganda?', [
  ['Effective', 'reached almost everyone through radio, rallies and controlled newspapers'],
  ['Effective', 'built on existing beliefs: anger at Versailles, fear of communism'],
  ['Less effective', 'many Germans grew bored with it; it did not change everyone\'s views'],
  ['Undermined', 'events such as Jesse Owens\'s success at the 1936 Olympics'],
]), [
  view.timeline('Propaganda and culture', [
    ['Mar 1933', 'The Ministry of Propaganda set up'],
    ['May 1933', 'Book burnings across Germany'],
    ['Sept 1933', 'The Reich Chamber of Culture'],
    ['1934', 'The Nuremberg Rally filmed for Triumph of the Will'],
    ['Aug 1936', 'The Berlin Olympics'],
    ['1937', 'The "degenerate art" exhibition'],
  ]),
  view.people('People', [
    ['Joseph Goebbels', 'Minister of Propaganda'],
    ['Leni Riefenstahl', 'Film director of Triumph of the Will'],
    ['Albert Speer', 'Hitler\'s architect'],
    ['Jesse Owens', 'Won four gold medals in 1936'],
  ]),
  view.source('A source type: a propaganda poster for the People\'s Receiver', 'A poster showing crowds gathered round a giant radio, telling Germans that all of them could hear the Führer.', 'Useful for how the Nazis wanted radio to unite the nation; it is propaganda and shows the aim, not the effect.'),
], [
  ['Why did the Nazis sell cheap radios?', ['So Hitler\'s speeches and Nazi messages could reach every home', 'So Germans could listen to jazz music from Britain and the USA', 'So people could hear foreign news about the Nazi government'], 0, 'Radio spread propaganda widely.'],
  ['How did the Nazis use the 1936 Olympics?', ['To show the world a modern, successful and united Germany', 'To announce that Jewish athletes would lead the German team', 'To prove that Germany could win every event without exception'], 0, 'It was a propaganda event.'],
  ['Exam skill · Inference. A source is a photograph of a 1937 exhibition where modern paintings hang crookedly beside mocking labels. What can you infer?', ['The Nazis wanted to turn the public against modern art.', 'The photograph shows paintings hanging on the walls of a building.', 'The Nazis admired modern art and wanted more Germans to paint it.'], 0, 'An inference draws a conclusion from the detail.'],
  ['What did the Reich Chamber of Culture do?', ['Controlled artists, writers and musicians, who needed membership to work', 'Paid every German family to visit an art gallery once a month', 'Decided which athletes could take part in the 1936 Olympic Games'], 0, 'Culture was brought under Nazi control.'],
], [
  Q('ger11.p1', 'Who was Minister of Propaganda?', ['Joseph Goebbels', 'Albert Speer', 'Heinrich Himmler'], 0, 'From March 1933.', 'goebbels'),
  Q('ger11.p2', 'Where were the great annual rallies held?', ['Nuremberg', 'Munich', 'Weimar town'], 0, 'With floodlights and marching.', 'rallies'),
  Q('ger11.p3', 'Who won four gold medals at the 1936 Olympics?', ['Jesse Owens', 'Leni Riefenstahl', 'Max Schmeling'], 0, 'An African-American athlete.', 'olympics'),
  Q('ger11.p4', 'Which film glorified Hitler in 1935?', ['Triumph of the Will', 'Metropolis (1927)', 'The Blue Angel (1930)'], 0, 'By Leni Riefenstahl.', 'culture'),
  Q('ger11.p5', 'When were books publicly burned?', ['May 1933', 'August 1936', 'November 1938'], 0, 'Jewish and anti-Nazi authors.', 'culture'),
], [
  Q('ger11.c1', 'What was the "People\'s Receiver"?', ['A cheap radio', 'A Nazi newspaper', 'A chain of cinemas'], 0, 'Sold to spread propaganda.', 'media'),
  Q('ger11.c2', 'What did the Nazis call modern art?', ['Degenerate', 'Heroic', 'Classical'], 0, 'Mocked in a 1937 exhibition.', 'culture'),
  Q('ger11.c3', 'Who was Hitler\'s architect?', ['Albert Speer', 'Walter Gropius', 'Fritz Lang'], 0, 'He designed huge buildings.', 'culture'),
  Q('ger11.c4', 'What happened to anti-Jewish signs during the Olympics?', ['They were temporarily removed', 'They were doubled in number', 'They were made larger and permanent'], 0, 'To impress visitors.', 'olympics'),
  Q('ger11.c5', 'What happened to opposition newspapers?', ['They were closed', 'They were funded', 'They were ignored'], 0, 'The rest were controlled.', 'media'),
  Q('ger11.c6', 'Which country won the most medals in 1936?', ['Germany', 'The USA', 'Britain'], 0, 'A propaganda success.', 'olympics'),
  Q('ger11.c7', 'Why were loudspeakers put in streets?', ['So everyone heard Hitler\'s speeches', 'To play American jazz records', 'To warn people of air raids only'], 0, 'Propaganda reached all.', 'media'),
  Q('ger11.c8', 'What style did Nazi architecture favour?', ['Huge classical buildings', 'Simple Bauhaus design', 'Wooden cottages'], 0, 'They were meant to show power.', 'culture'),
], {exam: 'Explain why Nazi propaganda was effective in controlling attitudes in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.opposition', 'Opposition, resistance and conformity', ['31 3.4'], [
  ['Support and conformity', 'Many Germans supported the regime because unemployment fell, order seemed to be restored and Germany looked strong again. Others conformed out of fear, or simply kept quiet. Open opposition was dangerous and rare.'],
  ['Opposition from the Churches', 'Pastor Martin Niemöller, a former U-boat commander, set up the Pastors\' Emergency League in 1933 and helped found the Confessing Church. He criticised Nazi control of the Church and was arrested in 1937, spending 1938–45 in concentration camps. Catholic priests were also arrested, and in 1937 the Pope issued a letter criticising the Nazis, read out in Catholic churches. Bishop Clemens von Galen of Münster spoke out against Nazi policies and, in 1941, against the killing of disabled people.'],
  ['The Swing Youth', 'Mostly middle-class teenagers in cities such as Hamburg, the Swing Youth listened and danced to American jazz and swing, which the Nazis disliked, wore English-style clothes and mocked the Hitler Youth. Their opposition was mostly about culture and lifestyle.'],
  ['The Edelweiss Pirates', 'Mostly working-class teenagers in cities such as Cologne, the Edelweiss Pirates avoided the Hitler Youth, went on their own hikes and sometimes fought Hitler Youth patrols. During the war some went further, sheltering deserters and spreading anti-Nazi leaflets; in 1944 thirteen were publicly hanged in Cologne.'],
], view.factors('How much opposition was there?', [
  ['Limited', 'most Germans supported the regime or conformed'],
  ['Churches', 'individuals such as Niemöller and Galen spoke out; the Churches as institutions mostly did not'],
  ['Young people', 'Swing Youth and Edelweiss Pirates rejected Nazi culture'],
  ['Why limited', 'terror, propaganda, economic recovery and the destruction of other parties and unions'],
]), [
  view.timeline('Opposition', [
    ['1933', 'Niemöller sets up the Pastors\' Emergency League'],
    ['1934', 'The Confessing Church formed'],
    ['1937', 'The Pope\'s letter criticising the Nazis; Niemöller arrested'],
    ['Late 1930s', 'Swing Youth and Edelweiss Pirates groups appear'],
    ['1941', 'Galen speaks out against killing disabled people'],
    ['1944', 'Thirteen Edelweiss Pirates hanged in Cologne'],
  ]),
  view.people('People and groups', [
    ['Martin Niemöller', 'Protestant pastor imprisoned 1937–45'],
    ['Clemens von Galen', 'Catholic Bishop of Münster'],
    ['The Swing Youth', 'Middle-class jazz fans'],
    ['The Edelweiss Pirates', 'Working-class youth groups'],
  ]),
  view.source('A source type: a Gestapo report on young people', 'A Gestapo report from 1938 describing groups of teenagers meeting in parks, singing banned songs and attacking Hitler Youth members.', 'Useful for showing that the authorities saw youth groups as a problem; the Gestapo may have exaggerated the threat.'),
], [
  ['Why was open opposition rare?', ['Terror, propaganda and economic recovery discouraged it', 'There were no laws against criticising the Nazi government', 'Most Germans had already left Germany before 1933'], 0, 'Fear and support both mattered.'],
  ['How did the Swing Youth oppose the Nazis?', ['They rejected Nazi culture by listening to American jazz and mocking the Hitler Youth', 'They formed an armed group that tried to assassinate Hitler in Berlin in 1936', 'They stood as candidates against the Nazis in the 1938 Reichstag elections'], 0, 'Their opposition was mainly cultural.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Opposition from the Churches was limited: brave individuals spoke out, but most clergy conformed.', 'The Churches opposed the Nazis very strongly because they were very religious.', 'There was no opposition from the Churches at all, because the Concordat was signed in 1933.'], 0, 'A supported judgement weighs the extent of opposition.'],
  ['How did the Edelweiss Pirates differ from the Swing Youth?', ['They were mostly working-class and sometimes fought Hitler Youth patrols', 'They were mostly middle-class and organised jazz dances in Hamburg', 'They were adults who ran the Confessing Church in Cologne'], 0, 'Different backgrounds, different methods.'],
], [
  Q('ger12.p1', 'Who founded the Pastors\' Emergency League?', ['Martin Niemöller', 'Clemens von Galen', 'Ludwig Müller'], 0, 'He founded it in 1933.', 'churches-opp'),
  Q('ger12.p2', 'When was Niemöller arrested?', ['1937', '1933', '1944'], 0, 'He was held until 1945.', 'churches-opp'),
  Q('ger12.p3', 'Which music did the Swing Youth love?', ['American jazz and swing', 'Nazi marching songs', 'German classical opera'], 0, 'The Nazis disapproved.', 'swing'),
  Q('ger12.p4', 'In which city were Edelweiss Pirates hanged in 1944?', ['Cologne', 'Hamburg', 'Munich'], 0, 'Thirteen were executed.', 'pirates'),
  Q('ger12.p5', 'Which bishop spoke out against killing disabled people?', ['Clemens von Galen', 'Ludwig Müller', 'Martin Niemöller'], 0, 'He did so in 1941.', 'churches-opp'),
], [
  Q('ger12.c1', 'Where was Galen bishop?', ['Münster', 'Berlin', 'Rome, Italy'], 0, 'A Catholic bishop.', 'churches-opp'),
  Q('ger12.c2', 'What social class were most Swing Youth?', ['Middle class', 'Working class', 'Aristocracy'], 0, 'They could afford records.', 'swing'),
  Q('ger12.c3', 'What did the Edelweiss Pirates avoid?', ['The Hitler Youth', 'All school lessons', 'Hiking in the countryside'], 0, 'They went on their own hikes.', 'pirates'),
  Q('ger12.c4', 'What was Niemöller before he was a pastor?', ['A U-boat commander', 'A history teacher', 'A judge in Berlin'], 0, 'In the First World War.', 'churches-opp'),
  Q('ger12.c5', 'Why did many Germans support the regime?', ['Unemployment fell and order returned', 'They were paid to vote for Hitler', 'Elections were still free and fair'], 0, 'Recovery won support.', 'conformity'),
  Q('ger12.c6', 'What did the Pope do in 1937?', ['Issued a letter criticising the Nazis', 'Asked Catholics to join the Nazi Party', 'Moved the Vatican to Germany'], 0, 'Read out in churches.', 'churches-opp'),
  Q('ger12.c7', 'What social class were most Edelweiss Pirates?', ['Working class', 'Middle class', 'Aristocracy'], 0, 'Unlike the Swing Youth.', 'pirates'),
  Q('ger12.c8', 'How did most Germans respond to the regime?', ['Support or conformity', 'Armed resistance', 'Mass strikes and protest'], 0, 'Open opposition was rare.', 'conformity'),
], {exam: 'Explain why there was little opposition to the Nazi regime in the years 1933–39. (12 marks)'}),
];
