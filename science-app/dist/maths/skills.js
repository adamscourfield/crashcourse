// Registry of every maths skill. Lessons, the studio and tests look skills up here.
import { numberSkills } from './skills-number.js?v=20261022-maths-r3';
import { numberSkills2 } from './skills-number2.js?v=20261022-maths-r3';
import { numberSkills3 } from './skills-number3.js?v=20261022-maths-r3';

export const allSkills = [...numberSkills, ...numberSkills2, ...numberSkills3];
export const skillById = Object.fromEntries(allSkills.map(s => [s.id, s]));
if (Object.keys(skillById).length !== allSkills.length) throw new Error('Duplicate maths skill id');
export function generate(skillId, level, seed) {
  const s = skillById[skillId];
  if (!s) throw new Error('Unknown skill ' + skillId);
  return s.gen(Math.min(Math.max(1, level), s.levels.length), String(seed));
}
