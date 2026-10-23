import {limitingAccount,massRatio,limitingTasks,balancingTasks,atomsBalanced} from './stoich-models.js?v=20261023-physicscomplete01';
import {showStoich} from './stoich-scenes.js?v=20261023-physicscomplete01';
const input=(id,label,v='')=>`<label class="field-label" for="${id}">${label}</label><input class="lab-input" id="${id}" type="number" step="any" value="${v}">`;
export function mountStoichWidget(l,p,root,{save,done,feedback}){
 const w=p.widget;w.task??=0;w.answers??={};w.passed??=[];const i=w.task,a=w.answers[i]??={},lim=l.widget==='stoich-limiting',t=(lim?limitingTasks:balancingTasks)[i],$=s=>root.querySelector(s);
 const fields=lim?['product','left0','left1']:['n0','n1','n2','c0','c1','c2'];
 const result=lim?limitingAccount(t.amounts,t.coefficients,t.productCoefficient):massRatio(t.masses,t.mrs);
 root.innerHTML=`<p><b>Case ${i+1} / 3</b></p>`+(lim?`<p>${t.equation}. Start with ${t.amounts[0]} mol ${t.names[0]} and ${t.amounts[1]} mol ${t.names[1]}. Predict maximum product and what remains.</p><label class="field-label" for="limitingChoice">Limiting supply</label><select class="lab-select" id="limitingChoice"><option value="">Choose…</option><option value="0">${t.names[0]}</option><option value="1">${t.names[1]}</option><option value="both">Both used up in exact ratio</option></select>`+input('product',t.target+' maximum / mol',a.product)+input('left0',t.names[0]+' left / mol',a.left0)+input('left1',t.names[1]+' left / mol',a.left1):`<p>Find the simplest coefficients for ${t.names[0]} + ${t.names[1]} → ${t.names[2]}.</p><p>Reacting masses / g: ${t.masses.join(', ')}. Relative masses in the same order: ${t.mrs.join(', ')}.</p><div class="stoich-fields">`+t.names.map((n,j)=>`<div>${input('n'+j,n+' amount / mol',a['n'+j])}${input('c'+j,n+' coefficient',a['c'+j])}</div>`).join('')+'</div>')+`<button class="secondary" id="checkStoich">Check my account</button><button class="secondary" id="nextStoich">Next case →</button><p id="stoichProgress">${w.passed.length} / 3 cases correct</p>`;
 if(lim){$('#limitingChoice').value=a.choice||'';$('#limitingChoice').onchange=e=>{a.choice=e.target.value;save();};}
 fields.forEach(k=>$('#'+k).oninput=e=>{a[k]=e.target.value;save();});
 showStoich(lim?'limiting':'balancing',t,w.passed.includes(i)?result:null);
 $('#checkStoich').onclick=()=>{
 const numeric=(k,n)=>a[k]!==undefined&&a[k]!==''&&Number.isFinite(Number(a[k]))&&Math.abs(Number(a[k])-n)<=.001;
 const ok=lim?a.choice===result.limiting&&numeric('product',result.product)&&numeric('left0',result.left[0])&&numeric('left1',result.left[1]):result.moles.every((n,j)=>numeric('n'+j,n))&&result.coefficients.every((n,j)=>numeric('c'+j,n));
 if(!ok){feedback(lim?'Compare each available amount ÷ its coefficient. Use the smaller value for product; subtract only the amount that reacts from each starting supply.':'First use mass ÷ relative mass for every substance. Divide all amounts by the smallest; multiply the whole ratio if fractions remain. Use simplest integers and keep formulae fixed.',true);return;}
 if(!lim&&!atomsBalanced(result.coefficients,t.atoms))throw Error('Unbalanced task');
 if(!w.passed.includes(i))w.passed.push(i);save();showStoich(lim?'limiting':'balancing',t,result);$('#stoichProgress').textContent=w.passed.length+' / 3 cases correct';feedback(lim?'Correct. The inventory now shows used and leftover amounts, plus the maximum product.':'Correct. The simplest coefficients also conserve each element.');if(w.passed.length===3){p.widgetDone=true;save();done();}
 };
 $('#nextStoich').onclick=()=>{w.task=(i+1)%3;save();mountStoichWidget(l,p,root,{save,done,feedback});};
}
