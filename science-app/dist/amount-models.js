export const AVOGADRO=6.02e23;
export function solutionMass(c,cm3){if(![c,cm3].every(Number.isFinite)||c<0||cm3<=0)throw new RangeError('Nonnegative concentration and positive volume required');return c*cm3/1000;}
export function moleAccount(n,mr){if(![n,mr].every(Number.isFinite)||n<0||mr<=0)throw new RangeError('Valid amount and formula mass required');return {mass:n*mr,particles:n*AVOGADRO};}
export function reactionAccount(mass,mr,from,to,targetMr){if(![mass,mr,from,to,targetMr].every(Number.isFinite)||mass<0||[mr,from,to,targetMr].some(v=>v<=0))throw new RangeError('Positive ratios/masses required');const input=mass/mr,output=input*to/from;return {input,output,mass:output*targetMr};}
export const concentrationTasks=[{c:12,v:250},{c:20,v:150},{c:4,v:1500}];
export const moleTasks=[{symbol:'C',name:'Carbon atoms',mr:12,n:.5},{symbol:'CO2',name:'CO₂ molecules',mr:44,n:.25},{symbol:'H2O',name:'H₂O molecules',mr:18,n:2}];
export const ratioTasks=[{equation:'Mg + 2HCl → MgCl₂ + H₂',given:'Mg',target:'MgCl₂',mass:2.4,mr:24,from:1,to:1,targetMr:95,excess:'HCl'},{equation:'2Mg + O₂ → 2MgO',given:'Mg',target:'MgO',mass:4.8,mr:24,from:2,to:2,targetMr:40,excess:'O₂'},{equation:'N₂ + 3H₂ → 2NH₃',given:'N₂',target:'NH₃',mass:14,mr:28,from:1,to:2,targetMr:17,excess:'H₂'}];
