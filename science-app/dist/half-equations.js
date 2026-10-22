// Bounded GCSE half-equation marking: match species, direction and stoichiometric ratios.
const atoms={'Al3+':{Al:1},Al:{Al:1},'Mg2+':{Mg:1},Mg:{Mg:1},'Cu2+':{Cu:1},Cu:{Cu:1},'H+':{H:1},H2:{H:2},'Cl-':{Cl:1},Cl2:{Cl:2},'Br-':{Br:1},Br2:{Br:2},'I-':{I:1},I2:{I:2},'O2-':{O:1},O2:{O:2},'OH-':{O:1,H:1},H2O:{H:2,O:1},'e-':{}};
const charge={'Al3+':3,'Mg2+':2,'Cu2+':2,'H+':1,'Cl-':-1,'Br-':-1,'I-':-1,'O2-':-2,'OH-':-1,'e-':-1};
export function normaliseHalf(value){return String(value??'').trim().replace(/[₀-₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).replace(/⁺/g,'+').replace(/[⁻−–]/g,'-').replace(/⟶|→|⇒|=>/g,'->').replace(/\((?:aq|s|l|g)\)/g,'').replace(/\^|\s/g,'');}
export function parseHalf(value){const sides=normaliseHalf(value).split('->');if(sides.length!==2||sides.some(s=>!s))return null;
 // AQA also permits electrons subtracted on the left instead of added on the right.
 const minus=sides[0].match(/-([1-9]\d*)?e-$/);if(minus){sides[0]=sides[0].slice(0,-minus[0].length);sides[1]+='+'+(minus[1]||'')+'e-';}
 const parsed=sides.map(side=>{const out={};for(const term of side.split(/\+(?=[A-Za-z0-9])/)){const m=term.match(/^([1-9]\d*)?([A-Za-z][A-Za-z0-9+-]*)$/);if(!m||!Object.hasOwn(atoms,m[2]))return null;const n=Number(m[1]||1);if(!Number.isSafeInteger(n)||n>1000)return null;out[m[2]]=(out[m[2]]||0)+n;}return out;});return parsed.every(Boolean)?parsed:null;}
export function halfLedger(value){const p=parseHalf(value);if(!p)return null;return p.map(side=>{const row={charge:0,atoms:{}};for(const [s,n]of Object.entries(side)){row.charge+=(charge[s]||0)*n;for(const[e,count]of Object.entries(atoms[s]))row.atoms[e]=(row.atoms[e]||0)+n*count;}return row;});}
export function validHalfEquation(value,expected){const a=parseHalf(value),b=parseHalf(expected);if(!a||!b)return false;let factor=null;for(let side=0;side<2;side++){if(Object.keys(a[side]).length!==Object.keys(b[side]).length)return false;for(const [s,n]of Object.entries(b[side])){if(!a[side][s])return false;const f=a[side][s]/n;if(factor===null)factor=f;if(Math.abs(f-factor)>1e-10)return false;}}return factor>0;}
export const halfTasks=[
{id:'al',title:'Aluminium at the cathode',prompt:'Al³⁺ ions form aluminium metal. Write the reduction half-equation.',answer:'Al3+ + 3e- -> Al'},
{id:'br',title:'Bromine at the anode',prompt:'Bromide ions form Br₂. Write the oxidation half-equation.',answer:'2Br- -> Br2 + 2e-'},
{id:'h',title:'Hydrogen at the cathode',prompt:'H⁺ ions form H₂. Write the reduction half-equation.',answer:'2H+ + 2e- -> H2'},
{id:'oh',title:'Oxygen from hydroxide',prompt:'OH⁻ ions form O₂ and H₂O at the anode. Write the balanced half-equation.',answer:'4OH- -> O2 + 2H2O + 4e-'},
{id:'oxide',title:'Oxygen from oxide ions',prompt:'O²⁻ ions form O₂ at the anode in the GCSE aluminium-extraction model. Write the oxidation half-equation.',answer:'2O2- -> O2 + 4e-'}
];
