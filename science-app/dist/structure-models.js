export function stateAt(t,mp,bp){if(![t,mp,bp].every(Number.isFinite)||mp>=bp)throw new RangeError('Valid temperature and ordered transition points required');return t<mp?'solid':t===mp?'solid + liquid':t<bp?'liquid':t===bp?'liquid + gas':'gas';}
export const stateCases=[{name:'Sample A',mp:-20,bp:80,t:-30},{name:'Sample B',mp:10,bp:110,t:60},{name:'Sample C',mp:-50,bp:20,t:40},{name:'Sample D',mp:25,bp:150,t:25}];
export function polymerCounts(n){if(!Number.isInteger(n)||n<1||n>1000)throw new RangeError('Positive whole repeat count required');return {C:2*n,H:4*n};}
export function validRepeat(v){return v.cc===1&&v.ch===4&&v.left===1&&v.right===1;}
