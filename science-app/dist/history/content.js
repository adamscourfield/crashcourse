// Pearson Edexcel GCSE (9–1) History (1HI0). Built units are listed here; the course map shows only
// topics that have lessons.
import {elizabethTopic1, elizabethLessons1} from './content-elizabeth1.js?v=20261028-history-geofinal2';
import {elizabethTopic2, elizabethLessons2} from './content-elizabeth2.js?v=20261028-history-geofinal2';
import {elizabethTopic3, elizabethLessons3} from './content-elizabeth3.js?v=20261028-history-geofinal2';
import {coldwarTopic1, coldwarLessons1} from './content-coldwar1.js?v=20261028-history-geofinal2';
import {coldwarTopic2, coldwarLessons2} from './content-coldwar2.js?v=20261028-history-geofinal2';
import {coldwarTopic3, coldwarLessons3} from './content-coldwar3.js?v=20261028-history-geofinal2';
import {medicineTopic1, medicineLessons1} from './content-medicine1.js?v=20261028-history-geofinal2';
import {medicineTopic2, medicineLessons2} from './content-medicine2.js?v=20261028-history-geofinal2';
import {medicineTopic3, medicineLessons3} from './content-medicine3.js?v=20261028-history-geofinal2';
import {medicineTopic4, medicineLessons4} from './content-medicine4.js?v=20261028-history-geofinal2';
import {westernFrontTopic, westernFrontLessons} from './content-westernfront.js?v=20261028-history-geofinal2';
import {germanyTopic1, germanyLessons1} from './content-germany1.js?v=20261028-history-geofinal2';
import {germanyTopic2, germanyLessons2} from './content-germany2.js?v=20261028-history-geofinal2';
import {germanyTopic3, germanyLessons3} from './content-germany3.js?v=20261028-history-geofinal2';
import {germanyTopic4, germanyLessons4} from './content-germany4.js?v=20261028-history-geofinal2';
import {elizabethDepth1} from './content-elizabeth-depth1.js?v=20261028-history-geofinal2';
import {elizabethDepth2} from './content-elizabeth-depth2.js?v=20261028-history-geofinal2';
import {elizabethDepth3} from './content-elizabeth-depth3.js?v=20261028-history-geofinal2';
import {coldwarDepth1} from './content-coldwar-depth1.js?v=20261028-history-geofinal2';
import {coldwarDepth2} from './content-coldwar-depth2.js?v=20261028-history-geofinal2';
import {coldwarDepth3} from './content-coldwar-depth3.js?v=20261028-history-geofinal2';
import {medicineDepth1} from './content-medicine-depth1.js?v=20261028-history-geofinal2';
import {medicineDepth2} from './content-medicine-depth2.js?v=20261028-history-geofinal2';
import {medicineDepth3} from './content-medicine-depth3.js?v=20261028-history-geofinal2';
import {medicineDepth4} from './content-medicine-depth4.js?v=20261028-history-geofinal2';
import {westernFrontDepth} from './content-westernfront-depth.js?v=20261028-history-geofinal2';
import {germanyDepth1} from './content-germany-depth1.js?v=20261028-history-geofinal2';
import {germanyDepth2} from './content-germany-depth2.js?v=20261028-history-geofinal2';
import {germanyDepth3} from './content-germany-depth3.js?v=20261028-history-geofinal2';
import {germanyDepth4} from './content-germany-depth4.js?v=20261028-history-geofinal2';
import {coldwarDepth4} from './content-coldwar-depth4.js?v=20261028-history-geofinal2';
import {skillsLessons1} from './content-skills1.js?v=20261028-history-geofinal2';
import {skillsLessons2} from './content-skills2.js?v=20261028-history-geofinal2';
import {order} from './order.js?v=20261028-history-geofinal2';
export const source = 'https://qualifications.pearson.com/content/dam/pdf/GCSE/History/2016/specification-and-sample-assessments/gcse-9-1-history-specification.pdf';
export const specIssue = 'Issue 6, June 2024';
export const units = [
  {id: 'B4', title: 'Early Elizabethan England, 1558–88', paper: 'Paper 2 · British depth study'},
  {id: 'P4', title: 'Superpower relations and the Cold War, 1941–91', paper: 'Paper 2 · Period study'},
  {id: '11', title: 'Medicine in Britain, c1250–present, and the Western Front, 1914–18', paper: 'Paper 1 · Thematic study and historic environment'},
  {id: '31', title: 'Weimar and Nazi Germany, 1918–39', paper: 'Paper 3 · Modern depth study'},
];
export const topics = [elizabethTopic1, elizabethTopic2, elizabethTopic3, coldwarTopic1, coldwarTopic2, coldwarTopic3, medicineTopic1, medicineTopic2, medicineTopic3, medicineTopic4, westernFrontTopic, germanyTopic1, germanyTopic2, germanyTopic3, germanyTopic4];
export const lessons = [...elizabethLessons1, ...elizabethLessons2, ...elizabethLessons3, ...coldwarLessons1, ...coldwarLessons2, ...coldwarLessons3, ...medicineLessons1, ...medicineLessons2, ...medicineLessons3, ...medicineLessons4, ...westernFrontLessons, ...germanyLessons1, ...germanyLessons2, ...germanyLessons3, ...germanyLessons4, ...elizabethDepth1, ...elizabethDepth2, ...elizabethDepth3, ...coldwarDepth1, ...coldwarDepth2, ...coldwarDepth3, ...medicineDepth1, ...medicineDepth2, ...medicineDepth3, ...medicineDepth4, ...westernFrontDepth, ...germanyDepth1, ...germanyDepth2, ...germanyDepth3, ...germanyDepth4, ...coldwarDepth4, ...skillsLessons1, ...skillsLessons2];
const rank = new Map(order.map((id, i) => [id, i]));
lessons.sort((a, b) => (rank.get(a.id) ?? order.length) - (rank.get(b.id) ?? order.length));
