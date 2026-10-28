// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 Option 31: Weimar and Nazi Germany, 1918–39.
// Key topic 2: Hitler's rise to power, 1919–33 (specification 2.1–2.4).
// All teaching text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

export const germanyTopic2 = {id: 'history.germany.kt2', unit: '31', title: 'Hitler\'s rise to power, 1919–33', paper: 'Paper 3 · Modern depth study'};
const T = germanyTopic2.id;

export const germanyLessons2 = [
lesson(T, 'germany.early-nazis', 'The early Nazi Party, 1920–22', ['31 2.1'], [
  ['Hitler\'s early career', 'Adolf Hitler was born in Austria in 1889. He failed to become an artist in Vienna, moved to Munich and served in the German army in the First World War, winning the Iron Cross. Like many soldiers he was bitter about defeat and the Treaty of Versailles.'],
  ['The German Workers\' Party', 'In 1919 the army sent Hitler to observe the small German Workers\' Party (DAP), led by Anton Drexler. He joined it and soon became its most effective speaker. In 1920 it was renamed the National Socialist German Workers\' Party (NSDAP), or Nazi Party.'],
  ['The Twenty-Five Point Programme', 'In February 1920 the party published its programme. It demanded the end of the Treaty of Versailles, the union of all German-speaking people, land for Germans to settle, citizenship only for those of "German blood" (excluding Jews), and some socialist-sounding measures such as sharing company profits.'],
  ['Hitler as leader and the SA', 'In 1921 Hitler became party leader and insisted on total control. He used the swastika symbol, a party newspaper and mass meetings. The SA (stormtroopers), formed in 1921 and led by Ernst Röhm, protected Nazi meetings and attacked opponents, especially communists.'],
], view.factors('Why did the early party grow?', [
  ['Hitler', 'powerful speaker; took control of the party in 1921'],
  ['Ideas', 'attacks on Versailles, the "November Criminals" and Jews appealed to angry nationalists'],
  ['Organisation', 'swastika, newspaper and mass meetings'],
  ['Force', 'the SA protected meetings and intimidated opponents'],
]), [
  view.timeline('The early party', [
    ['1889', 'Hitler born in Austria'],
    ['1919', 'Hitler joins the German Workers\' Party'],
    ['Feb 1920', 'The Twenty-Five Point Programme; the party is renamed the NSDAP'],
    ['1920', 'The party buys a newspaper'],
    ['1921', 'Hitler becomes leader; the SA is formed'],
    ['1922', 'Membership passes about 20,000'],
  ]),
  view.people('People', [
    ['Adolf Hitler', 'Party leader from 1921'],
    ['Anton Drexler', 'Founder of the German Workers\' Party'],
    ['Ernst Röhm', 'Leader of the SA'],
    ['The SA', 'Stormtroopers, also called the Brownshirts'],
  ]),
  view.source('A source type: a 1920s Nazi poster', 'A poster advertising a Nazi meeting, attacking the Treaty of Versailles and blaming Jews for Germany\'s problems.', 'Useful for the party\'s message and targets; it is propaganda designed to attract support.'),
], [
  ['Why did Hitler join the German Workers\' Party?', ['He shared its nationalist ideas and found he could lead it as a speaker', 'The army ordered him to become its leader and pay its debts', 'He was elected to the Reichstag as the party\'s only representative'], 0, 'He was sent to observe and stayed to lead.'],
  ['What was the role of the SA?', ['To protect Nazi meetings and attack opponents', 'To write the Twenty-Five Point Programme', 'To collect taxes for the Weimar government'], 0, 'Violence was part of the party\'s methods.'],
  ['Exam skill · Inference. A source is a party membership card from 1920 numbered in the hundreds. What can you infer?', ['The Nazi Party was still very small in 1920.', 'The membership card was printed on paper in the year 1920.', 'Every German adult had joined the Nazi Party by 1920.'], 0, 'An inference uses a detail to reach a conclusion.'],
  ['Which demand appeared in the Twenty-Five Point Programme?', ['The end of the Treaty of Versailles', 'Equal citizenship for all, including Jews', 'Restoring the Kaiser to the throne'], 0, 'Overturning Versailles was central.'],
], [
  Q('ger5.p1', 'Where was Hitler born?', ['Austria', 'Bavaria', 'Prussia'], 0, 'He was born in 1889.', 'hitler'),
  Q('ger5.p2', 'Who founded the German Workers\' Party?', ['Anton Drexler', 'Ernst Röhm', 'Joseph Goebbels'], 0, 'Hitler joined in 1919.', 'dap'),
  Q('ger5.p3', 'When was the Twenty-Five Point Programme published?', ['February 1920', 'November 1923', 'January 1933'], 0, 'The party was renamed that year.', 'programme'),
  Q('ger5.p4', 'Who led the SA?', ['Ernst Röhm', 'Heinrich Himmler', 'Anton Drexler'], 0, 'From the early 1920s.', 'sa'),
  Q('ger5.p5', 'When did Hitler become party leader?', ['1921', '1919', '1925'], 0, 'He demanded total control.', 'hitler'),
], [
  Q('ger5.c1', 'What does NSDAP stand for in English?', ['National Socialist German Workers\' Party', 'New Social Democratic Army Party', 'National State of Germany and Prussia'], 0, 'This was the Nazi Party.', 'dap'),
  Q('ger5.c2', 'Which award did Hitler win in the war?', ['The Iron Cross', 'The Mother\'s Cross', 'The Victoria Cross'], 0, 'It was awarded for bravery.', 'hitler'),
  Q('ger5.c3', 'Who did the programme exclude from citizenship?', ['Jews', 'Women', 'Soldiers'], 0, 'Only "German blood".', 'programme'),
  Q('ger5.c4', 'Why did the army send Hitler to the DAP?', ['To observe it', 'To lead it', 'To close it down by force'], 0, 'He was an informer.', 'dap'),
  Q('ger5.c5', 'Which symbol did the Nazis adopt?', ['The swastika', 'The hammer and sickle', 'The Imperial eagle only'], 0, 'Used on flags and armbands.', 'hitler'),
  Q('ger5.c6', 'What were the SA also called?', ['Brownshirts', 'Blackshirts', 'Redshirts'], 0, 'From their uniform.', 'sa'),
  Q('ger5.c7', 'Which group did the SA especially attack?', ['Communists', 'The German army', 'Farmers and landowners'], 0, 'Street fights were common.', 'sa'),
  Q('ger5.c8', 'Where did Hitler live when he joined the party?', ['Munich', 'Berlin', 'Vienna'], 0, 'Munich is in Bavaria.', 'hitler'),
], {exam: 'Explain why support for the Nazi Party grew in the years 1920–22. (12 marks)'}),

lesson(T, 'germany.putsch', 'The Munich Putsch and the lean years, 1923–29', ['31 2.2'], [
  ['Reasons for the Putsch', 'In 1923 the Republic was in crisis over the Ruhr and hyperinflation. Hitler was inspired by Mussolini\'s march on Rome in 1922 and believed the Bavarian government, which disliked Berlin, would support him. The SA was restless for action.'],
  ['Events, 8–9 November 1923', 'Hitler and the SA burst into a meeting in a Munich beer hall and forced the Bavarian leaders, Kahr, Lossow and Seisser, to agree to support him, but they later withdrew. Next day Hitler, with General Ludendorff, marched into Munich. Police opened fire, sixteen Nazis were killed and Hitler fled. He was arrested two days later.'],
  ['Consequences', 'At his trial in 1924 Hitler used the courtroom to win national publicity. The judges were sympathetic: he was sentenced to five years but served only nine months in Landsberg prison, where he wrote Mein Kampf, setting out his ideas about race, living space and leadership. He decided to win power through elections instead of force.'],
  ['The lean years', 'The party was banned until 1925. With the economy recovering, support was low: the Nazis won only 12 seats in 1928. Hitler reorganised the party. At the Bamberg Conference (1926) he defeated the more socialist wing led by Gregor Strasser and established that he alone decided policy. The party set up local branches, the Hitler Youth (1926) and the SS (1925), and Joseph Goebbels took charge of propaganda in Berlin.'],
], view.factors('Was the Putsch a failure?', [
  ['Short-term failure', 'the march was crushed; Hitler was arrested; the party was banned'],
  ['Long-term gain', 'national publicity from the trial; Mein Kampf'],
  ['Change in tactics', 'decided to win power legally through elections'],
  ['Reorganisation', 'Bamberg; local branches; Hitler Youth and SS'],
]), [
  view.timeline('1923–29', [
    ['8 Nov 1923', 'The beer hall meeting'],
    ['9 Nov 1923', 'The march is stopped by police'],
    ['Feb–Apr 1924', 'Hitler\'s trial'],
    ['Dec 1924', 'Hitler released from Landsberg'],
    ['Feb 1925', 'The Nazi Party is refounded'],
    ['Feb 1926', 'The Bamberg Conference'],
    ['1928', 'The Nazis win only 12 seats'],
  ]),
  view.people('People', [
    ['Gustav von Kahr', 'Bavarian leader who withdrew his support'],
    ['Erich Ludendorff', 'War hero who marched with Hitler'],
    ['Gregor Strasser', 'Led the socialist wing defeated at Bamberg'],
    ['Joseph Goebbels', 'Took charge of propaganda'],
  ]),
  view.source('A source type: a newspaper report of Hitler\'s trial', 'A national newspaper article describing Hitler\'s long speeches in court and the crowds outside.', 'Useful for the publicity the trial gave him; the paper\'s political views would shape how it reported him.'),
], [
  ['Why did Hitler think the Putsch would succeed?', ['The Republic was in crisis and he expected Bavarian leaders to support him', 'The army in Berlin had already promised to make him Chancellor', 'The French had agreed to leave the Ruhr if he took power in Munich'], 0, 'He misjudged the Bavarian leaders.'],
  ['How did the trial help Hitler?', ['It gave him national publicity, and the judges were sympathetic', 'It found him innocent and made him a member of the government', 'It ordered the Weimar government to hand over power to the Nazis'], 0, 'Defeat turned into publicity.'],
  ['Exam skill · Interpretations. One interpretation calls the Putsch a disaster for Hitler; another says it was a turning point that helped him. Which explains how they differ?', ['The first focuses on the immediate failure; the second on the publicity and change of tactics that followed.', 'The first is about 1923 and the second is about a completely different event in 1933.', 'They do not really differ, because both of them say the Putsch was a complete success for Hitler.'], 0, 'Short-term and long-term views lead to different judgements.'],
  ['Why were the years 1924–29 "lean" for the Nazis?', ['The economy recovered, so fewer people were attracted to extremists', 'The Nazis were banned from standing in elections until 1933', 'Hitler stayed in prison for the whole of the 1920s'], 0, 'Recovery reduced support.'],
], [
  Q('ger6.p1', 'When was the Munich Putsch?', ['8–9 November 1923', '30 January 1933', '13–17 March 1920'], 0, 'The Kapp Putsch was 1920.', 'putsch'),
  Q('ger6.p2', 'Which war hero marched with Hitler?', ['General Ludendorff', 'Paul von Hindenburg', 'Ernst Röhm'], 0, 'He was acquitted at the trial.', 'putsch'),
  Q('ger6.p3', 'How long did Hitler actually serve in prison?', ['Nine months', 'Five years', 'Ten years'], 0, 'Sentenced to five years.', 'consequences'),
  Q('ger6.p4', 'What did Hitler write in prison?', ['Mein Kampf', 'The Twenty-Five Points', 'The Enabling Act'], 0, 'Setting out his ideas.', 'consequences'),
  Q('ger6.p5', 'How many seats did the Nazis win in 1928?', ['12', '107', '230'], 0, 'Support was low.', 'lean-years'),
], [
  Q('ger6.c1', 'Whose march on Rome inspired Hitler?', ['Mussolini\'s', 'Lenin\'s', 'Stresemann\'s'], 0, 'This happened in 1922.', 'putsch'),
  Q('ger6.c2', 'Where was Hitler imprisoned?', ['Landsberg', 'Dachau camp', 'Spandau fortress'], 0, 'Landsberg is in Bavaria.', 'consequences'),
  Q('ger6.c3', 'What did Hitler decide after the Putsch?', ['To win power through elections', 'To leave Germany for Austria', 'To give up politics completely'], 0, 'He chose a legal route.', 'consequences'),
  Q('ger6.c4', 'Whom did Hitler defeat at Bamberg?', ['Gregor Strasser\'s wing', 'The Communist Party', 'General Ludendorff\'s wing'], 0, 'This happened in 1926.', 'lean-years'),
  Q('ger6.c5', 'When was the Hitler Youth founded?', ['1926', '1936', '1919'], 0, 'During reorganisation.', 'lean-years'),
  Q('ger6.c6', 'How many Nazis were killed in the Putsch?', ['Sixteen', 'None', 'Several hundred'], 0, 'Police opened fire.', 'putsch'),
  Q('ger6.c7', 'Who withdrew support during the Putsch?', ['Kahr, Lossow and Seisser', 'Ebert, Stresemann and Rathenau', 'Goebbels, Himmler and Göring'], 0, 'The Bavarian leaders.', 'putsch'),
  Q('ger6.c8', 'When was the Nazi Party refounded?', ['February 1925', 'November 1923', 'July 1932'], 0, 'After the ban ended.', 'lean-years'),
], {exam: 'Explain why the Munich Putsch failed. (12 marks)'}),

lesson(T, 'germany.nazi-support', 'The growth in Nazi support, 1929–32', ['31 2.3'], [
  ['The Great Depression', 'After the Wall Street Crash in October 1929, American banks recalled their loans. German businesses closed and unemployment rose to about six million by 1932. Many families faced hunger and homelessness.'],
  ['The failure of Weimar governments', 'Coalition governments argued over how to respond. From 1930 Chancellor Heinrich Brüning governed with emergency decrees under Article 48, cutting spending and unemployment benefits. He became known as the "hunger chancellor", and many people lost faith in democracy.'],
  ['Why people voted Nazi', 'The Nazis promised work, bread and a strong government, and blamed Versailles, the Republic, communists and Jews. They adapted their message for workers, farmers, the middle classes and young people. Goebbels used posters, rallies, radio and film, and Hitler flew across Germany to speak at many meetings in a single day. The SA showed discipline and strength, and also intimidated opponents.'],
  ['Fear of communism', 'Communist support also grew, winning 100 seats in November 1932. Business leaders, farmers and the middle classes feared a communist revolution, and some industrialists gave money to the Nazis. The Nazis rose from 12 seats in 1928 to 107 in 1930 and 230 in July 1932, making them the largest party.'],
], view.factors('Why did Nazi support grow?', [
  ['Economic crisis', 'unemployment of about six million by 1932'],
  ['Political failure', 'weak coalitions; rule by decree under Brüning'],
  ['Nazi strengths', 'propaganda, Hitler\'s appeal, the SA, promises to every group'],
  ['Fear', 'growing communist support frightened the middle classes and business'],
]), [
  view.timeline('From crash to largest party', [
    ['Oct 1929', 'The Wall Street Crash'],
    ['Mar 1930', 'Brüning becomes Chancellor'],
    ['Sep 1930', 'The Nazis win 107 seats'],
    ['1932', 'Unemployment reaches about six million'],
    ['Jul 1932', 'The Nazis win 230 seats, the largest party'],
    ['Nov 1932', 'Nazi seats fall to 196; Communists win 100'],
  ]),
  view.people('People and groups', [
    ['Heinrich Brüning', 'Chancellor who ruled by decree'],
    ['Joseph Goebbels', 'Ran Nazi propaganda'],
    ['The unemployed', 'Many turned to the Nazis or the Communists'],
    ['Industrialists', 'Some funded the Nazis out of fear of communism'],
  ]),
  view.source('A source type: a 1932 election poster', 'A Nazi poster showing crowds of unemployed workers with the slogan that Hitler was their last hope.', 'Useful for how the Nazis targeted the unemployed; it is propaganda and shows their message, not why each voter chose them.'),
], [
  ['Why did the Wall Street Crash hit Germany so hard?', ['German recovery depended on American loans, which were recalled', 'Germany had to pay all of the USA\'s debts after the Crash', 'The Crash happened in Berlin and destroyed German banks first'], 0, 'The weakness of the 1920s recovery was exposed.'],
  ['Why did fear of communism help the Nazis?', ['Business and the middle classes saw the Nazis as protection against revolution', 'The Communists joined the Nazis and gave them all of their Reichstag seats', 'The Nazis promised to make the Communist leader their Chancellor if they won'], 0, 'Fear drove some voters and funders to the Nazis.'],
  ['Exam skill · Explain why. Which explains why the Depression increased Nazi support?', ['Mass unemployment made people desperate, and the Nazis promised work and a strong government.', 'The Wall Street Crash happened in October 1929 in New York, in the United States.', 'Unemployment in Germany reached about six million people in the year 1932.'], 0, 'Explanation links the cause to the outcome.'],
  ['How did Hitler reach so many voters?', ['He flew around Germany to speak at many rallies in one day', 'He spoke only to small private meetings of party members', 'He refused to appear in public until after he became Chancellor'], 0, 'Modern methods boosted his appeal.'],
], [
  Q('ger7.p1', 'When was the Wall Street Crash?', ['October 1929', 'November 1923', 'January 1933'], 0, 'It began the Depression.', 'depression'),
  Q('ger7.p2', 'Roughly how many Germans were unemployed by 1932?', ['Six million', 'Six hundred thousand', 'Sixty million'], 0, 'About a third of workers.', 'depression'),
  Q('ger7.p3', 'Who was called the "hunger chancellor"?', ['Heinrich Brüning', 'Franz von Papen', 'Gustav Stresemann'], 0, 'For his spending cuts.', 'weimar-failure'),
  Q('ger7.p4', 'How many seats did the Nazis win in July 1932?', ['230', '107', '12'], 0, 'The largest party.', 'votes'),
  Q('ger7.p5', 'Who ran Nazi propaganda?', ['Joseph Goebbels', 'Ernst Röhm', 'Hermann Göring'], 0, 'Using posters, rallies and film.', 'propaganda'),
], [
  Q('ger7.c1', 'How did Brüning govern?', ['By emergency decree under Article 48', 'Through a strong majority in the Reichstag', 'Through orders from the exiled Kaiser'], 0, 'Coalitions had failed.', 'weimar-failure'),
  Q('ger7.c2', 'How many seats did the Nazis win in 1930?', ['107', '230', '12'], 0, 'A big jump from 1928.', 'votes'),
  Q('ger7.c3', 'What did the Nazis promise?', ['Work, bread and strong government', 'A return of the Kaiser to the throne', 'Higher reparation payments to France'], 0, 'Simple, appealing promises.', 'propaganda'),
  Q('ger7.c4', 'Why did some industrialists fund the Nazis?', ['Fear of communism', 'Love of democracy', 'Orders from Brüning'], 0, 'They feared revolution.', 'communism'),
  Q('ger7.c5', 'How many seats did the Communists win in November 1932?', ['100', '12', '230'], 0, 'Their support was rising.', 'communism'),
  Q('ger7.c6', 'What happened to Nazi seats in November 1932?', ['They fell to 196', 'They rose to 300', 'They stayed at 230'], 0, 'Nazi support dipped.', 'votes'),
  Q('ger7.c7', 'What did the SA display to voters?', ['Discipline and strength', 'Weakness and division', 'Support for democracy'], 0, 'And intimidation.', 'propaganda'),
  Q('ger7.c8', 'Why did US banks recall loans?', ['They needed money after the Crash', 'Germany had refused to pay them back', 'Hitler ordered them to do so in 1929'], 0, 'This hit German business.', 'depression'),
], {exam: 'Explain why support for the Nazis grew in the years 1929–32. (12 marks)'}),

lesson(T, 'germany.chancellor', 'How Hitler became Chancellor, 1932–33', ['31 2.4'], [
  ['The presidential election, 1932', 'In March and April 1932 Hitler stood against the elderly President Hindenburg. Hindenburg won the run-off with about 53 per cent, but Hitler won about 37 per cent, showing his national appeal.'],
  ['Papen and the July election', 'In May 1932 Hindenburg dismissed Brüning and appointed Franz von Papen, who had little support in the Reichstag. In the July election the Nazis became the largest party. Hitler demanded to be made Chancellor, but Hindenburg disliked him and refused, offering only the post of Vice-Chancellor, which Hitler rejected.'],
  ['Schleicher', 'Papen lost a vote of no confidence and called another election in November 1932, in which the Nazis lost 34 seats. General Kurt von Schleicher replaced Papen in December, but he also failed to win support and tried to split the Nazis by offering a post to Gregor Strasser.'],
  ['The "backstairs intrigue"', 'Papen, wanting revenge on Schleicher, persuaded Hindenburg that Hitler could be controlled if he were Chancellor with Papen as Vice-Chancellor and only two other Nazis in the cabinet. On 30 January 1933 Hindenburg appointed Hitler Chancellor. Hitler came to power legally, through a deal among a small group of elites, not by winning a majority.'],
], view.factors('Why did Hitler become Chancellor?', [
  ['Nazi strength', 'the largest party in the Reichstag after July 1932'],
  ['Elite intrigue', 'Papen persuaded Hindenburg to appoint Hitler'],
  ['Weak alternatives', 'neither Papen nor Schleicher had Reichstag support'],
  ['Miscalculation', 'conservatives believed they could control Hitler'],
]), [
  view.timeline('1932–33', [
    ['Mar–Apr 1932', 'Presidential election: Hindenburg beats Hitler'],
    ['May 1932', 'Papen replaces Brüning'],
    ['Jul 1932', 'Nazis become the largest party'],
    ['Nov 1932', 'Nazi seats fall in a new election'],
    ['Dec 1932', 'Schleicher becomes Chancellor'],
    ['30 Jan 1933', 'Hitler appointed Chancellor'],
  ]),
  view.people('People', [
    ['Paul von Hindenburg', 'President who appointed Hitler'],
    ['Franz von Papen', 'Chancellor in 1932; became Vice-Chancellor'],
    ['Kurt von Schleicher', 'General and Chancellor, December 1932'],
    ['Gregor Strasser', 'Nazi offered a post by Schleicher'],
  ]),
  view.source('A source type: a diary entry by a politician', 'A private diary entry by a conservative politician, written in January 1933, claiming that Hitler would be "boxed in" by the conservatives.', 'Useful for the conservatives\' belief that they could control Hitler; it shows one person\'s view at the time.'),
], [
  ['Why did Hindenburg at first refuse to make Hitler Chancellor?', ['He disliked and distrusted Hitler', 'The Nazis had no seats in the Reichstag', 'Hitler had asked to be President instead'], 0, 'Hindenburg had to be persuaded.'],
  ['What did Papen believe about Hitler?', ['He could be controlled by conservatives in the cabinet', 'He would quickly lose the next election and leave politics', 'He planned to restore the Kaiser to the throne of Germany'], 0, 'A fatal miscalculation.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Nazi popularity made Hitler a contender, but the intrigue of Papen and Hindenburg actually put him in power.', 'Hitler became Chancellor because he was a very popular and powerful leader of a large political party.', 'Hitler became Chancellor only because he won more than half of all the votes cast in the 1932 elections.'], 0, 'A supported judgement weighs factors.'],
  ['How did the November 1932 election matter?', ['Nazi seats fell, showing that their support might have peaked', 'The Nazis won an overall majority of seats for the first time', 'The Communists won and formed a government with Schleicher'], 0, 'Hitler\'s position looked weaker.'],
], [
  Q('ger8.p1', 'When was Hitler appointed Chancellor?', ['30 January 1933', '9 November 1923', '27 February 1933'], 0, 'The Reichstag Fire was 27 February.', 'appointment'),
  Q('ger8.p2', 'Who won the 1932 presidential election?', ['Hindenburg', 'Adolf Hitler', 'Ernst Thälmann'], 0, 'With about 53 per cent.', 'election'),
  Q('ger8.p3', 'Who became Vice-Chancellor in January 1933?', ['Franz von Papen', 'Kurt von Schleicher', 'Hermann Göring'], 0, 'He planned to control Hitler.', 'appointment'),
  Q('ger8.p4', 'Who became Chancellor in December 1932?', ['Kurt von Schleicher', 'Heinrich Brüning', 'Franz von Papen again'], 0, 'He was an army general.', 'schleicher'),
  Q('ger8.p5', 'How many Nazis were in Hitler\'s first cabinet, including him?', ['Three', 'Ten or more', 'Only Hitler'], 0, 'Conservatives held most posts.', 'appointment'),
], [
  Q('ger8.c1', 'What share did Hitler win in the presidential run-off?', ['About 37 per cent', 'About 90 per cent', 'About 5 per cent'], 0, 'A strong showing.', 'election'),
  Q('ger8.c2', 'Who dismissed Brüning in May 1932?', ['Hindenburg', 'Adolf Hitler', 'Franz von Papen'], 0, 'He was the President.', 'papen'),
  Q('ger8.c3', 'What did Hitler reject in 1932?', ['Becoming Vice-Chancellor', 'Becoming Chancellor', 'Standing for President'], 0, 'He wanted the top job.', 'papen'),
  Q('ger8.c4', 'How many seats did the Nazis lose in November 1932?', ['34', 'None', '200'], 0, 'Down from 230 to 196.', 'schleicher'),
  Q('ger8.c5', 'Whom did Schleicher try to win over?', ['Gregor Strasser', 'Joseph Goebbels', 'Ernst Thälmann'], 0, 'To split the Nazis.', 'schleicher'),
  Q('ger8.c6', 'Why did Papen help Hitler?', ['To get revenge on Schleicher', 'Because he was a Nazi', 'Because Hitler won a majority'], 0, 'And to return to power.', 'appointment'),
  Q('ger8.c7', 'How did Hitler come to power?', ['Legally, by appointment', 'By a successful putsch', 'By winning a majority'], 0, 'Through intrigue.', 'appointment'),
  Q('ger8.c8', 'What did conservatives call their plan?', ['Controlling or "boxing in" Hitler', 'A Putsch led by the army', 'Lebensraum in the east'], 0, 'The plan failed badly.', 'appointment'),
], {exam: 'Explain why Hitler was able to become Chancellor in January 1933. (12 marks)'}),
];
