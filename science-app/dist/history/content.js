// Pearson Edexcel GCSE (9–1) History (1HI0). Built units are listed here; the course map shows only
// topics that have lessons.
import {elizabethTopic1, elizabethLessons1} from './content-elizabeth1.js?v=20261023-history01';
import {elizabethTopic2, elizabethLessons2} from './content-elizabeth2.js?v=20261023-history01';
export const source = 'https://qualifications.pearson.com/content/dam/pdf/GCSE/History/2016/specification-and-sample-assessments/gcse-9-1-history-specification.pdf';
export const specIssue = 'Issue 6, June 2024';
export const units = [
  {id: 'B4', title: 'Early Elizabethan England, 1558–88', paper: 'Paper 2 · British depth study'},
  {id: 'P4', title: 'Superpower relations and the Cold War, 1941–91', paper: 'Paper 2 · Period study'},
  {id: '11', title: 'Medicine in Britain, c1250–present, and the Western Front, 1914–18', paper: 'Paper 1 · Thematic study and historic environment'},
];
export const topics = [elizabethTopic1, elizabethTopic2];
export const lessons = [...elizabethLessons1, ...elizabethLessons2];
