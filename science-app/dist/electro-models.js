export const processCases=[{name:'Solid sodium chloride',state:'solid'},{name:'Molten sodium chloride',state:'molten'},{name:'Copper chloride dissolved in water',state:'aqueous'}];
export const moltenCases=[{name:'Molten lead bromide',cation:'Pb²⁺',anion:'Br⁻',metal:'Pb',nonmetal:'Br2'},{name:'Molten sodium chloride',cation:'Na⁺',anion:'Cl⁻',metal:'Na',nonmetal:'Cl2'},{name:'Molten magnesium chloride',cation:'Mg²⁺',anion:'Cl⁻',metal:'Mg',nonmetal:'Cl2'}];
export function ionBehaviour(state){if(!['solid','molten','aqueous'].includes(state))throw new Error('Unknown state');return state==='solid'?{conduct:'no',positive:'fixed',negative:'fixed'}:{conduct:'yes',positive:'cathode',negative:'anode'};}
export function formula(value){return String(value??'').trim().replace(/[₀-₉]/g,c=>String('₀₁₂₃₄₅₆₇₈₉'.indexOf(c))).replace(/\s/g,'');}
export function productsCorrect(t,metal,nonmetal){return formula(metal)===t.metal&&formula(nonmetal)===t.nonmetal;}
