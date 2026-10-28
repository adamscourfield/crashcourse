// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 2 period study P4: Superpower relations and the Cold War, 1941–91.
// Depth lesson for key topic 1 (specification 1.1): the attitudes of Stalin, Truman and Churchill.
// All text and questions are original; sources are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.coldwar.kt1';

export const coldwarDepth4 = [
lesson(T, 'coldwar.leaders-attitudes', 'The attitudes of Stalin, Truman and Churchill', ['P4 1.1'], [
  ['Stalin', 'About 27 million Soviet people died in the Second World War, and Russia had been invaded from the west in 1914 and 1941. Stalin wanted security above all: a weak Germany, reparations to rebuild, and friendly governments in Eastern Europe, especially Poland, as a buffer zone. He distrusted the West, which had delayed opening a second front until 1944.'],
  ['Truman', 'Harry Truman became President in April 1945 with little experience of foreign affairs. He was firmly anti-communist and believed the USA should stand up to Stalin. Within days of taking office he spoke sharply to the Soviet foreign minister Molotov about Poland. The atomic bomb gave him confidence that the USA could negotiate from strength.'],
  ['Churchill', 'Churchill had opposed communism since the Russian Revolution of 1917. In 1944 he made an informal deal with Stalin in Moscow dividing influence in the Balkans by percentages, but he feared Soviet control of Eastern Europe. In March 1946, no longer Prime Minister, he gave a speech at Fulton, Missouri, with Truman present, warning that an "iron curtain" had come down across Europe.'],
  ['How attitudes shaped relations', 'Each side read the other\'s actions in the worst light. Stalin saw Western demands about Poland as interference in his security zone; Truman and Churchill saw Soviet control as expansion. Stalin called the Fulton speech a call to war. The leaders\' attitudes turned disagreements into lasting suspicion.'],
], view.factors('How each leader saw the post-war world', [
  ['Stalin', 'security; buffer zone; reparations; distrust of the West'],
  ['Truman', 'anti-communist; stand firm; confidence from the bomb'],
  ['Churchill', 'long-standing anti-communism; the "iron curtain" warning'],
  ['Effect', 'mutual suspicion turned disputes into a Cold War'],
]), [
  view.timeline('Attitudes hardening', [
    ['Oct 1944', 'Churchill and Stalin\'s percentages deal in Moscow'],
    ['Feb 1945', 'Yalta: the Big Three still cooperate'],
    ['Apr 1945', 'Truman becomes President; confronts Molotov'],
    ['Jul–Aug 1945', 'Potsdam; Churchill replaced by Attlee'],
    ['Mar 1946', 'Churchill\'s Fulton speech'],
    ['Mar 1946', 'Stalin condemns the speech'],
  ]),
  view.people('People', [
    ['Joseph Stalin', 'Soviet leader seeking security'],
    ['Harry Truman', 'US President from April 1945'],
    ['Winston Churchill', 'British Prime Minister to July 1945'],
    ['Vyacheslav Molotov', 'Soviet foreign minister'],
  ]),
  view.source('A source type: a newspaper report of the Fulton speech', 'A March 1946 American newspaper report of Churchill\'s speech, with a photograph of Churchill and Truman on the platform.', 'Useful for how the speech was presented to Americans; Truman\'s presence suggested US approval, which Stalin noticed.'),
], [
  ['Why did Stalin want friendly governments in Eastern Europe?', ['As a buffer zone against another invasion from the west', 'To give the countries there free and fair elections', 'Because the USA had asked him to protect them'], 0, 'Security after two invasions.'],
  ['Why did the atomic bomb affect Truman\'s attitude?', ['It gave him confidence to negotiate from strength', 'It made him fear that the USSR would use it first', 'It persuaded him to share all secrets with Stalin'], 0, 'Power changed tone.'],
  ['Exam skill · Explain two consequences. Which is a developed consequence of the Fulton speech?', ['Stalin saw it as a call to war, so mistrust deepened and cooperation became harder.', 'Churchill gave the speech at Fulton, Missouri, in March 1946 with Truman there.', 'Churchill was no longer the British Prime Minister when he gave the speech.'], 0, 'A consequence explains a result.'],
  ['What was the 1944 percentages deal?', ['An informal division of influence in the Balkans', 'A treaty that ended the Second World War in Europe', 'An agreement to share the atomic bomb'], 0, 'Churchill\'s pragmatism.'],
], [
  Q('cwd31.p1', 'About how many Soviet people died in the war?', ['27 million', '2.7 million', '270,000'], 0, 'A huge loss shaping Stalin\'s aims.', 'stalin'),
  Q('cwd31.p2', 'When did Truman become President?', ['April 1945', 'February 1945', 'March 1946'], 0, 'After Roosevelt died.', 'truman'),
  Q('cwd31.p3', 'Where did Churchill give his "iron curtain" speech?', ['Fulton, Missouri', 'Potsdam, Germany', 'Yalta, Crimea'], 0, 'He gave it in March 1946.', 'churchill'),
  Q('cwd31.p4', 'Which country mattered most to Stalin\'s security?', ['Poland', 'Greece', 'Italy'], 0, 'The route of invasion.', 'stalin'),
  Q('cwd31.p5', 'Whom did Truman confront over Poland in April 1945?', ['Molotov', 'Attlee', 'Churchill'], 0, 'The Soviet foreign minister.', 'truman'),
], [
  Q('cwd31.c1', 'Since when had Churchill opposed communism?', ['The 1917 revolution', 'The Yalta conference', 'The Berlin Blockade'], 0, 'A long-standing view.', 'churchill'),
  Q('cwd31.c2', 'Where was the percentages deal made?', ['Moscow', 'Washington', 'London'], 0, 'In October 1944.', 'churchill'),
  Q('cwd31.c3', 'What did Stalin call the Fulton speech?', ['A call to war', 'A message of peace', 'A fair warning'], 0, 'Mistrust deepened.', 'effect'),
  Q('cwd31.c4', 'What had the West delayed until 1944?', ['A second front', 'Lend-Lease aid', 'The atomic bomb'], 0, 'Stalin resented the delay.', 'stalin'),
  Q('cwd31.c5', 'Who was in the audience at Fulton?', ['Truman', 'Stalin', 'Roosevelt'], 0, 'Suggesting US support.', 'churchill'),
  Q('cwd31.c6', 'What gave Truman confidence?', ['The atomic bomb', 'A Soviet alliance', 'British loans'], 0, 'Negotiating from strength.', 'truman'),
  Q('cwd31.c7', 'What did Stalin want from Germany?', ['Reparations', 'An alliance', 'Free elections'], 0, 'To rebuild the USSR.', 'stalin'),
  Q('cwd31.c8', 'Was Churchill Prime Minister in March 1946?', ['No', 'Yes', 'Only briefly'], 0, 'Attlee had replaced him in 1945.', 'churchill'),
], {exam: 'Explain two consequences of the attitudes of Stalin and Truman for relations between the USA and the USSR, 1945–46. (8 marks)'}),
];
