const valid=(n,positive=false)=>Number.isFinite(n)&&(positive?n>0:n>=0);
export function solutionAccount(c,cm3,mr){if(!valid(c)||!valid(cm3,true)||!valid(mr,true))throw Error('Invalid solution');const amount=c*cm3/1000;return {amount,mass:amount*mr};}
export function reactingAccount(c,knownCm3,unknownCm3,knownCoeff,unknownCoeff){if(![c,knownCm3,unknownCm3,knownCoeff,unknownCoeff].every(n=>valid(n,true)))throw Error('Invalid reacting volumes');const known=c*knownCm3/1000,unknown=known*unknownCoeff/knownCoeff;return {known,unknown,concentration:unknown/(unknownCm3/1000)};}
export function gasMassAccount(mass,mr){if(!valid(mass)||!valid(mr,true))throw Error('Invalid gas mass');const amount=mass/mr;return {amount,volume:amount*24};}
export function gasRatioVolume(volume,from,to){if(!valid(volume)||!valid(from,true)||!valid(to,true))throw Error('Invalid gas ratio');return volume*to/from;}
export const molarTasks=[{solute:'NaOH',c:.2,cm3:250,mr:40},{solute:'NaOH',c:.4,cm3:100,mr:40},{solute:'Na₂CO₃',c:.1,cm3:500,mr:106}];
export const reactingTasks=[
 {equation:'HCl + NaOH → NaCl + H₂O',known:'HCl',unknown:'NaOH',c:.1,knownCm3:25,unknownCm3:20,knownCoeff:1,unknownCoeff:1},
 {equation:'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O',known:'NaOH',unknown:'H₂SO₄',c:.2,knownCm3:25,unknownCm3:20,knownCoeff:2,unknownCoeff:1},
 {equation:'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂',known:'Na₂CO₃',unknown:'HCl',c:.1,knownCm3:20,unknownCm3:25,knownCoeff:1,unknownCoeff:2}
];
export const gasTasks=[{kind:'mass',gas:'CO₂',mass:2.2,mr:44},{kind:'mass',gas:'O₂',mass:3.2,mr:32},{kind:'ratio',equation:'N₂(g) + 3H₂(g) → 2NH₃(g)',given:'H₂',target:'NH₃',volume:6,from:3,to:2}];
