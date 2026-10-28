// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11 historic environment:
// the British sector of the Western Front, 1914–18: injuries, treatment and the trenches (HE1–HE5).
// All teaching text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

export const westernFrontTopic = {id: 'history.medicine.wf', unit: '11', title: 'The British sector of the Western Front, 1914–18', paper: 'Paper 1 · Historic environment'};
const T = westernFrontTopic.id;

export const westernFrontLessons = [
lesson(T, 'medicine.wf-context', 'The Western Front: battles, trenches and terrain', ['11 HE1'], [
  ['Four key places', 'The British sector included the Ypres salient in Belgium, where the Germans first used chlorine gas in April 1915 and where the mud of Passchendaele (1917) became notorious; the Somme, where the British suffered about 57,000 casualties on the first day, 1 July 1916; Arras, where in 1917 tunnels and old chalk quarries sheltered troops and an underground hospital; and Cambrai, where in November 1917 tanks were used in large numbers.'],
  ['The trench system', 'Lines of trenches faced each other across no man\'s land. Behind the front line were support and reserve trenches, joined by communication trenches. Dugouts gave some shelter. The trenches were zig-zagged so that a blast or attacker could not sweep along a whole line.'],
  ['Terrain', 'Around Ypres the clay soil and high water table meant trenches flooded and shell holes filled with water. In the chalk of the Somme and Arras, deep dugouts and tunnels were easier to dig. The soil was heavily manured farmland, so wounds were easily infected.'],
  ['Transport and communications', 'Shelling destroyed roads and turned the ground to mud, so stretcher bearers often had to carry the wounded long distances by hand. Further back, horse-drawn and motor ambulances, light railways, ambulance trains and canal barges moved casualties. Telephone lines were often cut, making it hard to organise help.'],
], view.factors('How the environment affected treatment', [
  ['Terrain', 'mud and flooding slowed evacuation and caused trench foot'],
  ['Soil', 'manured farmland caused infections such as gas gangrene'],
  ['Transport', 'damaged roads; long carries by stretcher bearers; ambulances and trains further back'],
  ['Communications', 'cut telephone lines made organising help difficult'],
]), [
  view.timeline('The British sector', [
    ['1914', 'First Battle of Ypres; trench lines form'],
    ['Apr 1915', 'Second Ypres: first chlorine gas attack'],
    ['1 Jul 1916', 'First day of the Somme'],
    ['Apr 1917', 'Battle of Arras, using tunnels and quarries'],
    ['Jul–Nov 1917', 'Third Ypres (Passchendaele)'],
    ['Nov 1917', 'Battle of Cambrai, with massed tanks'],
  ]),
  view.people('People', [
    ['Stretcher bearers', 'Carried the wounded from the front line'],
    ['Tunnellers', 'Including the New Zealand Tunnelling Company at Arras'],
    ['Signallers', 'Kept telephone and message lines working'],
    ['The RAMC', 'Organised medical care behind the lines'],
  ]),
  view.source('A source type: a trench map', 'An army map showing the positions of British and German trenches and the communication routes in one sector.', 'Useful for the layout and distances involved; it shows the plan, not the mud or the conditions on the ground.'),
], [
  ['Why were trenches built in a zig-zag pattern?', ['So a blast or attacker could not sweep along the whole line', 'So that rainwater would drain away more quickly into the fields', 'So that stretcher bearers could move faster along the trench'], 0, 'Design reduced the effect of attacks.'],
  ['Why were wounds often infected?', ['The soil was heavily manured farmland full of bacteria', 'Doctors refused to clean any wounds near the front line', 'Soldiers were not allowed to carry any bandages with them'], 0, 'The environment caused infection.'],
  ['Exam skill · Describe two features. Which is a valid feature of the trench system, with supporting detail?', ['Communication trenches joined the front line to the support and reserve trenches behind it.', 'The trenches were very bad and many soldiers did not like living in them at all.', 'The Battle of the Somme began on the first of July in the year 1916.'], 0, 'A feature needs a specific supporting detail.'],
  ['Why did the chalk at Arras matter?', ['Deep tunnels and old quarries could shelter troops and a hospital', 'It made the ground flood easily, so tanks could not be used there', 'It contained chemicals that protected soldiers from gas attacks'], 0, 'Terrain shaped what could be built.'],
], [
  Q('wf1.p1', 'Where were tunnels and quarries used to shelter troops in 1917?', ['Arras', 'Cambrai', 'Ypres'], 0, 'In the chalk around the town.', 'arras'),
  Q('wf1.p2', 'Where did the Germans first use chlorine gas?', ['Ypres', 'The Somme', 'Arras'], 0, 'At Second Ypres, April 1915.', 'ypres'),
  Q('wf1.p3', 'When was the first day of the Somme?', ['1 July 1916', 'April 1915', 'November 1917'], 0, 'About 57,000 British casualties.', 'somme'),
  Q('wf1.p4', 'Where were tanks used in large numbers in 1917?', ['Cambrai', 'Ypres', 'Arras, in the tunnels'], 0, 'In November 1917.', 'cambrai'),
  Q('wf1.p5', 'What lay between the opposing front lines?', ['No man\'s land', 'Reserve trenches', 'Base hospitals'], 0, 'Open ground under fire.', 'trenches'),
], [
  Q('wf1.c1', 'What joined the front line to the trenches behind?', ['Communication trenches', 'Light railway lines', 'Telephone wires on poles'], 0, 'Men and supplies moved along them.', 'trenches'),
  Q('wf1.c2', 'Why did trenches at Ypres flood?', ['Clay soil and a high water table', 'Chalk soil that let water through', 'Heavy snowfall every winter'], 0, 'Water could not drain.', 'terrain'),
  Q('wf1.c3', 'Which 1917 battle is famous for mud?', ['Passchendaele (Third Ypres)', 'The first day of the Somme', 'The Battle of Cambrai'], 0, 'Shell holes filled with water.', 'ypres'),
  Q('wf1.c4', 'How were wounded men moved from the front line?', ['By stretcher bearers, often on foot', 'By aircraft from the front line', 'By tanks driven to the base hospitals'], 0, 'Roads were destroyed near the front.', 'transport'),
  Q('wf1.c5', 'Which transport was used further behind the lines?', ['Motor ambulances, trains and barges', 'Only horses and carts on the roads', 'Bicycles ridden by the wounded men'], 0, 'Several methods were used.', 'transport'),
  Q('wf1.c6', 'Why was organising help often difficult?', ['Telephone lines were often cut', 'There were no officers at the front', 'Messages were banned by the army'], 0, 'Communications failed under shelling.', 'transport'),
  Q('wf1.c7', 'Which soil made deep dugouts easier to dig?', ['Chalk', 'Wet clay', 'Loose sand'], 0, 'At the Somme and Arras.', 'terrain'),
  Q('wf1.c8', 'Who dug tunnels at Arras?', ['Tunnellers, including New Zealanders', 'Nurses and drivers of the FANY', 'Doctors and orderlies of the RAMC'], 0, 'The New Zealand Tunnelling Company.', 'arras'),
], {exam: 'Describe two features of the trench system on the Western Front. (4 marks)'}),

lesson(T, 'medicine.wf-injuries', 'Illness and injury on the Western Front', ['11 HE2'], [
  ['Trench conditions', 'Standing for days in cold, wet trenches caused trench foot: feet swelled and could turn gangrenous, sometimes needing amputation. Lice spread trench fever, which caused high temperatures and pains. Rats, poor sanitation and constant shelling made conditions worse. Shell shock, a mental breakdown under the strain of bombardment, affected many thousands of men.'],
  ['Wounds', 'Most wounds were caused by shrapnel and fragments from exploding shells rather than bullets. Shrapnel carried dirt and cloth into the wound, causing infection. Rifle and machine-gun bullets caused deep wounds and broken bones. Gas gangrene, caused by bacteria from the soil, could spread quickly and kill.'],
  ['Head injuries', 'Head wounds were common in the early war because soldiers wore cloth caps. The steel Brodie helmet, introduced from late 1915, reduced the number of serious head injuries.'],
  ['Gas attacks', 'Chlorine (1915) and phosgene caused choking and damaged the lungs. Mustard gas (from 1917) caused blistering and blindness and could linger in the ground. Gas masks improved during the war, but gas caused great fear even though fewer men died of it than of shellfire.'],
], view.factors('Prevention on the front line', [
  ['Trench foot', 'dry socks, whale oil rubbed on feet, duckboards, rotating men out of the front line'],
  ['Head injuries', 'Brodie helmets from late 1915'],
  ['Gas', 'improved gas masks and training'],
  ['Infection', 'anti-tetanus injections; cleaning wounds early'],
]), [
  view.timeline('New dangers', [
    ['1914', 'Trench foot appears in the first winter'],
    ['Apr 1915', 'Chlorine gas at Ypres'],
    ['Dec 1915', 'Phosgene used'],
    ['1915–16', 'Brodie helmets issued'],
    ['Jul 1917', 'Mustard gas first used'],
    ['1918', 'Lice shown to spread trench fever'],
  ]),
  view.people('People', [
    ['Front-line soldiers', 'Faced trench foot, lice and shellfire'],
    ['Regimental medical officers', 'Gave first treatment near the front'],
    ['John Brodie', 'Designed the British steel helmet'],
    ['Shell-shocked men', 'Often misunderstood and sometimes treated harshly'],
  ]),
  view.source('A source type: a soldier\'s letter home', 'A private letter in which a soldier describes his feet being numb and swollen after days in a flooded trench.', 'Vivid evidence of one man\'s experience; letters were censored, and one account may not be typical.'),
], [
  ['Why did most wounds become infected?', ['Shrapnel carried dirt and cloth from the manured soil into the wound', 'Bullets were coated in poison by the German army before battles', 'Soldiers were not given any medical treatment until they reached Britain'], 0, 'The cause of the wound and the soil combined.'],
  ['How was trench foot prevented?', ['Dry socks, whale oil and rotating men out of the front line', 'Wearing steel helmets and better gas masks in the trenches', 'Giving every soldier an injection of penicillin each week'], 0, 'Prevention focused on keeping feet dry.'],
  ['Exam skill · Describe two features. Which is a valid feature of gas attacks, with supporting detail?', ['Mustard gas, used from 1917, caused blisters and blindness and lingered in the ground.', 'Gas was very frightening and many soldiers were scared of it during the war.', 'The war on the Western Front lasted for more than four years, from 1914 to 1918.'], 0, 'A feature with a specific detail.'],
  ['Why were head wounds common early in the war?', ['Soldiers wore cloth caps until steel helmets were introduced', 'Doctors at the front refused to treat any head injuries at all', 'Gas masks covered the head and made it a target for snipers'], 0, 'Equipment changed the pattern of injury.'],
], [
  Q('wf2.p1', 'What caused trench foot?', ['Standing in cold, wet trenches', 'Bites from lice in clothing', 'Breathing in chlorine gas'], 0, 'Feet swelled and could turn gangrenous.', 'conditions'),
  Q('wf2.p2', 'What spread trench fever?', ['Lice', 'Rats', 'Dirty water'], 0, 'This was shown in 1918.', 'conditions'),
  Q('wf2.p3', 'What caused most wounds?', ['Shrapnel from shells', 'Bayonet charges', 'Rifle and machine-gun bullets'], 0, 'Artillery was the main killer.', 'wounds'),
  Q('wf2.p4', 'Which gas caused blisters and blindness?', ['Mustard gas', 'Chlorine gas', 'Phosgene gas'], 0, 'It was first used in 1917.', 'gas'),
  Q('wf2.p5', 'What reduced serious head injuries?', ['The Brodie helmet', 'The Thomas splint', 'Gas masks'], 0, 'Issued from late 1915.', 'head'),
], [
  Q('wf2.c1', 'What is gas gangrene caused by?', ['Bacteria from the soil', 'Breathing in chlorine gas', 'Cold and freezing weather'], 0, 'It spread quickly through wounds.', 'wounds'),
  Q('wf2.c2', 'What was shell shock?', ['A mental breakdown under bombardment', 'A wound caused by a piece of shell', 'A type of gas attack used in 1915'], 0, 'It affected many thousands of men.', 'conditions'),
  Q('wf2.c3', 'When was chlorine gas first used?', ['April 1915', 'July 1916', 'November 1917'], 0, 'At Second Ypres.', 'gas'),
  Q('wf2.c4', 'What were duckboards for?', ['Keeping feet out of mud and water', 'Carrying the wounded to aid posts', 'Blocking gas from entering dugouts'], 0, 'Wooden slats on the trench floor.', 'conditions'),
  Q('wf2.c5', 'Why was shrapnel dangerous beyond the wound itself?', ['It carried dirt and cloth into the wound', 'It was always coated in a poison', 'It exploded again inside the body later'], 0, 'Infection often followed.', 'wounds'),
  Q('wf2.c6', 'What did chlorine and phosgene damage?', ['The lungs', 'The feet', 'The eyes only'], 0, 'They caused choking.', 'gas'),
  Q('wf2.c7', 'What did soldiers rub on their feet to prevent trench foot?', ['Whale oil', 'Carbolic acid', 'Iodine'], 0, 'It helped keep them dry.', 'conditions'),
  Q('wf2.c8', 'Why did gas cause great fear?', ['Its effects were horrible and unpredictable', 'It killed most soldiers', 'It could not be stopped by masks at all'], 0, 'Fewer died of it than of shellfire.', 'gas'),
], {exam: 'Describe two features of the injuries suffered by soldiers on the Western Front. (4 marks)'}),

lesson(T, 'medicine.wf-evacuation', 'The RAMC, the FANY and the chain of evacuation', ['11 HE3'], [
  ['The RAMC and the FANY', 'The Royal Army Medical Corps (RAMC) provided doctors, stretcher bearers and orderlies, and ran the medical posts and hospitals. The First Aid Nursing Yeomanry (FANY), a women\'s volunteer organisation, drove ambulances, ran hospitals and soup kitchens, and worked close to the front, at first alongside Belgian and French forces and from 1916 with the British.'],
  ['From the front line', 'Stretcher bearers carried the wounded to a Regimental Aid Post, just behind the front, where first aid was given. Field ambulances (medical units) ran Advanced and Main Dressing Stations further back, where wounds were dressed and men were sorted.'],
  ['Casualty Clearing Stations', 'A few miles behind the lines, Casualty Clearing Stations (CCSs), often near railways, were the first places with surgeons and operating theatres. Triage sorted men into those who needed urgent treatment, those who could wait and those unlikely to survive. Base hospitals near the coast, such as at Étaples and Boulogne, then gave longer treatment before men returned to the front or to Britain.'],
  ['The underground hospital at Arras', 'Before the Battle of Arras in April 1917, tunnellers linked old chalk quarries beneath the town. An underground hospital with hundreds of beds and an operating theatre was built there, close to the front but protected from shelling. Damp, poor light and the risk of infection made it a difficult place to work.'],
], view.factors('The chain of evacuation', [
  ['1 Regimental Aid Post', 'first aid near the front line'],
  ['2 Dressing Stations', 'wounds dressed; men sorted'],
  ['3 Casualty Clearing Station', 'surgery and triage, several miles behind'],
  ['4 Base hospital', 'longer treatment near the coast; then home to Britain'],
]), [
  view.timeline('A wounded soldier\'s journey', [
    ['Minutes', 'Stretcher bearers carry him from the trench'],
    ['Within hours', 'First aid at the Regimental Aid Post'],
    ['Hours', 'Dressing Station: wound dressed, ambulance onwards'],
    ['Within a day', 'Casualty Clearing Station: triage and surgery'],
    ['Days', 'Ambulance train or barge to a base hospital'],
    ['Weeks', 'Return to the front, or ship to Britain'],
  ]),
  view.people('People and units', [
    ['RAMC', 'Doctors, stretcher bearers and orderlies'],
    ['FANY', 'Women volunteers who drove ambulances and ran hospitals'],
    ['Nurses', 'Including the Queen Alexandra\'s Imperial Military Nursing Service'],
    ['Tunnellers', 'Built the underground spaces at Arras'],
  ]),
  view.source('A source type: a photograph of a Casualty Clearing Station', 'An official photograph showing tents, ambulances and stretchers beside a railway line behind the front.', 'Useful for the scale and layout; official photographs were staged or chosen to reassure people at home.'),
], [
  ['Where was surgery first usually carried out?', ['At a Casualty Clearing Station a few miles behind the lines', 'At the Regimental Aid Post right next to the front-line trench', 'Only in hospitals in Britain after the men were shipped home'], 0, 'CCSs were the first surgical stage.'],
  ['What was triage?', ['Sorting the wounded by how urgently they needed treatment', 'Carrying the wounded in teams of three stretcher bearers', 'Cleaning the operating theatre three times a day'], 0, 'It decided who was treated first.'],
  ['Exam skill · Describe two features. Which is a valid feature of the chain of evacuation, with supporting detail?', ['Casualty Clearing Stations were often near railways, so men could go on by ambulance train.', 'The chain of evacuation was very good and helped lots of soldiers who were wounded.', 'The FANY was a women\'s volunteer organisation set up some years before the war.'], 0, 'A feature with a specific detail.'],
  ['Why was the underground hospital at Arras a difficult place to work?', ['It was damp and poorly lit, with a risk of infection', 'It was too far from the front for any wounded men to reach it', 'It was destroyed by German shelling on the first day of the battle'], 0, 'Protection came at a cost.'],
], [
  Q('wf3.p1', 'What does RAMC stand for?', ['Royal Army Medical Corps', 'Royal Ambulance Motor Company', 'Regimental Aid Medical Centre'], 0, 'It ran army medical care.', 'ramc'),
  Q('wf3.p2', 'What was the first stop for a wounded soldier?', ['The Regimental Aid Post', 'The Casualty Clearing Station', 'The base hospital'], 0, 'Just behind the front line.', 'chain'),
  Q('wf3.p3', 'What did the FANY do?', ['Drove ambulances and ran hospitals', 'Dug the tunnels beneath Arras', 'Designed steel helmets for soldiers'], 0, 'Women volunteers.', 'fany'),
  Q('wf3.p4', 'Where were base hospitals?', ['Near the coast', 'In the front line', 'In no man\'s land'], 0, 'For example Étaples and Boulogne.', 'chain'),
  Q('wf3.p5', 'Where was the underground hospital?', ['Arras', 'Cambrai', 'Ypres'], 0, 'In linked chalk quarries.', 'arras-hospital'),
], [
  Q('wf3.c1', 'What happened at a Dressing Station?', ['Wounds were dressed and men sorted', 'Major surgery was carried out', 'Men were put on ships to go home'], 0, 'Run by field ambulances.', 'chain'),
  Q('wf3.c2', 'Why were CCSs often near railways?', ['So men could go on by ambulance train', 'So the doctors could travel home on leave', 'So supplies of gas masks could arrive quickly'], 0, 'Transport onward.', 'chain'),
  Q('wf3.c3', 'Who were sorted as unlikely to survive in triage?', ['The most severely wounded', 'Those with minor wounds', 'Officers only'], 0, 'Hard decisions under pressure.', 'chain'),
  Q('wf3.c4', 'When did the FANY begin working with the British army?', ['1916', '1914', '1918'], 0, 'Earlier with Belgians and French.', 'fany'),
  Q('wf3.c5', 'What did the underground hospital have?', ['Hundreds of beds and an operating theatre', 'Only a small first-aid post for officers', 'A factory making X-ray machines for the army'], 0, 'Protected from shelling.', 'arras-hospital'),
  Q('wf3.c6', 'Who carried the wounded from the trenches?', ['Stretcher bearers', 'FANY drivers', 'Base hospital surgeons'], 0, 'Often under fire.', 'chain'),
  Q('wf3.c7', 'What was a field ambulance?', ['A medical unit running dressing stations', 'A single motor vehicle for one patient', 'A hospital in Britain for wounded men'], 0, 'Not just a vehicle.', 'chain'),
  Q('wf3.c8', 'When was the Battle of Arras?', ['April 1917', 'July 1916', 'April 1915'], 0, 'The hospital was ready before it.', 'arras-hospital'),
], {exam: 'Describe two features of the work of the RAMC on the Western Front. (4 marks)'}),

lesson(T, 'medicine.wf-surgery', 'Surgery and medicine on the Western Front', ['11 HE4'], [
  ['The context', 'By 1914 surgeons understood germ theory and used aseptic methods in hospitals, X-rays had been known since 1895, and blood groups had been discovered in 1901. But blood could not yet be stored, X-ray machines were large, and aseptic conditions were very hard to keep near the front.'],
  ['Treating wounds and infection', 'Surgeons found that antiseptics alone could not stop deep infection. They used debridement, cutting away dead and infected tissue, and the Carrel-Dakin method, which washed wounds with a sterile salt-and-chlorine solution through tubes. Amputation was still common when a limb could not be saved.'],
  ['The Thomas splint', 'A broken thigh bone from a gunshot wound was often fatal, because the bleeding and movement led to shock and infection. The Thomas splint held the leg still and straight. Once it was widely used from 1916, the death rate from these fractures fell sharply, from around 80 per cent to around 20 per cent according to commonly cited figures.'],
  ['X-rays and blood transfusion', 'Mobile X-ray units helped surgeons find bullets and shrapnel, though the images took a long time and the machines could overheat. Blood transfusion advanced: adding sodium citrate stopped blood clotting, and before the Battle of Cambrai in November 1917 Captain Oswald Robertson, a US army doctor, set up a blood depot, storing type O blood on ice to treat casualties.'],
], view.factors('Why did surgery improve during the war?', [
  ['War', 'huge numbers of casualties gave surgeons experience and urgency'],
  ['Science and technology', 'X-rays; sodium citrate; the Thomas splint'],
  ['Individuals', 'Oswald Robertson\'s blood depot; surgeons sharing methods'],
  ['Limits', 'infection near the front; slow X-rays; blood stored only for weeks'],
]), [
  view.timeline('Advances', [
    ['1895', 'X-rays discovered'],
    ['1901', 'Blood groups discovered'],
    ['1914–15', 'Sodium citrate used to stop blood clotting'],
    ['1915', 'Carrel-Dakin method developed'],
    ['1916', 'Thomas splint widely used'],
    ['Nov 1917', 'Robertson\'s blood depot at Cambrai'],
  ]),
  view.people('People', [
    ['Hugh Owen Thomas', 'Designed the splint before the war'],
    ['Robert Jones', 'Thomas\'s nephew, who promoted its use on the Western Front'],
    ['Oswald Robertson', 'Set up the blood depot before Cambrai'],
    ['Alexis Carrel and Henry Dakin', 'Developed the wound-irrigation method'],
  ]),
  view.source('A source type: an article in a medical journal', 'An article by an army surgeon in 1917 reporting the results of using the Thomas splint for fractured thighs.', 'Useful evidence of results and methods; written for doctors, it may present the surgeon\'s own work favourably.'),
], [
  ['Why did the Thomas splint save so many lives?', ['It held the broken leg still, reducing bleeding, shock and infection', 'It contained an antiseptic that killed the germs inside the wound', 'It allowed surgeons to amputate legs much more quickly than before'], 0, 'Keeping the bone still was the key.'],
  ['What did sodium citrate do?', ['Stopped blood clotting so it could be stored', 'Killed germs inside deep shrapnel wounds', 'Made X-ray images appear more quickly'], 0, 'It made blood banks possible.'],
  ['Exam skill · Describe two features. Which is a valid feature of blood transfusion on the Western Front, with supporting detail?', ['Before Cambrai in 1917, Robertson stored type O blood on ice so it was ready for casualties.', 'Blood transfusion was a very important development that saved a lot of lives in the war.', 'Blood groups had been discovered in 1901, many years before the war began.'], 0, 'A feature with specific detail from the war.'],
  ['What was debridement?', ['Cutting away dead and infected tissue from a wound', 'Washing a wound with salt water through a set of tubes', 'Using a magnet to pull metal fragments from the brain'], 0, 'It removed the source of infection.'],
], [
  Q('wf4.p1', 'Which device reduced deaths from fractured thighs?', ['The Thomas splint', 'The Brodie helmet', 'The Carrel-Dakin tube'], 0, 'Widely used from 1916.', 'splint'),
  Q('wf4.p2', 'Where was a blood depot set up in November 1917?', ['Cambrai', 'Arras', 'Ypres, in Belgium'], 0, 'By Oswald Robertson.', 'blood'),
  Q('wf4.p3', 'What were mobile X-ray units used for?', ['Finding bullets and shrapnel', 'Killing germs in deep wounds', 'Storing blood before battles'], 0, 'They showed metal inside the body.', 'xray'),
  Q('wf4.p4', 'What did the Carrel-Dakin method do?', ['Washed wounds with a sterile solution', 'Stored blood on ice for battles', 'Held broken legs still and straight'], 0, 'Through tubes into the wound.', 'wounds'),
  Q('wf4.p5', 'When were blood groups discovered?', ['1901', '1917', '1895'], 0, 'X-rays were 1895.', 'blood'),
], [
  Q('wf4.c1', 'What was the problem with mobile X-ray machines?', ['Images took a long time and machines overheated', 'They could not show any metal inside the body', 'They were far too small to see a whole limb'], 0, 'They still helped surgeons.', 'xray'),
  Q('wf4.c2', 'Which blood type did Robertson store?', ['Type O', 'Type A', 'Type AB'], 0, 'It could be given to most patients.', 'blood'),
  Q('wf4.c3', 'Why was antiseptic surgery not enough near the front?', ['Deep wounds were full of soil bacteria', 'Antiseptics were banned by the army', 'There were no surgeons anywhere in France'], 0, 'Debridement was needed too.', 'wounds'),
  Q('wf4.c4', 'Roughly what did the death rate from fractured thighs fall to?', ['About 20 per cent', 'About 80 per cent', 'About 60 per cent'], 0, 'From around 80 per cent.', 'splint'),
  Q('wf4.c5', 'What was blood stored with on ice at Cambrai?', ['Sodium citrate and glucose', 'Carbolic acid solution', 'Whale oil and iodine'], 0, 'To stop clotting.', 'blood'),
  Q('wf4.c6', 'Who promoted the Thomas splint on the Western Front?', ['Robert Jones', 'Joseph Lister', 'Alexander Fleming'], 0, 'Thomas\'s nephew.', 'splint'),
  Q('wf4.c7', 'Why was amputation still common?', ['Some limbs could not be saved', 'It was the only treatment known', 'Patients asked for it'], 0, 'Despite new techniques.', 'wounds'),
  Q('wf4.c8', 'Which method had been used in hospitals before 1914?', ['Aseptic surgery', 'Blood banks', 'The Thomas splint at the front'], 0, 'Hard to keep near the front.', 'context'),
], {exam: 'Describe two features of the treatment of wounds on the Western Front. (4 marks)'}),

lesson(T, 'medicine.wf-sources', 'Using sources: the Western Front enquiry', ['11 HE5'], [
  ['National and local sources', 'Historians use national sources, such as army records and statistics, government reports, national newspapers and articles in medical journals, and local sources, such as personal letters and diaries, photographs taken in one place, and the records of a single hospital or unit. National sources show the overall picture; local sources show what it was like in one place for particular people.'],
  ['How useful is a source?', 'Usefulness depends on the enquiry. Judge the content (what it tells you and whether it fits what you know), and the provenance: its nature, origin and purpose. Who made it, when, and why? A censored letter, a staged official photograph or a newspaper report written to keep up morale can still be useful, as long as you explain what it can and cannot show.'],
  ['Following up a source', 'To follow up a source, pick one detail, ask a question about it, choose a type of source that could answer it, and explain how that source would help. For example, if a soldier\'s letter mentions many men with swollen feet, you might ask how common trench foot was in his unit and look at that unit\'s medical records.'],
  ['Using your own knowledge', 'Use your knowledge of the Western Front to test a source: does a description of a Casualty Clearing Station match what is known about where they were and what they did? Contextual knowledge helps you judge accuracy and typicality.'],
], view.factors('Judging usefulness (NOP)', [
  ['Nature', 'what type of source is it: letter, photograph, report, statistics?'],
  ['Origin', 'who produced it, when and where?'],
  ['Purpose', 'why was it made, and for whom?'],
  ['Content', 'what does it show, and does it fit your own knowledge?'],
]), [
  view.timeline('Planning a follow-up', [
    ['1', 'Choose a detail in the source'],
    ['2', 'Ask a specific question about it'],
    ['3', 'Choose a type of source to answer it'],
    ['4', 'Explain how that source would help'],
  ]),
  view.people('Who produced the sources?', [
    ['Soldiers', 'Letters and diaries, often censored'],
    ['Army officials', 'Statistics, records and official photographs'],
    ['Doctors and nurses', 'Medical articles, hospital records and memoirs'],
    ['Journalists', 'Newspaper reports, subject to wartime censorship'],
  ]),
  view.source('A source type: army medical statistics', 'Official tables showing the number of men admitted to hospital for wounds, gas and illnesses such as trench foot, by year.', 'Very useful for the scale of a problem across the army; it gives numbers but not the experience, and recording may have been incomplete.'),
], [
  ['Which question best follows up a letter mentioning many men with swollen feet?', ['How many men in this soldier\'s unit were treated for trench foot that winter?', 'What was the weather like across the whole of Europe during the year 1916?', 'Did the soldier who wrote the letter have any brothers serving in the war?'], 0, 'A good follow-up question is specific and answerable.'],
  ['Why might an official photograph be less useful for showing conditions?', ['It may have been staged or chosen to reassure people at home', 'Photographs cannot show any details of buildings or vehicles at all', 'It was taken by a soldier who had no permission to take photographs'], 0, 'Purpose affects what a source shows.'],
  ['Exam skill · How useful? Which is the strongest judgement about a hospital\'s admission records for an enquiry into the treatment of gas victims?', ['Useful for how many gas cases were treated there and when, but they say little about what treatment was like for the men.', 'Useful because they are hospital records and so they must be completely accurate about everything.', 'Not useful at all, because they are just lists of numbers and names and do not tell us anything about the war.'], 0, 'A strong judgement explains strengths and limits for the enquiry.'],
  ['What makes a source "local" in this enquiry?', ['It shows one place or group, such as a single hospital or unit', 'It was written in Britain rather than in France or Belgium', 'It was produced by the government for the whole country'], 0, 'Local sources give the detail of one place.'],
], [
  Q('wf5.p1', 'Which is a national source?', ['Army medical statistics', 'A soldier\'s diary', 'A photo of one aid post'], 0, 'It covers the whole army.', 'national-local'),
  Q('wf5.p2', 'Which is a local source?', ['A single hospital\'s records', 'A government report on the army', 'A national newspaper in London'], 0, 'It shows one place.', 'national-local'),
  Q('wf5.p3', 'What does provenance mean?', ['Who made a source, when and why', 'What the source says about events', 'How long the source is and its layout'], 0, 'Nature, origin and purpose.', 'usefulness'),
  Q('wf5.p4', 'Why were soldiers\' letters often limited?', ['They were censored', 'They were always forged', 'They were written by officers'], 0, 'Some details were cut out.', 'usefulness'),
  Q('wf5.p5', 'What should a follow-up question be?', ['Specific and answerable', 'As broad as possible', 'About a different topic'], 0, 'It must link to a source type.', 'follow-up'),
], [
  Q('wf5.c1', 'What do the letters NOP stand for?', ['Nature, origin, purpose', 'Name, opinion, place', 'Number, order, page'], 0, 'Three parts of provenance.', 'usefulness'),
  Q('wf5.c2', 'How does own knowledge help judge a source?', ['It tests accuracy and typicality', 'It replaces the need for the source', 'It is not allowed in the exam answer'], 0, 'Context matters.', 'knowledge'),
  Q('wf5.c3', 'What might a morale-boosting newspaper report leave out?', ['The worst conditions and losses', 'The date when it was printed', 'The name of the newspaper itself'], 0, 'Purpose shapes content.', 'usefulness'),
  Q('wf5.c4', 'Which type of source shows the scale of a problem best?', ['Statistics', 'A single letter', 'A painting'], 0, 'Numbers across the army.', 'national-local'),
  Q('wf5.c5', 'What is the first step in following up a source?', ['Choose a detail in it', 'Find a completely new topic', 'Decide whether its author lied'], 0, 'Then ask a question.', 'follow-up'),
  Q('wf5.c6', 'Is a biased source always useless?', ['No; it can show attitudes or purpose', 'Yes, a biased source is always useless', 'Only if it is a photograph or a film'], 0, 'Usefulness depends on the enquiry.', 'usefulness'),
  Q('wf5.c7', 'What does usefulness depend on?', ['The enquiry being asked', 'The length of the source', 'Whether it is typed'], 0, 'Useful for what?', 'usefulness'),
  Q('wf5.c8', 'Which source would best show what a CCS looked like?', ['A photograph of one CCS', 'A table of casualty numbers', 'A government budget'], 0, 'Visual and local.', 'national-local'),
], {exam: 'How useful are a soldier\'s letter and an official report for an enquiry into the problems of treating wounded soldiers on the Western Front? (8 marks)'}),
];
