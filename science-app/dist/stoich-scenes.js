import {renderDiagram} from './visual.js?v=20261023-physicscomplete01';
const fmt=n=>Number(n.toPrecision(6));
export function showStoich(kind,t=null,result=null){
 if(kind==='limiting'){
 const names=t?.names||['N₂','H₂'],amounts=t?.amounts||[2,3],max=Math.max(...amounts,1);
 const rows=names.map((name,i)=>`<div class="inventory-row"><span>${name} · start ${fmt(amounts[i])} mol</span><div class="inventory-track"><i style="width:${amounts[i]/max*100}%"></i></div>${result?`<small>Used ${fmt(amounts[i]-result.left[i])} mol · left ${fmt(result.left[i])} mol</small>`:'<small>Predict which supply runs out.</small>'}</div>`).join('');
 renderDiagram('Which supply runs out?',t?.equation||'N₂ + 3H₂ → 2NH₃',`<div class="inventory-board"><span class="eyebrow">REACTANT INVENTORY · MOL</span>${rows}<p class="inventory-outcome">${result?`Maximum ${t.target}: ${fmt(result.product)} mol`:'Compare amount ÷ coefficient'}</p><p class="diagram-caption">Bars share a mol scale. Different coefficients mean equal bars need not react together.</p></div>`,'IDEALISED COMPLETE REACTION · NOT RATE OR YIELD');
 }else{
 renderDiagram('Mass → amount → whole ratio',t?`${t.names[0]} + ${t.names[1]} → ${t.names[2]}`:'Keep each formula unchanged',`<div class="inventory-board"><span class="eyebrow">EQUATION DETECTIVE</span>${(t?.names||['Reactant A','Reactant B','Product']).map((n,i)=>`<div class="inventory-row"><span>${n}${t?' · '+t.masses[i]+' g':''}</span><small>${result?`${fmt(result.moles[i])} mol → coefficient ${result.coefficients[i]}`:'Mass ÷ relative mass → mol'}</small></div>`).join('')}<p class="inventory-outcome">${result?'Simplest ratio '+result.coefficients.join(' : '):'Divide all amounts by the smallest'}</p><p class="diagram-caption">Use masses actually reacting and formed. Supplied idealised data have no measurement uncertainty.</p></div>`,'COEFFICIENTS CHANGE · FORMULAE STAY FIXED');
 }
}
