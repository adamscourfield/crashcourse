// Builds dist/classroom/catalog.json: every lesson a teacher can set, grouped by subject and topic.
// The teacher dashboard reads this instead of loading every subject's content modules.
// Run: node tools/build-classroom-catalog.mjs   (tests/classroom.test.js checks it is up to date)
import {writeFileSync} from 'node:fs';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {dirname, join} from 'node:path';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const load = rel => import(pathToFileURL(join(dist, rel)).href);

export async function buildCatalog() {
  const subjects = [];

  // Science: lessons from content.js, topics (with discipline) from registry.js.
  const sci = await load('content.js');
  const reg = await load('registry.js');
  subjects.push({
    id: 'science', name: 'Science', course: 'AQA GCSE Science',
    topics: reg.topics.map(t => ({
      id: t.id, title: `${t.discipline} · ${t.title}`,
      lessons: sci.lessons.filter(l => l.topicId === t.id).map(l => ({
        id: l.id, title: l.title, ...(l.separate ? {separate: true} : {}), ...(l.higher ? {higher: true} : {}),
      })),
    })).filter(t => t.lessons.length),
  });

  // Maths: the same ordering the studio uses (maths/studio.js).
  const num = await load('maths/lessons-number.js');
  const parts = [
    ['maths/lessons-algebra.js', 'algebraTopic', 'orderedAlgebra'], ['maths/lessons-ratio.js', 'ratioTopic', 'orderedRatio'],
    ['maths/lessons-geometry.js', 'geometryTopic', 'orderedGeometry'], ['maths/lessons-geometry2.js', null, 'orderedGeometry2'],
    ['maths/lessons-geometry3.js', null, 'orderedGeometry3'], ['maths/lessons-geometry4.js', null, 'orderedGeometry4'],
    ['maths/lessons-probability.js', 'probabilityTopic', 'orderedProbability'], ['maths/lessons-statistics.js', 'statisticsTopic', 'orderedStatistics'],
    ['maths/lessons-problems.js', 'problemsTopic', 'orderedProblems'],
  ];
  const mLessons = [...num.orderedLessons], mTopics = [...num.mathsTopics];
  for (const [file, topic, ordered] of parts) {
    const m = await load(file);
    mLessons.push(...m[ordered]);
    if (topic) mTopics.push(m[topic]);
  }
  subjects.push({
    id: 'maths', name: 'Maths', course: 'Edexcel GCSE Mathematics',
    topics: mTopics.map(t => ({id: t.id, title: t.title, lessons: mLessons.filter(l => l.topicId === t.id).map(l => ({id: l.id, title: l.title}))})).filter(t => t.lessons.length),
  });

  for (const [id, name, course, file] of [
    ['english-language','English Language','AQA GCSE English Language · 8700','language/content.js'],
    ['english-literature', 'English Literature', 'AQA GCSE English Literature · 8702', 'literature/content.js'],
    ['history', 'History', 'Pearson Edexcel GCSE History · 1HI0', 'history/content.js'],
    ['geography', 'Geography', 'Pearson Edexcel GCSE Geography A', 'geography/content.js'],
  ]) {
    const m = await load(file);
    subjects.push({
      id, name, course,
      topics: m.topics.map(t => ({id: t.id, title: t.title, lessons: m.lessons.filter(l => l.topicId === t.id).map(l => ({id: l.id, title: l.title}))})).filter(t => t.lessons.length),
    });
  }
  return {version: 1, subjects};
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const c = await buildCatalog();
  writeFileSync(join(dist, 'classroom', 'catalog.json'), JSON.stringify(c) + '\n');
  console.log(c.subjects.map(s => `${s.id} ${s.topics.reduce((n, t) => n + t.lessons.length, 0)}`).join(', '));
}
