import {normaliseEquation} from './redox-models.js?v=20261023-physicscomplete01';
export const saltPrepTasks=[{salt:'Copper(II) sulfate',acid:'Dilute sulfuric acid',solid:'Copper(II) oxide'},{salt:'Magnesium chloride',acid:'Dilute hydrochloric acid',solid:'Magnesium oxide'},{salt:'Zinc nitrate',acid:'Dilute nitric acid',solid:'Zinc carbonate'}];
export const prepSteps=[['react','Warm acid gently; remove flame, add insoluble solid in excess'],['filter','Filter off excess unreacted solid'],['concentrate','Gently evaporate some water from filtrate'],['cool','Cool the concentrated solution to crystallise'],['dry','Separate, rinse and dry crystals']];
export function validPrepSequence(sequence){return sequence.length===5&&sequence.every((v,i)=>v===prepSteps[i][0]);}
export function phClass(value){if(!Number.isFinite(value)||value<0||value>14)throw Error('Use course pH range0–14');return value<7?'acidic':value===7?'neutral':'alkaline';}
export const phTasks=[2,7,12];
export function indicatorColour(value){phClass(value);return value<3?['red','#e47568']:value<5?['orange','#dfa05d']:value<7?['yellow','#d7cd69']:value===7?['green','#79ac80']:value<10?['blue','#759ebb']:['purple','#a58ac4'];}
export function validNeutralEquation(s){const n=normaliseEquation(s).replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).replace(/\((aq|l)\)/g,'');return ['H++OH-->H2O','OH-+H+->H2O'].includes(n);}
