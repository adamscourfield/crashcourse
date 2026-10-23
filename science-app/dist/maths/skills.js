// Registry of every maths skill. Lessons, the studio and tests look skills up here.
import { numberSkills } from './skills-number.js?v=20261023-maths-r9';
import { numberSkills2 } from './skills-number2.js?v=20261023-maths-r9';
import { numberSkills3 } from './skills-number3.js?v=20261023-maths-r9';
import { algebraSkills } from './skills-algebra.js?v=20261023-maths-r9';
import { algebraSkills2 } from './skills-algebra2.js?v=20261023-maths-r9';
import { graphSkills } from './skills-graphs.js?v=20261023-maths-r9';
import { algebraSkills3 } from './skills-algebra3.js?v=20261023-maths-r9';
import { algebraSkills4 } from './skills-algebra4.js?v=20261023-maths-r9';
import { ratioSkills } from './skills-ratio.js?v=20261023-maths-r9';
import { ratioSkills2 } from './skills-ratio2.js?v=20261023-maths-r9';
import { geometrySkills } from './skills-geometry.js?v=20261023-maths-r9';

export const allSkills = [...numberSkills, ...numberSkills2, ...numberSkills3, ...algebraSkills, ...algebraSkills2, ...graphSkills, ...algebraSkills3, ...algebraSkills4, ...ratioSkills, ...ratioSkills2, ...geometrySkills];
export const skillById = Object.fromEntries(allSkills.map(s => [s.id, s]));
if (Object.keys(skillById).length !== allSkills.length) throw new Error('Duplicate maths skill id');
export function generate(skillId, level, seed) {
  const s = skillById[skillId];
  if (!s) throw new Error('Unknown skill ' + skillId);
  return s.gen(Math.min(Math.max(1, level), s.levels.length), String(seed));
}
