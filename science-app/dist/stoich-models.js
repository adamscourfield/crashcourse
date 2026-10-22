export function limitingAccount(amounts,coefficients,productCoefficient){
 if(amounts.length!==2||coefficients.length!==2||!amounts.every(n=>Number.isFinite(n)&&n>=0)||![...coefficients,productCoefficient].every(n=>Number.isFinite(n)&&n>0))throw Error('Invalid reaction inventory');
 const capacities=amounts.map((n,i)=>n/coefficients[i]),extent=Math.min(...capacities),tie=Math.abs(capacities[0]-capacities[1])<1e-10;
 return {limiting:tie?'both':capacities[0]<capacities[1]?'0':'1',product:extent*productCoefficient,left:amounts.map((n,i)=>Math.max(0,n-extent*coefficients[i]))};
}
export function massRatio(masses,mrs){
 if(masses.length!==mrs.length||!masses.length||![...masses,...mrs].every(n=>Number.isFinite(n)&&n>0))throw Error('Invalid mass data');
 const moles=masses.map((m,i)=>m/mrs[i]),min=Math.min(...moles),normalised=moles.map(n=>n/min);
 for(let multiplier=1;multiplier<=12;multiplier++){const scaled=normalised.map(n=>n*multiplier);if(scaled.every(n=>Math.abs(n-Math.round(n))<1e-8))return {moles,normalised,coefficients:scaled.map(Math.round)};}
 throw Error('No simple ratio from these data');
}
export const limitingTasks=[
 {equation:'N₂ + 3H₂ → 2NH₃',names:['N₂','H₂'],amounts:[2,3],coefficients:[1,3],target:'NH₃',productCoefficient:2},
 {equation:'2Mg + O₂ → 2MgO',names:['Mg','O₂'],amounts:[.1,.2],coefficients:[2,1],target:'MgO',productCoefficient:2},
 {equation:'N₂ + 3H₂ → 2NH₃',names:['N₂','H₂'],amounts:[.5,1.5],coefficients:[1,3],target:'NH₃',productCoefficient:2}
];
export const balancingTasks=[
 {names:['Mg','O₂','MgO'],masses:[4.8,3.2,8],mrs:[24,32,40],atoms:[{Mg:1},{O:2},{Mg:1,O:1}]},
 {names:['Fe','O₂','Fe₂O₃'],masses:[5.6,2.4,8],mrs:[56,32,160],atoms:[{Fe:1},{O:2},{Fe:2,O:3}]},
 {names:['N₂','H₂','NH₃'],masses:[5.6,1.2,6.8],mrs:[28,2,17],atoms:[{N:2},{H:2},{N:1,H:3}]}
];
export function atomsBalanced(coefficients,atoms){const elements=new Set(atoms.flatMap(a=>Object.keys(a)));return [...elements].every(e=>Math.abs(coefficients[0]*(atoms[0][e]||0)+coefficients[1]*(atoms[1][e]||0)-coefficients[2]*(atoms[2][e]||0))<1e-10);}
