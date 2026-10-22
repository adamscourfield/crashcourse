const cmp=(id,title,kind,cases)=>({id,title,kind,type:'compare',cases});
export const growthTasks={
'hormone-feedback':[
 cmp('roles','Match glands and responses','control',[
 ['adrenaline','Fear or stress response',['Adrenaline from adrenal glands','Thyroxine from pancreas','Auxin from thyroid'],0,'Adrenaline from adrenal glands increases heart rate and delivery of oxygen and glucose.'],
 ['thyroid','Basal metabolism, growth and development',['Ethene in blood','Thyroxine from thyroid','Adrenaline from roots'],1,'Thyroxine stimulates basal metabolic rate and supports growth/development.']]),
 {id:'loop',title:'Build the negative feedback loop',kind:'feedback',type:'sequence',route:['low','stimulate','release','inhibit'],labels:['Low thyroxine reduces inhibition','Pituitary stimulation of thyroid increases','Thyroid thyroxine secretion rises','Higher thyroxine inhibits further stimulation'],why:'The return link opposes the original low level; the loop does not amplify secretion without limit.'},
 cmp('direction','Interpret inhibitory control','control',[
 ['high','Thyroxine above suitable range',['Reduce stimulation of further secretion','Increase secretion without limit','Convert thyroid to adrenal gland'],0,'High thyroxine increases inhibition of further stimulation.'],
 ['low','Thyroxine below suitable range',['Increase inhibition further','Reduce inhibition, allowing more stimulation','Destroy target tissues'],1,'Reduced inhibition permits a restorative rise in secretion.'],
 ['substrates','Adrenaline increases heart rate',['Respiration stops','Glucose is no longer needed','More oxygen and glucose can be delivered to active tissues'],2,'Oxygen and glucose support respiration in brain and muscles.']])],
'plant-tropisms':[
 cmp('light','Predict growth towards light','light',[
 ['left','Light from the left',['Shoot curves left; right side elongates more','Shoot curves right; left side elongates more','No unequal growth is possible'],0,'More auxin on the shaded right promotes elongation there; the shoot curves left.'],
 ['right','Light from the right',['Shoot must bend down','Shoot curves right; left side elongates more','Only the lit side elongates more'],1,'The shaded left side elongates more, bending the shoot towards the right-hand light.']]),
 cmp('gravity','Compare root and shoot responses','gravity',[
 ['shoot','Horizontal shoot; auxin on lower side',['Lower side elongates less; downwards bend','Both sides instantly stop','Lower side elongates more; upwards bend'],2,'In shoots auxin promotes elongation, producing negative gravitropism.'],
 ['root','Horizontal root; auxin on lower side',['Lower side inhibited; upper side grows more; downwards bend','Lower side grows more; upwards bend','No response to gravity'],0,'In roots higher auxin inhibits elongation on the lower side, producing positive gravitropism.']]),
 {id:'growth',title:'Explain a phototropic bend',kind:'light',type:'sequence',route:['light','auxin','elongate','curve'],labels:['One-sided light is the stimulus','Auxin is distributed unequally towards the shaded side','Shaded-side shoot cells elongate more','Shoot curves towards the light'],why:'A tropism is a growth response, not an instantaneous hinge movement.'}],
'seedling-practical':[
 cmp('plan','Plan a fair seedling comparison','setup',[
 ['light','Testing light direction',['Same species, similar starting size, water, temperature and time','Change species and water too','Measure only the nicest seedling'],0,'Control other variables and use multiple seedlings.'],
 ['gravity','Testing gravity with horizontal seedlings',['Add one-sided light without a comparison','Keep light equal or use darkness to isolate gravity','Turn off gravity with a lamp'],1,'One-sided light would confound the gravity response.'],
 ['record','Records required in practical8',['Only an unlabeled photograph','Only a guessed bend','Length measurements and careful labelled biological drawings'],2,'The practical requires both numerical and drawing records.']]),
 {id:'length',title:'Calculate growth from repeated measurements',kind:'length',type:'numeric',unit:'mm',prompt:'Initial/final shoot lengths: 8→20, 9→23, 10→26 mm. Increases are 12, 14, 16 mm. Enter the mean increase.',answer:14,reasonChoices:['(12+14+16)÷3','(20+23+26)÷3 ignores starting lengths','Use only the longest seedling'],reason:0,why:'Sum the three increases42 mm and divide by3: mean14 mm.'},
 {id:'drawing',title:'Assemble a labelled observation',kind:'drawing',type:'drawing',why:'Label root, shoot and seed with lines ending on those structures. With light from the left, the shoot curves towards it; gravity remains downwards.'}],
'auxin-applications':[
 {id:'cutting',title:'Follow a cutting as roots form',kind:'cutting',type:'sequence',route:['cut','auxin','roots','establish'],labels:['Prepare a suitable plant cutting','Apply auxin rooting powder at the base','Roots develop over time in suitable conditions','Roots take up water as the cutting establishes'],why:'Auxin is a growth regulator; suitable water, nutrients and conditions are still needed.'},
 cmp('uses','Match auxin applications','applications',[
 ['culture','Plant tissue culture',['Auxin can promote growth under controlled conditions','Auxin is an embryo in human IVF','No nutrients or sterile conditions matter'],0,'Auxins promote plant tissue-culture growth; contamination control and nutrients still matter.'],
 ['weed','Selective weed control in cereals',['Every plant must be killed equally','Synthetic auxins can control susceptible broad-leaved weeds','Selectivity proves no environmental effects'],1,'Some synthetic auxins disrupt susceptible weed growth; non-target effects still need evaluation.'],
 ['rooting','A cutting needs roots',['Ethene always replaces water','No hormones can affect roots','Rooting powder supplies an auxin signal'],2,'Auxin rooting powders promote root formation.']]),
 {id:'biodiversity',title:'Evaluate supplied field evidence',kind:'biodiversity',type:'numeric',unit:'%',prompt:'Fictional matched plots: 20 wildflower species before and15 after weed control. Enter the percentage decrease relative to20.',answer:25,reasonChoices:['(20−15)÷20×100; consider reduced resources for dependent organisms','5÷15×100 proves universal safety','A crop benefit means biodiversity cannot change'],reason:0,why:'The decrease is5/20×100=25%. Weed removal can affect food and habitats; this dataset alone does not establish a universal causal effect.'}],
'germination-ripening':[
 cmp('hormones','Choose the plant hormone for the goal','applications',[
 ['dormancy','End seed dormancy',['Gibberellin','Ethene for every goal','Insulin'],0,'Gibberellins can break dormancy and help initiate germination.'],
 ['flower','Promote flowering or increase fruit size',['Adrenaline','Gibberellin','Glucagon'],1,'These are further gibberellin uses.'],
 ['ripen','Control ripening in storage/transport',['Auxin rooting powder only','Thyroxine','Ethene'],2,'Ethene controls fruit ripening and is also involved in cell division.']]),
 {id:'germinate',title:'Follow a possible germination sequence',kind:'germination',type:'sequence',route:['dormant','signal','conditions','grow'],labels:['A dormant seed is present','Gibberellin helps end dormancy','Water, oxygen and suitable temperature support germination','Root and shoot growth emerge'],why:'The sequence is a developmental summary; no molecular gibberellin mechanism is required.'},
 cmp('logistics','Evaluate timing during transport','logistics',[
 ['arrival','Fruit must ripen near its planned arrival',['Manage ethene exposure and storage to coordinate ripening','Ripening can never be controlled','More hormone guarantees infinite shelf life'],0,'Control ripening timing in context; maturity and conditions also matter.'],
 ['sale','Already ripe fruit faces a long storage delay',['Ignore the risk of deterioration','Consider shorter storage or changed distribution timing','Ripe fruit never deteriorates'],1,'Earlier readiness may reduce remaining storage time.']])]
};
export const tasksForGrowth=key=>growthTasks[key];
export const validGrowth=(c,a)=>a!==''&&a!==null&&a!==undefined&&Number(a)===c[3];
export const advanceGrowth=(route,step,choice)=>Number.isInteger(step)&&step>=0&&step<route.length&&choice===route[step]?step+1:step;
export const numericGrowth=(v,a)=>v!==''&&v!==null&&v!==undefined&&Number.isFinite(Number(v))&&Math.abs(Number(v)-a)<.001;
export const drawingValid=v=>v.shoot==='shoot'&&v.root==='root'&&v.seed==='seed'&&v.bend==='left';
export const bounded=v=>Math.max(0,Math.min(1,Number(v)||0));
export function growthShape({progress=0,state='left',kind='light'}={}){let p=bounded(progress),root=state==='root'||kind==='root-gravity',gravity=kind.includes('gravity')||kind==='gravity',direction=gravity?(root?1:-1):(state==='right'?1:-1);return{p,root,gravity,direction,bend:direction*p*70,auxinSide:gravity?'lower':state==='right'?'left':'right',response:root?'inhibits':'promotes'};}
