// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 3 Option 31: Weimar and Nazi Germany, 1918–39.
// Key topic 1: The Weimar Republic, 1918–29 (specification 1.1–1.4).
// All teaching text and questions are original; sources and interpretations are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

export const germanyTopic1 = {id: 'history.germany.kt1', unit: '31', title: 'The Weimar Republic, 1918–29', paper: 'Paper 3 · Modern depth study'};
const T = germanyTopic1.id;

export const germanyLessons1 = [
lesson(T, 'germany.origins', 'The origins of the Weimar Republic, 1918–19', ['31 1.1'], [
  ['The legacy of the war', 'By 1918 about two million German soldiers had died. A British naval blockade caused food and fuel shortages, and the government had borrowed heavily to pay for the war. Many Germans had been told they were winning, so defeat came as a shock.'],
  ['Revolution and abdication', 'In late 1918 sailors mutinied at Kiel and workers\' and soldiers\' councils took control in many towns. On 9 November Kaiser Wilhelm II abdicated and fled to the Netherlands. Friedrich Ebert, leader of the Social Democrats (SPD), became head of a new government, and a republic was declared.'],
  ['The armistice', 'On 11 November 1918 civilian politicians signed the armistice that ended the fighting. Nationalists later called them the "November Criminals" and spread the "stab-in-the-back" myth: the claim that the army had not been defeated but betrayed by politicians at home.'],
  ['The constitution', 'Because Berlin was unsafe, the new National Assembly met in the town of Weimar in 1919. The constitution created a President elected every seven years, a Chancellor who needed the Reichstag\'s support, and a Reichstag elected every four years by proportional representation. All adults over 20, including women, could vote, and basic rights were guaranteed. But proportional representation produced many small parties and weak coalitions, and Article 48 let the President rule by decree in an emergency.'],
], view.factors('Strengths and weaknesses of the constitution', [
  ['Strength', 'democratic: men and women over 20 voted; rights such as free speech guaranteed'],
  ['Strength', 'proportional representation gave small parties a fair share of seats'],
  ['Weakness', 'many parties meant short-lived coalition governments'],
  ['Weakness', 'Article 48 let the President bypass the Reichstag in an emergency'],
]), [
  view.timeline('From empire to republic', [
    ['Oct–Nov 1918', 'Naval mutiny at Kiel; councils set up in towns'],
    ['9 Nov 1918', 'The Kaiser abdicates; a republic is declared'],
    ['11 Nov 1918', 'The armistice is signed'],
    ['Jan 1919', 'Elections to the National Assembly'],
    ['Feb 1919', 'The Assembly meets in Weimar; Ebert becomes President'],
    ['Aug 1919', 'The Weimar Constitution comes into force'],
  ]),
  view.people('People', [
    ['Kaiser Wilhelm II', 'Abdicated in November 1918'],
    ['Friedrich Ebert', 'SPD leader and first President of the Republic'],
    ['The "November Criminals"', 'Nationalists\' name for the politicians who signed the armistice'],
    ['The President', 'Elected every seven years; could use Article 48'],
  ]),
  view.source('A source type: a nationalist poster, 1919', 'A poster showing a German soldier being stabbed in the back by a figure representing politicians at home.', 'Useful for the anger many nationalists felt; it was propaganda, so it shows a belief, not what really happened.'),
], [
  ['Why was Article 48 a weakness?', ['It let the President rule by decree and bypass the Reichstag', 'It stopped women from voting until they reached the age of thirty', 'It gave the Kaiser the right to return to power in an emergency'], 0, 'Emergency powers could undermine democracy.'],
  ['What did the "stab-in-the-back" myth claim?', ['The army had been betrayed by politicians rather than defeated', 'The Kaiser had secretly signed the armistice before he fled', 'Britain had broken the armistice by continuing the blockade'], 0, 'The myth blamed the new Republic for defeat.'],
  ['Exam skill · Inference. A source is a photograph of hungry Berliners queuing for food in 1918. What can you infer?', ['There were serious food shortages in Germany by the end of the war.', 'The photograph was taken in the German capital, Berlin, in the year 1918.', 'Germany had more food than it needed and was exporting it to neighbours.'], 0, 'An inference goes beyond what the source literally shows.'],
  ['Why did proportional representation weaken governments?', ['It produced many small parties, so governments were weak coalitions', 'It gave one party every seat in the Reichstag after each election', 'It meant only the President could choose who sat in the Reichstag'], 0, 'Coalitions often collapsed.'],
], [
  Q('ger1.p1', 'When did the Kaiser abdicate?', ['9 November 1918', '11 November 1918', 'August 1919'], 0, 'Two days before the armistice.', 'revolution'),
  Q('ger1.p2', 'Who became the first President of the Republic?', ['Friedrich Ebert', 'Gustav Stresemann', 'Paul von Hindenburg'], 0, 'Hindenburg was elected in 1925.', 'revolution'),
  Q('ger1.p3', 'Where did the National Assembly meet in 1919?', ['Weimar', 'Munich', 'Berlin'], 0, 'Berlin was unsafe at the time.', 'constitution'),
  Q('ger1.p4', 'Which article let the President rule by decree?', ['Article 48', 'Article 231', 'Article 25'], 0, 'Article 231 was the war guilt clause.', 'constitution'),
  Q('ger1.p5', 'From what age could women vote under the constitution?', ['20', '30', '25'], 0, 'The same age as men.', 'constitution'),
], [
  Q('ger1.c1', 'How often was the Reichstag elected?', ['Every four years', 'Every seven years', 'Every single year'], 0, 'The President served seven years.', 'constitution'),
  Q('ger1.c2', 'What were the "November Criminals" blamed for?', ['Signing the armistice', 'Starting the war in 1914', 'Murdering the Kaiser'], 0, 'Nationalists\' name for them.', 'armistice'),
  Q('ger1.c3', 'Where did a naval mutiny begin the revolution?', ['Kiel', 'Weimar', 'The Ruhr'], 0, 'It began in late 1918.', 'revolution'),
  Q('ger1.c4', 'What caused food shortages in 1918?', ['A British naval blockade', 'A drought across Europe', 'French troops in the Ruhr'], 0, 'Imports were cut off.', 'legacy'),
  Q('ger1.c5', 'Which voting system did the constitution use?', ['Proportional representation', 'First past the post', 'Votes for landowners only'], 0, 'Seats matched the share of votes.', 'constitution'),
  Q('ger1.c6', 'Which party did Ebert lead?', ['The Social Democrats (SPD)', 'The Communist Party (KPD)', 'The Nazi Party (NSDAP)'], 0, 'The largest party in 1919.', 'revolution'),
  Q('ger1.c7', 'Who appointed the Chancellor?', ['The President', 'The exiled Kaiser', 'The army generals'], 0, 'The Chancellor needed Reichstag support.', 'constitution'),
  Q('ger1.c8', 'Why was defeat a shock to many Germans?', ['They had been told they were winning', 'The war had lasted only a few weeks', 'No German soldiers had died at all'], 0, 'Propaganda hid the truth.', 'legacy'),
], {exam: 'Explain why the Weimar Republic was unpopular in the years 1918–19. (12 marks)'}),

lesson(T, 'germany.early-challenges', 'Early challenges: Versailles, uprisings and 1923', ['31 1.2'], [
  ['The Treaty of Versailles, 1919', 'Germany lost about 13 per cent of its land, including Alsace-Lorraine and the "Polish corridor", and all its colonies. Its army was limited to 100,000 men, with no air force or submarines, and the Rhineland was demilitarised. Article 231 made Germany accept blame for the war, and reparations were later set at £6.6 billion. Germans called it a diktat, a dictated peace, and blamed the Republic for signing it.'],
  ['Challenges from the left', 'In January 1919 the Spartacists, communists led by Rosa Luxemburg and Karl Liebknecht, tried to seize power in Berlin. Ebert\'s government used the Freikorps, bands of ex-soldiers, to crush the revolt; both leaders were killed.'],
  ['Challenges from the right', 'In March 1920 Wolfgang Kapp and Freikorps units marched into Berlin in the Kapp Putsch. The army refused to fire on them and the government fled. Workers in Berlin went on a general strike, the city stopped working, and the putsch collapsed. Right-wing groups also murdered politicians, such as Walther Rathenau in 1922.'],
  ['The crisis of 1923', 'When Germany fell behind with reparations, French and Belgian troops occupied the Ruhr industrial area in January 1923. Workers there went on strike in passive resistance, and the government paid them by printing money. Prices rocketed: by November 1923 one US dollar was worth over four trillion marks. People with savings, pensions or fixed incomes were ruined, while some borrowers, farmers and businesses gained.'],
], view.factors('Why was 1923 a crisis?', [
  ['Cause', 'missed reparations led France and Belgium to occupy the Ruhr'],
  ['Cause', 'the government printed money to pay striking workers'],
  ['Losers', 'savers, pensioners and people on fixed incomes'],
  ['Winners', 'people with debts to pay off, farmers and some businesses'],
]), [
  view.timeline('1919–23', [
    ['Jan 1919', 'The Spartacist revolt is crushed'],
    ['Jun 1919', 'Germany signs the Treaty of Versailles'],
    ['Mar 1920', 'The Kapp Putsch fails after a general strike'],
    ['1921', 'Reparations set at £6.6 billion'],
    ['Jan 1923', 'French and Belgian troops occupy the Ruhr'],
    ['Nov 1923', 'Hyperinflation peaks'],
  ]),
  view.people('People and groups', [
    ['Rosa Luxemburg and Karl Liebknecht', 'Spartacist leaders killed in 1919'],
    ['The Freikorps', 'Ex-soldiers used against the left, later part of the Kapp Putsch'],
    ['Wolfgang Kapp', 'Led the 1920 putsch in Berlin'],
    ['Walther Rathenau', 'Foreign Minister murdered by right-wing extremists in 1922'],
  ]),
  view.source('A source type: a photograph from 1923', 'A photograph of children using bundles of banknotes as building blocks.', 'Useful evidence of how worthless money became; it may have been posed, and it does not show who suffered most.'),
], [
  ['Why was the Treaty of Versailles so unpopular?', ['Germans saw it as a dictated peace that took land, limited the army and blamed Germany', 'It forced Germany to give back the Kaiser and restore his power over the army', 'It made Germany join the League of Nations straight away against its wishes'], 0, 'It was a diktat, and the Republic was blamed.'],
  ['Why did the Kapp Putsch fail?', ['Workers in Berlin held a general strike that stopped the city', 'The army fired on Kapp\'s men as soon as they entered Berlin', 'The French sent troops into Berlin to protect the government'], 0, 'The workers, not the army, defended the Republic.'],
  ['Exam skill · Explain why. Which explains why hyperinflation happened in 1923?', ['The government printed money to pay striking Ruhr workers, so money quickly lost its value.', 'By November 1923 one US dollar was worth more than four trillion German marks.', 'Hyperinflation was very bad for many Germans, and lots of them were very angry about it.'], 0, 'Explanation links the cause to the effect.'],
  ['Who gained from hyperinflation?', ['People with debts, because they could pay them off with worthless money', 'Pensioners, because their pensions rose faster than prices every week', 'Savers, because the money in their bank accounts grew much larger'], 0, 'It depended on whether you owed money or saved it.'],
], [
  Q('ger2.p1', 'When was the Treaty of Versailles signed?', ['June 1919', 'November 1918', 'January 1923'], 0, 'Germany had no choice.', 'versailles'),
  Q('ger2.p2', 'What was the German army limited to?', ['100,000 men', '1,000,000 men', '10,000 men'], 0, 'With no air force.', 'versailles'),
  Q('ger2.p3', 'Who led the Spartacists?', ['Luxemburg and Liebknecht', 'Kapp and Lüttwitz', 'Ebert and Scheidemann'], 0, 'Both were killed in 1919.', 'left'),
  Q('ger2.p4', 'When was the Kapp Putsch?', ['March 1920', 'January 1919', 'November 1923'], 0, 'It collapsed within days.', 'right'),
  Q('ger2.p5', 'Who occupied the Ruhr in 1923?', ['France and Belgium', 'Britain and the USA', 'Poland and Russia'], 0, 'After missed reparations.', 'ruhr-crisis'),
], [
  Q('ger2.c1', 'What was Article 231?', ['The war guilt clause', 'The emergency powers clause', 'The voting rights clause'], 0, 'Germany accepted blame.', 'versailles'),
  Q('ger2.c2', 'What did Germans call the treaty?', ['A diktat', 'A Putsch', 'A Rentenmark'], 0, 'A dictated peace.', 'versailles'),
  Q('ger2.c3', 'Who crushed the Spartacist revolt?', ['The Freikorps', 'The French army', 'The Nazi SA'], 0, 'Used by Ebert\'s government.', 'left'),
  Q('ger2.c4', 'What did Ruhr workers do in 1923?', ['Passive resistance strikes', 'Joined the French army there', 'Worked longer hours for France'], 0, 'They refused to work for the French.', 'ruhr-crisis'),
  Q('ger2.c5', 'How were striking workers paid?', ['The government printed money', 'France paid them their wages', 'Out of the reparations fund'], 0, 'This fuelled inflation.', 'ruhr-crisis'),
  Q('ger2.c6', 'Which group lost most from hyperinflation?', ['Savers and pensioners', 'People with big debts', 'Farmers selling food'], 0, 'Their money became worthless.', 'ruhr-crisis'),
  Q('ger2.c7', 'Who was murdered by right-wing extremists in 1922?', ['Walther Rathenau', 'Friedrich Ebert', 'Gustav Stresemann'], 0, 'The Foreign Minister.', 'right'),
  Q('ger2.c8', 'What were reparations set at in 1921?', ['£6.6 billion', '£6.6 million', '£66 billion'], 0, 'Paid to the Allies.', 'versailles'),
], {exam: 'Explain why there was opposition to the Weimar Republic in the years 1919–23. (12 marks)'}),

lesson(T, 'germany.recovery', 'Recovery under Stresemann, 1924–29', ['31 1.3'], [
  ['Stresemann', 'Gustav Stresemann was Chancellor from August to November 1923 and then Foreign Minister until his death in 1929. He called off passive resistance in the Ruhr and agreed to resume reparation payments.'],
  ['A new currency', 'In November 1923 a new temporary currency, the Rentenmark, replaced the worthless old marks, backed by land and industry. In 1924 it was replaced by the Reichsmark. Inflation was brought under control.'],
  ['The Dawes and Young Plans', 'The Dawes Plan (1924) reduced annual reparation payments for a time and arranged large loans from the USA, which helped industry recover; French troops left the Ruhr by 1925. The Young Plan (1929) cut the total reparations bill and gave Germany 59 years to pay. Nationalists, including the Nazis, attacked it for still accepting reparations.'],
  ['International agreements', 'Germany signed the Locarno Pact (1925), accepting its western borders; joined the League of Nations as a permanent member of its council (1926); and signed the Kellogg-Briand Pact (1928) with other nations, agreeing not to use war to settle disputes. Germany was accepted again as a great power. But the recovery depended on American loans, which could be recalled.'],
], view.factors('How strong was the recovery?', [
  ['Strengths', 'stable currency; industrial output back to pre-war levels by 1928; better international standing'],
  ['Weaknesses', 'dependence on US loans; reparations still paid; continued nationalist opposition'],
  ['Politics', 'extremist parties won fewer votes in the late 1920s'],
  ['Hidden problems', 'farmers struggled with low prices; unemployment never disappeared'],
]), [
  view.timeline('Stresemann\'s years', [
    ['Aug 1923', 'Stresemann becomes Chancellor'],
    ['Nov 1923', 'The Rentenmark introduced'],
    ['1924', 'The Dawes Plan'],
    ['1925', 'The Locarno Pact'],
    ['1926', 'Germany joins the League of Nations'],
    ['1928', 'The Kellogg-Briand Pact'],
    ['1929', 'The Young Plan; Stresemann dies in October'],
  ]),
  view.people('People', [
    ['Gustav Stresemann', 'Chancellor in 1923, then Foreign Minister'],
    ['Charles Dawes', 'American banker who chaired the 1924 committee'],
    ['Owen Young', 'American businessman behind the 1929 plan'],
    ['Nationalists', 'Opposed any agreement that accepted Versailles'],
  ]),
  view.source('A source type: a cartoon about US loans', 'A cartoon showing Germany balanced on a tower of American money.', 'Useful for the view that recovery was fragile; the cartoonist\'s purpose and nationality affect the message.'),
], [
  ['Why was the Dawes Plan important?', ['It reduced payments for a time and brought large US loans to help industry', 'It cancelled reparations completely and returned Alsace-Lorraine to Germany', 'It gave Germany the right to rebuild its air force and its navy at once'], 0, 'Loans fuelled the recovery.'],
  ['What was the main weakness of the recovery?', ['It depended on American loans that could be recalled', 'It caused hyperinflation to return in the year 1926', 'It made Germany leave the League of Nations in protest'], 0, 'The 1929 crash would expose this.'],
  ['Exam skill · Interpretations. One interpretation says the late 1920s were a "golden age"; another says the recovery was built on weak foundations. Which best explains why they differ?', ['They emphasise different evidence: one stresses stability and culture, the other the reliance on US loans.', 'One of the two historians must have made a simple mistake about the dates of the Dawes Plan.', 'One interpretation is much longer than the other, so it must contain more accurate information.'], 0, 'Interpretations differ because of emphasis and the evidence chosen.'],
  ['What did the Locarno Pact do?', ['Germany accepted its western borders with France and Belgium', 'Germany agreed to pay reparations for another 59 years', 'Germany was allowed to occupy the Ruhr with its own troops'], 0, 'It eased relations with France.'],
], [
  Q('ger3.p1', 'Which new currency was introduced in November 1923?', ['The Rentenmark', 'The Reichsmark', 'The euro'], 0, 'Replaced by the Reichsmark in 1924.', 'currency'),
  Q('ger3.p2', 'When was the Dawes Plan?', ['1924', '1929', '1919'], 0, 'The Young Plan was 1929.', 'dawes-young'),
  Q('ger3.p3', 'When did Germany join the League of Nations?', ['1926', '1919', '1933'], 0, 'As a permanent council member.', 'international'),
  Q('ger3.p4', 'How long did the Young Plan give Germany to pay?', ['59 years', '5 years', '100 years'], 0, 'The total was also reduced.', 'dawes-young'),
  Q('ger3.p5', 'Which pact agreed not to use war to settle disputes?', ['Kellogg-Briand', 'Locarno Pact', 'Versailles Treaty'], 0, 'It was signed in 1928.', 'international'),
], [
  Q('ger3.c1', 'What did Stresemann call off in 1923?', ['Passive resistance in the Ruhr', 'Elections to the Reichstag', 'Germany\'s League membership'], 0, 'Payments then resumed.', 'stresemann'),
  Q('ger3.c2', 'Where did loans under the Dawes Plan come from?', ['The USA', 'France', 'The Soviet Union'], 0, 'They came from American banks.', 'dawes-young'),
  Q('ger3.c3', 'What did the Locarno Pact accept?', ['Germany\'s western borders', 'Germany\'s eastern borders', 'A new German air force'], 0, 'It was signed in 1925.', 'international'),
  Q('ger3.c4', 'Which role did Stresemann hold from 1923 to 1929?', ['Foreign Minister', 'President', 'Leader of the Nazis'], 0, 'He died in 1929.', 'stresemann'),
  Q('ger3.c5', 'Who attacked the Young Plan?', ['Nationalists, including the Nazis', 'The French and Belgian governments', 'American banks and the US government'], 0, 'It still accepted reparations.', 'dawes-young'),
  Q('ger3.c6', 'What happened to French troops in the Ruhr?', ['They left by 1925', 'They stayed until 1939', 'They took over Berlin'], 0, 'After the Dawes Plan.', 'dawes-young'),
  Q('ger3.c7', 'What backed the Rentenmark?', ['Land and industry', 'Gold from the USA', 'British banks'], 0, 'It restored confidence.', 'currency'),
  Q('ger3.c8', 'What happened to support for extremist parties in the late 1920s?', ['It fell', 'It rose sharply', 'It stayed the same'], 0, 'Recovery reduced their appeal.', 'stresemann'),
], {exam: 'Explain why the Weimar Republic recovered in the years 1924–29. (12 marks)'}),

lesson(T, 'germany.weimar-society', 'Changes in society, 1924–29', ['31 1.4'], [
  ['Standard of living', 'Real wages rose in the late 1920s, and working hours fell for many workers. The government and councils built over two million new homes between 1924 and 1931. The Unemployment Insurance Act of 1927 gave workers benefits if they lost their jobs. But the middle classes who had lost savings in 1923 did not recover them, and farmers struggled.'],
  ['Women', 'Women gained the vote in 1919 and over 30 were elected to the Reichstag in the 1920s. More women worked in offices, shops, teaching and the civil service. The "new woman", with short hair, make-up and independent social life, became a symbol of change in the cities. Many conservatives disapproved, and most women\'s lives, especially outside the cities, changed little.'],
  ['Art and architecture', 'With censorship relaxed, artists experimented. The Bauhaus school, founded by Walter Gropius in 1919, designed simple, functional buildings and furniture. Painters such as Otto Dix and George Grosz showed the harsh side of German life and criticised war and the wealthy.'],
  ['Cinema and nightlife', 'Germany\'s film industry was one of the most advanced in the world: Fritz Lang\'s Metropolis (1927) was a famous example. Cabarets in Berlin offered satire and new music. Conservatives and nationalists saw this culture as immoral and un-German.'],
], view.factors('Who welcomed the changes?', [
  ['Welcomed', 'many young city-dwellers, artists and workers with better pay and housing'],
  ['Opposed', 'conservatives, the churches and nationalists who saw the culture as immoral'],
  ['Unchanged', 'many rural communities and many women\'s daily lives'],
  ['Left behind', 'middle classes who had lost savings in 1923; farmers'],
]), [
  view.timeline('Society and culture', [
    ['1919', 'Women gain the vote; the Bauhaus is founded'],
    ['1924–31', 'Over two million new homes built'],
    ['1927', 'Unemployment Insurance Act'],
    ['1927', 'Metropolis released'],
    ['1920s', 'Berlin cabaret culture flourishes'],
  ]),
  view.people('People', [
    ['Walter Gropius', 'Founder of the Bauhaus'],
    ['Otto Dix', 'Painter of war and city life'],
    ['George Grosz', 'Artist who satirised the wealthy and the army'],
    ['Fritz Lang', 'Film director of Metropolis'],
  ]),
  view.source('A source type: a painting by Otto Dix', 'A painting showing wounded ex-soldiers begging in a city street while wealthy people pass by.', 'Useful for an artist\'s critical view of Weimar society; it is a deliberate exaggeration to make a point.'),
], [
  ['Why did conservatives oppose Weimar culture?', ['They saw it as immoral and a threat to traditional German values', 'They believed it was too expensive for the government to pay for', 'They wanted the Bauhaus to design more churches and fewer homes'], 0, 'Culture became a political battleground.'],
  ['How did the Unemployment Insurance Act help workers?', ['It gave them benefits if they lost their jobs', 'It guaranteed that nobody could be made unemployed', 'It forced employers to double the wages of all workers'], 0, 'It was paid for by contributions.'],
  ['Exam skill · Inference. A source is a 1920s magazine cover showing a young woman with short hair driving a car. What can you infer?', ['Some women in the 1920s were enjoying new freedoms and independence.', 'The magazine cover was printed in colour and showed a car in the picture.', 'All German women in the 1920s owned cars and lived in large cities.'], 0, 'An inference is supported by detail but goes beyond it.'],
  ['Why did many middle-class Germans not share in the recovery?', ['They had lost their savings in 1923, and these were never returned', 'They were banned from working in offices and shops during the 1920s', 'They had to pay all of Germany\'s reparations by themselves each year'], 0, 'Recovery was uneven.'],
], [
  Q('ger4.p1', 'Who founded the Bauhaus?', ['Walter Gropius', 'Otto Dix', 'Fritz Lang, the director'], 0, 'He founded it in 1919.', 'culture'),
  Q('ger4.p2', 'Which famous film was released in 1927?', ['Metropolis', 'Triumph of the Will', 'The Eternal Jew'], 0, 'Directed by Fritz Lang.', 'culture'),
  Q('ger4.p3', 'When was the Unemployment Insurance Act?', ['1927', '1919', '1933'], 0, 'It helped workers who lost jobs.', 'living'),
  Q('ger4.p4', 'Roughly how many new homes were built 1924–31?', ['Over two million', 'About ten thousand', 'About twenty million'], 0, 'Councils built many.', 'living'),
  Q('ger4.p5', 'What was the "new woman"?', ['A symbol of independent city women', 'A youth group set up by the Nazis', 'A type of new council home design'], 0, 'Short hair, make-up, independence.', 'women'),
], [
  Q('ger4.c1', 'What did Bauhaus designs focus on?', ['Simple, functional design', 'Heavy, ornate decoration', 'Copies of ancient Roman styles'], 0, 'Form follows function.', 'culture'),
  Q('ger4.c2', 'What did Dix and Grosz often criticise?', ['War and the wealthy', 'The Kaiser\'s return', 'Modern housing'], 0, 'Through harsh images.', 'culture'),
  Q('ger4.c3', 'Roughly how many women were elected to the Reichstag in the 1920s?', ['Over 30', 'None', 'Over 300'], 0, 'After women gained the vote.', 'women'),
  Q('ger4.c4', 'Which group struggled most in the late 1920s?', ['Farmers', 'Factory workers', 'Film makers'], 0, 'Low food prices hurt them.', 'living'),
  Q('ger4.c5', 'Where did cabaret culture flourish?', ['Berlin', 'Munich only', 'Rural villages'], 0, 'With satire and new music.', 'culture'),
  Q('ger4.c6', 'In which jobs did more women work?', ['Offices, shops and teaching', 'The army and the Freikorps', 'The Reichstag and nowhere else'], 0, 'Especially in cities.', 'women'),
  Q('ger4.c7', 'What happened to real wages in the late 1920s?', ['They rose', 'They fell sharply', 'They were abolished'], 0, 'Living standards improved for many.', 'living'),
  Q('ger4.c8', 'Why could artists experiment more?', ['Censorship was relaxed', 'The Kaiser paid them', 'Art was banned'], 0, 'A freer society.', 'culture'),
], {exam: 'Explain why there were changes in the position of women in Germany in the years 1924–29. (12 marks)'}),
];
