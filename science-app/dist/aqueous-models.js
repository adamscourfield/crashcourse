import {formula} from './electro-models.js?v=20261023-physicscomplete01';
export const aqueousCases=[
{id:'nacl',name:'Sodium chloride solution',ions:['Na⁺','Cl⁻'],metal:'Na',aboveHydrogen:true,halide:'Cl',comparison:'Sodium is more reactive than hydrogen.'},
{id:'cuso4',name:'Copper(II) sulfate solution',ions:['Cu²⁺','SO₄²⁻'],metal:'Cu',aboveHydrogen:false,halide:null,comparison:'Copper is less reactive than hydrogen.'},
{id:'cucl2',name:'Copper(II) chloride solution',ions:['Cu²⁺','Cl⁻'],metal:'Cu',aboveHydrogen:false,halide:'Cl',comparison:'Copper is less reactive than hydrogen.'},
{id:'na2so4',name:'Sodium sulfate solution',ions:['Na⁺','SO₄²⁻'],metal:'Na',aboveHydrogen:true,halide:null,comparison:'Sodium is more reactive than hydrogen.'}
];
export function aqueousProducts(t){return {cathode:t.aboveHydrogen?'H2':t.metal,anode:t.halide?t.halide+'2':'O2'};}
export function checkAqueous(t,a){const p=aqueousProducts(t);return {cathode:formula(a.cathode)===p.cathode,anode:formula(a.anode)===p.anode,reason:a.reason===(t.aboveHydrogen?'water':'metal')};}
export const practicalTasks=[
{id:'plan',title:'Choose the prediction and comparison',intro:'Compare copper(II) chloride with copper(II) sulfate using inert electrodes.',fields:[
{id:'hypothesis',label:'Which hypothesis follows the ion rules?',options:[['same','Both anodes produce the same gas'],['different','Chloride gives chlorine; sulfate gives oxygen'],['none','The solutions cannot conduct']],answer:'different',why:'Both solutions contain copper ions, but only chloride contains a halide: the anode products differ.'},
{id:'control',label:'Which comparison isolates solution identity?',options:[['clean','Keep all other conditions consistent'],['metal','Change electrode material too'],['time','Change electrolysis time too']],answer:'clean',why:'Keep other relevant conditions consistent; changing electrode material can change products.'}]},
{id:'evidence',title:'Interpret the observations',intro:'A teacher records these results using clean inert electrodes.',fields:[
{id:'chloride',label:'Chloride: cathode deposit / anode gas',options:[['cucl','Copper / chlorine'],['cuo','Copper / oxygen'],['hcl','Hydrogen / chlorine']],answer:'cucl',why:'A reddish-brown cathode deposit supports copper; damp litmus bleaching supports chlorine.'},
{id:'sulfate',label:'Sulfate: cathode deposit / anode gas',options:[['cucl','Copper / chlorine'],['hcl','Hydrogen / chlorine'],['cuo','Copper / oxygen']],answer:'cuo',why:'Copper forms the cathode deposit; relighting a glowing splint identifies oxygen.'}]},
{id:'evaluate',title:'Investigate a surprising result',intro:'A sulfate trial follows a chloride trial without cleaning. Its anode gas bleaches damp litmus paper.',fields:[
{id:'cause',label:'Plausible alternative explanation',options:[['rule','Every sulfate contains chloride'],['carryover','Chloride remained on the equipment'],['polarity','A positive anode must always make chlorine']],answer:'carryover',why:'Residual chloride is a plausible source of chlorine; the observation alone does not overturn the sulfate rule.'},
{id:'repeat',label:'Best next step',options:[['ignore','Ignore the result'],['repeat','Clean equipment, fresh sulfate; repeat'],['raise','Raise the voltage and identify the gas by smell']],answer:'repeat',why:'A controlled repeat tests contamination. Product tests and school safety controls are required; smelling gas is not an identification method.'}]}];
export function checkPractical(task,a){return task.fields.map(f=>({id:f.id,correct:a[f.id]===f.answer,why:f.why}));}
