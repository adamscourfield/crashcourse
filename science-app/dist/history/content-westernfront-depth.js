// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11 historic environment:
// the British sector of the Western Front, 1914–18 (specification HE1–HE5). Depth lessons follow their overviews.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.medicine.wf';

export const westernFrontDepth = [
lesson(T, 'medicine.wf-battles', 'Ypres, the Somme, Arras and Cambrai', ['11 HE1'], [
  ['Ypres, 1914–17', 'The Ypres salient was a bulge in the British line that German guns could fire into from three sides. At the Second Battle of Ypres, on 22 April 1915, the Germans released chlorine gas for the first time; mustard gas followed there in July 1917. In the Third Battle (Passchendaele, July–November 1917) heavy rain and shelling turned the clay into deep mud in which wounded men could drown.'],
  ['The Somme, 1916', 'On 1 July 1916 the British suffered about 57,000 casualties, nearly 20,000 of them killed, the worst day in the army\'s history. Medical services had planned for about 10,000 casualties a day and were overwhelmed; wounded men lay in no man\'s land for days. By November the British had lost about 420,000 men. The experience led to better planning of medical services.'],
  ['Arras, 1917', 'The Battle of Arras began on 9 April 1917. Beforehand, tunnellers, many from New Zealand, linked chalk quarries under the town so that about 24,000 troops could wait underground and reach the front safely. The British suffered about 159,000 casualties in five weeks, one of the highest daily casualty rates of the war.'],
  ['Cambrai, 1917', 'At Cambrai on 20 November 1917 the British attacked with over 400 tanks, breaking deep into German lines before a counter-attack won much of the ground back. Medical services had been prepared in advance: stored blood was ready for transfusion, an important step in treating shock from blood loss.'],
], view.factors('What each battle shows about medicine', [
  ['Ypres', 'gas attacks; mud and flooding made evacuation slow'],
  ['The Somme', 'medical services overwhelmed by numbers; lessons learned'],
  ['Arras', 'tunnels and an underground hospital close to the front'],
  ['Cambrai', 'planned care, including stored blood'],
]), [
  view.timeline('Battles in the British sector', [
    ['Oct–Nov 1914', 'First Battle of Ypres'],
    ['22 Apr 1915', 'Chlorine gas first used, at Ypres'],
    ['1 Jul 1916', 'First day of the Somme'],
    ['9 Apr 1917', 'Battle of Arras begins'],
    ['Jul–Nov 1917', 'Third Battle of Ypres (Passchendaele)'],
    ['20 Nov 1917', 'Battle of Cambrai begins'],
  ]),
  view.people('People and units', [
    ['Stretcher bearers', 'Carried the wounded from no man\'s land'],
    ['Tunnelling companies', 'Linked the quarries under Arras'],
    ['The Tank Corps', 'Led the attack at Cambrai'],
    ['Oswald Robertson', 'Prepared stored blood before Cambrai'],
  ]),
  view.source('A source type: a battalion war diary', 'The official daily record kept by one battalion, noting its position, attacks and numbers of killed and wounded on 1 July 1916.', 'Useful for exact numbers and events in one unit; brief and official, it says little about how the wounded were treated.'),
], [
  ['Why were the Somme\'s medical services overwhelmed on 1 July 1916?', ['They had planned for far fewer casualties than the 57,000 who fell', 'No doctors had been sent to France before the battle began', 'The Germans had destroyed every hospital the day before the attack'], 0, 'Planning was based on fewer casualties.'],
  ['Why did mud at Passchendaele matter for medicine?', ['It slowed stretcher bearers, and wounded men could drown in it', 'It kept wounds clean because the clay contained no bacteria at all', 'It meant that ambulances could drive right up to the front line'], 0, 'Terrain shaped treatment.'],
  ['Exam skill · Describe one feature. Which is a valid feature of the Battle of Arras, with supporting detail?', ['Tunnels linked old quarries so that about 24,000 troops could shelter underground.', 'The Battle of Arras was a very important battle in the First World War.', 'Arras was a battle where many soldiers were wounded and needed treatment.'], 0, 'A feature needs specific supporting detail.'],
  ['Why was Cambrai significant for treatment?', ['Stored blood was ready for transfusion before the attack began', 'It was the first battle at which any doctors were present', 'Gas was used there for the first time in the whole war'], 0, 'Preparation in advance.'],
], [
  Q('wfd1.p1', 'Where was chlorine gas first used?', ['Ypres', 'Cambrai', 'Arras'], 0, 'On 22 April 1915, at the Second Battle of Ypres.', 'ypres'),
  Q('wfd1.p2', 'About how many British casualties were there on 1 July 1916?', ['57,000', '10,000', '159,000'], 0, 'The worst day in the army\'s history.', 'somme'),
  Q('wfd1.p3', 'When did the Battle of Arras begin?', ['9 April 1917', '1 July 1916', '20 November 1917'], 0, 'After months of tunnelling.', 'arras'),
  Q('wfd1.p4', 'What was used in large numbers at Cambrai?', ['Tanks', 'Gas', 'Aircraft'], 0, 'Over 400 tanks attacked on 20 November 1917.', 'cambrai'),
  Q('wfd1.p5', 'What is another name for the Third Battle of Ypres?', ['Passchendaele', 'The Battle of the Somme', 'Vimy Ridge'], 0, 'July to November 1917.', 'ypres'),
], [
  Q('wfd1.c1', 'Why was the Ypres salient dangerous?', ['Guns could fire into it from three sides', 'It lay far behind the British front line', 'It had no trenches dug in it at all'], 0, 'A bulge in the line.', 'ypres'),
  Q('wfd1.c2', 'How many casualties a day had the Somme services planned for?', ['About 10,000', 'About 100,000', 'About 500'], 0, 'Far fewer than arrived on 1 July.', 'somme'),
  Q('wfd1.c3', 'Where were many of the Arras tunnellers from?', ['New Zealand', 'Canada', 'South Africa'], 0, 'They linked the chalk quarries.', 'arras'),
  Q('wfd1.c4', 'About how many troops sheltered under Arras?', ['24,000', '2,400', '240,000'], 0, 'Before the attack in April 1917.', 'arras'),
  Q('wfd1.c5', 'Which gas was first used at Ypres in July 1917?', ['Mustard gas', 'Chlorine gas', 'Phosgene'], 0, 'It caused blisters and blindness.', 'ypres'),
  Q('wfd1.c6', 'About how many British casualties were there on the Somme by November?', ['420,000', '57,000', '4,000,000'], 0, 'Over four and a half months.', 'somme'),
  Q('wfd1.c7', 'What was ready before the attack at Cambrai?', ['Stored blood', 'Penicillin', 'X-ray scanners'], 0, 'For treating blood loss and shock.', 'cambrai'),
  Q('wfd1.c8', 'What did the Somme experience lead to?', ['Better planning of medical services', 'No change at all to medical services', 'An end to all evacuation of casualties'], 0, 'Lessons were learned.', 'somme'),
], {exam: 'Describe one feature of the Battle of the Somme (1916) that affected the treatment of the wounded. (2 marks)'}),

lesson(T, 'medicine.wf-illness', 'Illnesses from trench conditions', ['11 HE2'], [
  ['Trench foot', 'In the first winter of the war, about 20,000 British soldiers suffered from trench foot, caused by standing for long periods in cold water and mud. Feet went numb, swelled and turned red or blue; in bad cases gangrene set in and toes or feet had to be amputated.'],
  ['Preventing trench foot', 'The army treated trench foot as preventable. Men were ordered to rub whale oil into their feet, change into dry socks several times a day and work in pairs to check each other\'s feet; officers carried out foot inspections. Duckboards, drainage and pumps reduced flooding, and cases fell sharply after 1915.'],
  ['Trench fever', 'Trench fever caused high temperatures, headaches and aching muscles and could keep men out of action for weeks. It affected hundreds of thousands of British soldiers. Its cause, lice carrying a germ in their droppings, was not proved until 1918; delousing stations, baths and clean clothing then reduced it.'],
  ['Shell shock', 'Constant shelling and the strain of trench life led to shell shock: shaking, nightmares, loss of speech or movement. About 80,000 British cases were recorded. At first some doctors and officers thought sufferers were cowards; others treated them with rest. Some officers were sent to hospitals such as Craiglockhart in Edinburgh.'],
], view.factors('Causes of illness in the trenches', [
  ['Cold and wet', 'trench foot from standing in water and mud'],
  ['Lice', 'trench fever'],
  ['Rats and poor sanitation', 'spread of germs and disease'],
  ['Stress of shelling', 'shell shock'],
]), [
  view.timeline('Illness in the trenches', [
    ['Winter 1914–15', 'About 20,000 cases of trench foot'],
    ['1915', 'Foot inspections, whale oil and dry socks ordered'],
    ['1915', 'The term "shell shock" used in a medical journal'],
    ['1916', 'Craiglockhart hospital opens for officers'],
    ['1918', 'Lice proved to spread trench fever'],
  ]),
  view.people('People', [
    ['Ordinary soldiers', 'Checked each other\'s feet in pairs'],
    ['Officers', 'Carried out foot inspections'],
    ['RAMC doctors', 'Treated trench fever and shell shock'],
    ['Craiglockhart doctors', 'Treated officers with shell shock'],
  ]),
  view.source('A source type: an army order on foot care', 'A printed order to one division in 1915 setting out daily foot inspections, whale oil and dry socks.', 'Useful for what the army required; an order shows intentions, not whether men could follow it in a flooded trench.'),
], [
  ['Why did trench foot cases fall after 1915?', ['Foot inspections, whale oil, dry socks and better drainage', 'A vaccine against trench foot was given to every soldier', 'Soldiers were only sent to the trenches in the summer'], 0, 'Prevention worked.'],
  ['Why was trench fever hard to prevent at first?', ['Its cause, lice, was not proved until 1918', 'No soldiers wanted to have baths behind the lines', 'It was caused by gas, and gas masks were not available'], 0, 'Knowledge of cause came late.'],
  ['Exam skill · Describe one feature. Which is a valid feature of trench foot, with supporting detail?', ['It was caused by standing in cold water and mud, and in bad cases toes had to be amputated.', 'It was a very serious problem that many soldiers had to deal with during the war.', 'Trench foot was one of the illnesses that soldiers suffered in the trenches.'], 0, 'A feature needs specific supporting detail.'],
  ['How were shell-shocked men treated at first?', ['Some were thought cowards, while others were given rest', 'Every case was treated in a hospital in Britain straight away', 'They were all given blood transfusions at the front line'], 0, 'Attitudes varied.'],
], [
  Q('wfd2.p1', 'What caused trench foot?', ['Standing in cold water and mud', 'Lice living in their clothing', 'Breathing in mustard gas'], 0, 'Feet were wet for days.', 'trench-foot'),
  Q('wfd2.p2', 'What spread trench fever?', ['Lice', 'Rats', 'Mosquitoes'], 0, 'Lice were proved to carry it in 1918.', 'trench-fever'),
  Q('wfd2.p3', 'What was rubbed into feet to prevent trench foot?', ['Whale oil', 'Carbolic acid', 'Iodine'], 0, 'Part of daily foot care.', 'trench-foot'),
  Q('wfd2.p4', 'About how many shell shock cases were recorded?', ['80,000', '800', '8,000,000'], 0, 'Among British soldiers.', 'shell-shock'),
  Q('wfd2.p5', 'Where were some officers with shell shock sent?', ['Craiglockhart', 'Netley Hospital', 'Étaples camp'], 0, 'A hospital in Edinburgh.', 'shell-shock'),
], [
  Q('wfd2.c1', 'About how many trench foot cases were there in winter 1914–15?', ['20,000', '2,000', '200,000'], 0, 'In the first winter of the war.', 'trench-foot'),
  Q('wfd2.c2', 'Why did men check feet in pairs?', ['To make sure each did it', 'To save on the socks', 'To keep each other warm'], 0, 'Prevention was enforced.', 'trench-foot'),
  Q('wfd2.c3', 'What symptoms did trench fever cause?', ['Fever and aching muscles', 'Blisters and blindness', 'Swollen, numb feet'], 0, 'It kept men out of action for weeks.', 'trench-fever'),
  Q('wfd2.c4', 'What reduced trench fever after 1918?', ['Delousing and clean clothing', 'Better gas masks for every man', 'Steel helmets for all soldiers'], 0, 'Removing the lice.', 'trench-fever'),
  Q('wfd2.c5', 'What did duckboards help reduce?', ['Standing in water', 'Shell splinters', 'Gas attacks'], 0, 'Wooden slats on the trench floor.', 'trench-foot'),
  Q('wfd2.c6', 'What were symptoms of shell shock?', ['Shaking and nightmares', 'Swollen, numb feet', 'Blistered, burnt skin'], 0, 'A response to bombardment.', 'shell-shock'),
  Q('wfd2.c7', 'What did some officers first think of shell-shocked men?', ['That they were cowards', 'That they were heroes', 'That they had gas poisoning'], 0, 'Attitudes slowly changed.', 'shell-shock'),
  Q('wfd2.c8', 'What could happen in bad cases of trench foot?', ['Amputation', 'Blindness', 'Deafness'], 0, 'Gangrene set in.', 'trench-foot'),
], {exam: 'Describe one feature of the problems of illness caused by conditions in the trenches. (2 marks)'}),

lesson(T, 'medicine.wf-wounds-gas', 'Wounds, head injuries and gas attacks', ['11 HE2'], [
  ['Explosives and shrapnel', 'Shells from artillery caused more wounds than any other weapon. A shrapnel shell burst in the air and scattered metal balls; high-explosive shells broke into jagged fragments. These tore through flesh, smashed bones and carried mud and scraps of uniform deep into the body, so infection was very likely.'],
  ['Bullets', 'Rifle and machine-gun bullets travelled fast enough to pass through the body, breaking bones and damaging organs. Wounds to the legs and arms were most common among survivors; wounds to the chest and stomach were often fatal before a man could be reached.'],
  ['Head and face injuries', 'Soldiers began the war in cloth caps. The steel Brodie helmet was issued from late 1915 and by 1916 every soldier at the front had one, reducing serious head wounds. Men with terrible facial injuries were treated in Britain by Harold Gillies, who developed plastic surgery at Queen\'s Hospital, Sidcup, from 1917.'],
  ['Gas', 'Chlorine (1915) and phosgene (from late 1915) attacked the lungs; mustard gas (1917) burned the skin, eyes and lungs. Protection moved from cloth pads soaked in water or urine to gas helmets and, from 1916, the small box respirator. About 186,000 British soldiers were gassed, but only a small share of them died; many suffered breathing problems for life.'],
], view.factors('Types of injury and responses', [
  ['Shrapnel and shell fragments', 'deep, dirty wounds; debridement and wound cleaning'],
  ['Bullets', 'broken bones and organ damage; splints and surgery'],
  ['Head and face', 'Brodie helmets; plastic surgery in Britain'],
  ['Gas', 'improved masks; treatment of lungs, skin and eyes'],
]), [
  view.timeline('Wounds and gas', [
    ['1914', 'Soldiers fight in cloth caps'],
    ['22 Apr 1915', 'Chlorine gas first used'],
    ['Late 1915', 'Phosgene used; Brodie helmet issued'],
    ['1916', 'Small box respirator introduced'],
    ['Jul 1917', 'Mustard gas first used'],
    ['1917', 'Gillies\' hospital at Sidcup opens'],
  ]),
  view.people('People', [
    ['John Brodie', 'Designed the steel helmet'],
    ['Harold Gillies', 'Pioneered plastic surgery for facial wounds'],
    ['Stretcher bearers', 'Reached men wounded in no man\'s land'],
    ['Gas officers', 'Trained men to put on masks quickly'],
  ]),
  view.source('A source type: an official photograph of gassed soldiers', 'A photograph taken by an official army photographer showing a line of blinded soldiers, eyes bandaged, being led to a dressing station.', 'Useful evidence of the effects of mustard gas; official photographs were chosen with care, so it may not show the worst cases.'),
], [
  ['Why were shell wounds so likely to become infected?', ['Fragments carried mud and cloth deep into the body', 'Shells were deliberately filled with germs by the enemy', 'Doctors did not try to clean any wounds during the war'], 0, 'Dirt went in with the metal.'],
  ['Why did serious head wounds fall after 1916?', ['Every soldier at the front had a steel Brodie helmet', 'Germany agreed to stop firing shells at the trenches', 'Soldiers were trained to keep their heads below the parapet'], 0, 'Protective equipment.'],
  ['Exam skill · Describe one feature. Which is a valid feature of gas attacks, with supporting detail?', ['Protection improved from soaked cloth pads to the small box respirator from 1916.', 'Gas was a frightening weapon that soldiers on both sides were afraid of.', 'Many different types of gas were used in the First World War.'], 0, 'A feature needs specific supporting detail.'],
  ['What did mustard gas do that chlorine did not?', ['It burned the skin and eyes as well as the lungs', 'It only affected soldiers who had no gas mask at all', 'It killed every soldier who breathed in any of it'], 0, 'A blistering agent.'],
], [
  Q('wfd3.p1', 'Which weapon caused the most wounds?', ['Artillery shells', 'Machine-gun bullets', 'Bayonet charges'], 0, 'Shrapnel and fragments.', 'shrapnel'),
  Q('wfd3.p2', 'When was the Brodie helmet issued?', ['From late 1915', 'From August 1914', 'From early 1918'], 0, 'Every soldier had one by 1916.', 'head'),
  Q('wfd3.p3', 'Who pioneered plastic surgery for facial wounds?', ['Harold Gillies', 'John Brodie', 'Oswald Robertson'], 0, 'At Sidcup from 1917.', 'head'),
  Q('wfd3.p4', 'Which gas was first used in 1915?', ['Chlorine', 'Mustard gas', 'Tear gas'], 0, 'At Ypres in April.', 'gas'),
  Q('wfd3.p5', 'Which mask was introduced in 1916?', ['The small box respirator', 'A soaked cloth pad', 'A cotton gas hood'], 0, 'The best protection of the war.', 'gas'),
], [
  Q('wfd3.c1', 'What did a shrapnel shell scatter?', ['Metal balls', 'Poison gas', 'Hot water'], 0, 'It burst in the air.', 'shrapnel'),
  Q('wfd3.c2', 'Which wounds were most common among survivors?', ['Arm and leg wounds', 'Wounds to the chest', 'Wounds to the stomach'], 0, 'Chest wounds were often fatal.', 'bullets'),
  Q('wfd3.c3', 'About how many British soldiers were gassed?', ['186,000', '1,860', '1,860,000'], 0, 'Only a small share died.', 'gas'),
  Q('wfd3.c4', 'What did phosgene attack?', ['The lungs', 'The feet', 'The bones'], 0, 'Like chlorine, it attacked the lungs.', 'gas'),
  Q('wfd3.c5', 'What did soldiers wear on their heads in 1914?', ['Cloth caps', 'Steel helmets', 'Gas helmets'], 0, 'No protection from fragments.', 'head'),
  Q('wfd3.c6', 'Where was Gillies\' hospital?', ['Sidcup', 'Arras', 'Edinburgh'], 0, 'Queen\'s Hospital, Sidcup, in Britain.', 'head'),
  Q('wfd3.c7', 'What did fast bullets often do?', ['Pass through the body', 'Bounce off the bone', 'Carry gas into it'], 0, 'Breaking bones on the way.', 'bullets'),
  Q('wfd3.c8', 'What were early gas pads soaked in?', ['Water or urine', 'Whale oil', 'Petrol or paraffin'], 0, 'Before proper masks.', 'gas'),
], {exam: 'Describe one feature of the wounds caused by explosives on the Western Front. (2 marks)'}),

lesson(T, 'medicine.wf-ramc-nurses', 'The RAMC and nurses', ['11 HE3'], [
  ['The RAMC', 'The Royal Army Medical Corps grew from about 9,000 men in 1914 to more than 110,000 by the end of the war. Its doctors, orderlies and stretcher bearers ran aid posts, dressing stations, Casualty Clearing Stations and hospitals. Each battalion had its own medical officer and stretcher bearers.'],
  ['Stretcher bearers', 'Stretcher bearers worked in teams, often of four, and could only move at night or in lulls in the fighting. Carrying a man through mud and shell holes could take hours. It was dangerous work, and many bearers were killed or wounded.'],
  ['Army nurses and VADs', 'Trained nurses of Queen Alexandra\'s Imperial Military Nursing Service (QAIMNS) worked in base hospitals, ambulance trains and, from 1915, Casualty Clearing Stations. They were helped by Voluntary Aid Detachment (VAD) nurses, mostly young women with first-aid training, who did much of the cleaning, feeding and dressing of wounds.'],
  ['The FANY', 'The First Aid Nursing Yeomanry, set up in 1907, sent women to drive ambulances and run first-aid posts. Women such as Elsie Knocker and Mairi Chisholm ran a first-aid post at Pervyse in Belgium, close to the front, from 1914 to 1918. Women\'s work in the war helped change attitudes to what women could do.'],
], view.factors('Who did the work', [
  ['RAMC', 'doctors, orderlies and stretcher bearers; ran the chain'],
  ['QAIMNS', 'trained army nurses in hospitals and CCSs'],
  ['VADs', 'volunteer nurses with first-aid training'],
  ['FANY', 'women drivers and first-aid posts near the front'],
]), [
  view.timeline('Medical staff', [
    ['1907', 'The FANY founded'],
    ['1914', 'RAMC about 9,000 strong'],
    ['1914', 'Knocker and Chisholm open a post at Pervyse'],
    ['1915', 'Nurses begin working at CCSs'],
    ['1916', 'The FANY drive for the British army'],
    ['1918', 'RAMC over 110,000 strong'],
  ]),
  view.people('People', [
    ['Battalion medical officers', 'Ran the Regimental Aid Posts'],
    ['QAIMNS nurses', 'Trained nurses in army hospitals'],
    ['VAD nurses', 'Volunteers who did much of the care'],
    ['Elsie Knocker and Mairi Chisholm', 'Ran a first-aid post at Pervyse'],
  ]),
  view.source('A source type: a VAD nurse\'s diary', 'A diary kept by a volunteer nurse at a base hospital, describing long shifts, gas cases and the deaths of patients.', 'Useful for one nurse\'s experience in one hospital; written privately, it may be frank, but it is not typical of every hospital.'),
], [
  ['Why did the RAMC grow so much?', ['The huge number of casualties needed far more medical staff', 'The army decided to close every hospital in Britain', 'Doctors were no longer allowed to work in civilian hospitals'], 0, 'Scale drove expansion.'],
  ['Why was stretcher bearing so slow?', ['Teams could often only move at night, through mud and shell holes', 'Each stretcher bearer was only allowed to carry one man a day', 'Ambulances drove alongside them and blocked the way forward'], 0, 'Conditions shaped the work.'],
  ['Exam skill · Describe one feature. Which is a valid feature of the work of nurses, with supporting detail?', ['VAD nurses, mostly young volunteer women, did much of the cleaning and dressing of wounds.', 'Nurses worked very hard throughout the war and helped a great many soldiers to recover.', 'There were several different groups of nurses who worked on the Western Front.'], 0, 'A feature needs specific supporting detail.'],
  ['What was distinctive about the FANY?', ['Women drove ambulances and ran first-aid posts near the front', 'It was made up only of fully trained army surgeons', 'It ran the hospitals in Britain and never sent anyone abroad'], 0, 'Close to the front.'],
], [
  Q('wfd4.p1', 'What does RAMC stand for?', ['Royal Army Medical Corps', 'Royal Ambulance Medical Company', 'Regimental Army Medical Corps'], 0, 'It ran the chain of evacuation.', 'ramc'),
  Q('wfd4.p2', 'About how big was the RAMC in 1914?', ['9,000', '90,000', '900'], 0, 'It grew to over 110,000.', 'ramc'),
  Q('wfd4.p3', 'What were VADs?', ['Volunteer nurses', 'Army surgeons', 'Ambulance trains'], 0, 'With first-aid training.', 'nurses'),
  Q('wfd4.p4', 'Where did Knocker and Chisholm run a post?', ['Pervyse', 'Arras', 'Cambrai'], 0, 'In Belgium, near the front.', 'fany'),
  Q('wfd4.p5', 'When was the FANY founded?', ['1907', '1914', '1916'], 0, 'It was founded before the war.', 'fany'),
], [
  Q('wfd4.c1', 'Which service supplied trained army nurses?', ['QAIMNS', 'FANY', 'VADs'], 0, 'Queen Alexandra\'s nurses.', 'nurses'),
  Q('wfd4.c2', 'From when did nurses work at CCSs?', ['1915', '1918', '1914'], 0, 'Closer to the front.', 'nurses'),
  Q('wfd4.c3', 'How many men were often in a stretcher team?', ['Four', 'Two', 'Twelve'], 0, 'Carrying through the mud.', 'bearers'),
  Q('wfd4.c4', 'When could stretcher bearers usually move?', ['At night or in lulls', 'Only in the middle of the day', 'Only once the battle had ended'], 0, 'Shelling made it dangerous.', 'bearers'),
  Q('wfd4.c5', 'Who ran each Regimental Aid Post?', ['The battalion medical officer', 'A FANY ambulance driver', 'A volunteer VAD nurse'], 0, 'Near the front line.', 'ramc'),
  Q('wfd4.c6', 'From when did the FANY drive for the British?', ['1916', '1907', '1919'], 0, 'At first for Belgium and France.', 'fany'),
  Q('wfd4.c7', 'What did women\'s war work help change?', ['Attitudes to women', 'The trench system', 'Gas masks'], 0, 'What women could do.', 'fany'),
  Q('wfd4.c8', 'What did VADs mostly do?', ['Cleaning, feeding and dressing wounds', 'Carrying out major surgery', 'Driving ambulances to the front'], 0, 'Much of the daily care.', 'nurses'),
], {exam: 'Describe one feature of the work of nurses on the Western Front. (2 marks)'}),

lesson(T, 'medicine.wf-arras-hospital', 'The underground hospital at Arras', ['11 HE3'], [
  ['The tunnels', 'Arras sits on chalk that had been quarried for centuries. From late 1916, New Zealand tunnellers and British miners joined the old quarries into a network of tunnels, some named after New Zealand towns such as Wellington, with electric light, running water and a light railway. Exits led close to the German lines.'],
  ['The hospital', 'Inside the tunnels was a hospital with around 700 beds, operating theatres and space for wounded men waiting to be moved. It was close to the front and safe from shelling, so men could receive treatment soon after being wounded.'],
  ['Working underground', 'The tunnels were damp, cold and lit by electric bulbs that sometimes failed. Keeping wounds and instruments clean was difficult, and the hospital could quickly fill during heavy fighting. The air could become stale with so many men underground.'],
  ['What it shows', 'The hospital shows how the British adapted to the terrain: the chalk that made tunnelling possible at Arras was very different from the waterlogged clay at Ypres. It also shows the effort to treat men nearer the front, which saved time in the chain of evacuation.'],
], view.factors('Benefits and problems of the Arras hospital', [
  ['Safety', 'protected from shelling'],
  ['Speed', 'close to the front, so treatment came sooner'],
  ['Facilities', 'about 700 beds; operating theatres; light and water'],
  ['Problems', 'damp, poor light, infection risk, overcrowding'],
]), [
  view.timeline('Arras tunnels', [
    ['Late 1916', 'Tunnelling begins to link the quarries'],
    ['Early 1917', 'Hospital and accommodation completed'],
    ['9 Apr 1917', 'Troops leave the tunnels to attack'],
    ['Apr–May 1917', 'The hospital treats casualties of the battle'],
  ]),
  view.people('People', [
    ['New Zealand Tunnelling Company', 'Dug and linked the tunnels'],
    ['RAMC doctors and orderlies', 'Ran the underground hospital'],
    ['Wounded soldiers', 'Treated close to the front'],
    ['Troops waiting to attack', 'Sheltered in the tunnels'],
  ]),
  view.source('A source type: a photograph of the tunnel hospital', 'A photograph showing rows of stretchers on wooden frames in a chalk tunnel lit by electric bulbs.', 'Useful for the layout and conditions; it cannot show the noise, smell or how full the hospital became during the battle.'),
], [
  ['Why could a hospital be built under Arras but not at Ypres?', ['Arras had chalk that could be tunnelled; Ypres had waterlogged clay', 'The Germans had agreed not to attack the town of Arras', 'Ypres already had enough hospitals for every wounded soldier'], 0, 'Terrain made the difference.'],
  ['Why was being near the front an advantage?', ['Wounded men could be treated sooner after injury', 'Doctors did not need to clean any of their instruments', 'Wounded men no longer needed to be evacuated at all'], 0, 'Speed of treatment.'],
  ['Exam skill · Describe one feature. Which is a valid feature of the hospital at Arras, with supporting detail?', ['It had around 700 beds and operating theatres, protected from shelling underground.', 'The hospital at Arras was a very interesting and unusual place to be treated.', 'A great many people worked in the hospital at Arras during the war.'], 0, 'A feature needs specific supporting detail.'],
  ['What problem did working underground cause?', ['Damp and poor light made keeping wounds clean difficult', 'There was too much sunlight in the tunnels to sleep', 'The tunnels were too far from the front to be useful'], 0, 'Conditions limited care.'],
], [
  Q('wfd5.p1', 'What rock lies under Arras?', ['Chalk', 'Clay', 'Granite'], 0, 'Quarried for centuries.', 'tunnels'),
  Q('wfd5.p2', 'Who dug many of the Arras tunnels?', ['New Zealand tunnellers', 'German prisoners of war', 'Local French farmers'], 0, 'With British miners.', 'tunnels'),
  Q('wfd5.p3', 'About how many beds did the hospital have?', ['700', '70', '7,000'], 0, 'With operating theatres.', 'hospital'),
  Q('wfd5.p4', 'When did troops leave the tunnels to attack?', ['9 April 1917', '1 July 1916', '20 November 1917'], 0, 'The start of the Battle of Arras.', 'tunnels'),
  Q('wfd5.p5', 'What protected the hospital?', ['Being underground', 'Red Cross flags', 'A peace treaty'], 0, 'Safe from shelling.', 'hospital'),
], [
  Q('wfd5.c1', 'How was the tunnel network lit?', ['Electric light', 'Candles only', 'Oil lamps only'], 0, 'Bulbs sometimes failed.', 'tunnels'),
  Q('wfd5.c2', 'What were some tunnels named after?', ['New Zealand towns', 'British generals', 'Earlier battles'], 0, 'Such as Wellington.', 'tunnels'),
  Q('wfd5.c3', 'Which condition made infection a risk?', ['Damp', 'Heat', 'Sunlight'], 0, 'Hard to keep things clean.', 'problems'),
  Q('wfd5.c4', 'What happened to the hospital in heavy fighting?', ['It filled quickly', 'It closed down', 'It moved to Britain'], 0, 'It became overcrowded.', 'problems'),
  Q('wfd5.c5', 'What did the tunnels have besides light?', ['Running water', 'Gas masks for all', 'An airfield'], 0, 'And a light railway.', 'tunnels'),
  Q('wfd5.c6', 'What does the hospital show about the British?', ['They adapted to the terrain', 'They ignored the terrain', 'They had no plans'], 0, 'Chalk made tunnels possible.', 'meaning'),
  Q('wfd5.c7', 'What did being near the front save?', ['Time in the chain', 'Money on helmets', 'Food'], 0, 'Treatment came sooner.', 'meaning'),
  Q('wfd5.c8', 'When did tunnelling to link quarries begin?', ['Late 1916', 'Late 1914', 'Early 1918'], 0, 'Before the 1917 battle.', 'tunnels'),
], {exam: 'Describe one feature of the underground hospital at Arras. (2 marks)'}),

lesson(T, 'medicine.wf-infection', 'Treating wounds, infection and fractures', ['11 HE4'], [
  ['Why infection was deadly', 'Wounds full of soil from manured fields carried the bacteria that cause tetanus and gas gangrene. Gas gangrene made the flesh swell and smell, produced gas bubbles under the skin and could kill within days. Aseptic surgery, which worked in clean hospitals, could not be achieved in a muddy field.'],
  ['New methods', 'Anti-tetanus injections were given to wounded men from late 1914, and tetanus cases fell sharply. Surgeons learned to operate early and cut away dead tissue (debridement), and to leave wounds open rather than sew them up at once. The Carrel-Dakin method, from 1917, washed the wound through tubes with a sterile chlorine solution.'],
  ['Amputation', 'If gas gangrene had spread, cutting off the limb was often the only way to save a life. Over 40,000 British servicemen lost a limb in the war. Better artificial limbs were developed afterwards, for example at Queen Mary\'s Hospital, Roehampton.'],
  ['The Thomas splint', 'Hugh Owen Thomas had designed his splint in the 1870s. His nephew, the surgeon Robert Jones, introduced it on the Western Front from 1915–16. Holding the leg straight during the long journey along the chain of evacuation reduced bleeding and shock, and deaths from broken thigh bones fell dramatically.'],
], view.factors('Why treatment of wounds improved', [
  ['War', 'huge numbers of wounds gave surgeons experience quickly'],
  ['Science', 'understanding of germs led to anti-tetanus serum and antiseptic washing'],
  ['Individuals', 'Robert Jones; Alexis Carrel and Henry Dakin'],
  ['Limits', 'no antibiotics; amputation still common'],
]), [
  view.timeline('Treating wounds', [
    ['1870s', 'Hugh Owen Thomas designs his splint'],
    ['Late 1914', 'Anti-tetanus injections given to the wounded'],
    ['1915', 'Surgeons adopt early debridement'],
    ['1915–16', 'Robert Jones introduces the Thomas splint'],
    ['1917', 'The Carrel-Dakin method used widely'],
  ]),
  view.people('People', [
    ['Hugh Owen Thomas', 'Designed the splint'],
    ['Robert Jones', 'Introduced it on the Western Front'],
    ['Alexis Carrel and Henry Dakin', 'Developed the wound-washing method'],
    ['RAMC surgeons', 'Shared new techniques between hospitals'],
  ]),
  view.source('A source type: an article in a medical journal', 'A 1917 article by army surgeons in a British medical journal reporting results of treating wounds with early debridement.', 'Useful for methods and results reported by experts; it may report successes more fully than failures.'),
], [
  ['Why could aseptic surgery not be achieved near the front?', ['Mud, soil and a lack of clean conditions made it impossible', 'Surgeons near the front did not believe in germ theory', 'The army had banned aseptic surgery during wartime'], 0, 'Conditions defeated asepsis.'],
  ['Why did leaving wounds open help?', ['Surgeons could clean them and stop infection being sealed in', 'It allowed the soldier to return to the front line at once', 'It meant the wound would never need any further treatment'], 0, 'Infection was not trapped.'],
  ['Exam skill · Describe one feature. Which is a valid feature of the Thomas splint, with supporting detail?', ['It held a broken leg straight on the journey, which reduced bleeding and shock.', 'The Thomas splint was one of the most important developments in the whole war.', 'The Thomas splint was used to help many of the soldiers who had been wounded.'], 0, 'A feature needs specific supporting detail.'],
  ['What did anti-tetanus injections achieve?', ['Tetanus cases among the wounded fell sharply', 'They cured gas gangrene within a few hours', 'They replaced the need for any surgery at all'], 0, 'Prevention of one infection.'],
], [
  Q('wfd6.p1', 'What caused gas gangrene?', ['Bacteria from the soil', 'Poison gas attacks', 'Lice in clothing'], 0, 'Despite its name, not poison gas.', 'infection'),
  Q('wfd6.p2', 'What is debridement?', ['Cutting away dead tissue', 'Washing with salt water', 'Applying a splint'], 0, 'Removing the source of infection.', 'methods'),
  Q('wfd6.p3', 'Who designed the splint?', ['Hugh Owen Thomas', 'Robert Jones', 'Harold Gillies'], 0, 'He designed it in the 1870s.', 'splint'),
  Q('wfd6.p4', 'Who introduced it on the Western Front?', ['Robert Jones', 'Hugh Owen Thomas', 'Henry Dakin'], 0, 'His nephew, a surgeon.', 'splint'),
  Q('wfd6.p5', 'When were anti-tetanus injections first given?', ['Late 1914', 'Early 1918', 'Mid 1916'], 0, 'Tetanus cases fell sharply.', 'methods'),
], [
  Q('wfd6.c1', 'What did the Carrel-Dakin method use?', ['A sterile chlorine solution', 'A carbolic acid spray', 'An early form of penicillin'], 0, 'Washed through tubes.', 'methods'),
  Q('wfd6.c2', 'About how many British servicemen lost a limb?', ['Over 40,000', 'About 400', 'Over 4,000,000'], 0, 'Amputation was common.', 'amputation'),
  Q('wfd6.c3', 'What did the splint reduce?', ['Bleeding and shock', 'Gas poisoning', 'Trench foot cases'], 0, 'By holding the leg straight.', 'splint'),
  Q('wfd6.c4', 'Where were artificial limbs developed?', ['Roehampton', 'Arras', 'Pervyse'], 0, 'At Queen Mary\'s Hospital.', 'amputation'),
  Q('wfd6.c5', 'What symptom did gas gangrene cause?', ['Gas bubbles under the skin', 'Blindness in both eyes', 'Swollen and numb feet'], 0, 'It could kill in days.', 'infection'),
  Q('wfd6.c6', 'Why were wounds left open?', ['To stop infection being sealed in', 'To save on thread and needles', 'To let the soldier go back sooner'], 0, 'So they could be cleaned.', 'methods'),
  Q('wfd6.c7', 'What was still missing to fight infection?', ['Antibiotics', 'Trained surgeons', 'Clean bandages'], 0, 'Penicillin came later.', 'infection'),
  Q('wfd6.c8', 'What did the soil carry?', ['Tetanus and gangrene bacteria', 'Natural penicillin moulds', 'Typhoid and smallpox vaccine'], 0, 'Manured farmland.', 'infection'),
], {exam: 'Describe one feature of the treatment of infected wounds on the Western Front. (2 marks)'}),

lesson(T, 'medicine.wf-xray-blood', 'X-rays, blood transfusion and the Cambrai blood bank', ['11 HE4'], [
  ['Mobile X-ray units', 'X-ray machines were installed in base hospitals and some Casualty Clearing Stations, and mobile units in vans could travel between them. They showed surgeons exactly where bullets and shrapnel were lodged. But the glass tubes were fragile and overheated, each image could take minutes, and operators were exposed to harmful radiation.'],
  ['The problem of blood loss', 'Blood groups had been identified by Karl Landsteiner in 1901, so doctors knew blood had to be matched. But blood clotted soon after leaving the body, so at first transfusions had to be done directly, from a donor lying beside the patient. This was slow and impossible on a large scale.'],
  ['Storing blood', 'In 1915 Richard Lewisohn showed that adding sodium citrate stopped blood clotting. In 1916 Francis Rous and James Turner added a glucose solution that let blood be kept for about four weeks. Geoffrey Keynes designed a portable transfusion kit used near the front.'],
  ['The Cambrai blood bank', 'Before the Battle of Cambrai in November 1917, Captain Oswald Robertson, a US army doctor working with the British, collected type O blood (which most people can safely receive), stored it in glass bottles packed in ice and used it to treat wounded men suffering shock. It was an early blood bank.'],
], view.factors('Why X-rays and transfusion advanced', [
  ['War', 'huge numbers of wounded needed new solutions'],
  ['Science', 'X-rays from 1895; blood groups from 1901; sodium citrate'],
  ['Individuals', 'Lewisohn, Rous and Turner, Keynes, Robertson'],
  ['Limits', 'fragile X-ray machines; blood kept only for weeks'],
]), [
  view.timeline('X-rays and blood', [
    ['1895', 'X-rays discovered'],
    ['1901', 'Blood groups identified'],
    ['1915', 'Sodium citrate stops blood clotting'],
    ['1916', 'Glucose solution lets blood be stored for weeks'],
    ['Nov 1917', 'Robertson\'s blood depot at Cambrai'],
  ]),
  view.people('People', [
    ['Karl Landsteiner', 'Identified blood groups'],
    ['Richard Lewisohn', 'Used sodium citrate to stop clotting'],
    ['Geoffrey Keynes', 'Designed a portable transfusion kit'],
    ['Oswald Robertson', 'Set up the blood depot at Cambrai'],
  ]),
  view.source('A source type: a doctor\'s report on transfusion', 'A report written by an army doctor in 1918 on the results of giving stored blood to men in shock at a Casualty Clearing Station.', 'Useful for detailed results from one place; written to share a new method, it may highlight successes.'),
], [
  ['Why was direct transfusion impractical on a large scale?', ['Blood clotted quickly, so a donor had to lie beside the patient', 'Doctors did not know that blood groups existed at that time', 'Soldiers were not allowed to give blood to each other'], 0, 'Clotting was the barrier.'],
  ['Why was type O blood chosen at Cambrai?', ['Most people can safely receive it', 'It was the only type that could be frozen solid', 'It was the rarest type, so it had to be saved'], 0, 'A universal donor type.'],
  ['Exam skill · Describe one feature. Which is a valid feature of mobile X-ray units, with supporting detail?', ['They showed where shrapnel was lodged, but the tubes were fragile and overheated.', 'Mobile X-ray units were a very important development on the Western Front.', 'X-rays were a kind of new technology that was used by doctors during the war.'], 0, 'A feature needs specific supporting detail.'],
  ['What did adding glucose to stored blood achieve?', ['Blood could be kept for about four weeks', 'Blood no longer needed to be matched at all', 'Blood could be made in a laboratory instead'], 0, 'Storage became possible.'],
], [
  Q('wfd7.p1', 'Who identified blood groups?', ['Karl Landsteiner', 'Oswald Robertson', 'Wilhelm Röntgen'], 0, 'Landsteiner identified them in 1901.', 'blood'),
  Q('wfd7.p2', 'What did sodium citrate do?', ['Stopped clotting', 'Killed germs', 'Sped up X-rays'], 0, 'Shown by Lewisohn in 1915.', 'blood'),
  Q('wfd7.p3', 'Who set up the Cambrai blood depot?', ['Oswald Robertson', 'Geoffrey Keynes', 'Robert Jones'], 0, 'A US army doctor.', 'blood-bank'),
  Q('wfd7.p4', 'Which blood type was stored at Cambrai?', ['Type O', 'Type A', 'Type AB'], 0, 'Most people can receive it.', 'blood-bank'),
  Q('wfd7.p5', 'What did X-rays show surgeons?', ['Where shrapnel was', 'Which germs were present', 'Blood groups'], 0, 'Before operating.', 'xray'),
], [
  Q('wfd7.c1', 'How was blood stored at Cambrai?', ['In bottles packed in ice', 'In electric freezers', 'In sealed wooden barrels'], 0, 'An early blood bank.', 'blood-bank'),
  Q('wfd7.c2', 'Who designed a portable transfusion kit?', ['Geoffrey Keynes', 'Harold Gillies', 'John Brodie'], 0, 'Used near the front.', 'blood'),
  Q('wfd7.c3', 'How long could blood be kept after 1916?', ['About four weeks', 'About four years', 'About four minutes'], 0, 'With a glucose solution.', 'blood'),
  Q('wfd7.c4', 'What was a problem with X-ray tubes?', ['They overheated', 'They were too small', 'They used gas'], 0, 'And they were fragile.', 'xray'),
  Q('wfd7.c5', 'What were operators exposed to?', ['Harmful radiation', 'Mustard gas', 'Electric shocks'], 0, 'The dangers were not fully understood.', 'xray'),
  Q('wfd7.c6', 'When was the Battle of Cambrai?', ['November 1917', 'July 1916', 'April 1915'], 0, 'With stored blood ready.', 'blood-bank'),
  Q('wfd7.c7', 'How did early transfusions work?', ['Donor beside the patient', 'From stored glass bottles', 'From animal donors'], 0, 'Blood clotted quickly.', 'blood'),
  Q('wfd7.c8', 'What did transfused blood treat?', ['Shock from blood loss', 'Swelling from trench foot', 'Nightmares from shell shock'], 0, 'Replacing lost blood.', 'blood-bank'),
], {exam: 'Describe one feature of blood transfusion on the Western Front. (2 marks)'}),

lesson(T, 'medicine.wf-national-local', 'National and local sources', ['11 HE5'], [
  ['National sources', 'National sources cover the whole army or the country: army medical statistics, official histories of the medical services written after the war, debates in Parliament, government reports, national newspapers, and articles in journals such as the British Medical Journal. They show the overall scale and pattern of injury and treatment.'],
  ['Local sources', 'Local sources come from one place, unit or person: a battalion war diary, the admission register of one hospital, a soldier\'s letter or diary, a nurse\'s memoir, a photograph of one dressing station, or a local newspaper reporting on men from its town. They show what treatment was like in a particular place.'],
  ['Censorship', 'Under the Defence of the Realm Act (1914) newspapers were censored, and soldiers\' letters were read by officers, who cut out details of places and losses. Keeping a diary at the front was forbidden, though many men did. Censorship affects what a source could say, so it matters when judging usefulness.'],
  ['Where they are kept', 'Many sources survive in national collections such as the National Archives, which holds war diaries, and the Imperial War Museum, which holds letters, diaries, photographs and recorded interviews. Local record offices and regimental museums hold papers about men from their area.'],
], view.factors('National or local?', [
  ['National', 'statistics, official histories, Parliament, national newspapers, medical journals'],
  ['Local', 'war diaries, hospital registers, letters, diaries, photographs, local newspapers'],
  ['Strength of national', 'scale and overall pattern'],
  ['Strength of local', 'detail and experience in one place'],
]), [
  view.timeline('Making and keeping the sources', [
    ['1914', 'Defence of the Realm Act allows censorship'],
    ['1914–18', 'War diaries, letters and hospital records kept'],
    ['1917', 'The Imperial War Museum founded'],
    ['1920s', 'Official medical histories of the war published'],
  ]),
  view.people('Who made the sources', [
    ['Army clerks and officers', 'Kept war diaries and statistics'],
    ['Soldiers and nurses', 'Wrote letters, diaries and later memoirs'],
    ['Official photographers', 'Took approved photographs'],
    ['Journalists', 'Wrote censored newspaper reports'],
  ]),
  view.source('A source type: a hospital admission register', 'The register of one Casualty Clearing Station listing each man admitted, his unit, his wound and whether he was sent on or died.', 'A local source: useful for exact cases in one place; it records what happened, not how the treatment was carried out.'),
], [
  ['Why is a hospital admission register a local source?', ['It records cases from one particular hospital', 'It was written in France rather than in Britain', 'It was written by hand rather than printed'], 0, 'Local means one place or group.'],
  ['Why does censorship matter when judging a letter?', ['Officers cut out details, so the letter may leave things out', 'Censored letters were always completely made up by soldiers', 'Censorship meant that no letters ever reached families at home'], 0, 'It shapes what a source could say.'],
  ['Exam skill · Follow-up. Which source would best follow up a letter describing a busy Casualty Clearing Station?', ['That station\'s admission register, to see how many men were admitted that week.', 'A national newspaper from 1914 describing the start of the war in Belgium.', 'A photograph of soldiers training in an army camp in England before the war.'], 0, 'A follow-up source must answer a specific question.'],
  ['What is a strength of national sources?', ['They show the overall scale and pattern', 'They always give one soldier\'s feelings', 'They were never affected by censorship'], 0, 'The big picture.'],
], [
  Q('wfd8.p1', 'Which is a national source?', ['Army medical statistics', 'A soldier\'s letter home', 'A hospital\'s register'], 0, 'It covers the whole army.', 'national'),
  Q('wfd8.p2', 'Which is a local source?', ['A battalion war diary', 'An official history', 'A Parliament debate'], 0, 'It records one unit.', 'local'),
  Q('wfd8.p3', 'Which Act allowed censorship?', ['The Defence of the Realm Act', 'The Public Health Act of 1875', 'The Official Secrets Act'], 0, 'DORA was passed in 1914.', 'censorship'),
  Q('wfd8.p4', 'Who read soldiers\' letters?', ['Officers', 'Nurses', 'Journalists'], 0, 'They cut out details.', 'censorship'),
  Q('wfd8.p5', 'Where are many war diaries kept?', ['The National Archives', 'The Royal Society', 'The British Library'], 0, 'A national collection.', 'archives'),
], [
  Q('wfd8.c1', 'When was the Imperial War Museum founded?', ['1917', '1945', '1895'], 0, 'During the war itself.', 'archives'),
  Q('wfd8.c2', 'What was forbidden at the front?', ['Keeping a diary', 'Writing letters', 'Taking leave'], 0, 'Though many men did.', 'censorship'),
  Q('wfd8.c3', 'Which journal published medical articles?', ['The British Medical Journal', 'The Times newspaper', 'Punch magazine'], 0, 'A national source.', 'national'),
  Q('wfd8.c4', 'What do local sources show best?', ['Experience in one place', 'The army as a whole', 'The war across Europe'], 0, 'Detail rather than scale.', 'local'),
  Q('wfd8.c5', 'When were official medical histories published?', ['The 1920s', 'During 1914', 'During 1916'], 0, 'They were written after the war.', 'national'),
  Q('wfd8.c6', 'Where might papers about local men be kept?', ['Local record offices', 'Only abroad', 'Only in Parliament'], 0, 'And regimental museums.', 'archives'),
  Q('wfd8.c7', 'What does a local newspaper report on?', ['Men from its town', 'The whole war', 'Government policy'], 0, 'That makes it a local source.', 'local'),
  Q('wfd8.c8', 'Which source records each man admitted?', ['A hospital register', 'A medical journal', 'A Parliament debate'], 0, 'One hospital\'s cases.', 'local'),
], {exam: 'How could you follow up a soldier\'s letter describing treatment at a dressing station to find out more about the treatment of the wounded? (4 marks)'}),
];
