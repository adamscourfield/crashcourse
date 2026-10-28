// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 option 31: Weimar and Nazi Germany, 1918–39.
// Depth lessons for key topic 2, Hitler's rise to power 1919–33 (specification 2.1–2.4). Each follows its overview.
// All text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.germany.kt2';

export const germanyDepth2 = [
lesson(T, 'germany.hitler-early', 'Hitler\'s early career', ['31 2.1'], [
  ['Austria and Vienna', 'Hitler was born on 20 April 1889 in Braunau am Inn, Austria, the son of a customs official. He left school at 16 and moved to Vienna, where the Academy of Fine Arts rejected him twice, in 1907 and 1908. He lived in hostels, selling paintings, and took in the nationalist and antisemitic ideas common in the city\'s politics and newspapers.'],
  ['War service', 'Hitler moved to Munich in 1913 and volunteered for the Bavarian army in 1914. He served as a dispatch runner and won the Iron Cross First Class in 1918. In October 1918 he was temporarily blinded by gas, and he learned of Germany\'s defeat in a military hospital. He later said this was when he decided to go into politics.'],
  ['Joining the DAP', 'After the war the army employed Hitler to watch political groups in Munich. In September 1919 he attended a meeting of Anton Drexler\'s small German Workers\' Party (DAP) and joined. His speeches drew bigger crowds, and in February 1920 about 2,000 people heard the party programme announced at a Munich beer hall.'],
  ['Taking control', 'In July 1921 Hitler threatened to resign unless he was given complete control. The party gave way and he became its leader. He insisted on the "leader principle": the party\'s policy was whatever Hitler decided, and members swore loyalty to him personally.'],
], view.factors('What shaped Hitler before 1921', [
  ['Vienna', 'failure as an artist; nationalist and antisemitic ideas'],
  ['The war', 'a sense of purpose; bitterness at defeat'],
  ['The army', 'its job of watching political groups brought him to the DAP'],
  ['Speaking', 'his gift as a speaker made him valuable to the party'],
]), [
  view.timeline('Hitler, 1889–1921', [
    ['1889', 'Born in Braunau am Inn, Austria'],
    ['1907–08', 'Rejected by the Vienna Academy'],
    ['1913', 'Moves to Munich'],
    ['1914', 'Joins the Bavarian army'],
    ['Oct 1918', 'Gassed; in hospital at the armistice'],
    ['Sep 1919', 'Joins the DAP'],
    ['Jul 1921', 'Becomes party leader'],
  ]),
  view.people('People', [
    ['Adolf Hitler', 'Former soldier and failed artist'],
    ['Anton Drexler', 'Founder of the DAP'],
    ['Ernst Röhm', 'Army officer who helped the early party'],
    ['Party members', 'Swore personal loyalty to Hitler'],
  ]),
  view.source('A source type: Hitler\'s later account of his youth', 'The chapters of Mein Kampf (1925) in which Hitler described his years in Vienna and the war.', 'Useful for how Hitler wanted to be seen; written years later to build his image, it is unreliable about the facts of his life.'),
], [
  ['Why did Hitler become important in the DAP so quickly?', ['His speeches drew far larger crowds than the party had before', 'He was the richest member and paid for all the party\'s costs', 'He was a famous war general whom everyone in Munich knew'], 0, 'Speaking was his strength.'],
  ['Why is Mein Kampf a weak source for Hitler\'s early life?', ['It was written later to build his image', 'It was written by his political enemies', 'It was written before he was born'], 0, 'Purpose shapes content.'],
  ['Exam skill · Explain why. Which sentence explains why Hitler became party leader in 1921?', ['He threatened to resign, and the party gave way because it needed his speaking to grow.', 'Hitler joined the German Workers\' Party at a meeting in September 1919.', 'Hitler had been born in Austria in April 1889, the son of a customs official.'], 0, 'An explanation links the cause to its effect.'],
  ['What was the "leader principle"?', ['Party policy was whatever the leader decided', 'Members elected a new leader every single year', 'The party was run by a committee of equals'], 0, 'Hitler took total control.'],
], [
  Q('gd12.p1', 'Where was Hitler born?', ['Braunau am Inn, Austria', 'Munich, in Bavaria', 'Berlin, in Prussia'], 0, 'He was born in April 1889.', 'early-life'),
  Q('gd12.p2', 'Which academy rejected Hitler twice?', ['The Vienna Academy of Fine Arts', 'The Berlin Military Academy', 'The Munich Music School'], 0, 'In 1907 and 1908.', 'early-life'),
  Q('gd12.p3', 'Which medal did Hitler win in 1918?', ['The Iron Cross First Class', 'The Victoria Cross for bravery', 'The French Legion of Honour'], 0, 'As a dispatch runner.', 'war'),
  Q('gd12.p4', 'Who founded the DAP?', ['Anton Drexler', 'Ernst Röhm', 'Gregor Strasser'], 0, 'A small Munich party.', 'dap'),
  Q('gd12.p5', 'When did Hitler become party leader?', ['July 1921', 'September 1919', 'January 1933'], 0, 'After threatening to resign.', 'leader'),
], [
  Q('gd12.c1', 'What was Hitler\'s job in the war?', ['Dispatch runner', 'Fighter pilot', 'Army general'], 0, 'Carrying messages.', 'war'),
  Q('gd12.c2', 'Where was Hitler when he heard of defeat?', ['A military hospital', 'A Vienna hostel', 'The Reichstag building'], 0, 'After a gas attack.', 'war'),
  Q('gd12.c3', 'Why was Hitler at the DAP meeting?', ['The army sent him to watch it', 'He had founded it himself', 'He was invited to lead it'], 0, 'Watching political groups.', 'dap'),
  Q('gd12.c4', 'When did Hitler move to Munich?', ['1913', '1919', '1923'], 0, 'He moved before the war.', 'early-life'),
  Q('gd12.c5', 'About how many heard the programme in 1920?', ['2,000', '200', '200,000'], 0, 'They met in a beer hall.', 'dap'),
  Q('gd12.c6', 'To whom did members swear loyalty?', ['Hitler personally', 'The constitution', 'The Kaiser'], 0, 'The leader principle.', 'leader'),
  Q('gd12.c7', 'Which ideas did Hitler take in at Vienna?', ['Nationalist and antisemitic ideas', 'Communist and revolutionary ideas', 'Liberal and democratic ideas'], 0, 'Common in its politics.', 'early-life'),
  Q('gd12.c8', 'Which army did Hitler join in 1914?', ['The Bavarian army', 'The Austrian army', 'The French army'], 0, 'He joined as a volunteer.', 'war'),
], {exam: 'Explain why Hitler was able to take control of the Nazi Party by 1921. (12 marks)'}),

lesson(T, 'germany.twenty-five-points', 'The Twenty-Five Points and the SA', ['31 2.1'], [
  ['Nationalist points', 'The programme demanded the union of all Germans in one state, the scrapping of the Treaties of Versailles and St Germain, and land and colonies to feed Germany\'s people. These points appealed to nationalists angry at the defeat and the peace.'],
  ['Racial points', 'Only people of "German blood" could be citizens; Jews were explicitly excluded, and non-citizens could be expelled if there was not enough food. These points put antisemitism at the centre of the party from the start.'],
  ['Socialist-sounding points', 'The party promised to share the profits of large companies, nationalise big businesses, abolish income not earned by work, give small traders cheap space in department stores and execute profiteers. These points aimed at workers and small shopkeepers, though Hitler later played them down to win business support.'],
  ['The SA', 'The SA was formed in 1921, at first as the party\'s "gymnastics and sports" section. Its brown-shirted members, many of them ex-soldiers and unemployed young men, guarded Nazi meetings and broke up opponents\' meetings. They gave the party an image of strength and discipline, and drew in men who wanted action and comradeship.'],
], view.factors('Who the early party appealed to', [
  ['Nationalists', 'end Versailles; unite all Germans; land and colonies'],
  ['Antisemites', 'citizenship only for those of "German blood"'],
  ['Workers and small traders', 'profit-sharing; action against big business and profiteers'],
  ['Ex-soldiers and young men', 'the SA: action, uniform, comradeship'],
]), [
  view.timeline('The early party', [
    ['Feb 1920', 'The Twenty-Five Points announced'],
    ['Feb 1920', 'Party renamed NSDAP'],
    ['Dec 1920', 'The party buys a newspaper'],
    ['1921', 'The SA formed'],
    ['Nov 1921', 'SA fights opponents at a Munich meeting'],
    ['1923', 'Party membership reaches tens of thousands'],
  ]),
  view.people('People and groups', [
    ['Adolf Hitler', 'Party leader from 1921'],
    ['Ernst Röhm', 'Organiser of the SA'],
    ['Hermann Göring', 'Led the SA from 1923'],
    ['SA members', 'Many ex-soldiers and unemployed young men'],
  ]),
  view.source('A source type: a Nazi poster from the early 1920s', 'A party poster advertising a mass meeting in Munich with Hitler speaking against Versailles.', 'Useful for the party\'s methods and main message; it shows what the party wanted people to think, not how many came.'),
], [
  ['Why did the programme include socialist-sounding points?', ['To win support from workers and small traders', 'Because Hitler was a communist in the early 1920s', 'Because the Treaty of Versailles required them'], 0, 'It gave the party a broad appeal.'],
  ['Why did the SA attract members?', ['It offered action, uniform and comradeship to ex-soldiers', 'It paid every member a high salary from party funds', 'It promised members jobs in the national government'], 0, 'Belonging and action.'],
  ['Exam skill · Inference. A photograph shows SA men in uniform standing in lines outside a meeting hall. What can you infer?', ['The SA wanted to look disciplined and powerful.', 'The photograph was taken in Munich in 1922.', 'The SA was formed by the Nazi Party in 1921.'], 0, 'An inference goes beyond what is shown.'],
  ['What did the racial points show?', ['That antisemitism was central to the party from the start', 'That the party welcomed people of every background', 'That the party would protect the rights of minorities'], 0, 'Racism was there from the beginning.'],
], [
  Q('gd13.p1', 'When were the Twenty-Five Points announced?', ['February 1920', 'November 1923', 'January 1933'], 0, 'In a Munich beer hall.', 'programme'),
  Q('gd13.p2', 'Which treaty did the programme demand be scrapped?', ['Versailles', 'Locarno', 'Kellogg-Briand'], 0, 'With St Germain.', 'programme'),
  Q('gd13.p3', 'Who was excluded from citizenship?', ['Jews', 'Bavarians', 'Ex-soldiers'], 0, 'Only "German blood".', 'race'),
  Q('gd13.p4', 'When was the SA formed?', ['1921', '1925', '1933'], 0, 'As a sports section.', 'sa'),
  Q('gd13.p5', 'What colour shirts did the SA wear?', ['Brown', 'Black', 'Red'], 0, 'The brownshirts.', 'sa'),
], [
  Q('gd13.c1', 'Which point aimed at workers?', ['Sharing company profits', 'Ending the Versailles treaty', 'Uniting all Germans'], 0, 'Socialist-sounding.', 'socialist'),
  Q('gd13.c2', 'What was promised to small traders?', ['Cheap space in department stores', 'Free farmland in eastern Poland', 'Guaranteed jobs in the army'], 0, 'Against big business.', 'socialist'),
  Q('gd13.c3', 'Who led the SA from 1923?', ['Hermann Göring', 'Heinrich Himmler', 'Joseph Goebbels'], 0, 'A war hero pilot.', 'sa'),
  Q('gd13.c4', 'What did the SA do to opponents\' meetings?', ['Broke them up', 'Protected them', 'Paid for them'], 0, 'Violence and intimidation.', 'sa'),
  Q('gd13.c5', 'Who were many SA members?', ['Ex-soldiers and unemployed men', 'Rich bankers and their sons', 'Priests and church leaders'], 0, 'Looking for action.', 'sa'),
  Q('gd13.c6', 'What did the party demand for its people?', ['Land and colonies', 'Fewer farms', 'Lower taxes only'], 0, 'To feed the people.', 'programme'),
  Q('gd13.c7', 'Which points did Hitler later play down?', ['The socialist-sounding ones', 'The openly racial ones', 'The nationalist ones'], 0, 'To win business support.', 'socialist'),
  Q('gd13.c8', 'What could happen to non-citizens if food ran short?', ['Expulsion', 'Free food', 'Citizenship'], 0, 'Point seven of the programme.', 'race'),
], {exam: 'Give two things you can infer from an early Nazi poster about the appeal of the Nazi Party in the early 1920s. (4 marks)'}),

lesson(T, 'germany.putsch-events', 'The Munich Putsch: causes and events', ['31 2.2'], [
  ['Why 1923?', 'By autumn 1923 the Republic seemed close to collapse. When Stresemann called off passive resistance in the Ruhr in September, nationalists called it surrender. In Bavaria the conservative leader Gustav von Kahr, the army commander Otto von Lossow and the police chief Hans von Seisser talked of marching on Berlin themselves.'],
  ['Hitler\'s calculation', 'Hitler admired Mussolini\'s "march on Rome" of 1922, which had brought the Fascists to power in Italy. He had the SA and allies in other nationalist groups, and the support of the war hero General Ludendorff. He feared that if he waited, Kahr would act without him or his own men would lose patience.'],
  ['8 November: the beer hall', 'On the evening of 8 November 1923, Kahr was speaking to about 3,000 people in a Munich beer hall. Hitler and the SA burst in; Hitler fired a shot into the ceiling and declared a national revolution. At gunpoint he pressed Kahr, Lossow and Seisser to support him. While Hitler was away dealing with a clash elsewhere, Ludendorff let them leave, and they turned against the putsch.'],
  ['9 November: the march', 'Next morning about 2,000 Nazis and supporters marched into central Munich. Armed police blocked their way at the Odeonsplatz and shots were fired: fourteen marchers and four police were killed. With two more Nazis killed at the army headquarters, sixteen putschists died in all. Hitler fled with a dislocated shoulder and was arrested two days later.'],
], view.factors('Why the Putsch happened and why it failed', [
  ['Crisis', 'hyperinflation and the end of passive resistance'],
  ['Example', 'Mussolini\'s march on Rome'],
  ['Failure', 'Kahr, Lossow and Seisser withdrew their support'],
  ['Failure', 'the police and army stayed loyal to the state'],
]), [
  view.timeline('The Munich Putsch', [
    ['Oct 1922', 'Mussolini\'s march on Rome'],
    ['Sep 1923', 'Passive resistance called off'],
    ['8 Nov 1923, evening', 'Hitler seizes the beer hall meeting'],
    ['8 Nov 1923, night', 'Kahr, Lossow and Seisser released'],
    ['9 Nov 1923', 'The march is stopped by police fire'],
    ['11 Nov 1923', 'Hitler arrested'],
  ]),
  view.people('People', [
    ['Gustav von Kahr', 'Bavarian leader taken hostage'],
    ['Otto von Lossow and Hans von Seisser', 'Army and police chiefs in Bavaria'],
    ['General Ludendorff', 'War hero who marched with Hitler'],
    ['The Bavarian police', 'Stopped the march'],
  ]),
  view.source('A source type: a painting made for the Nazi Party', 'A 1930s painting of the march showing heroic marchers facing police fire under a swastika flag.', 'Useful for how the Nazis later celebrated the Putsch; painted for propaganda years later, it is not an accurate record.'),
], [
  ['Why did Hitler think 1923 was the right moment?', ['The Republic was in crisis and Bavaria\'s leaders talked of marching', 'Hitler had already won a majority of seats in the Reichstag', 'The French had agreed to support a Nazi government in Berlin'], 0, 'Crisis and opportunity.'],
  ['Why did the Putsch fail?', ['The Bavarian leaders turned against it and the police opened fire', 'The SA refused to join in and stayed in their barracks', 'Ludendorff ordered the marchers to go home before they set off'], 0, 'No support from the state.'],
  ['Exam skill · Explain why. Which sentence explains why Hitler attempted the Putsch?', ['He hoped to copy Mussolini, believing Bavaria\'s leaders would back him in the crisis.', 'Hitler fired a shot into the ceiling of the crowded beer hall on 8 November 1923.', 'About 2,000 Nazis and their supporters marched into Munich on 9 November 1923.'], 0, 'An explanation links the cause to its effect.'],
  ['What mistake did Ludendorff make?', ['He let Kahr, Lossow and Seisser leave the beer hall', 'He ordered the SA to fire on the police in Munich', 'He told the Berlin government about the plan in advance'], 0, 'A decisive error.'],
], [
  Q('gd14.p1', 'When did the Putsch begin?', ['8 November 1923', '30 January 1933', '9 November 1918'], 0, 'In a Munich beer hall.', 'events'),
  Q('gd14.p2', 'Whose meeting did Hitler seize?', ['Gustav von Kahr\'s', 'Gustav Stresemann\'s', 'Friedrich Ebert\'s'], 0, 'The Bavarian leader.', 'events'),
  Q('gd14.p3', 'Whose example inspired Hitler?', ['Mussolini\'s', 'Lenin\'s', 'Napoleon\'s'], 0, 'The march on Rome.', 'causes'),
  Q('gd14.p4', 'Which war hero marched with Hitler?', ['General Ludendorff', 'General Groener', 'General Schleicher'], 0, 'He was later acquitted.', 'events'),
  Q('gd14.p5', 'Where did police stop the march?', ['The Odeonsplatz', 'The Reichstag', 'The Marienplatz'], 0, 'In central Munich.', 'events'),
], [
  Q('gd14.c1', 'About how many people were in the beer hall?', ['3,000', '300', '30,000'], 0, 'Listening to Kahr.', 'events'),
  Q('gd14.c2', 'Who released the hostages?', ['Ludendorff', 'Hitler', 'Röhm'], 0, 'While Hitler was away.', 'events'),
  Q('gd14.c3', 'How many police were killed?', ['Four', 'Forty', 'None'], 0, 'With fourteen marchers.', 'events'),
  Q('gd14.c4', 'What did nationalists call ending passive resistance?', ['Surrender', 'Victory', 'Revolution'], 0, 'In September 1923.', 'causes'),
  Q('gd14.c5', 'When was Hitler arrested?', ['Two days later', 'Two years later', 'The same hour'], 0, 'He was arrested on 11 November.', 'events'),
  Q('gd14.c6', 'Who commanded the army in Bavaria?', ['Otto von Lossow', 'Hans von Seisser', 'Ernst Röhm'], 0, 'One of the three leaders.', 'causes'),
  Q('gd14.c7', 'What did Hitler fire into the ceiling?', ['A shot', 'A flare', 'A firework'], 0, 'To silence the hall.', 'events'),
  Q('gd14.c8', 'How many marchers were killed at the Odeonsplatz?', ['Fourteen', 'Four hundred', 'One'], 0, 'Two more died at the army headquarters.', 'events'),
], {exam: 'Explain why Hitler attempted the Munich Putsch in 1923. (12 marks)'}),

lesson(T, 'germany.lean-years', 'The lean years and reorganisation', ['31 2.2'], [
  ['The trial', 'Hitler\'s trial for treason in February–March 1924 lasted 24 days and was reported across Germany. He took full responsibility and presented himself as a patriot. The judges allowed him long speeches. He received the minimum sentence of five years; Ludendorff was acquitted. Hitler was released in December 1924 after about nine months.'],
  ['Mein Kampf', 'In Landsberg prison Hitler dictated Mein Kampf ("My Struggle"). It set out his beliefs: Germans were a superior "Aryan" race; Jews and communists were enemies; Germany needed Lebensraum, "living space", in the east; and the nation needed a single all-powerful leader. He also decided the party must win power legally, through elections.'],
  ['Rebuilding the party', 'The party was banned until February 1925, and Hitler was banned from public speaking in most states until 1927–28. He refounded the party, divided Germany into regions (Gaue) under loyal leaders, and created the SS (1925) as his bodyguard and the Hitler Youth (1926). At Bamberg in 1926 he defeated Gregor Strasser\'s more socialist wing.'],
  ['Why the lean years?', 'Between 1924 and 1929 the economy recovered and the Republic seemed stable, so few voters wanted extremists. In 1928 the Nazis won only 2.6 per cent of the vote and 12 seats. But membership rose to over 100,000 and the party gained support among farmers hit by falling prices, so it was ready when the Depression came.'],
], view.factors('Why the lean years mattered', [
  ['Publicity', 'the trial made Hitler known across Germany'],
  ['Ideas', 'Mein Kampf set out Nazi beliefs'],
  ['Strategy', 'power through elections, not force'],
  ['Organisation', 'Gaue, SS, Hitler Youth; Hitler\'s total control after Bamberg'],
]), [
  view.timeline('The lean years', [
    ['Feb–Mar 1924', 'Hitler\'s trial'],
    ['1924', 'Mein Kampf dictated in prison'],
    ['Dec 1924', 'Hitler released'],
    ['Feb 1925', 'Party refounded'],
    ['1925', 'The SS formed'],
    ['1926', 'Bamberg Conference; Hitler Youth founded'],
    ['1928', 'Nazis win 12 seats'],
  ]),
  view.people('People', [
    ['Adolf Hitler', 'Rebuilt the party under his total control'],
    ['Gregor Strasser', 'Led the more socialist wing'],
    ['Joseph Goebbels', 'Became party leader in Berlin in 1926'],
    ['The trial judges', 'Treated Hitler leniently'],
  ]),
  view.source('A source type: a newspaper report of the trial', 'A national newspaper report of Hitler\'s closing speech at his 1924 trial.', 'Useful for how widely Hitler\'s views were reported; the newspaper\'s own politics shaped how it presented him.'),
], [
  ['Why did the trial help Hitler?', ['It gave him national publicity and a platform for his views', 'It found him innocent and freed him without punishment', 'It made him leader of the Bavarian government'], 0, 'A defeat turned into publicity.'],
  ['Why did the Nazis win few votes in 1924–29?', ['The economy recovered and the Republic seemed stable', 'The party was banned from elections until 1933', 'Hitler refused to let the party stand in elections'], 0, 'Good times weakened extremists.'],
  ['Exam skill · Explain why. Which sentence explains why the lean years were important for the Nazis?', ['Hitler reorganised the party under his control, so it was ready to exploit the Depression.', 'The Nazis won only 12 seats in the Reichstag election that was held in May 1928.', 'The SS was formed in 1925 as a small and loyal personal bodyguard for Hitler.'], 0, 'An explanation links the cause to its effect.'],
  ['What did Hitler decide in prison?', ['To win power legally through elections', 'To leave politics and return to painting', 'To join the Communist Party instead'], 0, 'A change of strategy.'],
], [
  Q('gd15.p1', 'How long did Hitler actually serve?', ['About nine months', 'All five years', 'About ten years'], 0, 'Released in December 1924.', 'trial'),
  Q('gd15.p2', 'Where did Hitler write Mein Kampf?', ['Landsberg prison', 'A Vienna hostel', 'A Berlin flat'], 0, 'He dictated it there.', 'mein-kampf'),
  Q('gd15.p3', 'What does Lebensraum mean?', ['Living space', 'Master race', 'Leader'], 0, 'Land in the east.', 'mein-kampf'),
  Q('gd15.p4', 'When was the SS formed?', ['1925', '1921', '1933'], 0, 'As Hitler\'s bodyguard.', 'reorganisation'),
  Q('gd15.p5', 'How many seats did the Nazis win in 1928?', ['12', '107', '230'], 0, 'Only 2.6 per cent.', 'lean'),
], [
  Q('gd15.c1', 'Who was acquitted at the trial?', ['Ludendorff', 'Hitler', 'Röhm'], 0, 'The war hero was acquitted.', 'trial'),
  Q('gd15.c2', 'What were the Gaue?', ['Party regions', 'Prison camps', 'Army units'], 0, 'Under loyal leaders.', 'reorganisation'),
  Q('gd15.c3', 'Whom did Hitler defeat at Bamberg?', ['Gregor Strasser', 'Ernst Röhm', 'Joseph Goebbels'], 0, 'The socialist wing.', 'reorganisation'),
  Q('gd15.c4', 'When was the Hitler Youth founded?', ['1926', '1933', '1920'], 0, 'For young people.', 'reorganisation'),
  Q('gd15.c5', 'How long did the trial last?', ['24 days', '24 hours', '24 weeks'], 0, 'Reported nationally.', 'trial'),
  Q('gd15.c6', 'Which group began to support the Nazis by 1928?', ['Farmers', 'Bankers', 'Communists'], 0, 'Hit by falling prices.', 'lean'),
  Q('gd15.c7', 'Until when was the party banned?', ['February 1925', 'January 1933', 'November 1923'], 0, 'Then it was refounded.', 'reorganisation'),
  Q('gd15.c8', 'What did Mein Kampf call Jews and communists?', ['Enemies', 'Allies', 'Leaders'], 0, 'Central to Nazi belief.', 'mein-kampf'),
], {exam: 'Explain why the Nazi Party had little success in the years 1924–28. (12 marks)'}),

lesson(T, 'germany.depression', 'The Depression and the failure of Weimar governments', ['31 2.3'], [
  ['The crash', 'In October 1929 share prices on Wall Street in New York collapsed. American banks needed money and recalled their short-term loans to Germany. German firms that depended on the loans cut production or closed, and world trade fell, so German exports collapsed too.'],
  ['Unemployment', 'Unemployment rose from about 1.6 million in 1929 to about six million in early 1932, roughly one worker in three. Young people and industrial workers were hit hardest, but white-collar workers lost jobs too. Families went hungry and lost their homes; shanty towns appeared. Many banks collapsed in 1931.'],
  ['Coalition collapse', 'In March 1930 Hermann Müller\'s coalition government broke up over whether to cut unemployment benefits or raise contributions. President Hindenburg appointed Heinrich Brüning of the Centre Party, who lacked a majority in the Reichstag, so he governed through presidential decrees under Article 48.'],
  ['Rule by decree', 'Brüning cut government spending, wages and unemployment benefits, and raised taxes, hoping to balance the budget. The number of decrees rose from 5 in 1930 to 66 in 1932, while the Reichstag met less and less. To many Germans democracy seemed to have failed, and voters turned to extreme parties.'],
], view.factors('Why the Depression weakened the Republic', [
  ['Economic', 'recalled loans; collapsing firms and exports; six million unemployed'],
  ['Political', 'coalitions could not agree on how to respond'],
  ['Constitutional', 'Article 48 decrees replaced the Reichstag'],
  ['Social', 'hunger and fear pushed voters to extremes'],
]), [
  view.timeline('Depression and politics', [
    ['Oct 1929', 'The Wall Street Crash'],
    ['Mar 1930', 'Müller\'s coalition collapses; Brüning appointed'],
    ['Sep 1930', 'Reichstag election: Nazis win 107 seats'],
    ['Jul 1931', 'Major German banks collapse'],
    ['Early 1932', 'Unemployment about six million'],
    ['May 1932', 'Brüning dismissed'],
  ]),
  view.people('People', [
    ['Hermann Müller', 'SPD Chancellor until March 1930'],
    ['Heinrich Brüning', 'Chancellor 1930–32; "the hunger chancellor"'],
    ['President Hindenburg', 'Signed the emergency decrees'],
    ['The unemployed', 'About one worker in three by 1932'],
  ]),
  view.source('A source type: a photograph of a dole queue', 'A 1932 photograph of a long line of men outside a Berlin employment office.', 'Useful for showing mass unemployment; it shows one office on one day and cannot show the scale across Germany.'),
], [
  ['Why did the Depression hit Germany so hard?', ['Its recovery depended on short-term American loans', 'Germany had no factories or industry of any kind', 'The Treaty of Versailles banned German exports'], 0, 'Borrowed prosperity ended.'],
  ['Why did Brüning rule by decree?', ['He lacked a majority in the Reichstag', 'The constitution banned the Reichstag in 1930', 'The Nazis ordered him to use Article 48'], 0, 'No majority, so decrees.'],
  ['Exam skill · Explain why. Which sentence explains why the Depression increased support for extremists?', ['Governments seemed unable to help, so desperate voters looked for radical solutions.', 'Unemployment in Germany rose to about six million by the early part of 1932.', 'Heinrich Brüning was a member of the Centre Party and became Chancellor in 1930.'], 0, 'An explanation links the cause to its effect.'],
  ['What broke up Müller\'s coalition?', ['Disagreement over unemployment benefits', 'A vote to bring back the Kaiser', 'An argument about joining the League'], 0, 'The cost of the crisis.'],
], [
  Q('gd16.p1', 'When was the Wall Street Crash?', ['October 1929', 'January 1933', 'November 1923'], 0, 'Share prices fell in New York.', 'crash'),
  Q('gd16.p2', 'About how many were unemployed in early 1932?', ['Six million', 'Six hundred thousand', 'Sixty million'], 0, 'One worker in three.', 'unemployment'),
  Q('gd16.p3', 'Who became Chancellor in March 1930?', ['Heinrich Brüning', 'Franz von Papen', 'Kurt von Schleicher'], 0, 'Of the Centre Party.', 'decrees'),
  Q('gd16.p4', 'Which article did Brüning rely on?', ['Article 48', 'Article 231', 'Article 25'], 0, 'Presidential decrees.', 'decrees'),
  Q('gd16.p5', 'What did American banks do to loans?', ['Recalled them', 'Doubled them', 'Cancelled them'], 0, 'They needed money.', 'crash'),
], [
  Q('gd16.c1', 'How many decrees were there in 1932?', ['66', '5', '600'], 0, 'Up from 5 in 1930.', 'decrees'),
  Q('gd16.c2', 'Whose coalition broke up in 1930?', ['Hermann Müller\'s', 'Gustav Stresemann\'s', 'Adolf Hitler\'s'], 0, 'It split over benefits.', 'coalition'),
  Q('gd16.c3', 'What was Brüning nicknamed?', ['The hunger chancellor', 'The iron chancellor', 'The people\'s chancellor'], 0, 'Because of his spending cuts.', 'decrees'),
  Q('gd16.c4', 'When did major banks collapse?', ['1931', '1925', '1919'], 0, 'Deepening the crisis.', 'unemployment'),
  Q('gd16.c5', 'What happened to German exports?', ['They collapsed', 'They doubled', 'They stayed level'], 0, 'World trade fell.', 'crash'),
  Q('gd16.c6', 'What did Brüning cut?', ['Benefits and wages', 'Only the taxes on the rich', 'Nothing at all'], 0, 'To balance the budget.', 'decrees'),
  Q('gd16.c7', 'About how many were unemployed in 1929?', ['1.6 million', '16 million', '160,000'], 0, 'Before the worst.', 'unemployment'),
  Q('gd16.c8', 'What did many Germans conclude about democracy?', ['It had failed', 'It was working', 'It needed no change'], 0, 'They turned to extremes.', 'decrees'),
], {exam: 'Explain why the Depression weakened the Weimar Republic in the years 1929–32. (12 marks)'}),

lesson(T, 'germany.nazi-appeal', 'Nazi propaganda and Hitler\'s appeal', ['31 2.3'], [
  ['Goebbels\' methods', 'Joseph Goebbels ran Nazi propaganda from 1930. The party used posters, leaflets, newspapers, rallies with flags and music, gramophone records and film. Simple slogans were repeated again and again, such as promises of "work and bread". The nationalist media owner Alfred Hugenberg\'s newspapers gave the Nazis publicity.'],
  ['A message for everyone', 'The Nazis tailored their message. Workers were promised jobs; farmers higher prices and protection from debt; the middle classes order and protection from communism; women a respected place in the family; young people a heroic future. The common enemy was the Republic, Versailles, communists and Jews.'],
  ['The Hitler myth', 'Propaganda presented Hitler as a strong, selfless leader who would save Germany. In the 1932 presidential campaign he flew from city to city, sometimes speaking to several huge crowds in one day. Many voters knew little of Nazi policy but trusted Hitler.'],
  ['The SA on the streets', 'By 1932 the SA had about 400,000 members, more than the army. Marching in columns, they gave an impression of discipline in a time of chaos, and many unemployed men joined for food, uniform and purpose. They also fought communists and broke up opponents\' meetings.'],
], view.factors('Why Nazi propaganda worked', [
  ['Methods', 'modern, repeated, emotional: posters, rallies, records, film, flights'],
  ['Message', 'something for every group; common enemies'],
  ['Leader', 'the Hitler myth'],
  ['Context', 'the Depression made voters receptive'],
]), [
  view.timeline('Nazi campaigning', [
    ['1929', 'Campaign against the Young Plan with Hugenberg'],
    ['1930', 'Goebbels runs national propaganda'],
    ['Sep 1930', '107 seats'],
    ['Apr 1932', 'Hitler flies across Germany in the presidential campaign'],
    ['Jul 1932', '230 seats: the largest party'],
  ]),
  view.people('People', [
    ['Joseph Goebbels', 'Head of Nazi propaganda'],
    ['Alfred Hugenberg', 'Nationalist newspaper owner'],
    ['Adolf Hitler', 'Presented as Germany\'s saviour'],
    ['SA members', 'About 400,000 by 1932'],
  ]),
  view.source('A source type: a 1932 Nazi election poster', 'A poster showing a crowd of unemployed workers looking up at Hitler, with the message that he is their last hope.', 'Useful for the party\'s appeal to the unemployed; it is propaganda, so it shows the message, not whether the unemployed voted Nazi.'),
], [
  ['Why did the Nazis tailor their message?', ['To win support from many different groups at once', 'Because each region had its own Nazi leader with different ideas', 'Because the constitution required parties to do so'], 0, 'A party for everyone.'],
  ['Why did the SA appeal to unemployed men?', ['It offered food, uniform and a sense of purpose', 'It paid wages higher than any factory could', 'It promised them all seats in the Reichstag'], 0, 'Belonging in hard times.'],
  ['Exam skill · Inference. A poster shows giant hands crushing small figures labelled with other parties. What can you infer?', ['The Nazis presented themselves as strong enough to sweep rivals aside.', 'The poster was printed in Berlin for the July 1932 election.', 'There were a great many parties in the Reichstag in the 1920s.'], 0, 'An inference goes beyond what is shown.'],
  ['What was the "Hitler myth"?', ['The image of Hitler as a strong leader who would save Germany', 'A story that Hitler had never served in the German army', 'A rumour that Hitler secretly planned to restore the Kaiser'], 0, 'Image over policy.'],
], [
  Q('gd17.p1', 'Who ran Nazi propaganda from 1930?', ['Joseph Goebbels', 'Ernst Röhm', 'Heinrich Himmler'], 0, 'Using modern methods.', 'methods'),
  Q('gd17.p2', 'What did the Nazis promise workers?', ['Work and bread', 'Higher taxes', 'The Kaiser\'s return'], 0, 'A simple slogan.', 'message'),
  Q('gd17.p3', 'How did Hitler travel in 1932?', ['By aeroplane', 'Only by train', 'On horseback'], 0, 'Flying from city to city.', 'myth'),
  Q('gd17.p4', 'About how many SA members were there by 1932?', ['400,000', '4,000', '4 million'], 0, 'More than the army.', 'sa'),
  Q('gd17.p5', 'Whose newspapers helped the Nazis?', ['Alfred Hugenberg\'s', 'Gustav Stresemann\'s', 'The communists\''], 0, 'A nationalist owner.', 'methods'),
], [
  Q('gd17.c1', 'What were farmers promised?', ['Higher prices', 'Collective farms', 'Lower prices'], 0, 'And protection from debt.', 'message'),
  Q('gd17.c2', 'What were the middle classes promised?', ['Order and protection', 'A workers\' revolution', 'Much higher taxes'], 0, 'Protection from communism.', 'message'),
  Q('gd17.c3', 'What did SA marching suggest?', ['Discipline', 'Weakness', 'Disorder'], 0, 'In a time of crisis.', 'sa'),
  Q('gd17.c4', 'Which modern method did the Nazis use?', ['Gramophone records', 'Television adverts', 'Mobile phone calls'], 0, 'With film and posters.', 'methods'),
  Q('gd17.c5', 'What did many voters trust more than policy?', ['Hitler himself', 'The constitution', 'The Allies'], 0, 'The Hitler myth.', 'myth'),
  Q('gd17.c6', 'Who were presented as common enemies?', ['Communists and Jews', 'Farmers and peasants', 'Soldiers and veterans'], 0, 'With Versailles and the Republic.', 'message'),
  Q('gd17.c7', 'How many seats did the Nazis win in July 1932?', ['230', '12', '107'], 0, 'The largest party.', 'methods'),
  Q('gd17.c8', 'What made voters receptive to propaganda?', ['The Depression', 'Prosperity', 'Peace abroad'], 0, 'Desperation made voters listen.', 'methods'),
], {exam: 'Explain why Nazi propaganda helped the growth of Nazi support in the years 1929–32. (12 marks)'}),

lesson(T, 'germany.fear-communism', 'Fear of communism', ['31 2.3'], [
  ['Communist growth', 'The Communist Party (KPD) won 54 seats in 1928, 77 in 1930 and 100 in November 1932. Its support came mainly from unemployed industrial workers. It took orders from Moscow, called for revolution and refused to cooperate with the SPD, which split the left.'],
  ['Who was afraid?', 'Business leaders feared losing their factories, as had happened in Russia after 1917. Farmers had heard of Stalin forcing peasants onto collective farms. The middle classes feared revolution, violence and the loss of their property. Church leaders feared an atheist state.'],
  ['Violence on the streets', 'Communists and the SA fought in the streets: in July 1932 at Altona, near Hamburg, a Nazi march through a communist district led to a battle in which 18 people died. Each clash let the Nazis claim they alone could restore order and defeat communism.'],
  ['Money and influence', 'Some industrialists, such as Fritz Thyssen, gave money to the Nazis, and in January 1932 Hitler spoke to leading businessmen in Düsseldorf. In November 1932 a group of business and landowning figures petitioned Hindenburg to appoint Hitler. Historians debate how much business funding mattered; most Nazi money came from members\' fees and meetings.'],
], view.factors('Why fear of communism helped the Nazis', [
  ['Growth', 'KPD seats rose from 54 to 100'],
  ['Fear', 'business, farmers, middle classes and churches feared revolution'],
  ['Violence', 'street battles let the Nazis promise order'],
  ['Support', 'some business money and influence with Hindenburg'],
]), [
  view.timeline('Communism and fear', [
    ['1928', 'KPD wins 54 seats'],
    ['1930', 'KPD wins 77 seats'],
    ['Jan 1932', 'Hitler speaks to businessmen in Düsseldorf'],
    ['Jul 1932', 'Altona street battle'],
    ['Nov 1932', 'KPD wins 100 seats; business petition to Hindenburg'],
  ]),
  view.people('People and groups', [
    ['The KPD', 'German Communist Party'],
    ['Fritz Thyssen', 'Industrialist who funded the Nazis'],
    ['Farmers', 'Feared collective farms like Stalin\'s'],
    ['Middle-class voters', 'Feared revolution and the loss of property'],
  ]),
  view.source('A source type: a Nazi anti-communist poster', 'A 1932 poster showing a red monster rising over a German town, with the Nazis as the only defence.', 'Useful for how the Nazis used fear of communism; it exaggerates the threat to win votes.'),
], [
  ['Why did farmers fear communism?', ['They had heard of Stalin forcing peasants onto collective farms', 'Communists promised to raise the price of all farm produce', 'The KPD planned to give every farmer more land to work'], 0, 'News from the USSR.'],
  ['Why did street violence help the Nazis?', ['They claimed only they could defeat communism and restore order', 'The police always arrested communists and never arrested Nazis', 'It made the communists join the Nazi Party in large numbers'], 0, 'Chaos created demand for order.'],
  ['Exam skill · Explain why. Which sentence explains why fear of communism increased support for the Nazis?', ['Rising KPD support frightened the middle classes and business, who saw the Nazis as protection.', 'The KPD won 100 seats in the Reichstag election that was held in November of 1932.', 'Fritz Thyssen was a leading steel industrialist who gave money to the Nazi Party.'], 0, 'An explanation links the cause to its effect.'],
  ['What do historians debate about business support?', ['How much business funding actually mattered to the Nazis', 'Whether any businesses existed in Germany in 1932', 'Whether the Nazis were ever a political party at all'], 0, 'An open question.'],
], [
  Q('gd18.p1', 'How many seats did the KPD win in November 1932?', ['100', '54', '230'], 0, 'Its highest total.', 'growth'),
  Q('gd18.p2', 'Where did the KPD take orders from?', ['Moscow', 'Berlin', 'Munich'], 0, 'The Soviet Union.', 'growth'),
  Q('gd18.p3', 'Which industrialist funded the Nazis?', ['Fritz Thyssen', 'Gustav Stresemann', 'Charles Dawes'], 0, 'A steel magnate.', 'money'),
  Q('gd18.p4', 'Where was the July 1932 street battle?', ['Altona', 'Munich', 'Weimar'], 0, 'Altona is near Hamburg.', 'violence'),
  Q('gd18.p5', 'What did businessmen fear losing?', ['Their factories', 'Their votes', 'Their colonies'], 0, 'As had happened in Russia.', 'fear'),
], [
  Q('gd18.c1', 'How many seats did the KPD win in 1928?', ['54', '100', '12'], 0, 'Its seats rose after that.', 'growth'),
  Q('gd18.c2', 'How many died at Altona?', ['18', '180', '1,800'], 0, 'At Altona in July 1932.', 'violence'),
  Q('gd18.c3', 'Where did Hitler speak to businessmen in 1932?', ['Düsseldorf', 'Vienna', 'Landsberg'], 0, 'In January 1932.', 'money'),
  Q('gd18.c4', 'Whom did the KPD refuse to cooperate with?', ['The SPD', 'Moscow', 'The unemployed'], 0, 'Splitting the left.', 'growth'),
  Q('gd18.c5', 'Where did most Nazi money come from?', ['Members\' fees and meetings', 'The national government', 'Foreign governments'], 0, 'Not mainly business.', 'money'),
  Q('gd18.c6', 'Who petitioned Hindenburg in November 1932?', ['Business and landowning figures', 'The leaders of the communists', 'Trade union leaders'], 0, 'To appoint Hitler.', 'money'),
  Q('gd18.c7', 'Why did church leaders fear communism?', ['It was atheist', 'It was too religious', 'It supported the Pope'], 0, 'Against religion.', 'fear'),
  Q('gd18.c8', 'Who mainly voted KPD?', ['Unemployed workers', 'Rich landowners', 'Bankers'], 0, 'In industrial areas.', 'growth'),
], {exam: 'Explain why fear of communism helped the Nazis to grow in the years 1929–32. (12 marks)'}),

lesson(T, 'germany.elections-1932', 'The elections of 1932', ['31 2.4'], [
  ['The presidential election', 'In March 1932 Hindenburg, aged 84, stood for re-election against Hitler and the communist Ernst Thälmann. No one won a majority in the first round. In the April run-off Hindenburg won about 53 per cent and Hitler about 37 per cent. Hindenburg had won, but Hitler had shown he was a national figure.'],
  ['Banning and unbanning the SA', 'In April 1932 Brüning\'s government banned the SA after violence. In May Hindenburg dismissed Brüning and appointed Franz von Papen, who lifted the ban in June to win Nazi favour. Street violence rose sharply in the summer.'],
  ['July 1932', 'In the Reichstag election of 31 July the Nazis won 37 per cent of the vote and 230 seats, making them the largest party, though without a majority. Hitler demanded to be made Chancellor. On 13 August Hindenburg refused, offering only the post of Vice-Chancellor, which Hitler rejected.'],
  ['November 1932', 'Papen could not govern and called another election for 6 November. The Nazis\' vote fell to 33 per cent and they lost 34 seats, while the communists gained. The party was short of money and some members were losing faith. It looked to many as if the Nazi tide had peaked.'],
], view.factors('What the 1932 elections showed', [
  ['Strength', 'Hitler\'s national appeal; the largest party from July'],
  ['Limits', 'never a majority; Hindenburg refused to appoint him'],
  ['Decline', 'lost 34 seats in November; money short'],
  ['Instability', 'four national elections in one year; rising violence'],
]), [
  view.timeline('1932', [
    ['13 Mar', 'Presidential election, first round'],
    ['10 Apr', 'Run-off: Hindenburg about 53%, Hitler about 37%'],
    ['Apr', 'SA banned'],
    ['May–Jun', 'Brüning dismissed; Papen lifts the ban'],
    ['31 Jul', 'Nazis win 230 seats'],
    ['13 Aug', 'Hindenburg refuses to make Hitler Chancellor'],
    ['6 Nov', 'Nazis fall to 196 seats'],
  ]),
  view.people('People', [
    ['President Hindenburg', 'Re-elected in 1932; disliked Hitler'],
    ['Ernst Thälmann', 'Communist presidential candidate'],
    ['Franz von Papen', 'Chancellor from May 1932'],
    ['Adolf Hitler', 'Demanded the chancellorship'],
  ]),
  view.source('A source type: election results tables', 'Official results for the July and November 1932 Reichstag elections, showing votes and seats for each party.', 'Very useful for exact support for each party; numbers alone do not show why people voted as they did.'),
], [
  ['Why did the presidential election help Hitler even though he lost?', ['He won about 37 per cent, showing his national appeal', 'Hindenburg resigned straight after the election', 'The result made Hitler Vice-Chancellor at once'], 0, 'Defeat that built his reputation.'],
  ['Why did Hindenburg refuse to appoint Hitler in August 1932?', ['He disliked Hitler and the Nazis had no majority', 'Hitler had lost the July election to the communists', 'The constitution banned anyone born in Austria'], 0, 'Personal dislike and no majority.'],
  ['Exam skill · Explain why. Which sentence explains why the November 1932 result worried the Nazis?', ['They lost 34 seats and were short of money, so their rise seemed to have stopped.', 'The Reichstag election was held on 6 November 1932 across Germany.', 'Franz von Papen called the election after he lost a vote in the Reichstag.'], 0, 'An explanation links the cause to its effect.'],
  ['Why did Papen lift the SA ban?', ['To win Nazi favour', 'To punish the communists', 'Because Hindenburg ordered it'], 0, 'A political deal.'],
], [
  Q('gd19.p1', 'Who won the 1932 presidential election?', ['Hindenburg', 'Hitler', 'Thälmann'], 0, 'With about 53 per cent.', 'presidential'),
  Q('gd19.p2', 'What share did Hitler win in the run-off?', ['About 37 per cent', 'About 3 per cent', 'About 73 per cent'], 0, 'A national figure.', 'presidential'),
  Q('gd19.p3', 'How many seats did the Nazis win in July 1932?', ['230', '12', '107'], 0, 'The largest party.', 'july'),
  Q('gd19.p4', 'How many seats did they lose in November?', ['34', '134', '4'], 0, 'They fell to 196 seats.', 'november'),
  Q('gd19.p5', 'Who lifted the SA ban?', ['Franz von Papen', 'Heinrich Brüning', 'Kurt von Schleicher'], 0, 'He lifted it in June 1932.', 'sa-ban'),
], [
  Q('gd19.c1', 'Who was the communist presidential candidate?', ['Ernst Thälmann', 'Karl Liebknecht', 'Gregor Strasser'], 0, 'He came third in the vote.', 'presidential'),
  Q('gd19.c2', 'How old was Hindenburg in 1932?', ['84', '64', '44'], 0, 'He was elderly and tired.', 'presidential'),
  Q('gd19.c3', 'What did Hindenburg offer Hitler in August?', ['Vice-Chancellor', 'President', 'Nothing at all'], 0, 'Hitler refused it.', 'july'),
  Q('gd19.c4', 'What share did the Nazis win in July 1932?', ['37 per cent', '57 per cent', '17 per cent'], 0, 'It was not a majority.', 'july'),
  Q('gd19.c5', 'Who gained seats in November 1932?', ['The communists', 'The Nazis', 'The Centre Party'], 0, 'They rose to 100 seats.', 'november'),
  Q('gd19.c6', 'Who banned the SA in April 1932?', ['Brüning\'s government', 'Papen\'s government', 'Hitler\'s party'], 0, 'After violence in the streets.', 'sa-ban'),
  Q('gd19.c7', 'What was the Nazi party short of in November?', ['Money', 'Members', 'Posters'], 0, 'After many campaigns.', 'november'),
  Q('gd19.c8', 'When did Hindenburg refuse Hitler?', ['13 August 1932', '30 January 1933', '6 November 1932'], 0, 'After the July election.', 'july'),
], {exam: 'Explain why Hitler was not appointed Chancellor in 1932. (12 marks)'}),

lesson(T, 'germany.backstairs', 'The backstairs intrigue', ['31 2.4'], [
  ['Schleicher\'s failure', 'General Kurt von Schleicher became Chancellor on 3 December 1932. He tried to split the Nazis by offering Gregor Strasser the post of Vice-Chancellor; Strasser resigned his party posts but no Nazis followed him. Schleicher also alarmed landowners and business with talk of land reform and work schemes.'],
  ['Papen\'s revenge', 'Papen, who blamed Schleicher for his own fall, met Hitler secretly at the house of the banker Kurt von Schröder in Cologne on 4 January 1933. They agreed in principle that Hitler would be Chancellor and Papen Vice-Chancellor. Papen then worked on Hindenburg and his son Oskar.'],
  ['30 January 1933', 'When Schleicher asked to rule by decree and postpone elections, Hindenburg refused, and Schleicher resigned on 28 January. On 30 January Hindenburg appointed Hitler Chancellor. Only three of the cabinet were Nazis: Hitler, Wilhelm Frick and Hermann Göring.'],
  ['The miscalculation', 'Papen and his conservative allies believed they could control Hitler and use his mass support. Papen boasted to friends that Hitler would soon be squeezed into a corner. Hitler had come to power legally, but through a deal among a small group, not a majority vote. Historians still debate how far the elites or the voters were responsible.'],
], view.factors('Why Hitler became Chancellor', [
  ['Nazi strength', 'the largest party in the Reichstag'],
  ['Elite intrigue', 'Papen\'s deal and pressure on Hindenburg'],
  ['No alternative', 'Schleicher had no support and could not govern'],
  ['Miscalculation', 'conservatives thought they could control Hitler'],
]), [
  view.timeline('The intrigue', [
    ['3 Dec 1932', 'Schleicher becomes Chancellor'],
    ['Dec 1932', 'Strasser resigns his party posts'],
    ['4 Jan 1933', 'Papen and Hitler meet in Cologne'],
    ['28 Jan 1933', 'Schleicher resigns'],
    ['30 Jan 1933', 'Hitler appointed Chancellor'],
  ]),
  view.people('People', [
    ['Kurt von Schleicher', 'Chancellor, December 1932 – January 1933'],
    ['Franz von Papen', 'Arranged the deal; Vice-Chancellor'],
    ['Oskar von Hindenburg', 'The President\'s son and adviser'],
    ['Kurt von Schröder', 'Banker who hosted the Cologne meeting'],
  ]),
  view.source('A source type: a historian\'s interpretation', 'A historian argues that Hitler was handed power by a small group of conservative politicians rather than winning it from voters.', 'An interpretation stresses elites; others stress the millions who voted Nazi. Both draw on the same events.'),
], [
  ['Why did Papen help Hitler become Chancellor?', ['He wanted revenge on Schleicher and thought he could control Hitler', 'He had always been a loyal and active member of the Nazi Party', 'Hindenburg had ordered him to make Hitler Chancellor at once'], 0, 'Revenge and miscalculation.'],
  ['Why did Hindenburg agree in January 1933?', ['Schleicher had failed, and Papen persuaded him Hitler could be controlled', 'Hitler had just won a clear majority of seats in a January election', 'The army had threatened to overthrow Hindenburg if he refused again'], 0, 'Persuasion and no alternative.'],
  ['Exam skill · Interpretations. Why might two historians differ about how Hitler became Chancellor?', ['One may stress the elites\' deal, another the millions who voted Nazi.', 'One may have been born in Germany and the other in Britain or France.', 'Hitler became Chancellor on 30 January 1933, so the date is not in doubt.'], 0, 'Different emphasis on the same evidence.'],
  ['How many Nazis were in Hitler\'s first cabinet?', ['Three', 'Twelve', 'One'], 0, 'Conservatives thought they were in control.'],
], [
  Q('gd20.p1', 'When did Schleicher become Chancellor?', ['3 December 1932', '30 January 1933', '31 July 1932'], 0, 'He replaced Papen.', 'schleicher'),
  Q('gd20.p2', 'Whom did Schleicher try to win over?', ['Gregor Strasser', 'Ernst Röhm', 'Joseph Goebbels'], 0, 'To split the Nazis.', 'schleicher'),
  Q('gd20.p3', 'Where did Papen and Hitler meet?', ['Cologne', 'Munich', 'Berlin'], 0, 'On 4 January 1933.', 'papen'),
  Q('gd20.p4', 'When was Hitler appointed Chancellor?', ['30 January 1933', '13 August 1932', '27 February 1933'], 0, 'Hindenburg appointed him.', 'appointment'),
  Q('gd20.p5', 'Who became Vice-Chancellor?', ['Franz von Papen', 'Kurt von Schleicher', 'Hermann Göring'], 0, 'He planned to control Hitler.', 'appointment'),
], [
  Q('gd20.c1', 'Whose house hosted the Cologne meeting?', ['Kurt von Schröder\'s', 'Paul von Hindenburg\'s', 'Fritz Thyssen\'s'], 0, 'He was a Cologne banker.', 'papen'),
  Q('gd20.c2', 'Which Nazis were in the first cabinet?', ['Hitler, Frick and Göring', 'Hitler, Röhm and Strasser', 'Hitler, Himmler and Hess'], 0, 'There were only three Nazis.', 'appointment'),
  Q('gd20.c3', 'When did Schleicher resign?', ['28 January 1933', '3 December 1932', '30 June 1934'], 0, 'Hindenburg refused his request.', 'schleicher'),
  Q('gd20.c4', 'Who advised Hindenburg alongside Papen?', ['His son Oskar', 'Adolf Hitler', 'Ernst Thälmann'], 0, 'Oskar von Hindenburg.', 'papen'),
  Q('gd20.c5', 'What did Papen believe about Hitler?', ['He could be controlled', 'He would refuse power', 'He was a communist'], 0, 'A miscalculation.', 'miscalculation'),
  Q('gd20.c6', 'How did Hitler come to power?', ['Legally, through a deal', 'By a putsch', 'By winning a majority'], 0, 'Backstairs intrigue.', 'miscalculation'),
  Q('gd20.c7', 'What did Schleicher\'s ideas alarm?', ['Landowners and business', 'The communists', 'The SA alone'], 0, 'Talk of land reform.', 'schleicher'),
  Q('gd20.c8', 'What did Schleicher ask Hindenburg for?', ['Rule by decree and no elections', 'Permission to resign at once', 'A Nazi majority in cabinet'], 0, 'Hindenburg refused.', 'schleicher'),
], {exam: 'Explain why Hitler was able to become Chancellor in January 1933. (12 marks)'}),
];
