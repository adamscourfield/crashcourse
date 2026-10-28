// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 option 31: Weimar and Nazi Germany, 1918–39.
// Depth lessons for key topic 4, life in Nazi Germany 1933–39 (specification 4.1–4.4). Each follows its overview.
// All text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.germany.kt4';

export const germanyDepth4 = [
lesson(T, 'germany.family-policy', 'Nazi views of women and family policy', ['31 4.1'], [
  ['Why the birth rate mattered', 'In 1933 Germany\'s birth rate was one of the lowest in Europe. The Nazis wanted many more "racially pure" children to make the nation strong and to provide future soldiers and mothers. They saw the family, not the individual, as the foundation of the national community.'],
  ['Rewards for families', 'Marriage loans from 1933 gave couples 1,000 marks, with a quarter of the loan cancelled for each child born. Families received tax relief and child allowances. Mother\'s Day became a national celebration, and from 1938 the Mother\'s Cross was awarded in bronze for four children, silver for six and gold for eight.'],
  ['Pressure and control', 'Birth control clinics were closed and abortion was made harder to obtain, except for women the Nazis considered "unfit", who could be sterilised against their will. A 1938 law allowed a man to divorce his wife if she could not have children. The SS Lebensborn programme supported unmarried mothers judged racially "pure".'],
  ['Results and reactions', 'The birth rate rose from about 15 per 1,000 people in 1933 to about 20 per 1,000 in 1939, partly because of better economic conditions. The Nazi Women\'s League, led by Gertrud Scholtz-Klink, ran courses in childcare and cookery. Many women valued the respect for motherhood; others resented being pushed back into the home.'],
], view.factors('How the Nazis tried to raise the birth rate', [
  ['Rewards', 'marriage loans, allowances, the Mother\'s Cross'],
  ['Pressure', 'birth control and abortion restricted; divorce for infertility'],
  ['Racial policy', 'Lebensborn for the "pure"; sterilisation for the "unfit"'],
  ['Organisation', 'the Nazi Women\'s League and its courses'],
]), [
  view.timeline('Family policy', [
    ['1933', 'Marriage loans introduced'],
    ['1933', 'Sterilisation law passed'],
    ['1934', 'Gertrud Scholtz-Klink leads the women\'s organisations'],
    ['1935', 'Lebensborn set up by the SS'],
    ['1938', 'Mother\'s Cross; new divorce law'],
    ['1939', 'Birth rate about 20 per 1,000'],
  ]),
  view.people('People and groups', [
    ['Gertrud Scholtz-Klink', 'Leader of the Nazi Women\'s League'],
    ['Mothers of large families', 'Received the Mother\'s Cross'],
    ['Young couples', 'Took marriage loans'],
    ['The SS', 'Ran the Lebensborn programme'],
  ]),
  view.source('A source type: a Nazi poster of the ideal family', 'A 1930s poster showing a smiling blond mother surrounded by healthy children, with the father in uniform behind.', 'Useful for the ideal the regime promoted; it shows what the Nazis wanted families to be, not how most families lived.'),
], [
  ['Why did the Nazis want a higher birth rate?', ['To strengthen the nation with future soldiers and mothers', 'Because Germany had too few people to vote in elections', 'Because the League of Nations required more children'], 0, 'Population as national strength.'],
  ['Why is the rising birth rate not proof that Nazi policy worked?', ['Better economic conditions may also explain it', 'The birth rate actually fell after 1933', 'The Nazis did not record birth rates at all'], 0, 'More than one cause.'],
  ['Exam skill · Source utility. How useful is a Nazi poster of the ideal family for an enquiry into women\'s lives?', ['Useful for the regime\'s ideal, but as propaganda it does not show how women really lived.', 'Very useful, because posters always showed exactly how most German families lived.', 'Not useful, because posters were never made about families in Nazi Germany.'], 0, 'Judge content and provenance.'],
  ['How did a marriage loan encourage children?', ['A quarter of the loan was cancelled for each child', 'The loan was paid only to couples with no children', 'The loan had to be paid back twice for each child'], 0, 'A financial incentive.'],
], [
  Q('gd32.p1', 'How much was a marriage loan?', ['1,000 marks', '100 marks', '10,000 marks'], 0, 'With a quarter kept per child.', 'rewards'),
  Q('gd32.p2', 'How many children earned a gold Mother\'s Cross?', ['Eight', 'Four', 'Three'], 0, 'Bronze was for four.', 'rewards'),
  Q('gd32.p3', 'Who led the Nazi Women\'s League?', ['Gertrud Scholtz-Klink', 'Leni Riefenstahl', 'Magda Goebbels'], 0, 'She ran its courses.', 'reactions'),
  Q('gd32.p4', 'Which programme did the SS set up in 1935?', ['Lebensborn', 'Strength through Joy', 'Beauty of Labour'], 0, 'For "racially pure" mothers.', 'pressure'),
  Q('gd32.p5', 'What was the birth rate by 1939?', ['About 20 per 1,000', 'About 2 per 1,000', 'About 50 per 1,000'], 0, 'Up from about 15.', 'reactions'),
], [
  Q('gd32.c1', 'When was the Mother\'s Cross introduced?', ['1938', '1933', '1941'], 0, 'For mothers of large families.', 'rewards'),
  Q('gd32.c2', 'What happened to birth control clinics?', ['They were closed', 'They were expanded', 'They were made free'], 0, 'To raise the birth rate.', 'pressure'),
  Q('gd32.c3', 'What did a 1938 law allow?', ['Divorce for infertility', 'Women in the army', 'Free university places'], 0, 'Children were the aim.', 'pressure'),
  Q('gd32.c4', 'Who could be sterilised against their will?', ['People judged "unfit"', 'Loyal party members', 'Serving soldiers'], 0, 'Under racial policy.', 'pressure'),
  Q('gd32.c5', 'What did the Women\'s League run courses in?', ['Childcare and cookery', 'Flying and driving cars', 'Law and medicine'], 0, 'Training mothers.', 'reactions'),
  Q('gd32.c6', 'Which day became a national celebration?', ['Mother\'s Day', 'Labour Day only', 'Women\'s Suffrage Day'], 0, 'Honouring mothers.', 'rewards'),
  Q('gd32.c7', 'What was the birth rate in 1933?', ['About 15 per 1,000', 'About 40 per 1,000', 'About 1 per 1,000'], 0, 'Among the lowest in Europe.', 'birth-rate'),
  Q('gd32.c8', 'What did the Nazis see as the nation\'s foundation?', ['The family', 'The individual', 'The Reichstag'], 0, 'Not the individual.', 'birth-rate'),
], {exam: 'How useful are a Nazi poster and a marriage loan certificate for an enquiry into Nazi policies towards the family? (8 marks)'}),

lesson(T, 'germany.women-work', 'Women\'s employment and appearance', ['31 4.1'], [
  ['Pushing women out', 'From 1933 married women in the civil service were dismissed. Women doctors and teachers were pushed out of many posts, and from 1936 women could not be judges or lawyers. A limit was placed on the number of women at university. Marriage loans were given only if the wife gave up her job.'],
  ['The labour shortage', 'From 1936 rearmament created a shortage of workers. The marriage loan rule was dropped in 1937, and women were needed in factories and offices again. The number of women in work rose from under five million in 1933 to over seven million in 1939, the opposite of what Nazi ideas suggested.'],
  ['The Duty Year', 'From 1938 young women under 25 who wanted a job had to complete a "duty year" working on a farm or in a household with children. Labour service for young women, voluntary at first, became compulsory in 1939.'],
  ['Appearance', 'The ideal Nazi woman was healthy, sturdy and natural: hair in plaits or a bun, no make-up, no trousers or high heels, and no smoking. Slimming was discouraged because it was thought to harm childbirth. Many city women ignored the advice, and fashion magazines continued to show make-up and modern styles.'],
], view.factors('Women and work: aims and reality', [
  ['Aim', 'women in the home; out of the professions'],
  ['Measures', 'dismissals; university limit; marriage loans tied to leaving work'],
  ['Reality', 'rearmament needed women; numbers in work rose'],
  ['Appearance', 'natural, healthy ideal often ignored in cities'],
]), [
  view.timeline('Women and work', [
    ['1933', 'Married women dismissed from the civil service'],
    ['1934', 'Limit on women at university'],
    ['1936', 'Women barred from being judges and lawyers'],
    ['1937', 'Marriage loan rule on leaving work dropped'],
    ['1938', 'The Duty Year introduced'],
    ['1939', 'Over seven million women in work'],
  ]),
  view.people('Groups', [
    ['Professional women', 'Doctors, lawyers and civil servants pushed out'],
    ['Factory workers', 'Needed again for rearmament'],
    ['Young women under 25', 'Had to complete the Duty Year'],
    ['City women', 'Often ignored advice on appearance'],
  ]),
  view.source('A source type: employment statistics', 'Official figures showing the number of women in paid work in Germany in 1933, 1936 and 1939.', 'Useful for the overall trend, which contradicts Nazi aims; figures alone cannot show women\'s choices or experiences.'),
], [
  ['Why did the number of women in work rise in the 1930s?', ['Rearmament created a shortage of workers', 'The Nazis wanted women to leave the home', 'Men refused to work in the new factories'], 0, 'Economic need beat ideology.'],
  ['Why was slimming discouraged?', ['It was thought to harm childbirth', 'Food was far too cheap to waste', 'It was linked to service in the army'], 0, 'Motherhood came first.'],
  ['Exam skill · Explain why. Which sentence explains why Nazi policy on women\'s work changed?', ['Rearmament created a labour shortage, so the regime needed women workers again.', 'The Duty Year was introduced in 1938 for young women under the age of 25.', 'From 1936 women in Germany could no longer become judges or lawyers.'], 0, 'An explanation links the cause to its effect.'],
  ['What was the Duty Year?', ['A year working on a farm or in a household', 'A year of military training in the army', 'A year studying at a German university'], 0, 'Compulsory for many young women.'],
], [
  Q('gd33.p1', 'Who was dismissed from the civil service in 1933?', ['Married women', 'Unmarried men', 'Army officers'], 0, 'To return them to the home.', 'pushing-out'),
  Q('gd33.p2', 'From when could women not be judges?', ['1936', '1919', '1945'], 0, 'Or lawyers, from 1936.', 'pushing-out'),
  Q('gd33.p3', 'About how many women worked by 1939?', ['Over seven million', 'Under one million', 'About seventy thousand'], 0, 'Up from under five million.', 'shortage'),
  Q('gd33.p4', 'When was the Duty Year introduced?', ['1938', '1933', '1945'], 0, 'For women under 25.', 'duty-year'),
  Q('gd33.p5', 'What were women told to avoid?', ['Make-up and trousers', 'Plaits and buns', 'Healthy country food'], 0, 'The natural ideal.', 'appearance'),
], [
  Q('gd33.c1', 'What created the labour shortage?', ['Rearmament', 'Emigration', 'A plague'], 0, 'It began from 1936.', 'shortage'),
  Q('gd33.c2', 'When was the marriage loan work rule dropped?', ['1937', '1933', '1940'], 0, 'Women were needed.', 'shortage'),
  Q('gd33.c3', 'What was limited at universities?', ['The number of women', 'The number of men', 'The level of fees'], 0, 'A limit set in 1934.', 'pushing-out'),
  Q('gd33.c4', 'When did women\'s labour service become compulsory?', ['1939', '1933', '1935'], 0, 'Voluntary at first.', 'duty-year'),
  Q('gd33.c5', 'How were women told to wear their hair?', ['In plaits or a bun', 'Short and dyed blonde', 'Cut very short'], 0, 'Natural and plain.', 'appearance'),
  Q('gd33.c6', 'Who often ignored advice on appearance?', ['Many city women', 'Party leaders\' wives', 'Women in the SS'], 0, 'Fashion continued.', 'appearance'),
  Q('gd33.c7', 'What was discouraged as harmful to childbirth?', ['Slimming', 'Sport', 'Walking'], 0, 'Sturdiness was the ideal.', 'appearance'),
  Q('gd33.c8', 'Where did the Duty Year take place?', ['A farm or household', 'A weapons factory', 'A university'], 0, 'Helping families.', 'duty-year'),
], {exam: 'Explain why Nazi policies towards women\'s employment changed in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.hitler-youth', 'The Hitler Youth and the League of German Maidens', ['31 4.2'], [
  ['Organisation', 'Baldur von Schirach became Reich Youth Leader in 1933. Boys joined the German Young People at 10 and the Hitler Youth from 14 to 18; girls joined the Young Girls at 10 and the League of German Maidens from 14. Membership rose from about 2.3 million in 1933 to about 7 million by 1939. A 1936 law made the Hitler Youth the official youth organisation, and a 1939 law made membership compulsory.'],
  ['Boys', 'Boys went on camps and hikes, played sport and war games, and learned to read maps, march and shoot. They were taught loyalty to Hitler, Nazi racial ideas and the importance of strength and obedience. The aim was to prepare them to be soldiers.'],
  ['Girls', 'Girls also did sport, camping and hiking, but their training centred on cooking, sewing, childcare and health, to prepare them to be wives and mothers. From 1938 the "Faith and Beauty" society took girls aged 17 to 21. For many girls the League offered a chance to spend time away from home.'],
  ['Appeal and limits', 'Many young people enjoyed the excitement, the uniforms, the trips and the sense of belonging, and liked having status over their parents and teachers. But the activities grew more military and repetitive, leaders were often barely older than members, and attendance fell in the later 1930s. Some members reported their own parents for criticising the regime.'],
], view.factors('Why the Hitler Youth was attractive, and its limits', [
  ['Attractive', 'adventure, camps, sport, uniforms, belonging'],
  ['Purpose', 'boys as soldiers; girls as mothers; loyalty to Hitler'],
  ['Control', 'other youth groups banned; membership compulsory by 1939'],
  ['Limits', 'boredom with drill; young leaders; falling attendance'],
]), [
  view.timeline('The Hitler Youth', [
    ['1926', 'Hitler Youth founded'],
    ['1933', 'Schirach becomes Reich Youth Leader; other groups banned'],
    ['1933', 'About 2.3 million members'],
    ['1936', 'Official state youth organisation'],
    ['1938', 'Faith and Beauty society for older girls'],
    ['1939', 'Membership compulsory; about 7 million members'],
  ]),
  view.people('People and groups', [
    ['Baldur von Schirach', 'Reich Youth Leader'],
    ['German Young People', 'Boys aged 10–14'],
    ['League of German Maidens', 'Girls from 14'],
    ['Youth leaders', 'Often only a little older than members'],
  ]),
  view.source('A source type: a former member\'s memoir', 'A memoir written in the 1980s by a man who joined the Hitler Youth as a boy, describing the excitement of camps and later his doubts.', 'Useful for one person\'s experience; written decades later, it may be shaped by hindsight and the wish to explain.'),
], [
  ['Why did many young people enjoy the Hitler Youth?', ['It offered adventure, uniforms, trips and a sense of belonging', 'It paid every member a weekly wage from the government', 'It allowed members to skip school whenever they liked'], 0, 'Excitement and belonging.'],
  ['Why did attendance fall in the later 1930s?', ['Activities became more military and repetitive', 'The Hitler Youth was banned by the Nazis in 1937', 'All its members left Germany to live abroad'], 0, 'Boredom set in for many.'],
  ['Exam skill · Inference. A photograph shows boys in uniform marching with drums. What can you infer?', ['The Hitler Youth trained boys in military discipline.', 'The photograph was taken at the Nuremberg rally in 1936.', 'The Hitler Youth movement was founded back in 1926.'], 0, 'An inference goes beyond what is shown.'],
  ['What was the main aim of training for girls?', ['To prepare them to be wives and mothers', 'To prepare them to serve as soldiers', 'To prepare them for careers in law'], 0, 'Nazi views of women.'],
], [
  Q('gd34.p1', 'Who became Reich Youth Leader in 1933?', ['Baldur von Schirach', 'Heinrich Himmler', 'Rudolf Hess'], 0, 'He ran the Hitler Youth.', 'organisation'),
  Q('gd34.p2', 'At what age did boys join the Hitler Youth itself?', ['14', '6', '21'], 0, 'After the German Young People.', 'organisation'),
  Q('gd34.p3', 'Which group was for girls from 14?', ['League of German Maidens', 'German Young People', 'German Girls\' Guild'], 0, 'Training for motherhood.', 'girls'),
  Q('gd34.p4', 'When did membership become compulsory?', ['1939', '1926', '1933'], 0, 'It was set by a law of 1939.', 'organisation'),
  Q('gd34.p5', 'What did boys learn to prepare them as soldiers?', ['Map reading and shooting', 'Sewing and cookery classes', 'Painting and playing music'], 0, 'Military training.', 'boys'),
], [
  Q('gd34.c1', 'About how many members were there by 1939?', ['About 7 million', 'About 70,000', 'About 700,000'], 0, 'From 2.3 million in 1933.', 'organisation'),
  Q('gd34.c2', 'What was "Faith and Beauty"?', ['A group for girls aged 17–21', 'A Protestant church group', 'A Nazi propaganda film'], 0, 'It began in 1938.', 'girls'),
  Q('gd34.c3', 'What did girls\' training centre on?', ['Cooking, sewing and childcare', 'Shooting and reading maps', 'Flying gliders and aircraft'], 0, 'Preparing future mothers.', 'girls'),
  Q('gd34.c4', 'What happened to other youth groups?', ['They were banned', 'They were funded', 'They merged with the SPD'], 0, 'No rivals allowed.', 'organisation'),
  Q('gd34.c5', 'Whom did some members report?', ['Their own parents', 'Foreign spies only', 'No one'], 0, 'For criticising the regime.', 'appeal'),
  Q('gd34.c6', 'What was a weakness of the leaders?', ['They were often very young', 'They were all foreigners', 'They were paid too much'], 0, 'Barely older than members.', 'appeal'),
  Q('gd34.c7', 'What status did members enjoy?', ['Status over parents and teachers', 'Seats on the local town council', 'Higher wages than their parents'], 0, 'Part of the appeal.', 'appeal'),
  Q('gd34.c8', 'When did the Hitler Youth become the official youth organisation?', ['1936', '1926', '1945'], 0, 'It was set by a law of 1936.', 'organisation'),
], {exam: 'Give two things you can infer from a photograph of a Hitler Youth camp about the aims of the Hitler Youth. (4 marks)'}),

lesson(T, 'germany.education', 'Nazi education', ['31 4.2'], [
  ['Control of teachers', 'Bernhard Rust became Minister of Education in 1934. Jewish teachers and those seen as politically unreliable were dismissed. By 1937 almost all teachers belonged to the National Socialist Teachers\' League, which ran courses on Nazi ideas. Teachers who failed to give the Hitler salute or criticised the regime risked being reported by pupils.'],
  ['The curriculum', 'Physical education took up a large part of the week, because fitness mattered for soldiers and mothers. History taught the "stab in the back", the injustice of Versailles and German greatness. Biology taught "race science" and the supposed superiority of Aryans. German lessons used Nazi texts, and religious education was reduced.'],
  ['Boys and girls', 'Boys took subjects with military uses, while girls studied domestic science, needlework and childcare. Even maths problems carried messages, such as calculating the cost of caring for disabled people or the angles for bombing. Textbooks were rewritten and had to be approved by the state.'],
  ['Elite schools and universities', 'Elite boarding schools trained future leaders: the National Political Institutes of Education (from 1933) and the Adolf Hitler Schools (from 1937), which stressed fitness, loyalty and leadership. University student numbers fell and Jewish students were pushed out; after Kristallnacht in 1938 Jewish children were expelled from German schools.'],
], view.factors('How schools spread Nazi ideas', [
  ['Teachers', 'dismissals; the Teachers\' League; fear of being reported'],
  ['Curriculum', 'PE, history, race science, rewritten textbooks'],
  ['Separate paths', 'military uses for boys; domestic science for girls'],
  ['Elites', 'Adolf Hitler Schools and National Political Institutes'],
]), [
  view.timeline('Education', [
    ['1933', 'Jewish and unreliable teachers dismissed'],
    ['1933', 'First National Political Institutes of Education'],
    ['1934', 'Bernhard Rust becomes Minister of Education'],
    ['1937', 'Adolf Hitler Schools founded; almost all teachers in the League'],
    ['Nov 1938', 'Jewish children expelled from German schools'],
  ]),
  view.people('People and groups', [
    ['Bernhard Rust', 'Minister of Education'],
    ['National Socialist Teachers\' League', 'Almost all teachers joined'],
    ['Pupils', 'Encouraged to report teachers'],
    ['Adolf Hitler Schools', 'Elite schools for future leaders'],
  ]),
  view.source('A source type: a school textbook exercise', 'A 1930s maths textbook problem asking pupils to work out how many new homes could be built with the money spent caring for disabled people.', 'Useful for showing how Nazi ideas entered ordinary lessons; it shows what was printed, not how teachers used it.'),
], [
  ['Why did physical education take up so much time?', ['Fitness was needed for future soldiers and mothers', 'There were not enough textbooks for other subjects', 'The League of Nations required more sport in schools'], 0, 'Bodies for the nation.'],
  ['Why did teachers conform?', ['They risked dismissal or being reported by pupils', 'They were paid double for teaching Nazi ideas', 'They had all been members of the SS since 1925'], 0, 'Fear and pressure.'],
  ['Exam skill · Explain why. Which sentence explains why the Nazis controlled education?', ['They wanted young people to grow up loyal to Hitler, so schools taught Nazi ideas.', 'Bernhard Rust became the Minister of Education for the whole of Germany in 1934.', 'The Adolf Hitler Schools were elite boarding schools that were founded in 1937.'], 0, 'An explanation links the cause to its effect.'],
  ['What did biology lessons teach?', ['"Race science" and Aryan superiority', 'That all races were completely equal', 'Only the study of plants and animals'], 0, 'Ideology in science.'],
], [
  Q('gd35.p1', 'Who became Minister of Education in 1934?', ['Bernhard Rust', 'Baldur von Schirach', 'Robert Ley'], 0, 'He oversaw schools.', 'teachers'),
  Q('gd35.p2', 'Which league did almost all teachers join?', ['The National Socialist Teachers\' League', 'The Pastors\' Emergency League of 1933', 'The League of German Maidens'], 0, 'Almost all had joined by 1937.', 'teachers'),
  Q('gd35.p3', 'What did girls study?', ['Domestic science', 'Rifle shooting', 'Engineering'], 0, 'To prepare for motherhood.', 'boys-girls'),
  Q('gd35.p4', 'When were the Adolf Hitler Schools founded?', ['1937', '1919', '1945'], 0, 'For future leaders.', 'elites'),
  Q('gd35.p5', 'When were Jewish children expelled from schools?', ['November 1938', 'April 1933', 'September 1935'], 0, 'After Kristallnacht.', 'elites'),
], [
  Q('gd35.c1', 'What did history lessons stress?', ['The injustice of Versailles', 'The success of the Weimar Republic', 'Communist and socialist ideas'], 0, 'And German greatness.', 'curriculum'),
  Q('gd35.c2', 'What was reduced in schools?', ['Religious education', 'Physical education', 'German history'], 0, 'There was less religion.', 'curriculum'),
  Q('gd35.c3', 'Who had to approve textbooks?', ['The state', 'The churches', 'Parents'], 0, 'They were rewritten.', 'boys-girls'),
  Q('gd35.c4', 'What happened to university numbers?', ['They fell', 'They doubled', 'They stayed level'], 0, 'Jewish students pushed out.', 'elites'),
  Q('gd35.c5', 'What did maths problems sometimes calculate?', ['Bombing angles', 'Weimar budgets', 'Church donations'], 0, 'Military messages.', 'boys-girls'),
  Q('gd35.c6', 'Which teachers were dismissed in 1933?', ['Jewish and unreliable ones', 'Long-serving Nazi members', 'Physical education teachers'], 0, 'Purging the profession.', 'teachers'),
  Q('gd35.c7', 'When did the National Political Institutes begin?', ['1933', '1945', '1926'], 0, 'Elite boarding schools.', 'elites'),
  Q('gd35.c8', 'What could pupils do to teachers?', ['Report them', 'Dismiss them', 'Promote them'], 0, 'For criticising the regime.', 'teachers'),
], {exam: 'Explain why the Nazis wanted to control education. (12 marks)'}),

lesson(T, 'germany.unemployment', 'Reducing unemployment', ['31 4.3'], [
  ['The scale of the problem', 'In January 1933 about six million Germans were unemployed. Hitler had promised work and bread, and reducing unemployment was essential to keeping support. Official figures fell to about 2.7 million in 1934, 1.6 million in 1936 and about 300,000 by 1939.'],
  ['Labour service and public works', 'The National Labour Service (RAD) became compulsory for men aged 18 to 25 in 1935. They lived in camps, wore uniforms and drilled, and were paid very little for six months of work on projects such as draining marshes. Public works programmes paid firms to build roads, houses and public buildings; the autobahn programme, led by Fritz Todt, built about 3,000 kilometres of motorway by 1938.'],
  ['Rearmament', 'Military spending rose from about 3.5 billion marks in 1933 to about 26 billion in 1939. Conscription from 1935 took men into an army that grew from 100,000 to about 1.4 million. Factories making weapons, aircraft and ships needed workers, and the 1936 Four-Year Plan, run by Göring, aimed to prepare the economy for war.'],
  ['Invisible unemployment', 'The official figures hid some unemployment. Women who left work and Jews who were dismissed were not counted, men in the RAD and the army counted as employed, and prisoners in camps were not included. Part-time workers were counted as fully employed. Nonetheless, there was a real fall in unemployment.'],
], view.factors('How unemployment fell', [
  ['Labour service', 'the RAD: six months\' work for young men'],
  ['Public works', 'autobahns, housing, public buildings'],
  ['Rearmament', 'weapons factories; conscription from 1935'],
  ['Statistics', 'women, Jews, prisoners and RAD men left out of the figures'],
]), [
  view.timeline('Unemployment', [
    ['Jan 1933', 'About six million unemployed'],
    ['1933', 'Public works and autobahn programme begin'],
    ['1934', 'About 2.7 million unemployed'],
    ['1935', 'RAD compulsory; conscription introduced'],
    ['1936', 'Four-Year Plan; about 1.6 million unemployed'],
    ['1939', 'About 300,000 unemployed'],
  ]),
  view.people('People', [
    ['Fritz Todt', 'Led the autobahn programme'],
    ['Hermann Göring', 'Ran the Four-Year Plan'],
    ['Young men in the RAD', 'Worked in labour camps for low pay'],
    ['Women and Jews', 'Left out of the unemployment figures'],
  ]),
  view.source('A source type: a photograph of autobahn construction', 'A 1934 photograph of hundreds of workers with shovels building an autobahn, taken for a government publication.', 'Useful for showing labour-intensive public works; taken for propaganda, it presents the scheme at its most impressive.'),
], [
  ['Why did rearmament reduce unemployment?', ['Factories needed workers and conscription took men into the army', 'It meant that women had to leave work to join the German army', 'It stopped all of Germany\'s trade with other countries from 1933'], 0, 'War preparation created jobs.'],
  ['Why do historians speak of "invisible unemployment"?', ['Some groups without jobs were left out of the official figures', 'Some workers were invisible to their employers at work', 'Unemployment could not be measured before 1945'], 0, 'Statistics hid some unemployment.'],
  ['Exam skill · Explain why. Which sentence explains why unemployment fell after 1933?', ['Public works, labour service and rearmament created jobs, so the number out of work fell.', 'About six million Germans were unemployed when Hitler came to power in 1933.', 'The autobahn programme was led by Fritz Todt and built about 3,000 kilometres.'], 0, 'An explanation links the cause to its effect.'],
  ['What did the RAD involve?', ['Six months of low-paid work in camps for young men', 'A year of university study for every young person', 'Building weapons in private factories for high pay'], 0, 'Compulsory labour service.'],
], [
  Q('gd36.p1', 'About how many were unemployed in January 1933?', ['Six million', 'Six hundred thousand', 'Sixty million'], 0, 'Hitler promised work.', 'scale'),
  Q('gd36.p2', 'What does RAD stand for in English?', ['National Labour Service', 'Reich Army Division', 'Racial Affairs Department'], 0, 'Compulsory from 1935.', 'rad'),
  Q('gd36.p3', 'Who led the autobahn programme?', ['Fritz Todt', 'Robert Ley', 'Albert Speer'], 0, 'Todt was an engineer.', 'rad'),
  Q('gd36.p4', 'When was conscription introduced?', ['1935', '1933', '1939'], 0, 'Breaking Versailles.', 'rearmament'),
  Q('gd36.p5', 'Who ran the Four-Year Plan?', ['Hermann Göring', 'Joseph Goebbels', 'Heinrich Himmler'], 0, 'The plan began in 1936.', 'rearmament'),
], [
  Q('gd36.c1', 'About how many were unemployed by 1939?', ['300,000', '3 million', '30,000'], 0, 'That was the official figure.', 'scale'),
  Q('gd36.c2', 'About how long was autobahn built by 1938?', ['3,000 km', '300 km', '30,000 km'], 0, 'Built as public works.', 'rad'),
  Q('gd36.c3', 'What did military spending reach by 1939?', ['About 26 billion marks', 'About 2.6 million marks', 'About 260 marks'], 0, 'From 3.5 billion.', 'rearmament'),
  Q('gd36.c4', 'How large did the army grow?', ['About 1.4 million', 'About 14 million', 'About 14,000'], 0, 'It grew from 100,000.', 'rearmament'),
  Q('gd36.c5', 'Who was left out of the figures?', ['Women and Jews', 'Factory owners', 'Farmers'], 0, 'Invisible unemployment.', 'invisible'),
  Q('gd36.c6', 'How long did RAD service last?', ['Six months', 'Six years', 'Six days'], 0, 'For men aged 18 to 25.', 'rad'),
  Q('gd36.c7', 'How were part-time workers counted?', ['As fully employed', 'As unemployed', 'Not counted at all'], 0, 'Flattering figures.', 'invisible'),
  Q('gd36.c8', 'What did the RAD drain?', ['Marshes', 'Lakes for fishing', 'Mines'], 0, 'Land improvement.', 'rad'),
], {exam: 'Explain why unemployment fell in Germany in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.kdf', 'The Labour Front and Strength through Joy', ['31 4.3'], [
  ['The Labour Front', 'The German Labour Front (DAF), set up in May 1933 under Robert Ley, replaced the banned trade unions. With over 20 million members, it represented both workers and employers. Workers paid subscriptions but could not strike or bargain; wages were set by state officials called Trustees of Labour.'],
  ['Strength through Joy', 'Strength through Joy (KdF) offered workers cheap theatre and concert tickets, sports, evening classes, day trips and holidays. By 1938 about ten million people had taken a KdF holiday, though most were short trips within Germany; the cruises to Norway or Madeira went mostly to better-off workers and party officials. A huge holiday resort was begun at Prora on the Baltic coast but never finished.'],
  ['Beauty of Labour', 'Beauty of Labour, run by Albert Speer, encouraged employers to improve workplaces with canteens, washrooms, sports facilities, better lighting and less noise. Workers were often expected to do the improvements themselves, unpaid, outside working hours.'],
  ['The Volkswagen scheme', 'Workers could save five marks a week towards a Volkswagen, the "people\'s car". About 336,000 people paid in, but when war came the factory switched to military vehicles, and no saver received a car. The scheme helped fund the factory with workers\' money.'],
], view.factors('What the Labour Front gave and took', [
  ['Gave', 'cheap leisure, holidays, better workplaces, the promise of a car'],
  ['Took', 'the right to strike and bargain; independent unions'],
  ['Aim', 'win workers\' loyalty and keep them productive'],
  ['Reality', 'many benefits went to the better-off; no cars delivered'],
]), [
  view.timeline('The Labour Front', [
    ['2 May 1933', 'Trade unions abolished'],
    ['May 1933', 'German Labour Front set up'],
    ['Nov 1933', 'Strength through Joy launched'],
    ['1936', 'Prora resort begun'],
    ['1938', 'Volkswagen savings scheme opens'],
    ['1939', 'Car factory switches to war production'],
  ]),
  view.people('People and groups', [
    ['Robert Ley', 'Leader of the Labour Front'],
    ['Albert Speer', 'Ran Beauty of Labour'],
    ['Trustees of Labour', 'State officials who set wages'],
    ['Volkswagen savers', 'About 336,000 workers'],
  ]),
  view.source('A source type: a Strength through Joy brochure', 'A brochure advertising a cheap KdF cruise to Norway, showing smiling workers on the deck of a white ship.', 'Useful for how the regime sold KdF to workers; as advertising it shows the best offer, not what most workers could afford.'),
], [
  ['Why did the Nazis set up Strength through Joy?', ['To win workers\' loyalty after they lost their unions', 'To give workers the right to strike for higher pay', 'To train workers to become army officers'], 0, 'Leisure in place of rights.'],
  ['Why did the Volkswagen scheme fail savers?', ['The factory switched to military vehicles when war came', 'Too few workers wanted a car to make it worthwhile', 'The cars were all sold abroad to earn foreign money'], 0, 'War production came first.'],
  ['Exam skill · Interpretations. One historian argues KdF won workers over; another that it was a distraction. Why might they differ?', ['They weigh workers\' enjoyment against the rights and pay they lost.', 'One historian thinks KdF holidays were held in France and Italy.', 'Strength through Joy was launched in November 1933.'], 0, 'Different emphasis, same evidence.'],
  ['What did Beauty of Labour do?', ['Encouraged better canteens, washrooms and lighting', 'Banned employers from building any new canteens', 'Paid workers extra money for working at weekends'], 0, 'Improving workplaces.'],
], [
  Q('gd37.p1', 'Who led the Labour Front?', ['Robert Ley', 'Fritz Todt', 'Hermann Göring'], 0, 'He led it from May 1933.', 'daf'),
  Q('gd37.p2', 'What does KdF stand for in English?', ['Strength through Joy', 'Beauty of Labour', 'Joy in Working Hard'], 0, 'The leisure organisation.', 'kdf'),
  Q('gd37.p3', 'Who ran Beauty of Labour?', ['Albert Speer', 'Robert Ley', 'Baldur von Schirach'], 0, 'Later Hitler\'s architect.', 'beauty'),
  Q('gd37.p4', 'How much did Volkswagen savers pay each week?', ['Five marks', 'Fifty marks', 'Five hundred marks'], 0, 'Saving towards a car.', 'volkswagen'),
  Q('gd37.p5', 'How many savers received a car?', ['None', 'All of them', 'About half'], 0, 'War production came first.', 'volkswagen'),
], [
  Q('gd37.c1', 'About how many members did the DAF have?', ['Over 20 million', 'About 2 million', 'About 200,000'], 0, 'Workers and employers.', 'daf'),
  Q('gd37.c2', 'Who set wages?', ['Trustees of Labour', 'The trade unions', 'Workers\' own votes'], 0, 'State officials.', 'daf'),
  Q('gd37.c3', 'About how many took a KdF holiday by 1938?', ['Ten million', 'Ten thousand', 'One hundred'], 0, 'Mostly short trips.', 'kdf'),
  Q('gd37.c4', 'Where was the KdF resort built?', ['Prora', 'Dachau', 'Munich'], 0, 'On the Baltic coast.', 'kdf'),
  Q('gd37.c5', 'Who mostly went on KdF cruises?', ['Better-off workers and officials', 'The long-term unemployed', 'Prisoners from the camps'], 0, 'They were expensive.', 'kdf'),
  Q('gd37.c6', 'About how many people saved for a Volkswagen?', ['336,000', '3,360', '33 million'], 0, 'None of them got a car.', 'volkswagen'),
  Q('gd37.c7', 'What could workers not do?', ['Strike', 'Take holidays', 'Join the DAF'], 0, 'Or bargain for pay.', 'daf'),
  Q('gd37.c8', 'Who often did Beauty of Labour improvements?', ['Workers, unpaid', 'Paid architects', 'Army engineers'], 0, 'Outside working hours.', 'beauty'),
], {exam: 'Explain why the Nazis set up the German Labour Front and Strength through Joy. (12 marks)'}),

lesson(T, 'germany.minorities', 'Racial beliefs and the treatment of minorities', ['31 4.4'], [
  ['Racial ideas', 'Nazi ideology rested on the false claim that humans were divided into superior and inferior races. "Aryans" were said to be a master race; Jews were portrayed as the main enemy; Slavs were described as "subhuman" peoples whose land should be taken. The Nazis aimed at a "national community" of the racially "pure" and healthy.'],
  ['People with disabilities', 'The 1933 sterilisation law allowed doctors to sterilise people with conditions such as schizophrenia, epilepsy, blindness and "feeble-mindedness"; about 400,000 people were sterilised by 1945. Propaganda called disabled people "useless eaters". In 1939 the secret T4 programme began killing disabled children and adults.'],
  ['Roma and Sinti', 'About 26,000 Roma and Sinti lived in Germany. They were classed as racially inferior and "asocial", banned from marrying Germans under the Nuremberg Laws, registered and photographed by the police. Before the 1936 Olympics those in Berlin were forced into a camp at Marzahn, and from 1938 many were sent to concentration camps.'],
  ['Homosexual men and "asocials"', 'Gay men were seen as a threat because they did not father children. A harsher 1935 law led to tens of thousands of convictions; many were sent to camps and forced to wear a pink triangle. Beggars, the homeless, alcoholics and the long-term unemployed were labelled "asocial", and about 10,000 were sent to camps in 1938.'],
], view.factors('Who the Nazis persecuted, and why', [
  ['Ideology', 'false racial hierarchy; the "pure" national community'],
  ['Disabled people', 'sterilisation; T4 killings from 1939'],
  ['Roma and Sinti', 'registration; marriage bans; camps'],
  ['Others', 'gay men; "asocials"; Slavs as "subhuman"'],
]), [
  view.timeline('Persecution of minorities', [
    ['1933', 'Sterilisation law'],
    ['1935', 'Nuremberg Laws applied to Roma and Sinti; harsher law against gay men'],
    ['1936', 'Roma in Berlin forced into Marzahn camp'],
    ['1938', 'About 10,000 "asocials" sent to camps'],
    ['1938', 'Roma and Sinti increasingly sent to camps'],
    ['1939', 'T4 killings begin'],
  ]),
  view.people('Groups targeted', [
    ['Disabled people', 'Sterilised and later murdered'],
    ['Roma and Sinti', 'Registered and sent to camps'],
    ['Gay men', 'Convicted and sent to camps'],
    ['"Asocials"', 'Beggars, the homeless, alcoholics'],
  ]),
  view.source('A source type: a Nazi poster about disability', 'A poster showing a healthy worker carrying two disabled men on a beam, claiming the nation paid a large sum each year for each person.', 'Useful for the propaganda used to justify persecution; it presents false figures and dehumanising images to win support.'),
], [
  ['Why did the Nazis persecute gay men?', ['They saw them as a threat to the birth rate and the national community', 'Gay men had formed a political party that won many seats in 1933', 'The Treaty of Versailles required the German government to do so'], 0, 'Ideology about the nation.'],
  ['Why was propaganda used against disabled people?', ['To win public acceptance of sterilisation and killing', 'To raise money to build new and better hospitals for them', 'To encourage more families to care for them at home'], 0, 'Preparing opinion.'],
  ['Exam skill · Explain why. Which sentence explains why the Nazis persecuted minorities?', ['Their racial ideas held that some groups threatened a "pure" community, so these groups were removed.', 'The sterilisation law was passed in 1933 and affected about 400,000 people by 1945.', 'Before the 1936 Olympics, Roma living in Berlin were forced into a camp at Marzahn.'], 0, 'An explanation links the cause to its effect.'],
  ['What was the T4 programme?', ['The secret killing of disabled people from 1939', 'A plan to build new motorways right across Germany', 'A scheme to give cheap holidays to German workers'], 0, 'Murder began in 1939.'],
], [
  Q('gd38.p1', 'When was the sterilisation law passed?', ['1933', '1939', '1945'], 0, 'About 400,000 sterilised by 1945.', 'disabled'),
  Q('gd38.p2', 'When did T4 killings begin?', ['1939', '1933', '1919'], 0, 'The killings were secret.', 'disabled'),
  Q('gd38.p3', 'About how many Roma and Sinti lived in Germany?', ['26,000', '2,600', '2.6 million'], 0, 'A small minority.', 'roma'),
  Q('gd38.p4', 'Where were Berlin\'s Roma forced to live in 1936?', ['Marzahn', 'Dachau', 'Potsdam'], 0, 'Before the Olympics.', 'roma'),
  Q('gd38.p5', 'Which badge were gay men forced to wear in camps?', ['A pink triangle', 'A yellow star', 'A red triangle'], 0, 'It marked them in the camps.', 'others'),
], [
  Q('gd38.c1', 'Whom did the Nazis call "subhuman"?', ['Slavs', 'Aryans', 'Italians'], 0, 'Their land was to be taken.', 'ideas'),
  Q('gd38.c2', 'About how many "asocials" were sent to camps in 1938?', ['10,000', '100', '1 million'], 0, 'Beggars and the homeless.', 'others'),
  Q('gd38.c3', 'What did propaganda call disabled people?', ['"Useless eaters"', '"National heroes"', '"Equal citizens"'], 0, 'Dehumanising language.', 'disabled'),
  Q('gd38.c4', 'When was the law against gay men made harsher?', ['1935', '1919', '1945'], 0, 'Tens of thousands convicted.', 'others'),
  Q('gd38.c5', 'Which law banned Roma marrying Germans?', ['The Nuremberg Laws', 'The Enabling Act', 'The Concordat'], 0, 'Applied to them in 1935.', 'roma'),
  Q('gd38.c6', 'What did the Nazis call the "master race"?', ['Aryans', 'Slavs', 'Latins'], 0, 'It was a false claim.', 'ideas'),
  Q('gd38.c7', 'Did Nazi racial ideas have a scientific basis?', ['No', 'Yes', 'Partly'], 0, 'They were false.', 'ideas'),
  Q('gd38.c8', 'Who were labelled "asocial"?', ['Beggars and the homeless', 'Loyal party members', 'Serving army soldiers'], 0, 'Sent to camps in 1938.', 'others'),
], {exam: 'Explain why the Nazis persecuted minorities in Germany in the years 1933–39. (12 marks)'}),

lesson(T, 'germany.jews-1933-35', 'The persecution of Jews, 1933–35', ['31 4.4'], [
  ['Jews in Germany', 'In 1933 about 500,000 Jews lived in Germany, less than one per cent of the population. Most were fully part of German life: many had fought for Germany in the First World War, and Jews worked as doctors, lawyers, teachers, shopkeepers and business owners. Nazi propaganda blamed them falsely for defeat, Versailles and the Depression.'],
  ['The boycott, 1 April 1933', 'The Nazis called a national boycott of Jewish shops, doctors and lawyers. SA men stood outside with signs telling Germans not to buy from Jews, and Stars of David were painted on windows. Many Germans ignored it and some shopped as usual, and the boycott was ended after one day, but it signalled what was to come.'],
  ['Exclusion by law', 'In April 1933 Jews were dismissed from the civil service and a quota limited Jewish pupils in schools and universities. Jews were barred from the Reich Chamber of Culture, from newspapers and, in 1935, from the armed forces. Signs saying Jews were not welcome appeared in towns, parks and swimming pools.'],
  ['The Nuremberg Laws, 1935', 'Announced at the Nuremberg rally in September 1935, the Reich Citizenship Law made Jews "subjects" without citizens\' rights. The Law for the Protection of German Blood and Honour banned marriage and sexual relationships between Jews and non-Jews. A later decree defined a Jew by the number of Jewish grandparents, not by belief. About 80,000 Jews had emigrated by the end of 1935.'],
], view.factors('Stages of persecution, 1933–35', [
  ['Propaganda', 'Jews blamed falsely for Germany\'s problems'],
  ['Boycott', '1 April 1933: SA outside Jewish shops'],
  ['Exclusion', 'civil service, schools, culture, armed forces'],
  ['Nuremberg Laws', 'citizenship removed; marriage banned'],
]), [
  view.timeline('Persecution, 1933–35', [
    ['1 Apr 1933', 'Boycott of Jewish businesses'],
    ['Apr 1933', 'Jews dismissed from the civil service; school quotas'],
    ['Sep 1933', 'Jews barred from the Reich Chamber of Culture'],
    ['May 1935', 'Jews barred from the armed forces'],
    ['15 Sep 1935', 'Nuremberg Laws'],
    ['Nov 1935', 'Decree defines who counts as a Jew'],
  ]),
  view.people('People and groups', [
    ['German Jews', 'About 500,000 in 1933'],
    ['The SA', 'Enforced the boycott'],
    ['Julius Streicher', 'Publisher of the antisemitic paper Der Stürmer'],
    ['Jewish emigrants', 'About 80,000 left by the end of 1935'],
  ]),
  view.source('A source type: a photograph of the 1933 boycott', 'A photograph of SA men standing outside a Jewish-owned shop in Berlin, holding placards telling Germans not to buy there.', 'Useful for how the boycott was enforced; it shows one shop on one day and cannot show how many Germans obeyed it.'),
], [
  ['Why was the April 1933 boycott ended after a day?', ['Many Germans ignored it and it caused economic disruption', 'Hitler had decided to end all persecution of the Jews', 'The League of Nations had ordered Germany to stop it'], 0, 'Limited public support.'],
  ['Why were the Nuremberg Laws so important?', ['They took away Jews\' citizenship and set persecution in law', 'They gave Jews equal rights for the first time in history', 'They ended the persecution of Jews in Germany'], 0, 'Legal exclusion.'],
  ['Exam skill · Inference. A photograph shows a park bench with a sign reserving it for "Aryans only". What can you infer?', ['Jews were being excluded from everyday public life.', 'The photograph was taken in a Berlin park in 1935.', 'The Nuremberg Laws were announced in September 1935.'], 0, 'An inference goes beyond what is shown.'],
  ['How did a 1935 decree define a Jew?', ['By the number of Jewish grandparents', 'By whether a person went to a synagogue', 'By the person\'s own choice of religion'], 0, 'Race, not belief, in Nazi law.'],
], [
  Q('gd39.p1', 'About how many Jews lived in Germany in 1933?', ['About 500,000', 'About 5,000', 'About 5 million'], 0, 'Under one per cent.', 'jews'),
  Q('gd39.p2', 'When was the boycott of Jewish shops?', ['1 April 1933', '9 November 1938', '15 September 1935'], 0, 'Enforced by the SA.', 'boycott'),
  Q('gd39.p3', 'When were the Nuremberg Laws announced?', ['September 1935', 'April 1933', 'November 1938'], 0, 'At the party rally.', 'nuremberg'),
  Q('gd39.p4', 'What did the Reich Citizenship Law make Jews?', ['"Subjects" without rights', 'Full and equal citizens', 'Members of the party'], 0, 'Citizenship removed.', 'nuremberg'),
  Q('gd39.p5', 'Who published Der Stürmer?', ['Julius Streicher', 'Joseph Goebbels', 'Robert Ley'], 0, 'An antisemitic paper.', 'jews'),
], [
  Q('gd39.c1', 'From which service were Jews dismissed in April 1933?', ['The civil service', 'The SS', 'The Hitler Youth'], 0, 'By the civil service law.', 'exclusion'),
  Q('gd39.c2', 'When were Jews barred from the armed forces?', ['May 1935', 'April 1933', 'November 1938'], 0, 'Before the Nuremberg Laws.', 'exclusion'),
  Q('gd39.c3', 'What did the Blood and Honour law ban?', ['Marriage between Jews and non-Jews', 'Jewish worship in synagogues', 'Jewish emigration to Palestine'], 0, 'Part of the Nuremberg Laws.', 'nuremberg'),
  Q('gd39.c4', 'About how many Jews had emigrated by the end of 1935?', ['About 80,000', 'About 8,000', 'About 800,000'], 0, 'Many more left later.', 'nuremberg'),
  Q('gd39.c5', 'What was painted on Jewish shop windows?', ['Stars of David', 'Swastikas only', 'Red crosses'], 0, 'During the boycott.', 'boycott'),
  Q('gd39.c6', 'What limited Jewish pupils?', ['A quota', 'An entrance test', 'A higher fee'], 0, 'In schools and universities.', 'exclusion'),
  Q('gd39.c7', 'How did many Germans react to the boycott?', ['Many ignored it', 'All obeyed it', 'All attacked shops'], 0, 'It lasted one day.', 'boycott'),
  Q('gd39.c8', 'Which organisation barred Jews in 1933?', ['The Reich Chamber of Culture', 'The League of Nations', 'The International Red Cross'], 0, 'They could not work in the arts.', 'exclusion'),
], {exam: 'Give two things you can infer from a photograph of the April 1933 boycott about the treatment of Jews. (4 marks)'}),

lesson(T, 'germany.kristallnacht', 'Kristallnacht and after', ['31 4.4'], [
  ['Growing pressure, 1936–38', 'After a pause around the 1936 Olympics, persecution intensified. Jewish businesses were forced to sell to non-Jews at low prices ("Aryanisation"). In 1938 Jews had to register their property, Jewish passports were stamped with a "J", and Jews had to add "Israel" or "Sara" to their names. In October about 17,000 Polish-born Jews were expelled to the Polish border.'],
  ['The trigger', 'Herschel Grynszpan, a 17-year-old Jew whose parents had been expelled, shot the German diplomat Ernst vom Rath in Paris on 7 November 1938. Vom Rath died on 9 November. That evening Goebbels, speaking to party leaders in Munich, encouraged "spontaneous" revenge; SA and SS men in plain clothes were ordered into action.'],
  ['The night of 9–10 November', 'Across Germany and Austria, hundreds of synagogues were burned and about 7,500 Jewish shops and businesses were smashed and looted, leaving streets covered in broken glass. Officially 91 Jews were killed; many more died later. About 30,000 Jewish men were sent to concentration camps. Police and firefighters were told to protect only non-Jewish property.'],
  ['The aftermath', 'The Jewish community was fined one billion marks, and insurance payments for the damage went to the state. Jews were excluded from economic life, Jewish children were expelled from German schools, and Jews were banned from cinemas and theatres. Many tried to emigrate: about 10,000 children reached Britain on the Kindertransport. Some Germans were privately shocked, but few protested.'],
], view.factors('Kristallnacht: causes and consequences', [
  ['Background', 'Aryanisation; property registration; expulsion of Polish Jews'],
  ['Trigger', 'vom Rath shot by Grynszpan; Goebbels\' speech'],
  ['Violence', 'synagogues burned; 7,500 shops smashed; 91 killed; 30,000 arrested'],
  ['Aftermath', 'one billion mark fine; exclusion from economy and schools; emigration'],
]), [
  view.timeline('1938', [
    ['Apr 1938', 'Jews must register property'],
    ['Oct 1938', 'Passports stamped "J"; Polish Jews expelled'],
    ['7 Nov 1938', 'Vom Rath shot in Paris'],
    ['9–10 Nov 1938', 'Kristallnacht'],
    ['12 Nov 1938', 'One billion mark fine; Jews excluded from economic life'],
    ['15 Nov 1938', 'Jewish children expelled from schools'],
    ['Dec 1938', 'First Kindertransport to Britain'],
  ]),
  view.people('People', [
    ['Herschel Grynszpan', 'Shot vom Rath in Paris'],
    ['Ernst vom Rath', 'German diplomat who died on 9 November'],
    ['Joseph Goebbels', 'Encouraged the attacks'],
    ['Kindertransport children', 'About 10,000 reached Britain'],
  ]),
  view.source('A source type: a British newspaper report, November 1938', 'A British newspaper report describing burned synagogues and looted shops in Berlin the morning after the attacks.', 'Useful for an outside eyewitness view; foreign reporters saw only some places and could not see the planning behind the violence.'),
], [
  ['Why was Kristallnacht not really "spontaneous"?', ['Goebbels encouraged it and SA and SS men were ordered into action', 'It was planned by the Jewish community to win foreign sympathy', 'It was organised in secret by the British government in London'], 0, 'Organised violence.'],
  ['Why was Kristallnacht a turning point?', ['It moved persecution to open violence and full exclusion', 'It ended the persecution of the Jews living in Germany', 'It made Jews full and equal German citizens again'], 0, 'Persecution escalated sharply.'],
  ['Exam skill · Source utility. How useful is a British newspaper report for an enquiry into Kristallnacht?', ['Useful for eyewitness detail of damage, but an outsider could not see how it was organised.', 'Not useful, because British newspapers never reported events in other countries.', 'Completely useful, because the reporter saw every town in Germany that night.'], 0, 'Judge content and provenance.'],
  ['Who paid for the damage?', ['The Jewish community, through a fine', 'The German government in Berlin', 'The private insurance companies'], 0, 'Victims were blamed.'],
], [
  Q('gd40.p1', 'When was Kristallnacht?', ['9–10 November 1938', '1 April 1933', '15 September 1935'], 0, 'The night of broken glass.', 'night'),
  Q('gd40.p2', 'Who shot vom Rath?', ['Herschel Grynszpan', 'Marinus van der Lubbe', 'Julius Streicher'], 0, 'He shot vom Rath in Paris.', 'trigger'),
  Q('gd40.p3', 'About how many Jewish men were sent to camps?', ['30,000', '300', '3 million'], 0, 'After the attacks.', 'night'),
  Q('gd40.p4', 'How large was the fine on Jews?', ['One billion marks', 'One million marks', 'One thousand marks'], 0, 'For the damage done to them.', 'aftermath'),
  Q('gd40.p5', 'About how many children reached Britain on the Kindertransport?', ['10,000', '100', '1 million'], 0, 'From December 1938.', 'aftermath'),
], [
  Q('gd40.c1', 'What was "Aryanisation"?', ['Forcing Jews to sell businesses', 'A national health programme', 'A sports event for the young'], 0, 'They had to sell at low prices.', 'background'),
  Q('gd40.c2', 'What letter was stamped on Jewish passports?', ['J', 'A', 'G'], 0, 'From October 1938.', 'background'),
  Q('gd40.c3', 'Who encouraged revenge in a Munich speech?', ['Joseph Goebbels', 'Heinrich Himmler', 'Robert Ley'], 0, 'He spoke on 9 November.', 'trigger'),
  Q('gd40.c4', 'How many Jews were officially killed?', ['91', '9', '9,100'], 0, 'Many more died later.', 'night'),
  Q('gd40.c5', 'About how many shops were smashed?', ['7,500', '75', '750,000'], 0, 'Glass covered the streets.', 'night'),
  Q('gd40.c6', 'Where did insurance payments go?', ['To the state', 'To Jewish owners', 'To the churches'], 0, 'Not to the victims.', 'aftermath'),
  Q('gd40.c7', 'About how many Polish-born Jews were expelled?', ['17,000', '170', '1.7 million'], 0, 'In October 1938.', 'background'),
  Q('gd40.c8', 'When were Jewish children expelled from schools?', ['15 November 1938', '1 April 1933', '1 September 1939'], 0, 'After Kristallnacht.', 'aftermath'),
], {exam: 'How useful are a British newspaper report and a Nazi newspaper report for an enquiry into Kristallnacht? (8 marks)'}),
];
