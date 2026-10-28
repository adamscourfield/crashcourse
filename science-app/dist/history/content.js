// Pearson Edexcel GCSE (9–1) History (1HI0). Built units are listed here; the course map shows only
// topics that have lessons.
import {elizabethTopic1, elizabethLessons1} from './content-elizabeth1.js?v=20261028-history08';
import {elizabethTopic2, elizabethLessons2} from './content-elizabeth2.js?v=20261028-history08';
import {elizabethTopic3, elizabethLessons3} from './content-elizabeth3.js?v=20261028-history08';
import {coldwarTopic1, coldwarLessons1} from './content-coldwar1.js?v=20261028-history08';
import {coldwarTopic2, coldwarLessons2} from './content-coldwar2.js?v=20261028-history08';
import {coldwarTopic3, coldwarLessons3} from './content-coldwar3.js?v=20261028-history08';
import {medicineTopic1, medicineLessons1} from './content-medicine1.js?v=20261028-history08';
import {medicineTopic2, medicineLessons2} from './content-medicine2.js?v=20261028-history08';
import {medicineTopic3, medicineLessons3} from './content-medicine3.js?v=20261028-history08';
import {medicineTopic4, medicineLessons4} from './content-medicine4.js?v=20261028-history08';
export const source = 'https://qualifications.pearson.com/content/dam/pdf/GCSE/History/2016/specification-and-sample-assessments/gcse-9-1-history-specification.pdf';
export const specIssue = 'Issue 6, June 2024';
export const units = [
  {id: 'B4', title: 'Early Elizabethan England, 1558–88', paper: 'Paper 2 · British depth study'},
  {id: 'P4', title: 'Superpower relations and the Cold War, 1941–91', paper: 'Paper 2 · Period study'},
  {id: '11', title: 'Medicine in Britain, c1250–present, and the Western Front, 1914–18', paper: 'Paper 1 · Thematic study and historic environment'},
];
export const topics = [elizabethTopic1, elizabethTopic2, elizabethTopic3, coldwarTopic1, coldwarTopic2, coldwarTopic3, medicineTopic1, medicineTopic2, medicineTopic3, medicineTopic4];
export const lessons = [...elizabethLessons1, ...elizabethLessons2, ...elizabethLessons3, ...coldwarLessons1, ...coldwarLessons2, ...coldwarLessons3, ...medicineLessons1, ...medicineLessons2, ...medicineLessons3, ...medicineLessons4];
