// Original teaching comparisons: geometry and dataset values are illustrative.
export const arteryStates={healthy:{deposit:.08,lumen:.92,oxygen:'Less restricted supply'},narrow:{deposit:.58,lumen:.42,oxygen:'Reduced oxygen supply'},stent:{deposit:.58,lumen:.78,oxygen:'Improved supply through supported lumen'}};
export function depositAt(step=0,statin=false){step=Math.max(0,Math.min(3,Number(step)||0));return .18+step*(statin?.035:.13);}
export const treatments=[
{id:'mechanical',name:'Mechanical valve',need:'A faulty valve needs a durable replacement.',benefit:'Durable one-way replacement',risk:'Long-term anticoagulants can increase bleeding risk',key:'bleeding'},
{id:'biological',name:'Biological valve',need:'A faulty valve is replaced with biological tissue.',benefit:'Often avoids lifelong anticoagulants for the valve',risk:'Can wear out and need another replacement',key:'wear'},
{id:'donor',name:'Donor heart',need:'A severely failing pump may be replaced by living donor tissue.',benefit:'Can restore effective pumping',risk:'Donor scarcity, surgery, rejection and immunosuppression',key:'rejection'},
{id:'artificial',name:'Artificial heart',need:'Temporary pumping is needed while awaiting a donor or recovery.',benefit:'Can keep blood circulating temporarily',risk:'Device, infection, clot and bleeding risks',key:'device'}];
export const diseaseLinks=[
{id:'immune',from:'Immune defect',to:'Infection risk',reason:'defence',mechanism:'Less effective defence makes infection more likely.'},
{id:'virus',from:'Some viral infections',to:'Cancer risk',reason:'changes',mechanism:'Some viruses can trigger changes in cells; not every infection causes cancer.'},
{id:'allergy',from:'Pathogen-triggered immunity',to:'Allergic illness',reason:'reaction',mechanism:'An immune reaction initially caused by a pathogen can trigger an allergy.'},
{id:'physical',from:'Severe physical illness',to:'Mental ill health',reason:'wellbeing',mechanism:'Severe physical illness can contribute to depression or other mental illness.'}];
export const riskCases=[
{id:'cardio',name:'Diet, smoking & activity',outcome:'cardio',effect:'Cardiovascular disease',mechanism:'Several factors influence vessels and heart function; activity can lower risk.'},
{id:'obesity',name:'Obesity',outcome:'diabetes',effect:'Type 2 diabetes',mechanism:'Obesity increases Type 2 diabetes risk; the outcome is not inevitable.'},
{id:'alcohol',name:'Alcohol',outcome:'liver',effect:'Liver & brain function',mechanism:'Alcohol can damage liver cells and impair brain function.'},
{id:'smoke',name:'Smoking',outcome:'lung',effect:'Lung disease & lung cancer',mechanism:'Smoke damages lung tissue and contains carcinogens; it also affects cardiovascular risk.'},
{id:'pregnancy',name:'Smoking/alcohol in pregnancy',outcome:'fetus',effect:'Fetal development',mechanism:'Smoking can reduce oxygen supply; alcohol can disrupt development.'},
{id:'radiation',name:'Carcinogens / ionising radiation',outcome:'cancer',effect:'Cancer risk',mechanism:'Cell changes can disrupt division control; exposure does not guarantee cancer.'}];
export const durations=[1,1,2,3,4,5,5,6,7,8,9,10];
export const classBounds=[0,4,8,12];
export function frequencies(values=durations){return classBounds.slice(0,-1).map((a,i)=>values.filter(x=>x>=a&&x<classBounds[i+1]).length);}
export const incidence=[{name:'A',cases:20,population:200},{name:'B',cases:30,population:600}];
export const incidencePercent=(cases,population)=>population>0?cases/population*100:null;
export const scatterPoints=[[10,30],[15,45],[20,41],[25,65],[30,72],[35,80]];
export function tumourState(kind='normal',step=0){step=Math.max(0,Math.min(3,Math.floor(Number(step)||0)));return {kind,step,count:kind==='normal'?6:6+step*5,contained:kind!=='malignant',invasion:kind==='malignant'&&step>=1,inBlood:kind==='malignant'&&step>=2,secondary:kind==='malignant'&&step>=3};}
