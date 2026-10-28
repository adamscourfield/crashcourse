// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 Option 31: Weimar and Nazi Germany, 1918–39.
// Key topic 4: Life in Nazi Germany, 1933–39 (specification 4.1–4.4).
// All teaching text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

export const germanyTopic4 = {id: 'history.germany.kt4', unit: '31', title: 'Life in Nazi Germany, 1933–39', paper: 'Paper 3 · Modern depth study'};
const T = germanyTopic4.id;

export const germanyLessons4 = [
lesson(T, 'germany.women', 'Nazi policies towards women', ['31 4.1'], [
  ['Nazi views', 'The Nazis believed a woman\'s role was as a wife and mother, summed up in the slogan "Kinder, Küche, Kirche" (children, kitchen, church). They wanted a rising birth rate to strengthen the nation, and they disliked the independent "new woman" of the 1920s.'],
  ['Marriage and family', 'The Law for the Encouragement of Marriage (1933) gave newly married couples a loan of 1,000 marks, a quarter of which they could keep for each child born. From 1938 mothers with large families received the Mother\'s Cross: bronze, silver or gold depending on the number of children. The Lebensborn programme, set up by the SS in 1935, supported unmarried "racially pure" women to have children.'],
  ['Employment', 'Women were pushed out of professions such as medicine, law and the civil service, and were encouraged to give up work when they married. But from 1937, as rearmament created a labour shortage, the Nazis needed women workers again, and the number of women in work actually rose during the 1930s.'],
  ['Appearance', 'Women were encouraged to look natural: to avoid make-up, trousers, high heels and dyed hair, to wear their hair plainly and to be healthy and sturdy rather than slim. Smoking was discouraged.'],
], view.factors('How successful were the policies?', [
  ['Success', 'marriages and the birth rate rose in the mid-1930s'],
  ['Limit', 'the birth rate stayed below the level of the early 1900s'],
  ['Contradiction', 'rearmament needed women workers after 1937'],
  ['Reaction', 'some women welcomed the honour given to motherhood; others resented losing careers'],
]), [
  view.timeline('Women in Nazi Germany', [
    ['1933', 'Law for the Encouragement of Marriage'],
    ['1933–36', 'Women pushed out of the professions'],
    ['1935', 'The Lebensborn programme'],
    ['1937', 'Labour shortage: women needed back at work'],
    ['1938', 'The Mother\'s Cross introduced'],
  ]),
  view.people('Groups', [
    ['Married couples', 'Received marriage loans'],
    ['Mothers of large families', 'Honoured with the Mother\'s Cross'],
    ['Professional women', 'Doctors, lawyers and civil servants who lost their posts'],
    ['The National Socialist Women\'s League', 'Spread Nazi ideas to women'],
  ]),
  view.source('A source type: a Nazi poster of a family', 'A poster showing a blond mother surrounded by healthy children, with the father in uniform behind them.', 'Useful for the ideal the Nazis promoted; it shows propaganda, not how most families lived.'),
], [
  ['Why did the Nazis want women to have more children?', ['To strengthen the nation with a rising population', 'Because there were too many men in Germany after 1933', 'So that women could take over all jobs in the professions'], 0, 'Population growth served Nazi aims.'],
  ['Why did more women work after 1937?', ['Rearmament created a labour shortage that needed women workers', 'The Nazis decided that women should replace men in the army', 'The marriage loans were cancelled, so women had to earn money'], 0, 'Economic needs contradicted ideology.'],
  ['Exam skill · Interpretations. One interpretation says Nazi policies restricted women; another says many women welcomed them. Which best explains why they differ?', ['One focuses on lost careers and freedoms, the other on women who valued the status given to mothers.', 'One was written about women in the 1920s, and the other about women living in the 1990s.', 'Both of the interpretations say exactly the same thing, but in two slightly different ways.'], 0, 'Different groups of women had different experiences.'],
  ['What was the Mother\'s Cross?', ['An award for mothers of large families', 'A medal for women who worked in factories', 'A badge worn by members of the League of German Maidens'], 0, 'Bronze, silver or gold.'],
], [
  Q('ger13.p1', 'What does "Kinder, Küche, Kirche" mean?', ['Children, kitchen, church', 'Kindness, courage, country', 'Kings, castles, churches'], 0, 'The Nazi ideal for women.', 'views'),
  Q('ger13.p2', 'How much was the marriage loan?', ['1,000 marks', '100 marks', '10,000 marks'], 0, 'A quarter kept per child.', 'marriage'),
  Q('ger13.p3', 'When was the Mother\'s Cross introduced?', ['1938', '1933', '1945'], 0, 'For large families.', 'marriage'),
  Q('ger13.p4', 'Who set up the Lebensborn programme?', ['The SS', 'The Hitler Youth', 'The Labour Front'], 0, 'It was set up in 1935.', 'marriage'),
  Q('ger13.p5', 'From which jobs were women pushed out?', ['Medicine, law and the civil service', 'Farming and work in the home', 'Nursing, childcare and teaching infants'], 0, 'The professions.', 'employment'),
], [
  Q('ger13.c1', 'How much of the loan could couples keep per child?', ['A quarter', 'All of it', 'None of it'], 0, 'So four children cancelled it.', 'marriage'),
  Q('ger13.c2', 'What appearance did the Nazis encourage?', ['Natural, with no make-up', 'Fashionable and slim', 'Short hair and trousers'], 0, 'Healthy and sturdy.', 'appearance'),
  Q('ger13.c3', 'Why did the Nazis need women workers from 1937?', ['A labour shortage from rearmament', 'Men refused to work in factories', 'Women demanded equal rights at work'], 0, 'Ideology gave way to need.', 'employment'),
  Q('ger13.c4', 'Which 1920s image did the Nazis dislike?', ['The independent "new woman"', 'The full-time housewife', 'The farmer\'s hard-working wife'], 0, 'Seen as un-German.', 'views'),
  Q('ger13.c5', 'Which Mother\'s Cross was for the most children?', ['Gold', 'Bronze', 'Silver'], 0, 'For eight or more children.', 'marriage'),
  Q('ger13.c6', 'What happened to marriages in the mid-1930s?', ['They rose', 'They fell sharply', 'They were banned'], 0, 'Marriage loans helped.', 'success'),
  Q('ger13.c7', 'Which habit were women told to avoid?', ['Smoking', 'Cooking', 'Going to church'], 0, 'Seen as unhealthy.', 'appearance'),
  Q('ger13.c8', 'Did the number of women in work rise in the 1930s?', ['Yes, overall', 'No, it fell to zero', 'Women were banned from work'], 0, 'Policy and reality differed.', 'employment'),
], {exam: 'Explain why Nazi policies towards women changed in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.young', 'Nazi policies towards young people', ['31 4.2'], [
  ['Why the young mattered', 'Hitler saw young people as the future of the Reich. The Nazis wanted them to be loyal to Hitler, physically fit, and ready to serve: boys as soldiers and girls as mothers.'],
  ['The Hitler Youth and League of German Maidens', 'Boys joined the German Young People at 10 and the Hitler Youth at 14; girls joined the Young Girls and then the League of German Maidens. Activities included camping, sport, marching, military training for boys and domestic skills for girls, all mixed with Nazi ideas. Other youth groups were banned, and from 1936 membership was expected; a 1939 law made it compulsory. By 1939 most young Germans belonged.'],
  ['The curriculum', 'Schools taught a Nazi version of subjects. History stressed German greatness and the injustice of Versailles; biology taught "race science"; maths problems used military or racial examples. Physical education took up a large share of the timetable. Girls studied domestic science. Textbooks were rewritten and had to be approved.'],
  ['Teachers', 'Jewish and politically unreliable teachers were dismissed. Almost all teachers joined the National Socialist Teachers\' League and attended courses on Nazi ideas; pupils were encouraged to report teachers who criticised the regime. Elite schools, such as the Adolf Hitler Schools, trained future leaders.'],
], view.factors('How successful were policies towards the young?', [
  ['Success', 'most young people joined; many enjoyed the activities and comradeship'],
  ['Success', 'schools and teachers spread Nazi ideas'],
  ['Limit', 'some found the activities boring or too military; attendance fell in the late 1930s'],
  ['Opposition', 'groups such as the Swing Youth and Edelweiss Pirates rejected them'],
]), [
  view.timeline('Youth and education', [
    ['1926', 'The Hitler Youth founded'],
    ['1933', 'Other youth groups banned or absorbed; Jewish teachers dismissed'],
    ['1936', 'Hitler Youth Law: membership expected'],
    ['1937', 'Adolf Hitler Schools open'],
    ['1939', 'Membership made compulsory'],
  ]),
  view.people('People and groups', [
    ['Baldur von Schirach', 'Leader of the Hitler Youth'],
    ['The League of German Maidens', 'The girls\' organisation'],
    ['The National Socialist Teachers\' League', 'Organisation almost all teachers joined'],
    ['Pupils', 'Encouraged to report disloyal teachers'],
  ]),
  view.source('A source type: a school maths textbook', 'A 1930s textbook in which pupils calculate how much the state spends caring for disabled people compared with healthy families.', 'Useful evidence of how racial ideas entered lessons; it shows what was taught, not what pupils believed.'),
], [
  ['Why did the Nazis focus on young people?', ['They saw them as the future and wanted them loyal from an early age', 'Young people were the only Germans allowed to vote after 1933', 'Hitler believed adults could not be influenced by propaganda'], 0, 'Shaping the next generation was key.'],
  ['How did the curriculum spread Nazi ideas?', ['History, biology and even maths were rewritten to reflect Nazi beliefs', 'All subjects except physical education were removed from schools', 'Teachers were free to teach whatever they wanted to their pupils'], 0, 'Indoctrination ran through every subject.'],
  ['Exam skill · Explain why. Which explains why many young people joined the Hitler Youth?', ['It offered exciting activities such as camping and sport, and other youth groups were banned.', 'The Hitler Youth had been founded back in 1926 and was later led by Baldur von Schirach.', 'Boys joined the German Young People at the age of ten and then later joined the Hitler Youth.'], 0, 'Explanation links reasons to the outcome.'],
  ['What happened to Jewish teachers?', ['They were dismissed from their posts', 'They were promoted to run the Adolf Hitler Schools', 'They were made to lead the Hitler Youth'], 0, 'Schools were purged.'],
], [
  Q('ger14.p1', 'At what age did boys join the Hitler Youth itself?', ['14', '10', '18'], 0, 'German Young People came first, at 10.', 'hj'),
  Q('ger14.p2', 'What was the girls\' organisation called?', ['League of German Maidens', 'Strength through Joy', 'The Lebensborn programme'], 0, 'For girls aged 14–18.', 'hj'),
  Q('ger14.p3', 'When did membership become compulsory by law?', ['1939', '1926', '1933'], 0, 'It was expected from 1936.', 'hj'),
  Q('ger14.p4', 'What did biology lessons teach?', ['"Race science"', 'Germ theory only', 'Evolution banned entirely'], 0, 'Nazi racial ideas.', 'curriculum'),
  Q('ger14.p5', 'Who led the Hitler Youth?', ['Baldur von Schirach', 'Heinrich Himmler', 'Robert Ley of the DAF'], 0, 'He led it from 1933.', 'hj'),
], [
  Q('ger14.c1', 'Which teachers\' organisation did most teachers join?', ['National Socialist Teachers\' League', 'The Pastors\' Emergency League', 'The German Labour Front only'], 0, 'Almost all teachers.', 'teachers'),
  Q('ger14.c2', 'What did elite Adolf Hitler Schools do?', ['Trained future leaders', 'Taught American jazz', 'Trained Catholic priests'], 0, 'They opened from 1937.', 'teachers'),
  Q('ger14.c3', 'What did boys\' activities include?', ['Military training', 'Domestic science', 'Ballet'], 0, 'Preparing them as soldiers.', 'hj'),
  Q('ger14.c4', 'What did girls study at school?', ['Domestic science', 'Military tactics', 'Engineering only'], 0, 'Preparing them as mothers.', 'curriculum'),
  Q('ger14.c5', 'What happened to other youth groups?', ['They were banned or absorbed', 'They were given state funding', 'They took over running schools'], 0, 'This happened from 1933.', 'hj'),
  Q('ger14.c6', 'Who were pupils encouraged to report?', ['Teachers who criticised the regime', 'Other pupils\' test grades', 'Foreign spies and nobody else'], 0, 'Teachers felt watched.', 'teachers'),
  Q('ger14.c7', 'Why did some young people lose interest?', ['Activities became boring or too military', 'They were paid too little for attending', 'The groups were all closed down in 1937'], 0, 'Attendance fell late in the 1930s.', 'success'),
  Q('ger14.c8', 'What did history lessons stress?', ['German greatness and the injustice of Versailles', 'The greatness of the British Empire overseas', 'The success of the Weimar democracy in the 1920s'], 0, 'A Nazi version of the past.', 'curriculum'),
], {exam: 'Explain why the Nazis were successful in controlling young people in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.employment', 'Employment and living standards', ['31 4.3'], [
  ['Reducing unemployment', 'When Hitler took power about six million Germans were unemployed; by 1939 the official figure was well under half a million. The National Labour Service (RAD), compulsory for young men from 1935, sent them to work for six months on projects such as draining marshes and planting forests. Public works, including thousands of kilometres of autobahns, created jobs.'],
  ['Rearmament and invisible unemployment', 'Rearmament created many jobs in factories, and conscription from 1935 took hundreds of thousands of men into the army. But the official figures were misleading: women who left work and Jews who were sacked were not counted as unemployed, and men in the RAD were counted as employed. Historians call this "invisible unemployment".'],
  ['The Labour Front and Strength through Joy', 'The German Labour Front (DAF), led by Robert Ley, replaced the banned trade unions. It set wages and hours, and workers could not strike. Strength through Joy (KdF) offered cheap holidays, cruises, theatre trips and sport, and the Volkswagen scheme let workers save for a "people\'s car", though no cars were delivered before the war. Beauty of Labour improved workplaces with canteens, washrooms and better lighting.'],
  ['Did living standards rise?', 'Most people had work, which many valued above all. But working hours rose, real wages grew only slowly and food prices increased, while workers lost the right to strike or bargain. Historians disagree about whether living standards really improved.'],
], view.factors('Were workers better off?', [
  ['Better off', 'jobs for most; KdF holidays; better workplaces through Beauty of Labour'],
  ['Worse off', 'longer hours; no unions or strikes; rising food prices'],
  ['Misleading figures', 'invisible unemployment: women and Jews not counted'],
  ['Hidden purpose', 'rearmament and preparation for war'],
]), [
  view.timeline('Work in Nazi Germany', [
    ['1933', 'About six million unemployed; the Labour Front set up'],
    ['1933', 'Strength through Joy and Beauty of Labour begin'],
    ['1935', 'The RAD made compulsory; conscription introduced'],
    ['1936', 'The Four-Year Plan to prepare the economy for war'],
    ['1938', 'The Volkswagen savings scheme'],
    ['1939', 'Official unemployment well under half a million'],
  ]),
  view.people('People and organisations', [
    ['Robert Ley', 'Leader of the German Labour Front'],
    ['Hjalmar Schacht', 'Economics Minister who funded public works'],
    ['Hermann Göring', 'Ran the Four-Year Plan from 1936'],
    ['The RAD', 'National Labour Service for young men'],
  ]),
  view.source('A source type: official unemployment statistics', 'Government figures showing unemployment falling every year from 1933 to 1939.', 'Useful for the scale of the fall; the Nazis left out groups such as women and Jews, so the figures exaggerate the success.'),
], [
  ['What was "invisible unemployment"?', ['People such as women and Jews who were not counted in the figures', 'Workers who could not be seen because they worked underground', 'Men in the army who were secretly still looking for work'], 0, 'Statistics hid some unemployment.'],
  ['What did Strength through Joy offer workers?', ['Cheap holidays, cruises and leisure activities', 'Higher wages and the right to go on strike', 'Free cars delivered to every worker in 1938'], 0, 'Leisure was used to win support.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Workers gained jobs and leisure, but lost rights and worked longer hours, so the gains were limited.', 'Workers were much better off because Hitler gave absolutely everybody a job after 1933.', 'Workers were no better off at all, because nothing at all changed for them between 1933 and 1939.'], 0, 'A supported judgement weighs both sides.'],
  ['Why did rearmament reduce unemployment?', ['Factories needed workers to make weapons, and conscription took men into the army', 'Rearmament meant that Germany stopped paying any wages to factory workers', 'The army paid unemployed people to stay at home and not look for work'], 0, 'Preparation for war created jobs.'],
], [
  Q('ger15.p1', 'What was the RAD?', ['The National Labour Service', 'The secret state police', 'A youth group for boys under 14'], 0, 'Compulsory for young men from 1935.', 'unemployment'),
  Q('ger15.p2', 'Who led the German Labour Front?', ['Robert Ley', 'Joseph Goebbels', 'Ernst Röhm'], 0, 'It replaced the unions.', 'daf'),
  Q('ger15.p3', 'What does KdF stand for in English?', ['Strength through Joy', 'Beauty of Labour', 'The People\'s Car'], 0, 'Leisure for workers.', 'kdf'),
  Q('ger15.p4', 'When was conscription introduced?', ['1935', '1933', '1939'], 0, 'It took men into the army.', 'rearmament'),
  Q('ger15.p5', 'What were autobahns?', ['Motorways', 'Factories', 'Army camps'], 0, 'Public works projects.', 'unemployment'),
], [
  Q('ger15.c1', 'What did Beauty of Labour improve?', ['Workplaces', 'Wage rates', 'Housing estates'], 0, 'Canteens, washrooms, lighting.', 'kdf'),
  Q('ger15.c2', 'Were any Volkswagens delivered before the war?', ['No', 'Yes, millions', 'Yes, to every saver'], 0, 'Factories turned to war production.', 'kdf'),
  Q('ger15.c3', 'What happened to working hours?', ['They rose', 'They fell', 'They stayed the same'], 0, 'Longer hours for many.', 'living'),
  Q('ger15.c4', 'Could workers strike under the Labour Front?', ['No', 'Yes, freely', 'Only on Sundays'], 0, 'Unions were banned.', 'daf'),
  Q('ger15.c5', 'Who ran the Four-Year Plan?', ['Hermann Göring', 'Robert Ley', 'Albert Speer, the architect'], 0, 'He ran it from 1936.', 'rearmament'),
  Q('ger15.c6', 'Why were official figures misleading?', ['Some groups were left out', 'They were far too high', 'They were kept secret from everyone'], 0, 'Invisible unemployment.', 'invisible'),
  Q('ger15.c7', 'What happened to food prices?', ['They rose', 'They fell sharply', 'Food became free'], 0, 'Living costs grew.', 'living'),
  Q('ger15.c8', 'Roughly how many were unemployed in 1933?', ['Six million', 'Six hundred', 'Sixty million'], 0, 'It fell sharply by 1939.', 'unemployment'),
], {exam: 'Explain why unemployment fell in Germany in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.persecution', 'The persecution of minorities', ['31 4.4'], [
  ['Nazi racial beliefs', 'The Nazis believed in a hierarchy of races, with "Aryans" at the top as a "master race". They claimed others, especially Jews, Slavs and Roma, were inferior, and wanted a "racially pure" national community. These beliefs had no scientific basis.'],
  ['Other minorities', 'A 1933 law allowed the compulsory sterilisation of people with certain disabilities and illnesses; hundreds of thousands were sterilised, and from 1939 disabled people were murdered in the secret "T4" programme. Roma were registered, banned from marrying Germans and sent to camps. Homosexual men were arrested under a harsher 1935 law and many were sent to concentration camps. Slavs were seen as inferior people whose land in the east should be taken.'],
  ['Persecution of Jews, 1933–35', 'On 1 April 1933 the Nazis organised a boycott of Jewish shops and businesses, with SA men standing outside. Jews were dismissed from the civil service and teaching. The Nuremberg Laws of 1935 took away Jews\' German citizenship and banned marriage and relationships between Jews and non-Jewish Germans.'],
  ['Kristallnacht, 1938', 'After a young Jewish man shot a German diplomat in Paris in November 1938, the Nazis organised attacks across Germany on the night of 9–10 November. Synagogues were burned, thousands of Jewish shops were smashed and around 30,000 Jewish men were sent to concentration camps; about 91 Jews were killed. The Jewish community was then fined one billion marks. Afterwards Jews were excluded from schools and businesses, and many tried to emigrate.'],
], view.factors('How persecution increased', [
  ['1933', 'boycott of Jewish shops; dismissal from public jobs; sterilisation law'],
  ['1935', 'the Nuremberg Laws remove citizenship'],
  ['1938', 'Kristallnacht; Jews excluded from economic life'],
  ['1939', 'murder of disabled people begins in the T4 programme'],
]), [
  view.timeline('Persecution', [
    ['1 Apr 1933', 'Boycott of Jewish shops'],
    ['Jul 1933', 'Sterilisation law'],
    ['Sept 1935', 'The Nuremberg Laws'],
    ['1935', 'Harsher law against homosexual men'],
    ['9–10 Nov 1938', 'Kristallnacht'],
    ['1939', 'The T4 programme begins'],
  ]),
  view.people('Groups persecuted', [
    ['Jews', 'Boycotted, stripped of citizenship and attacked'],
    ['Roma', 'Registered and sent to camps'],
    ['Disabled people', 'Sterilised and later murdered'],
    ['Homosexual men', 'Arrested and sent to concentration camps'],
  ]),
  view.source('A source type: a photograph from November 1938', 'A photograph of passers-by walking past the smashed windows of a Jewish-owned shop the morning after Kristallnacht.', 'Useful evidence of the destruction and of onlookers\' behaviour; one image cannot show what the onlookers felt.'),
], [
  ['What did the Nuremberg Laws do?', ['Removed Jews\' citizenship and banned marriage between Jews and other Germans', 'Allowed Jewish people to vote in elections for the first time in Germany', 'Made Jewish shops the only shops allowed to open on Sundays'], 0, 'Discrimination became law.'],
  ['Why is Kristallnacht seen as a turning point?', ['Persecution became open, nationwide violence, followed by exclusion from economic life', 'It was the very first time the Nazis had ever passed a law about Jewish people', 'It ended the persecution of Jews in Germany for the rest of the 1930s decade'], 0, 'Violence escalated sharply.'],
  ['Exam skill · Inference. A source is a 1933 photograph of SA men standing outside a Jewish shop holding placards. What can you infer?', ['The Nazis used intimidation to stop Germans using Jewish businesses.', 'The photograph shows men standing outside a shop in a street in 1933.', 'Most Germans in 1933 were not allowed to buy anything from any shop.'], 0, 'An inference explains what the detail suggests.'],
  ['How were disabled people persecuted?', ['A 1933 law allowed compulsory sterilisation, and murders began in 1939', 'They were given extra pay and holidays by Strength through Joy', 'They were made leaders of the Hitler Youth in every German town'], 0, 'Persecution extended to people the Nazis saw as "unfit".'],
], [
  Q('ger16.p1', 'When was the boycott of Jewish shops?', ['1 April 1933', '9 November 1938', 'September 1935'], 0, 'Kristallnacht was 1938.', 'jews'),
  Q('ger16.p2', 'When were the Nuremberg Laws passed?', ['1935', '1933', '1938'], 0, 'They were passed in September.', 'jews'),
  Q('ger16.p3', 'When was Kristallnacht?', ['9–10 November 1938', '30 June – 1 July 1934', '1 April 1933 (one day)'], 0, 'The "Night of Broken Glass".', 'kristallnacht'),
  Q('ger16.p4', 'What did the Nazis call themselves as a "race"?', ['Aryans', 'Slavs', 'Nordic Roma'], 0, 'A false racial idea.', 'beliefs'),
  Q('ger16.p5', 'What did the 1933 law allow for some disabled people?', ['Compulsory sterilisation', 'Free healthcare for life', 'Extra pensions from the state'], 0, 'Hundreds of thousands were affected.', 'minorities'),
], [
  Q('ger16.c1', 'Roughly how many Jewish men were sent to camps after Kristallnacht?', ['30,000', '300', '3 million'], 0, 'Many were released if they agreed to emigrate.', 'kristallnacht'),
  Q('ger16.c2', 'How much was the Jewish community fined after Kristallnacht?', ['One billion marks', 'One thousand marks', 'Nothing'], 0, 'Victims were made to pay.', 'kristallnacht'),
  Q('ger16.c3', 'What was the T4 programme?', ['The murder of disabled people', 'A scheme for the Hitler Youth', 'A plan for building autobahns'], 0, 'It began in 1939.', 'minorities'),
  Q('ger16.c4', 'How did the Nazis treat Roma?', ['Registered them and sent them to camps', 'Gave them full German citizenship', 'Ignored them and left them in peace'], 0, 'Seen as racially inferior.', 'minorities'),
  Q('ger16.c5', 'What did the Nazis want from Slav lands?', ['Living space for Germans', 'Trade agreements only', 'Nothing; they had no interest'], 0, 'Lebensraum in the east.', 'minorities'),
  Q('ger16.c6', 'What was burned on Kristallnacht?', ['Synagogues', 'The Reichstag', 'Churches'], 0, 'This happened across Germany.', 'kristallnacht'),
  Q('ger16.c7', 'Who stood outside Jewish shops in 1933?', ['SA men', 'Hitler Youth girls', 'Foreign tourists'], 0, 'To intimidate customers.', 'jews'),
  Q('ger16.c8', 'Had Nazi racial ideas any scientific basis?', ['No', 'Yes', 'Only partly'], 0, 'They were false.', 'beliefs'),
], {exam: 'Explain why the persecution of Jews increased in the years 1933–39. (12 marks)'}),
];
