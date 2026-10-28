// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 option 31: Weimar and Nazi Germany, 1918–39.
// Depth lessons for key topic 1, the Weimar Republic 1918–29 (specification 1.1–1.4). Each follows its overview.
// All text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.germany.kt1';

export const germanyDepth1 = [
lesson(T, 'germany.war-legacy', 'The legacy of the First World War', ['31 1.1'], [
  ['Human cost', 'About two million German soldiers were killed and over four million wounded. Roughly 600,000 women were widowed and two million children lost their fathers. Many wounded veterans could not work and depended on pensions from the state.'],
  ['Hunger and the blockade', 'The British naval blockade cut off imports of food and fertiliser. In the "turnip winter" of 1916–17 many families lived on turnips, and by 1918 hundreds of thousands of civilians had died from hunger and the diseases it made worse. Bitterness grew against those who had profited from the war.'],
  ['Economic damage', 'The government had paid for the war mainly by borrowing, and the national debt rose enormously. It also printed money, so prices rose and the mark lost value. Industrial production had fallen to about two-thirds of its pre-war level by 1918.'],
  ['Political legacy', 'Germans had been told they were winning. In September 1918 the army leaders, Hindenburg and Ludendorff, told the Kaiser the war was lost and urged that civilian politicians form a government to seek peace. This let the army avoid blame for defeat, which laid the ground for the "stab-in-the-back" myth.'],
], view.factors('What the war left behind', [
  ['Social', 'widows, orphans and disabled veterans; anger at profiteers'],
  ['Economic', 'huge debts, rising prices, falling production'],
  ['Political', 'shock at defeat; the army shifting blame to civilians'],
  ['Psychological', 'a sense that Germany had been betrayed, not beaten'],
]), [
  view.timeline('From war to defeat', [
    ['Aug 1914', 'Germany goes to war'],
    ['1916–17', 'The "turnip winter"'],
    ['Mar–Jul 1918', 'The last German offensives fail'],
    ['29 Sep 1918', 'Army leaders tell the Kaiser the war is lost'],
    ['Oct 1918', 'A new civilian-led government asks for peace'],
  ]),
  view.people('People', [
    ['Kaiser Wilhelm II', 'Ruler of Germany until November 1918'],
    ['Paul von Hindenburg', 'Army commander and later President'],
    ['Erich Ludendorff', 'Army leader who urged a civilian government'],
    ['War widows and veterans', 'Depended on state pensions'],
  ]),
  view.source('A source type: a 1917 food ration card', 'A ration card from a German city showing the small weekly amounts of bread, potatoes and fat allowed to each person.', 'Useful for the official ration in one city; it shows what was allowed, not what families actually managed to get.'),
], [
  ['Why did defeat come as a shock to many Germans?', ['They had been told Germany was winning the war', 'German troops had never fought on foreign soil', 'The Kaiser had promised peace by Christmas 1914'], 0, 'Propaganda hid the truth.'],
  ['Why did the army leaders want a civilian government in 1918?', ['So politicians, not the army, would be blamed for defeat', 'So the army could take full control of the economy', 'So Germany could declare war on more of its enemies'], 0, 'Shifting the blame.'],
  ['Exam skill · Explain why. Which sentence explains why the war weakened the new republic?', ['The war left huge debts and bitterness, so the republic began with economic and political problems.', 'About two million German soldiers were killed and over four million wounded in the war.', 'The turnip winter happened in 1916 and 1917 in many German towns and cities.'], 0, 'An explanation links the cause to its effect.'],
  ['What did the British blockade cause?', ['Shortages of food and fertiliser in Germany', 'The collapse of the German navy in 1914', 'An end to the fighting on the Western Front'], 0, 'Hunger at home weakened Germany.'],
], [
  Q('gd1.p1', 'About how many German soldiers died in the war?', ['Two million', 'Two hundred thousand', 'Twenty million'], 0, 'With over four million wounded.', 'cost'),
  Q('gd1.p2', 'What was the winter of 1916–17 called?', ['The turnip winter', 'The bread winter', 'The coal winter'], 0, 'Many families lived on turnips.', 'blockade'),
  Q('gd1.p3', 'How was the war mainly paid for?', ['Borrowing', 'Taxing the rich', 'Selling colonies'], 0, 'National debt rose enormously.', 'economy'),
  Q('gd1.p4', 'Who told the Kaiser in 1918 that the war was lost?', ['Hindenburg and Ludendorff', 'Ebert and Scheidemann', 'Stresemann and Kapp'], 0, 'The army leaders admitted defeat.', 'politics'),
  Q('gd1.p5', 'About how many German women were widowed?', ['600,000', '60,000', '6,000,000'], 0, 'Many relied on pensions.', 'cost'),
], [
  Q('gd1.c1', 'Which country\'s navy blockaded Germany?', ['Britain\'s', 'France\'s', 'Russia\'s'], 0, 'Cutting off food imports.', 'blockade'),
  Q('gd1.c2', 'What had industrial production fallen to by 1918?', ['About two-thirds of pre-war', 'About twice the pre-war level', 'Almost nothing at all by 1918'], 0, 'A weakened economy.', 'economy'),
  Q('gd1.c3', 'Whom did many Germans resent during the war?', ['Profiteers', 'Nurses', 'Farmers\' children'], 0, 'People who made money from it.', 'cost'),
  Q('gd1.c4', 'What did printing money cause?', ['Rising prices', 'Falling prices', 'More gold'], 0, 'The mark lost value.', 'economy'),
  Q('gd1.c5', 'What did the army avoid by bringing in civilians?', ['Blame for defeat', 'Paying soldiers', 'The armistice terms'], 0, 'The root of the myth.', 'politics'),
  Q('gd1.c6', 'About how many children lost their fathers?', ['Two million', 'Two thousand', 'Twenty million'], 0, 'A huge social cost.', 'cost'),
  Q('gd1.c7', 'Which myth did the army\'s move help create?', ['The stab in the back', 'The master race', 'The Twenty-Five Points'], 0, 'Betrayal, not defeat.', 'politics'),
  Q('gd1.c8', 'When did the army say the war was lost?', ['September 1918', 'August 1914', 'December 1919'], 0, 'After the offensives failed.', 'politics'),
], {exam: 'Explain why the Weimar Republic faced problems as a result of the First World War. (12 marks)'}),

lesson(T, 'germany.revolution-1918', 'Abdication, armistice and revolution', ['31 1.1'], [
  ['Mutiny and councils', 'At the end of October 1918 sailors at Wilhelmshaven and Kiel refused orders to sail out for a last battle. By early November the revolt had spread, and workers\' and soldiers\' councils, like the soviets in Russia, took over many towns. On 8 November a socialist republic was declared in Bavaria.'],
  ['The Kaiser goes', 'On 9 November 1918 the Kaiser was told the army would no longer support him. He abdicated and fled to the Netherlands. The same day Philipp Scheidemann of the SPD declared a German republic from the Reichstag building, and Friedrich Ebert became head of government.'],
  ['The armistice', 'On 11 November 1918 Matthias Erzberger, a civilian politician, signed the armistice in a railway carriage at Compiègne in France. Germany had to hand over weapons and withdraw from occupied land. Erzberger was later murdered by right-wing extremists in 1921.'],
  ['Ebert\'s choices', 'Ebert feared a communist revolution like Russia\'s. On 10 November he agreed with General Groener that the army would support the government if the government left the army\'s officers in place. Elections were held in January 1919, and the National Assembly met at Weimar in February and chose Ebert as President.'],
], view.factors('Why the Kaiser fell', [
  ['Defeat', 'the army could no longer win the war'],
  ['Revolt', 'mutinies and councils spread across Germany'],
  ['Hunger', 'shortages turned people against the old regime'],
  ['The army', 'it withdrew its support from the Kaiser'],
]), [
  view.timeline('Revolution, 1918–19', [
    ['Late Oct 1918', 'Sailors refuse orders'],
    ['3–4 Nov 1918', 'Mutiny at Kiel'],
    ['9 Nov 1918', 'Kaiser abdicates; republic declared'],
    ['10 Nov 1918', 'Ebert–Groener agreement'],
    ['11 Nov 1918', 'Armistice signed'],
    ['Jan 1919', 'National Assembly elections'],
    ['Feb 1919', 'Assembly meets at Weimar; Ebert President'],
  ]),
  view.people('People', [
    ['Friedrich Ebert', 'SPD leader; head of government, then President'],
    ['Philipp Scheidemann', 'Declared the republic'],
    ['Matthias Erzberger', 'Signed the armistice'],
    ['General Wilhelm Groener', 'Promised the army\'s support to Ebert'],
  ]),
  view.source('A source type: a photograph of 9 November 1918', 'A photograph of crowds of soldiers and workers outside the Reichstag on the day the republic was declared.', 'Useful for the scale of public support in Berlin that day; it shows one city at one moment, not the whole of Germany.'),
], [
  ['Why did Ebert make an agreement with Groener?', ['He wanted the army\'s support against a communist revolution', 'He wanted to restart the war against Britain and France', 'He wanted the army to bring the Kaiser back to Germany'], 0, 'Fear of the left.'],
  ['Why did signing the armistice harm civilian politicians later?', ['Nationalists blamed them for defeat as "November Criminals"', 'The armistice made all of them pay huge personal fines', 'It required them to leave Germany for the Netherlands'], 0, 'The blame stuck.'],
  ['Exam skill · Explain why. Which sentence explains why the Kaiser abdicated?', ['The army withdrew its support while revolts spread, so he could no longer rule.', 'Kaiser Wilhelm II fled to the Netherlands after he abdicated in 1918.', 'The Kaiser abdicated on 9 November 1918, two days before the armistice.'], 0, 'An explanation links the cause to its effect.'],
  ['What were the workers\' and soldiers\' councils?', ['Local bodies, like Russian soviets, that took over towns', 'Committees of army officers who ran the war effort', 'Courts that tried soldiers who refused to fight on'], 0, 'Revolution from below.'],
], [
  Q('gd2.p1', 'Where did sailors mutiny in November 1918?', ['Kiel', 'Munich', 'Berlin'], 0, 'Refusing a last battle.', 'mutiny'),
  Q('gd2.p2', 'When did the Kaiser abdicate?', ['9 November 1918', '11 November 1918', '28 June 1919'], 0, 'He fled to the Netherlands.', 'abdication'),
  Q('gd2.p3', 'Who declared the republic?', ['Philipp Scheidemann', 'Karl Liebknecht', 'Gustav Stresemann'], 0, 'From the Reichstag building.', 'abdication'),
  Q('gd2.p4', 'Who signed the armistice?', ['Matthias Erzberger', 'Friedrich Ebert', 'Paul von Hindenburg'], 0, 'He signed at Compiègne.', 'armistice'),
  Q('gd2.p5', 'Where did the National Assembly meet?', ['Weimar', 'Munich', 'Kiel'], 0, 'Berlin was unsafe.', 'ebert'),
], [
  Q('gd2.c1', 'Where was the armistice signed?', ['Compiègne', 'Versailles', 'Weimar'], 0, 'In a railway carriage.', 'armistice'),
  Q('gd2.c2', 'Where did the Kaiser flee?', ['The Netherlands', 'Austria-Hungary', 'Switzerland'], 0, 'He lived there in exile.', 'abdication'),
  Q('gd2.c3', 'With whom did Ebert make a deal on 10 November?', ['General Groener', 'Rosa Luxemburg', 'Wolfgang Kapp'], 0, 'The army backed the government.', 'ebert'),
  Q('gd2.c4', 'What did Ebert fear most?', ['A communist revolution', 'The Kaiser coming back', 'A French invasion'], 0, 'Like Russia\'s in 1917.', 'ebert'),
  Q('gd2.c5', 'Where was a socialist republic declared on 8 November?', ['Bavaria', 'Prussia', 'Saxony'], 0, 'Before the Kaiser fell.', 'mutiny'),
  Q('gd2.c6', 'What happened to Erzberger in 1921?', ['He was murdered', 'He became President', 'He fled abroad'], 0, 'By right-wing extremists.', 'armistice'),
  Q('gd2.c7', 'When were National Assembly elections held?', ['January 1919', 'November 1918', 'March 1920'], 0, 'The first of the republic.', 'ebert'),
  Q('gd2.c8', 'Who became President in February 1919?', ['Friedrich Ebert', 'Paul von Hindenburg', 'Philipp Scheidemann'], 0, 'Chosen by the Assembly.', 'ebert'),
], {exam: 'Explain why there was a revolution in Germany in 1918. (12 marks)'}),

lesson(T, 'germany.constitution', 'The Weimar Constitution', ['31 1.1'], [
  ['The President', 'The President was elected by the people every seven years. He commanded the armed forces, appointed the Chancellor and could dissolve the Reichstag and call new elections. Under Article 48 he could rule by decree, without the Reichstag, in an emergency.'],
  ['The Reichstag and Reichsrat', 'The Reichstag was elected every four years by proportional representation: a party received one seat for roughly every 60,000 votes. It passed laws and the Chancellor needed its support. The Reichsrat represented the 17 regional states (Länder) and could delay, but not block, new laws.'],
  ['Rights', 'All men and women over 20 could vote. The constitution guaranteed freedom of speech, of religion and to form groups, and equality before the law. For many Germans this was the most democratic system they had ever known.'],
  ['Weaknesses in practice', 'Proportional representation meant no party ever won a majority, so governments were coalitions that often fell apart; there were about 20 between 1919 and 1933. Article 48 was used often: Ebert used it more than 130 times. Judges, army officers and civil servants from the Kaiser\'s time kept their jobs, and many disliked democracy.'],
], view.factors('Strengths and weaknesses of the constitution', [
  ['Strength', 'votes for men and women over 20; rights guaranteed'],
  ['Strength', 'proportional representation made seats fair to votes'],
  ['Weakness', 'coalitions were weak and short-lived'],
  ['Weakness', 'Article 48 and the old elites in the army, courts and civil service'],
]), [
  view.timeline('The constitution', [
    ['Jan 1919', 'National Assembly elected'],
    ['Feb 1919', 'Assembly meets at Weimar'],
    ['Jul 1919', 'Constitution approved by the Assembly'],
    ['Aug 1919', 'Constitution comes into force'],
    ['1919–33', 'About 20 coalition governments'],
  ]),
  view.people('Parts of the system', [
    ['The President', 'Elected every seven years; Article 48 powers'],
    ['The Chancellor', 'Head of government; needed Reichstag support'],
    ['The Reichstag', 'Elected every four years by proportional representation'],
    ['The Reichsrat', 'Represented the 17 states; could delay laws'],
  ]),
  view.source('A source type: a 1919 election poster', 'A poster from a democratic party urging women to use their new right to vote.', 'Useful for how parties appealed to new voters; it shows a party\'s message, not how women actually voted.'),
], [
  ['Why did proportional representation weaken governments?', ['No party won a majority, so coalitions formed and often collapsed', 'It meant that only one party was allowed to stand in elections', 'It gave the Kaiser\'s family a guaranteed share of the seats'], 0, 'Many parties, unstable governments.'],
  ['Why was Article 48 a danger?', ['It let a President govern without the Reichstag', 'It banned the Reichstag from ever passing any laws', 'It gave the army the right to choose the Chancellor'], 0, 'A route around democracy.'],
  ['Exam skill · Explain why. Which sentence explains a weakness of the constitution?', ['Old judges and officers kept their posts, so the republic was run by people who disliked it.', 'The President of the Weimar Republic was elected by the people every seven years.', 'The constitution came into force in August 1919 after the Assembly had approved it.'], 0, 'An explanation links the feature to its effect.'],
  ['What could the Reichsrat do?', ['Delay new laws', 'Appoint the President', 'Dissolve the Reichstag'], 0, 'It represented the states.'],
], [
  Q('gd3.p1', 'How often was the President elected?', ['Every seven years', 'Every four years', 'Every year'], 0, 'He was elected by the people.', 'president'),
  Q('gd3.p2', 'Which article allowed rule by decree?', ['Article 48', 'Article 231', 'Article 25'], 0, 'In an emergency.', 'president'),
  Q('gd3.p3', 'How was the Reichstag elected?', ['Proportional representation', 'Chosen by the President', 'Chosen by the 17 states'], 0, 'One seat per 60,000 votes.', 'reichstag'),
  Q('gd3.p4', 'Who could vote?', ['Men and women over 20', 'Only men over 25', 'Only property owners'], 0, 'Women voted for the first time.', 'rights'),
  Q('gd3.p5', 'What did the Reichsrat represent?', ['The 17 states', 'The army', 'The churches'], 0, 'The regional states, or Länder.', 'reichstag'),
], [
  Q('gd3.c1', 'About how many votes earned a Reichstag seat?', ['60,000', '6,000', '600,000'], 0, 'Seats matched votes.', 'reichstag'),
  Q('gd3.c2', 'Who appointed the Chancellor?', ['The President', 'The Reichsrat', 'The courts'], 0, 'He needed Reichstag support.', 'president'),
  Q('gd3.c3', 'About how many coalition governments were there 1919–33?', ['About 20', 'About 2', 'About 200'], 0, 'Often short-lived.', 'weakness'),
  Q('gd3.c4', 'About how often did Ebert use Article 48?', ['Over 130 times', 'Never at all', 'Only twice'], 0, 'It became normal.', 'weakness'),
  Q('gd3.c5', 'Which groups kept their jobs from the Kaiser\'s time?', ['Judges and officers', 'Communist leaders', 'Spartacists'], 0, 'Many disliked democracy.', 'weakness'),
  Q('gd3.c6', 'How often was the Reichstag elected?', ['Every four years', 'Every seven years', 'Every ten years'], 0, 'Unless dissolved early.', 'reichstag'),
  Q('gd3.c7', 'Which freedom was guaranteed?', ['Freedom of speech', 'Freedom from taxes', 'Freedom to own slaves'], 0, 'One of the basic rights.', 'rights'),
  Q('gd3.c8', 'Who commanded the armed forces?', ['The President', 'The Chancellor', 'The Reichsrat'], 0, 'A powerful role.', 'president'),
], {exam: 'Explain why the Weimar Constitution was a weakness for the new republic. (12 marks)'}),

lesson(T, 'germany.versailles', 'The Treaty of Versailles', ['31 1.2'], [
  ['A dictated peace', 'Germany was not allowed to take part in the talks. The treaty was presented in May 1919, and Germany was told it would face renewed war if it refused. The Chancellor, Scheidemann, resigned rather than sign. On 28 June 1919 German representatives signed in the Hall of Mirrors at Versailles.'],
  ['Land and colonies', 'Alsace-Lorraine went to France; West Prussia and Posen to Poland, creating the "Polish corridor" that cut East Prussia off; and smaller areas to Belgium, Denmark and Lithuania. The Saar coalfields were run by the League of Nations for 15 years, union with Austria was banned, and the colonies became League mandates. Germany lost about 13 per cent of its land and about six million people.'],
  ['Military and money', 'The army was limited to 100,000 men, with no tanks, air force or submarines and only six battleships. The Rhineland was demilitarised and occupied by Allied troops for 15 years. Article 231, the "war guilt" clause, made Germany accept responsibility for the war, and in 1921 reparations were set at £6.6 billion.'],
  ['Why it mattered', 'Germans across the political spectrum hated the treaty. The loss of land took with it much of Germany\'s iron ore and some of its coal. Nationalists blamed the republic\'s politicians for signing it, and the "November Criminals" and "stab-in-the-back" ideas gained strength.'],
], view.factors('Terms of the treaty', [
  ['Land', 'Alsace-Lorraine, the Polish corridor, the Saar, colonies'],
  ['Military', '100,000 men; no air force, tanks or submarines; Rhineland demilitarised'],
  ['Blame', 'Article 231, the war guilt clause'],
  ['Money', 'reparations set at £6.6 billion in 1921'],
]), [
  view.timeline('The treaty', [
    ['Jan 1919', 'Peace conference opens without Germany'],
    ['May 1919', 'Terms presented to Germany'],
    ['Jun 1919', 'Scheidemann resigns rather than sign'],
    ['28 Jun 1919', 'Treaty signed at Versailles'],
    ['1921', 'Reparations set at £6.6 billion'],
  ]),
  view.people('People', [
    ['Philipp Scheidemann', 'Resigned rather than sign'],
    ['Georges Clemenceau', 'French leader who wanted a harsh peace'],
    ['David Lloyd George', 'British Prime Minister'],
    ['Woodrow Wilson', 'US President'],
  ]),
  view.source('A source type: a German newspaper on 28 June 1919', 'A nationalist newspaper front page printed with a black border on the day of signing, calling for revenge.', 'Useful for the anger of nationalists; it was written to stir feeling, so it shows one strong reaction, not every German\'s view.'),
], [
  ['Why was the treaty called a diktat?', ['Germany was not allowed to negotiate the terms', 'It was written in German by the German government', 'It was agreed by a vote of the German people'], 0, 'A dictated peace.'],
  ['Why did the treaty damage the republic?', ['Its politicians were blamed for signing a hated treaty', 'It gave the republic too much land to govern well', 'It made the Kaiser the head of the new government'], 0, 'Blame attached to the republic.'],
  ['Exam skill · Inference. A poster shows Germany as a figure in chains. What can you infer?', ['The artist saw the treaty as unjust and enslaving Germany.', 'The poster was printed in Paris for the peace conference.', 'The treaty was signed in the Hall of Mirrors in June 1919.'], 0, 'An inference goes beyond what is shown.'],
  ['What was the Polish corridor?', ['Land given to Poland that cut East Prussia off from Germany', 'A route that German troops used to invade Poland in 1919', 'A zone in the Rhineland where no soldiers were allowed'], 0, 'A territorial loss.'],
], [
  Q('gd4.p1', 'When was the treaty signed?', ['28 June 1919', '11 November 1918', '9 November 1918'], 0, 'In the Hall of Mirrors.', 'diktat'),
  Q('gd4.p2', 'Which region went to France?', ['Alsace-Lorraine', 'The Saar', 'The Ruhr'], 0, 'France had lost it in 1871.', 'land'),
  Q('gd4.p3', 'How large could the German army be?', ['100,000 men', '1,000,000 men', '10,000 men'], 0, 'With no tanks allowed.', 'military'),
  Q('gd4.p4', 'Which article was the war guilt clause?', ['Article 231', 'Article 48', 'Article 109'], 0, 'Germany accepted blame.', 'blame'),
  Q('gd4.p5', 'What were reparations set at in 1921?', ['£6.6 billion', '£66 million', '£660 billion'], 0, 'A huge sum, set in 1921.', 'money'),
], [
  Q('gd4.c1', 'About how much land did Germany lose?', ['About 13 per cent', 'About half', 'About 1 per cent'], 0, 'And about six million people.', 'land'),
  Q('gd4.c2', 'Who ran the Saar for 15 years?', ['The League of Nations', 'France on its own', 'Germany itself'], 0, 'Its coalfields mattered.', 'land'),
  Q('gd4.c3', 'Which area was demilitarised?', ['The Rhineland', 'Bavaria', 'East Prussia'], 0, 'Occupied for 15 years.', 'military'),
  Q('gd4.c4', 'What were Germany\'s colonies made?', ['League mandates', 'Independent states', 'French provinces'], 0, 'Run by other countries.', 'land'),
  Q('gd4.c5', 'Which union was banned?', ['With Austria', 'With Italy', 'With Russia'], 0, 'Anschluss forbidden.', 'land'),
  Q('gd4.c6', 'Who resigned rather than sign?', ['Scheidemann', 'Ebert', 'Stresemann'], 0, 'He was Chancellor in 1919.', 'diktat'),
  Q('gd4.c7', 'How many battleships could Germany keep?', ['Six', 'Sixty', 'None'], 0, 'Germany kept only a small navy.', 'military'),
  Q('gd4.c8', 'Whom did nationalists blame for the treaty?', ['The republic\'s politicians', 'The exiled Kaiser', 'The army leaders'], 0, 'The November Criminals.', 'blame'),
], {exam: 'Give two things you can infer from a nationalist poster of 1919 about German attitudes to the Treaty of Versailles. (4 marks)'}),

lesson(T, 'germany.left-right', 'Spartacists, Freikorps and the Kapp Putsch', ['31 1.2'], [
  ['The Spartacist revolt, 1919', 'In January 1919 the Spartacists, who had just founded the German Communist Party (KPD), occupied newspaper offices and government buildings in Berlin, hoping to spark a revolution like Russia\'s. Ebert used the regular army and the Freikorps to crush it within a week. On 15 January Rosa Luxemburg and Karl Liebknecht were captured and murdered by Freikorps soldiers.'],
  ['More risings on the left', 'In April 1919 communists set up a Soviet Republic in Bavaria; it was crushed by the army and Freikorps in May, with hundreds killed. In 1920 a "Red Army" of workers rose in the Ruhr and was also put down. The use of right-wing ex-soldiers to defeat the left left lasting bitterness between socialists and communists.'],
  ['The Kapp Putsch, 1920', 'In March 1920 the government tried to disband Freikorps units, as Versailles required. About 5,000 Freikorps troops marched into Berlin and declared Wolfgang Kapp Chancellor. The army refused to fire on fellow soldiers and the government fled. The trade unions called a general strike: water, gas, electricity and transport stopped, and after four days Kapp fled to Sweden.'],
  ['Political murders', 'Right-wing groups such as Organisation Consul murdered hundreds of opponents between 1919 and 1922, including Matthias Erzberger in 1921 and Foreign Minister Walther Rathenau in June 1922. Judges were often lenient towards right-wing killers but harsh on the left, which showed that many in the system did not support the republic.'],
], view.factors('Threats from left and right', [
  ['Left', 'Spartacists 1919; Bavarian Soviet Republic 1919; Ruhr rising 1920'],
  ['Right', 'Kapp Putsch 1920; political murders 1919–22'],
  ['How the government survived', 'army and Freikorps against the left; general strike against Kapp'],
  ['Weakness exposed', 'army and judges did not reliably support the republic'],
]), [
  view.timeline('Uprisings, 1919–22', [
    ['Jan 1919', 'Spartacist revolt in Berlin'],
    ['Apr–May 1919', 'Bavarian Soviet Republic crushed'],
    ['Mar 1920', 'Kapp Putsch defeated by a general strike'],
    ['Mar–Apr 1920', 'Ruhr workers\' rising put down'],
    ['Aug 1921', 'Erzberger murdered'],
    ['Jun 1922', 'Rathenau murdered'],
  ]),
  view.people('People', [
    ['Rosa Luxemburg and Karl Liebknecht', 'Spartacist leaders murdered in 1919'],
    ['Wolfgang Kapp', 'Led the 1920 putsch'],
    ['The Freikorps', 'Right-wing ex-soldiers used against the left'],
    ['Walther Rathenau', 'Foreign Minister murdered in 1922'],
  ]),
  view.source('A source type: a Kapp Putsch photograph', 'A photograph of armed Freikorps soldiers with a field gun in a Berlin street in March 1920.', 'Useful for showing the military threat in Berlin; it cannot show the general strike that defeated the putsch.'),
], [
  ['Why did the Kapp Putsch fail?', ['A general strike stopped Berlin from working', 'The army fired on the Freikorps and defeated them', 'Kapp was arrested by the police before he reached Berlin'], 0, 'Workers defended the republic.'],
  ['Why did the use of the Freikorps cause lasting problems?', ['Socialists and communists stayed bitterly divided', 'The Freikorps became loyal supporters of democracy', 'It meant that the army had to be disbanded at once'], 0, 'The left stayed bitterly divided.'],
  ['Exam skill · Explain why. Which sentence explains why political violence weakened the republic?', ['Lenient judges let right-wing killers off, which showed that the system did not protect democracy.', 'Walther Rathenau was the Foreign Minister and was murdered by extremists in June 1922.', 'Organisation Consul was the name of a right-wing terrorist group in the early 1920s.'], 0, 'An explanation links the cause to its effect.'],
  ['What triggered the Kapp Putsch?', ['The government\'s attempt to disband Freikorps units', 'The French occupation of the Ruhr industrial area', 'The murder of Rosa Luxemburg by communists'], 0, 'Versailles required smaller forces.'],
], [
  Q('gd5.p1', 'When was the Spartacist revolt?', ['January 1919', 'March 1920', 'November 1923'], 0, 'Crushed within a week.', 'left'),
  Q('gd5.p2', 'Which party had the Spartacists just founded?', ['The KPD', 'The SPD', 'The NSDAP'], 0, 'The Communist Party.', 'left'),
  Q('gd5.p3', 'Who was declared Chancellor in March 1920?', ['Wolfgang Kapp', 'Gustav Stresemann', 'Walther Rathenau'], 0, 'By Freikorps troops.', 'right'),
  Q('gd5.p4', 'What defeated the Kapp Putsch?', ['A general strike', 'A French invasion', 'A vote in the Reichstag'], 0, 'Berlin stopped working.', 'right'),
  Q('gd5.p5', 'Who was murdered in June 1922?', ['Walther Rathenau', 'Friedrich Ebert', 'Wolfgang Kapp'], 0, 'The Foreign Minister.', 'murders'),
], [
  Q('gd5.c1', 'Who murdered Luxemburg and Liebknecht?', ['Freikorps soldiers', 'Communist rivals', 'French soldiers'], 0, 'After their capture.', 'left'),
  Q('gd5.c2', 'Where was a Soviet Republic set up in 1919?', ['Bavaria', 'Saxony', 'The Rhineland'], 0, 'It was crushed in May.', 'left'),
  Q('gd5.c3', 'Why did the army not stop Kapp?', ['It would not fire on fellow soldiers', 'It was still occupying parts of France', 'It wanted the Kaiser to rule again'], 0, 'The government fled.', 'right'),
  Q('gd5.c4', 'Where did Kapp flee?', ['Sweden', 'The Netherlands', 'Austria'], 0, 'After four days.', 'right'),
  Q('gd5.c5', 'Which group murdered Erzberger?', ['Organisation Consul', 'The Spartacists', 'The Nazi SA'], 0, 'A right-wing group.', 'murders'),
  Q('gd5.c6', 'How did judges treat right-wing killers?', ['Leniently', 'Harshly', 'With the death penalty'], 0, 'Unlike the left.', 'murders'),
  Q('gd5.c7', 'About how many Freikorps troops entered Berlin in 1920?', ['5,000', '500', '500,000'], 0, 'They marched in with Kapp.', 'right'),
  Q('gd5.c8', 'Where did a workers\' "Red Army" rise in 1920?', ['The Ruhr', 'Bavaria', 'Berlin'], 0, 'It was put down.', 'left'),
], {exam: 'Explain why the Weimar Republic survived the challenges from the left and right, 1919–20. (12 marks)'}),

lesson(T, 'germany.hyperinflation', '1923: the Ruhr and hyperinflation', ['31 1.2'], [
  ['The occupation of the Ruhr', 'At the end of 1922 Germany failed to deliver reparations of timber and coal. In January 1923 about 60,000 French and Belgian troops occupied the Ruhr, Germany\'s main industrial area, to take goods instead. The government ordered passive resistance: workers went on strike and refused to cooperate. The French responded by expelling thousands of people, and over a hundred Germans were killed.'],
  ['Printing money', 'With the Ruhr\'s factories idle, the government lost tax and goods but still paid the striking workers. It printed ever more banknotes, with printing works running day and night. Prices rose faster and faster: a loaf of bread cost about 250 marks in January 1923 and about 200 billion marks in November.'],
  ['Daily life', 'Workers were paid twice a day and rushed to spend their wages before prices rose again. People carried money in baskets and wheelbarrows; some burned notes as fuel. Food shortages followed because farmers would not sell for worthless money.'],
  ['Winners and losers', 'Savers, pensioners and people living on fixed incomes, many of them middle class, lost almost everything. Those with debts or mortgages paid them off with worthless money, and some businessmen bought up property cheaply. Foreigners with dollars could live well. Many middle-class Germans never forgave the republic.'],
], view.factors('Effects of hyperinflation', [
  ['Losers', 'savers, pensioners, people on fixed incomes'],
  ['Winners', 'borrowers, some businesses, farmers, foreigners with hard currency'],
  ['Daily life', 'wages paid twice a day; barter; food shortages'],
  ['Politics', 'lasting middle-class distrust of the republic'],
]), [
  view.timeline('1923', [
    ['Dec 1922', 'Germany misses reparation deliveries'],
    ['Jan 1923', 'French and Belgian troops occupy the Ruhr'],
    ['Jan–Sep 1923', 'Passive resistance; money printed'],
    ['Aug 1923', 'Stresemann becomes Chancellor'],
    ['Sep 1923', 'Passive resistance called off'],
    ['Nov 1923', 'One dollar worth over four trillion marks; new currency'],
  ]),
  view.people('People and groups', [
    ['Ruhr workers', 'Went on strike in passive resistance'],
    ['French and Belgian troops', 'Occupied the Ruhr'],
    ['Pensioners and savers', 'Lost their savings'],
    ['Gustav Stresemann', 'Ended passive resistance'],
  ]),
  view.source('A source type: a 1923 photograph', 'A photograph of children playing with bundles of worthless banknotes in the street.', 'Useful for the scale of the collapse in the value of money; it may have been set up for the camera.'),
], [
  ['Why did the government print so much money?', ['To pay striking Ruhr workers while losing tax and goods', 'To pay for a new war against France and Belgium in 1923', 'Because the Treaty of Versailles ordered it to do so'], 0, 'Passive resistance had to be funded.'],
  ['Why did hyperinflation turn the middle classes against the republic?', ['Their savings and fixed incomes became worthless', 'They were all made to work in the Ruhr factories', 'They had to pay reparations directly to France'], 0, 'They lost the most.'],
  ['Exam skill · Explain why. Which sentence explains why hyperinflation happened?', ['The government printed money to pay striking workers, so the mark rapidly lost its value.', 'By November 1923 one US dollar was worth over four trillion German marks on the exchange.', 'French and Belgian troops occupied the Ruhr industrial area in the January of 1923.'], 0, 'An explanation links the cause to its effect.'],
  ['Who could gain from hyperinflation?', ['People with debts, who paid them off with worthless money', 'Pensioners whose pensions stayed exactly the same amount', 'Savers who had put their money in the bank before 1914'], 0, 'Debts lost their value too.'],
], [
  Q('gd6.p1', 'When did troops occupy the Ruhr?', ['January 1923', 'June 1919', 'November 1918'], 0, 'French and Belgian troops.', 'ruhr'),
  Q('gd6.p2', 'What did Ruhr workers do?', ['Passive resistance', 'Join the French', 'Fight the troops'], 0, 'They went on strike.', 'ruhr'),
  Q('gd6.p3', 'About what did bread cost in November 1923?', ['200 billion marks', 'About 250 marks', 'About 2,000 marks'], 0, 'From 250 in January.', 'printing'),
  Q('gd6.p4', 'How often were some workers paid?', ['Twice a day', 'Once a month', 'Once a year'], 0, 'Prices rose by the hour.', 'daily-life'),
  Q('gd6.p5', 'Who lost most from hyperinflation?', ['Savers and pensioners', 'Borrowers with debts', 'Foreigners with dollars'], 0, 'Fixed incomes were ruined.', 'winners'),
], [
  Q('gd6.c1', 'About how many troops occupied the Ruhr?', ['60,000', '6,000', '600,000'], 0, 'French and Belgian.', 'ruhr'),
  Q('gd6.c2', 'What had Germany failed to deliver?', ['Timber and coal', 'Gold and silver', 'Ships and tanks'], 0, 'Reparations in kind.', 'ruhr'),
  Q('gd6.c3', 'What did the French do to resisters?', ['Expelled thousands', 'Paid them wages', 'Ignored them all'], 0, 'Over a hundred were killed.', 'ruhr'),
  Q('gd6.c4', 'Why did farmers stop selling food?', ['Money was worthless', 'They were on strike', 'It was illegal'], 0, 'Shortages followed.', 'daily-life'),
  Q('gd6.c5', 'Who ended passive resistance?', ['Stresemann', 'Ebert', 'Hitler'], 0, 'He did it in September 1923.', 'ruhr'),
  Q('gd6.c6', 'What was a dollar worth in November 1923?', ['Over four trillion marks', 'About four hundred marks', 'About four thousand marks'], 0, 'Money had collapsed.', 'printing'),
  Q('gd6.c7', 'Who could live well in 1923?', ['Foreigners with dollars', 'Pensioners on fixed incomes', 'Savers with bank accounts'], 0, 'Hard currency was valuable.', 'winners'),
  Q('gd6.c8', 'What did some people burn as fuel?', ['Banknotes', 'Furniture only', 'Coal'], 0, 'Cheaper than firewood.', 'daily-life'),
], {exam: 'Explain why there was hyperinflation in Germany in 1923. (12 marks)'}),

lesson(T, 'germany.dawes-young', 'Stresemann and economic recovery', ['31 1.3'], [
  ['Ending the crisis', 'Gustav Stresemann became Chancellor in August 1923. In September he called off passive resistance and promised to resume reparations, a decision nationalists attacked as surrender. In November a new currency, the Rentenmark, was issued in strictly limited amounts, and in 1924 it was replaced by the Reichsmark, controlled by an independent central bank.'],
  ['The Dawes Plan, 1924', 'An international committee led by the American banker Charles Dawes rescheduled reparations: Germany would pay 1 billion marks in the first year, rising to 2.5 billion by 1929. The USA lent 800 million gold marks to start recovery, and the French left the Ruhr by 1925.'],
  ['American loans', 'Between 1924 and 1930 Germany borrowed about 25 billion marks, mainly from the USA. The money paid for new factories, roads, housing and public buildings, and by 1928 industrial output was higher than before the war. But many loans were short-term and could be recalled at any moment.'],
  ['The Young Plan, 1929', 'The Young Plan cut the total reparations bill to about £1.85 billion, to be paid over 59 years, and Allied troops left the Rhineland in 1930. Nationalists, led by Alfred Hugenberg and joined by Hitler, campaigned for a referendum to reject it, but only about 14 per cent of voters supported them. The campaign gave the Nazis national publicity.'],
], view.factors('How far did the economy recover?', [
  ['Recovery', 'stable currency; loans; output above pre-war by 1928'],
  ['Reparations', 'reduced and rescheduled by Dawes and Young'],
  ['Weakness', 'dependence on short-term US loans'],
  ['Opposition', 'nationalists attacked every agreement to pay'],
]), [
  view.timeline('Recovery, 1923–30', [
    ['Aug 1923', 'Stresemann becomes Chancellor'],
    ['Nov 1923', 'The Rentenmark introduced'],
    ['1924', 'Dawes Plan; Reichsmark introduced'],
    ['1925', 'French troops leave the Ruhr'],
    ['1928', 'Industrial output above pre-war level'],
    ['1929', 'Young Plan; referendum campaign'],
    ['1930', 'Allied troops leave the Rhineland'],
  ]),
  view.people('People', [
    ['Gustav Stresemann', 'Chancellor 1923, then Foreign Minister'],
    ['Charles Dawes', 'US banker who led the 1924 plan'],
    ['Owen Young', 'US businessman who led the 1929 plan'],
    ['Alfred Hugenberg', 'Nationalist leader who opposed the Young Plan'],
  ]),
  view.source('A source type: a 1929 referendum poster', 'A nationalist poster showing German families bent under the weight of reparations for generations to come.', 'Useful for nationalist arguments against the Young Plan; it was made to persuade, so it exaggerates the burden.'),
], [
  ['Why was the recovery fragile?', ['It depended on short-term US loans that could be recalled', 'It depended on Germany winning back its lost colonies', 'It relied on printing even more money than in 1923'], 0, 'Borrowed prosperity.'],
  ['Why did the Young Plan anger nationalists?', ['Germany still had to pay reparations for decades', 'It made Germany pay far more than the Dawes Plan', 'It gave the Rhineland permanently to France'], 0, 'Any payment was unacceptable to them.'],
  ['Exam skill · Explain why. Which sentence explains why the economy recovered after 1924?', ['The Dawes Plan brought US loans and lower payments, so industry could invest and grow.', 'Charles Dawes was an American banker who led an international committee in 1924.', 'The Reichsmark replaced the Rentenmark as Germany\'s official currency in 1924.'], 0, 'An explanation links the cause to its effect.'],
  ['What did calling off passive resistance achieve?', ['It let reparations and normal work resume', 'It forced the French to leave Germany at once', 'It cancelled all of Germany\'s reparations'], 0, 'The first step to recovery.'],
], [
  Q('gd7.p1', 'Which currency was introduced in November 1923?', ['The Rentenmark', 'The Reichsmark', 'The euro'], 0, 'Issued in limited amounts.', 'currency'),
  Q('gd7.p2', 'Who led the 1924 plan?', ['Charles Dawes', 'Owen Young', 'Woodrow Wilson'], 0, 'An American banker.', 'dawes'),
  Q('gd7.p3', 'About how much did Germany borrow 1924–30?', ['25 billion marks', '25 million marks', '25 trillion marks'], 0, 'Mainly from the USA.', 'loans'),
  Q('gd7.p4', 'Over how many years did the Young Plan spread payments?', ['59 years', '5 years', '9 years'], 0, 'Until the 1980s.', 'young'),
  Q('gd7.p5', 'When did Allied troops leave the Rhineland?', ['1930', '1925', '1919'], 0, 'After the Young Plan.', 'young'),
], [
  Q('gd7.c1', 'What did the Young Plan cut reparations to?', ['About £1.85 billion', 'About £6.6 billion', 'Nothing'], 0, 'From £6.6 billion.', 'young'),
  Q('gd7.c2', 'What did Germany pay in the first Dawes year?', ['1 billion marks', '10 billion marks', '100 marks'], 0, 'Rising to 2.5 billion.', 'dawes'),
  Q('gd7.c3', 'How much did the USA lend under Dawes?', ['800 million gold marks', '8 million paper marks', '80 billion gold marks'], 0, 'To start recovery.', 'dawes'),
  Q('gd7.c4', 'By when was output above pre-war?', ['1928', '1923', '1919'], 0, 'Industry recovered.', 'loans'),
  Q('gd7.c5', 'Who led the referendum against the Young Plan?', ['Alfred Hugenberg', 'Gustav Stresemann', 'Friedrich Ebert'], 0, 'Hitler joined his campaign.', 'young'),
  Q('gd7.c6', 'What share of voters backed the nationalists?', ['About 14 per cent', 'About 90 per cent', 'About 50 per cent'], 0, 'But the Nazis gained publicity.', 'young'),
  Q('gd7.c7', 'When did the French leave the Ruhr?', ['By 1925', 'In 1923', 'In 1930'], 0, 'After the Dawes Plan.', 'dawes'),
  Q('gd7.c8', 'What was risky about the loans?', ['They could be recalled', 'They had to be repaid in gold', 'They came from France'], 0, 'Many were short-term.', 'loans'),
], {exam: 'Explain why the German economy recovered in the years 1924–29. (12 marks)'}),

lesson(T, 'germany.locarno', 'Locarno, the League and Kellogg-Briand', ['31 1.3'], [
  ['The Locarno Pact, 1925', 'In October 1925 Germany, France, Belgium, Britain and Italy met at Locarno in Switzerland. Germany accepted its western borders with France and Belgium as permanent and agreed that the Rhineland would stay demilitarised. Its eastern borders were not fixed, but Germany agreed to settle disputes there peacefully. Stresemann and the French minister Aristide Briand shared the Nobel Peace Prize in 1926.'],
  ['The League of Nations, 1926', 'In September 1926 Germany joined the League of Nations and was given a permanent seat on its council, alongside Britain, France, Italy and Japan. It was a sign that Germany was again treated as a great power, and gave Stresemann a platform to press for changes to Versailles.'],
  ['The Kellogg-Briand Pact, 1928', 'In 1928 Germany was one of the first countries to sign the Kellogg-Briand Pact, which eventually over 60 nations joined, promising not to use war to settle disputes. It had no means of enforcement, but it showed Germany taking part in international efforts for peace.'],
  ['Reactions at home', 'Supporters believed Stresemann was winning back Germany\'s position by cooperation. Nationalists accused him of accepting Versailles by agreeing to the western borders. Stresemann died in October 1929, weeks before the Wall Street Crash; no later politician had his standing abroad.'],
], view.factors('Stresemann\'s foreign policy', [
  ['Aim', 'revise Versailles by cooperation, not confrontation'],
  ['Achievements', 'Locarno 1925; League seat 1926; Kellogg-Briand 1928; Young Plan 1929'],
  ['Limits', 'eastern borders unsettled; Versailles still in force'],
  ['Critics', 'nationalists saw cooperation as betrayal'],
]), [
  view.timeline('Foreign policy, 1925–29', [
    ['Oct 1925', 'Locarno Pact agreed'],
    ['Sep 1926', 'Germany joins the League'],
    ['Dec 1926', 'Stresemann and Briand awarded Nobel Peace Prize'],
    ['Aug 1928', 'Kellogg-Briand Pact signed'],
    ['Oct 1929', 'Stresemann dies'],
  ]),
  view.people('People', [
    ['Gustav Stresemann', 'German Foreign Minister, 1923–29'],
    ['Aristide Briand', 'French Foreign Minister'],
    ['Frank Kellogg', 'US Secretary of State'],
    ['German nationalists', 'Attacked Stresemann\'s policy'],
  ]),
  view.source('A source type: a cartoon of the Locarno talks', 'A British cartoon showing European ministers shaking hands around a table under the word "peace".', 'Useful for British hopes about Locarno; it shows an outside view and says nothing about German reactions.'),
], [
  ['Why did nationalists attack Locarno?', ['Accepting the western borders seemed to accept Versailles', 'It required Germany to give the Ruhr to France for ever', 'It brought back the Kaiser as head of the German state'], 0, 'Acceptance looked like surrender.'],
  ['Why was a permanent League council seat important?', ['It showed that Germany was again treated as a great power', 'It allowed Germany to rebuild its air force straight away', 'It meant Germany no longer had to obey any treaty terms'], 0, 'Status restored.'],
  ['Exam skill · Explain why. Which sentence explains why Stresemann\'s foreign policy helped the republic?', ['Germany was accepted abroad again, which gave the republic more prestige and stability at home.', 'Germany joined the League of Nations and its council in the September of the year 1926.', 'Stresemann shared the Nobel Peace Prize with the French minister Aristide Briand in 1926.'], 0, 'An explanation links the cause to its effect.'],
  ['What was a weakness of Kellogg-Briand?', ['It had no way of enforcing its promise', 'It made Germany pay higher reparations', 'It was signed by only two countries'], 0, 'Promises without force.'],
], [
  Q('gd8.p1', 'When was the Locarno Pact agreed?', ['1925', '1919', '1933'], 0, 'At Locarno in Switzerland.', 'locarno'),
  Q('gd8.p2', 'Which borders did Germany accept at Locarno?', ['Western', 'Eastern', 'Northern'], 0, 'With France and Belgium.', 'locarno'),
  Q('gd8.p3', 'When did Germany join the League?', ['1926', '1919', '1929'], 0, 'With a permanent council seat.', 'league'),
  Q('gd8.p4', 'What did Kellogg-Briand promise?', ['Not to use war', 'Lower reparations', 'Free trade'], 0, 'To settle disputes.', 'kellogg'),
  Q('gd8.p5', 'Who shared the Nobel Peace Prize with Stresemann?', ['Aristide Briand', 'Charles Dawes', 'Frank Kellogg'], 0, 'The French Foreign Minister.', 'locarno'),
], [
  Q('gd8.c1', 'Where is Locarno?', ['Switzerland', 'France', 'Belgium'], 0, 'A neutral country.', 'locarno'),
  Q('gd8.c2', 'What stayed demilitarised under Locarno?', ['The Rhineland', 'The Ruhr', 'The Saar'], 0, 'As at Versailles.', 'locarno'),
  Q('gd8.c3', 'About how many nations joined Kellogg-Briand?', ['Over 60', 'About 6', 'About 600'], 0, 'Over 60 nations joined eventually.', 'kellogg'),
  Q('gd8.c4', 'When did Stresemann die?', ['October 1929', 'January 1933', 'November 1923'], 0, 'Before the Crash.', 'reactions'),
  Q('gd8.c5', 'What did nationalists accuse Stresemann of?', ['Accepting Versailles', 'Starting a new war', 'Printing more money'], 0, 'Over the western borders.', 'reactions'),
  Q('gd8.c6', 'What did Germany agree about its eastern borders?', ['To settle disputes peacefully', 'To give up all claims for ever', 'To take back land by force'], 0, 'They were not fixed.', 'locarno'),
  Q('gd8.c7', 'What was Stresemann\'s aim?', ['Revise Versailles by cooperation', 'Restore the Kaiser to the throne', 'Win back colonies by force'], 0, 'Not confrontation.', 'reactions'),
  Q('gd8.c8', 'When was Kellogg-Briand signed?', ['1928', '1925', '1926'], 0, 'Germany signed early.', 'kellogg'),
], {exam: 'Explain why Germany\'s international position improved in the years 1924–29. (12 marks)'}),

lesson(T, 'germany.living-1920s', 'The standard of living in the 1920s', ['31 1.4'], [
  ['Wages and hours', 'With the economy recovering, real wages rose: by 1928 many German workers were among the best paid in Europe. Working hours fell, and many workers had an eight-hour day. Trade unions were strong and could negotiate improvements.'],
  ['Housing', 'Housing was badly overcrowded after the war. With money from a tax on rents and from loans, the states and councils built over two million homes between 1924 and 1931, many in large modern estates with gardens, lighting and running water.'],
  ['Welfare', 'The 1927 Unemployment Insurance Act made workers and employers pay into a fund that gave benefits to about 17 million workers if they lost their jobs. Pensions and health insurance also improved, and the republic supported war veterans, widows and orphans.'],
  ['Who was left behind', 'The middle classes who had lost their savings in 1923 received only a fraction back under a 1925 revaluation law. Farmers faced falling food prices from the late 1920s and many fell into debt. Unemployment never fell much below a million, and the benefit fund could not cope with a deep depression.'],
], view.factors('How far did living standards improve?', [
  ['Improved', 'higher real wages; shorter hours; new housing'],
  ['Welfare', 'unemployment insurance, pensions, support for veterans'],
  ['Left behind', 'middle-class savers; indebted farmers'],
  ['Weakness', 'welfare spending depended on a growing economy'],
]), [
  view.timeline('Living standards', [
    ['1924', 'Recovery begins; house building increases'],
    ['1925', 'Revaluation law gives savers a fraction back'],
    ['1927', 'Unemployment Insurance Act'],
    ['1928', 'Real wages at their 1920s peak'],
    ['1924–31', 'Over two million homes built'],
  ]),
  view.people('Groups', [
    ['Industrial workers', 'Higher wages and shorter hours'],
    ['Tenants', 'Moved into new estates'],
    ['Middle-class savers', 'Never recovered their losses'],
    ['Farmers', 'Hit by falling prices and debt'],
  ]),
  view.source('A source type: a photograph of a new housing estate', 'A photograph of a modern Berlin housing estate of the late 1920s with flat roofs, large windows and gardens.', 'Useful for what new housing looked like; it shows one showcase estate, not how most families lived.'),
], [
  ['Why did many workers\' lives improve after 1924?', ['Real wages rose, hours fell and new homes were built', 'The government gave every worker a free car and holidays', 'All workers were given land to farm in the countryside'], 0, 'Recovery benefited workers.'],
  ['Why did many in the middle classes stay resentful?', ['They received only a fraction of their lost savings back', 'They were forced to move into the new housing estates', 'They had to pay all of the reparations themselves'], 0, 'Losses of 1923 remained.'],
  ['Exam skill · Explain why. Which sentence explains a weakness in the improvement in living standards?', ['Welfare depended on a growing economy, so a depression would leave the fund unable to cope.', 'The Unemployment Insurance Act was passed by the Reichstag in the year 1927 and covered millions.', 'Over two million new homes were built in Germany between the years 1924 and 1931.'], 0, 'An explanation links the cause to its effect.'],
  ['How did the 1927 Act work?', ['Workers and employers paid into a fund for unemployment benefit', 'The government paid every unemployed person a full wage', 'Employers were banned from ever making workers redundant'], 0, 'Insurance contributions.'],
], [
  Q('gd9.p1', 'When was the Unemployment Insurance Act?', ['1927', '1919', '1933'], 0, 'Covering about 17 million workers.', 'welfare'),
  Q('gd9.p2', 'About how many homes were built 1924–31?', ['Over two million', 'About 2,000', 'About 200 million'], 0, 'By states and councils.', 'housing'),
  Q('gd9.p3', 'Which group lost savings in 1923?', ['The middle classes', 'Foreign bankers', 'Factory owners'], 0, 'Little of their savings was returned.', 'left-behind'),
  Q('gd9.p4', 'What faced farmers in the late 1920s?', ['Falling food prices', 'Rising food prices', 'Free land'], 0, 'Many fell into debt.', 'left-behind'),
  Q('gd9.p5', 'What happened to real wages after 1924?', ['They rose', 'They collapsed', 'They stayed the same'], 0, 'Recovery helped workers.', 'wages'),
], [
  Q('gd9.c1', 'About how many workers did the 1927 Act cover?', ['17 million', '17,000', '1.7 million'], 0, 'Most of the workforce.', 'welfare'),
  Q('gd9.c2', 'Who paid into the unemployment fund?', ['Workers and employers', 'Only the President\'s office', 'Only the farmers'], 0, 'An insurance scheme.', 'welfare'),
  Q('gd9.c3', 'When was the revaluation law?', ['1925', '1929', '1919'], 0, 'Returning a fraction.', 'left-behind'),
  Q('gd9.c4', 'What did unemployment rarely fall below?', ['About a million', 'About a thousand', 'Zero'], 0, 'Even in good years.', 'left-behind'),
  Q('gd9.c5', 'How long was many workers\' day?', ['Eight hours', 'Twelve hours', 'Four hours'], 0, 'Working hours fell.', 'wages'),
  Q('gd9.c6', 'What helped pay for new housing?', ['A tax on rents', 'Reparations', 'The Kaiser\'s money'], 0, 'Together with loans.', 'housing'),
  Q('gd9.c7', 'Who negotiated better pay?', ['Trade unions', 'The Freikorps', 'The Reichsrat'], 0, 'They were strong.', 'wages'),
  Q('gd9.c8', 'Which group did the republic support with pensions?', ['War veterans and widows', 'Only soldiers in service', 'Foreign workers'], 0, 'A legacy of the war.', 'welfare'),
], {exam: 'Explain why the standard of living improved for many Germans in the years 1924–29. (12 marks)'}),

lesson(T, 'germany.weimar-women', 'Women in Weimar Germany', ['31 1.4'], [
  ['Political rights', 'The constitution gave women over 20 the vote and stated that men and women had the same basic rights. In 1919, 37 women were elected to the National Assembly, almost one in ten members (more joined later in its term), and over 30 sat in the Reichstag in the 1920s, more than in many other countries.'],
  ['Work', 'More women worked in offices, shops and the professions: by the mid-1920s about 100,000 worked in the civil service, and more qualified as teachers, doctors and lawyers. But many women who had worked in factories during the war lost their jobs to returning soldiers, and women were usually paid less than men.'],
  ['The "new woman"', 'In the cities a "new woman" appeared in films, magazines and adverts: with short hair, make-up and fashionable clothes, she smoked, drank, went out alone and played sport. Divorce became easier and more common, and the birth rate fell.'],
  ['Limits and reactions', 'Most women, especially in the countryside and small towns, lived much as before, running homes and families. Conservatives, the churches and nationalists saw the "new woman" as a threat to the family and to Germany, a view the Nazis later used.'],
], view.factors('How far did women\'s lives change?', [
  ['Politics', 'vote at 20; equal rights in law; women in the Reichstag'],
  ['Work', 'more office and professional jobs; lower pay; wartime jobs lost'],
  ['Social', 'the "new woman"; easier divorce; falling birth rate'],
  ['Continuity', 'rural and small-town life changed little'],
]), [
  view.timeline('Women, 1918–29', [
    ['1918', 'Women given the vote'],
    ['1919', '37 women elected to the National Assembly'],
    ['1919', 'Constitution states equal rights'],
    ['Mid-1920s', 'About 100,000 women in the civil service'],
    ['Late 1920s', 'The "new woman" in films and magazines'],
  ]),
  view.people('Groups', [
    ['Women politicians', 'Sat in the Reichstag'],
    ['Office and professional workers', 'A growing group of women workers'],
    ['The "new woman"', 'A symbol of change in the cities'],
    ['Conservatives and churches', 'Opposed the changes'],
  ]),
  view.source('A source type: a 1920s magazine cover', 'A Berlin magazine cover showing a young woman with short hair and a cigarette, driving a car.', 'Useful for how the "new woman" was presented in the city; magazine images were aimed at sales and show an ideal, not most women\'s lives.'),
], [
  ['Why did many conservatives oppose the "new woman"?', ['They saw her as a threat to the family and traditional values', 'She refused to vote in any of the elections held after 1919', 'She wanted to go back to working in the wartime factories'], 0, 'A clash of values.'],
  ['Why is it wrong to say all women\'s lives changed?', ['Most women outside the cities lived much as before', 'Women were banned from voting until the year 1933', 'No women at all worked outside the home in the 1920s'], 0, 'Change was uneven.'],
  ['Exam skill · Inference. A 1920s cartoon shows a man looking shocked at a woman smoking in a café. What can you infer?', ['Some people disapproved of women\'s new freedoms.', 'The café was in Berlin and opened in the year 1925.', 'Women were given the vote in Germany in 1918.'], 0, 'An inference goes beyond what is shown.'],
  ['What happened to many women\'s wartime factory jobs?', ['They were lost to returning soldiers', 'They became better paid than men\'s', 'They were all made permanent by law'], 0, 'The return of the men.'],
], [
  Q('gd10.p1', 'At what age could women vote?', ['20', '25', '30'], 0, 'The same as men.', 'rights'),
  Q('gd10.p2', 'How many women were elected in 1919?', ['37', '4', '370'], 0, 'Almost one in ten members.', 'rights'),
  Q('gd10.p3', 'About how many women were in the civil service by the mid-1920s?', ['100,000', '1,000', '10 million'], 0, 'A growing group.', 'work'),
  Q('gd10.p4', 'What was a feature of the "new woman"?', ['Short hair and make-up', 'Long skirts and bonnets', 'A uniform'], 0, 'She was seen in the cities.', 'new-woman'),
  Q('gd10.p5', 'What happened to the birth rate?', ['It fell', 'It rose sharply', 'It stayed the same'], 0, 'Families became smaller.', 'new-woman'),
], [
  Q('gd10.c1', 'What did the constitution say about men and women?', ['Same basic rights', 'Men must rule', 'Women cannot work'], 0, 'Equality in law.', 'rights'),
  Q('gd10.c2', 'How were women usually paid?', ['Less than men', 'More than men', 'The same as men'], 0, 'Despite equality in law.', 'work'),
  Q('gd10.c3', 'What became easier?', ['Divorce', 'Joining the army', 'Owning colonies'], 0, 'And more common.', 'new-woman'),
  Q('gd10.c4', 'Where did women\'s lives change least?', ['The countryside', 'Berlin', 'Hamburg'], 0, 'Tradition continued.', 'limits'),
  Q('gd10.c5', 'Who saw the "new woman" as a threat?', ['Conservatives and churches', 'Film makers and actors', 'Magazine editors'], 0, 'A threat to the family, they said.', 'limits'),
  Q('gd10.c6', 'Which professions did more women enter?', ['Teaching, medicine and law', 'The army and the navy', 'Coal mining and steel'], 0, 'Professional work grew.', 'work'),
  Q('gd10.c7', 'How many women sat in the Reichstag in the 1920s?', ['Over 30', 'None', 'Over 300'], 0, 'More than in many countries.', 'rights'),
  Q('gd10.c8', 'Who later used conservative views of women?', ['The Nazis', 'The Spartacists', 'The Allies'], 0, 'In their family policy.', 'limits'),
], {exam: 'Give two things you can infer from a 1920s magazine cover about the changing position of women in Weimar Germany. (4 marks)'}),

lesson(T, 'germany.weimar-culture', 'Weimar culture', ['31 1.4'], [
  ['Freedom and experiment', 'The constitution ended censorship, and the 1920s became a time of artistic experiment, especially in Berlin. Artists of the "New Objectivity" movement, such as Otto Dix and George Grosz, painted war cripples, poverty and greedy businessmen. Max Beckmann painted disturbing scenes of modern life.'],
  ['Architecture and design', 'The Bauhaus, founded by Walter Gropius at Weimar in 1919, moved to Dessau in 1925. It taught that buildings and everyday objects should be simple, functional and made with modern materials such as steel and glass. Its ideas spread worldwide; the Nazis closed it in 1933.'],
  ['Theatre, books and music', 'Bertolt Brecht\'s plays, such as The Threepenny Opera (1928) with music by Kurt Weill, mocked the rich and the powerful. Erich Maria Remarque\'s novel All Quiet on the Western Front (1929) showed the horror of war and sold millions. Jazz and cabaret were popular in Berlin\'s clubs.'],
  ['Cinema and reaction', 'German cinema led the world: The Cabinet of Dr Caligari (1920), Metropolis (1927) and The Blue Angel (1930), starring Marlene Dietrich. Nationalists and conservatives called much of the new culture immoral, unpatriotic and "un-German", and many in small towns found it shocking. The Nazis promised to sweep it away.'],
], view.factors('Weimar culture: who welcomed it, who opposed it', [
  ['Art', 'Dix, Grosz, Beckmann: critical and experimental'],
  ['Design', 'the Bauhaus: simple, functional, modern'],
  ['Stage, page and screen', 'Brecht, Remarque, Metropolis, cabaret, jazz'],
  ['Opposition', 'nationalists, churches and conservatives saw it as "un-German"'],
]), [
  view.timeline('Weimar culture', [
    ['1919', 'Bauhaus founded at Weimar'],
    ['1920', 'The Cabinet of Dr Caligari'],
    ['1925', 'Bauhaus moves to Dessau'],
    ['1927', 'Metropolis released'],
    ['1928', 'The Threepenny Opera'],
    ['1929', 'All Quiet on the Western Front published'],
    ['1933', 'The Nazis close the Bauhaus'],
  ]),
  view.people('People', [
    ['Walter Gropius', 'Founded the Bauhaus'],
    ['Otto Dix and George Grosz', 'Painted harsh scenes of German life'],
    ['Bertolt Brecht', 'Playwright who mocked the powerful'],
    ['Marlene Dietrich', 'Film star of The Blue Angel'],
  ]),
  view.source('A source type: a painting by Otto Dix', 'A 1920s painting showing disabled war veterans begging in a city street while well-dressed people walk past.', 'Useful for one artist\'s criticism of society; it is deliberately exaggerated to make a point.'),
], [
  ['Why did culture change so much in the 1920s?', ['Censorship ended and artists were free to experiment', 'The government paid artists to paint only war heroes', 'The Kaiser returned and encouraged new forms of art'], 0, 'Freedom allowed experiment.'],
  ['Why did nationalists dislike Weimar culture?', ['They saw it as immoral and un-German', 'They thought it praised the army too much', 'They believed it supported the Kaiser'], 0, 'A clash of values.'],
  ['Exam skill · Inference. A Grosz drawing shows fat businessmen eating while a soldier begs. What can you infer?', ['Grosz believed that the rich ignored the suffering of others.', 'Grosz drew the picture in 1921 while he lived in Berlin.', 'Businessmen in Germany ate at restaurants in the 1920s.'], 0, 'An inference goes beyond what is shown.'],
  ['What did the Bauhaus believe?', ['Design should be simple, functional and modern', 'Buildings should copy those of ancient Rome', 'Only churches should be built in Germany'], 0, 'Form follows function.'],
], [
  Q('gd11.p1', 'Who founded the Bauhaus?', ['Walter Gropius', 'Otto Dix', 'Bertolt Brecht'], 0, 'At Weimar in 1919.', 'bauhaus'),
  Q('gd11.p2', 'Which film was released in 1927?', ['Metropolis', 'The Blue Angel', 'Triumph of the Will'], 0, 'Directed by Fritz Lang.', 'cinema'),
  Q('gd11.p3', 'Who wrote The Threepenny Opera?', ['Bertolt Brecht', 'Erich Maria Remarque', 'Thomas Mann'], 0, 'With music by Kurt Weill.', 'stage'),
  Q('gd11.p4', 'Which painter showed war cripples and poverty?', ['Otto Dix', 'Walter Gropius', 'Fritz Lang'], 0, 'New Objectivity.', 'art'),
  Q('gd11.p5', 'Who closed the Bauhaus in 1933?', ['The Nazis', 'The Allies', 'The Communists'], 0, 'They saw it as un-German.', 'bauhaus'),
], [
  Q('gd11.c1', 'Where did the Bauhaus move in 1925?', ['Dessau', 'Munich', 'Hamburg'], 0, 'It moved from Weimar.', 'bauhaus'),
  Q('gd11.c2', 'Which novel showed the horror of war?', ['All Quiet on the Western Front', 'The Cabinet of Dr Caligari', 'The Threepenny Opera'], 0, 'By Remarque, 1929.', 'stage'),
  Q('gd11.c3', 'Who starred in The Blue Angel?', ['Marlene Dietrich', 'Leni Riefenstahl', 'Rosa Luxemburg'], 0, 'The film came out in 1930.', 'cinema'),
  Q('gd11.c4', 'Which music was popular in Berlin clubs?', ['Jazz', 'Opera only', 'Military marches'], 0, 'Alongside cabaret.', 'stage'),
  Q('gd11.c5', 'What was the art movement of Dix and Grosz?', ['New Objectivity', 'Romanticism', 'Impressionism'], 0, 'Harsh realism about society.', 'art'),
  Q('gd11.c6', 'Which materials did the Bauhaus favour?', ['Steel and glass', 'Wood and thatch', 'Marble'], 0, 'Modern materials.', 'bauhaus'),
  Q('gd11.c7', 'What did the constitution end?', ['Censorship', 'Elections', 'Taxes'], 0, 'Freeing artists.', 'art'),
  Q('gd11.c8', 'What did critics call the new culture?', ['Un-German', 'Too patriotic', 'Too old-fashioned'], 0, 'Immoral and unpatriotic.', 'reaction'),
], {exam: 'Explain why there were changes in German culture in the years 1919–29. (12 marks)'}),
];
