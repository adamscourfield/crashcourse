import {catalogTaskCorrect,escapeLab} from './catalog-labs.js?v=20261023-physicscomplete01';
import {showCatalog} from './catalog-scenes.js?v=20261023-physicscomplete01';
function orderedOptions(options,key){return options.map((o,i)=>({o,k:[...key+o.value].reduce((h,c)=>Math.imul(h^c.charCodeAt(0),16777619)>>>0,2166136261),i})).sort((a,b)=>a.k-b.k||a.i-b.i).map(x=>x.o);}
export function mountCatalog(l,p,root,{save,done,feedback}){
 const tasks=l.lab,w=p.widget;w.task??=0;w.answers??={};w.passed??=[];
 const i=w.task%tasks.length,t=tasks[i],a=w.answers[t.id]??={};w.answers[t.id]=a;
 const $=s=>root.querySelector(s);
 root.innerHTML=`<p><b>${i+1} / ${tasks.length} · ${escapeLab(t.title)}</b></p><p>${escapeLab(t.prompt)}</p>`+t.fields.map(f=>`<label class="field-label" for="catalog-${escapeLab(f.key)}">${escapeLab(f.label)}</label>`+(f.type==='select'?`<select class="lab-select" id="catalog-${escapeLab(f.key)}"><option value="">Choose…</option>${orderedOptions(f.options,t.id+f.key).map(o=>`<option value="${escapeLab(o.value)}">${escapeLab(o.label)}</option>`).join('')}</select>`:`<input class="lab-input" id="catalog-${escapeLab(f.key)}" type="${f.type==='number'?'number':'text'}" ${f.type==='number'?'step="any"':'autocomplete="off" spellcheck="false"'}>`)).join('')+'<button class="secondary" id="checkCatalog">Check reasoning</button><button class="secondary" id="nextCatalog">Next investigation →</button><p id="catalogProgress">'+w.passed.length+' / '+tasks.length+' correct</p>';
 const draw=()=>showCatalog(l,t,a,w.passed.includes(t.id)&&catalogTaskCorrect(t,a),w.exploring?w.display:null);
 if(['alkenes','alkene-reactions','addition-polymers'].some(id=>l.id.endsWith('.'+id))){
  w.display??={carbons:2,reagent:'none',polymer:l.id.endsWith('.addition-polymers')};
  const box=document.createElement('div');box.className='structure-explorer';
  box.innerHTML='<button class="secondary" id="toggleStructures">'+(w.exploring?'Return to task evidence':'Explore displayed structures')+'</button>'+(w.exploring?'<label class=field-label for=displayCarbons>Carbon atoms</label><select class=lab-select id=displayCarbons>'+[2,3,...(w.display.polymer?[]:[4,5])].map(n=>'<option value='+n+'>'+n+'</option>').join('')+'</select>'+(w.display.polymer?'':'<label class=field-label for=displayReagent>Add across the double bond</label><select class=lab-select id=displayReagent><option value=none>Alkene</option><option value=H2>Hydrogen</option><option value=H2O>Steam</option><option value=Cl2>Chlorine</option><option value=Br2>Bromine</option><option value=I2>Iodine</option></select>'):'');
  root.prepend(box);$('#toggleStructures').onclick=()=>{w.exploring=!w.exploring;save();mountCatalog(l,p,root,{save,done,feedback});};
  if(w.exploring){$('#displayCarbons').value=w.display.carbons;$('#displayCarbons').onchange=e=>{w.display.carbons=Number(e.target.value);save();draw();};if($('#displayReagent')){$('#displayReagent').value=w.display.reagent;$('#displayReagent').onchange=e=>{w.display.reagent=e.target.value;save();draw();};}}
 }
 for(const f of t.fields){const el=$('#catalog-'+f.key);el.value=a[f.key]??'';el[el.tagName==='SELECT'?'onchange':'oninput']=e=>{a[f.key]=e.target.value;save();draw();};}draw();
 $('#checkCatalog').onclick=()=>{if(!catalogTaskCorrect(t,a)){feedback(t.feedback,true);return;}if(!w.passed.includes(t.id))w.passed.push(t.id);save();draw();$('#catalogProgress').textContent=w.passed.length+' / '+tasks.length+' correct';feedback(t.success);if(w.passed.length===tasks.length){p.widgetDone=true;save();done();}};
 $('#nextCatalog').onclick=()=>{w.task=(i+1)%tasks.length;w.exploring=false;save();feedback('');mountCatalog(l,p,root,{save,done,feedback});};
}
