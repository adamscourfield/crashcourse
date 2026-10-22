export const transferCases=[
{id:'neutral',name:'Neutralisation',initial:24,final:32,context:'A probe measures the solution surrounding the reacting particles.'},
{id:'citric',name:'Citric acid + sodium hydrogencarbonate',initial:22,final:16,context:'A probe measures the reaction mixture, treated as surroundings in this model.'},
{id:'burn',name:'Combustion warming water',initial:18,final:25,context:'Water is heated by a fuel reaction. Classify the fuel reaction from the water reading.'}
];
export function temperatureAccount(initial,final){if(!Number.isFinite(initial)||!Number.isFinite(final))throw new Error('Finite temperatures required');const change=final-initial;return {change,kind:change>0?'exo':change<0?'endo':'unknown',direction:change>0?'out':change<0?'in':'unknown'};}
export function transferCorrect(t,a){const e=temperatureAccount(t.initial,t.final);return a.change!==''&&a.change!==undefined&&Number.isFinite(Number(a.change))&&Math.abs(Number(a.change)-e.change)<.01&&a.kind===e.kind&&a.direction===e.direction;}
export const profileCases=[
{id:'exo',prompt:'Build an exothermic profile using the higher of the two available barriers.',products:'lower',peak:'90'},
{id:'endo',prompt:'Build an endothermic profile using the higher barrier.',products:'higher',peak:'90'},
{id:'barrier',prompt:'Keep the exothermic endpoints from case 1, but choose the lower barrier.',products:'lower',peak:'65'}
];
export function profileState(products,peak){return {reactants:40,products:products==='higher'?55:25,peak:Number(peak)===65?65:90};}
export function profileCorrect(t,a){return a.products===t.products&&a.peak===t.peak&&a.origin==='reactants';}
