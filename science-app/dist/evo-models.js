const cmp=(id,title,kind,cases)=>({id,title,kind,type:'compare',cases});
export function nextGeneration(c,habitat){if(!['light','dark'].includes(habitat)||!['light','dark'].every(k=>Number.isInteger(c[k])&&c[k]>=0))throw new RangeError('Use non-negative integer counts and a stated habitat.');if(c.light+c.dark===0)return{light:0,dark:0};let lw=c.light*(habitat==='light'?2:1),dw=c.dark*(habitat==='dark'?2:1),light=Math.round(20*lw/(lw+dw));return{light,dark:20-light};}
export const traitData={G1:{dim:10,bright:16},G2:{dim:14,bright:22}};
export const evoTasks={
variation:[cmp('causes','Compare genetic and environmental causes','trait-data',[
['environment','G1 plants:10 cm in dim light,16 cm in bright light',['Environment can change phenotype with genotype held constant','The genotype must have changed','Only a new mutation explains every difference'],0,'The same genotype is compared across light conditions.'],
['genetic','Bright light: G1 is16 cm, G2 is22 cm',['No genetic effect is possible','Different inherited information can contribute in comparable conditions','Environment must be identical in every real experiment'],1,'Compare genotypes under the stated matched condition; the supplied data are illustrative.'],
['both','G1 light response6 cm; G2 response8 cm',['Only one factor can ever matter','Genes cannot interact with environment','Genotype and environment can interact'],2,'The effect of the environment differs across the model genotypes.']]),
cmp('variants','Distinguish new variants from reshuffling','variation',[
['mutation','A new genetic variant arises',['Mutation is its source','It must be created because it is needed','Only exercise creates new inherited variants'],0,'Mutations occur continually, not in response to a need for a useful trait.'],
['neutral','A variant is detected but no phenotype effect is seen',['Impossible for most variants','A common possible outcome','Proof every future effect is beneficial'],1,'Most variants have no phenotype effect; some influence and few determine phenotype.']]),
{id:'difference',title:'Read a controlled phenotype comparison',kind:'trait-data',type:'numeric',unit:'cm',prompt:'Fictional G2 plants:14 cm in dim conditions,22 cm in bright conditions. Enter the height difference.',answer:8,reasonChoices:['22−14, same genotype','22+14 comparing totals','A height difference proves a needed mutation'],reason:0,why:'22−14=8 cm; genotype is held constant for this comparison.'}],
'natural-selection':[
{id:'sequence',title:'Build the selection explanation',kind:'selection',type:'sequence',route:['vary','success','inherit','frequency'],labels:['The population has inherited variation','Some variants survive and reproduce more successfully in this context','Offspring inherit relevant alleles from successful parents','Variant frequency changes across generations'],why:'Selection changes a population through inherited differences in reproductive success, not deliberate recolouring.'},
{id:'cohort',title:'Test selection in two habitats',kind:'selection-data',type:'cohort',why:'Predict which existing variant is favoured, advance at least two generations and record each habitat. The model fixes20 offspring and uses weighted contributions.'},
{id:'frequency',title:'Interpret a fresh cohort',kind:'selection-data',type:'numeric',unit:'%',prompt:'A fresh fictional20-offspring cohort has12 dark variants. Enter the dark-variant percentage.',answer:60,reasonChoices:['12÷20×100; a population proportion','12÷8×100; an individual changes colour','20÷12×100 proves future fixation'],reason:0,why:'12/20=60%. Counts describe population composition, not an individual adapting by choice.'}],
'selective-breeding':[
{id:'breed',title:'Order repeated artificial selection',kind:'breeding',type:'sequence',route:['choose','mate','offspring','repeat'],labels:['Choose parents with the desired inherited trait','Breed the selected parents','Select suitable offspring to become parents','Repeat over many generations'],why:'Selection repeats; a single mating does not guarantee all offspring share the target trait.'},
cmp('goals','Match the required breeding goals','breeding-goals',[
['crops','A crop suffers heavy disease losses',['Select inherited disease resistance','Select acquired scars only','Assume no variation matters'],0,'Disease resistance can be a useful inherited crop trait.'],
['animals','Farm production and companion-animal behaviour',['All goals must be appearance only','More meat/milk or gentle dogs can be selected goals','Only gene-transfer vectors can change these traits'],1,'Both production and behaviour can be breeding goals.'],
['flowers','Garden plants',['Flower form can never be selected','Only body mass matters','Large or unusual flowers are possible goals'],2,'Selective breeding can target appearance as well as usefulness.']]),
cmp('risks','Evaluate a breeding programme','breeding-evidence',[
['diversity','Parents repeatedly chosen from a narrow related line',['Consider inbreeding and inherited-defect risk','Assume diversity must always increase','No risk can follow useful selection'],0,'A narrow gene pool can increase genetic risks.'],
['welfare','A production trait may affect animal welfare',['Ignore the effect if yield rises','Weigh welfare, productivity, diversity and evidence','A useful trait settles every ethical issue'],1,'Potential benefits do not remove welfare and ethical considerations.']])],
'genetic-engineering':[
cmp('applications','Distinguish gene transfer from selective breeding','engineering-uses',[
['gene','Introduce a useful gene from another organism',['Genetic engineering in the examples here','Only selecting whole parents','No genome modification'],0,'Gene transfer modifies the recipient genome in this model.'],
['crop','A crop engineered for insect/herbicide resistance',['Every environmental effect is identical','A named GM crop application','Proof all yields are guaranteed'],1,'A particular trait can provide benefits in appropriate circumstances.'],
['insulin','Engineered bacteria produce human insulin',['The whole bacterial culture is injected as insulin','The product cannot be purified','Harvest and purify the insulin product'],2,'The production organism and the useful medical product are different.']]),
{id:'yield',title:'Interpret supplied application evidence',kind:'engineering-evidence',type:'numeric',unit:'%',prompt:'Fictional matched plots yield40 and50 units. Enter the percentage increase relative to40. This is not a universal GM-crop rate.',answer:25,reasonChoices:['(50−40)÷40×100; examine context and uncertainty','10÷50×100 proves all crops are safe','50+40 measures the increase'],reason:0,why:'The increase is10/40=25%. One fictional comparison cannot establish all benefits or risks.'},
cmp('evaluate','Separate evidence, concerns and judgements','engineering-evidence',[
['ecology','A crop-management change may affect wildflowers/insects',['Investigate relevant non-target effects','Ignore organisms outside the field','Assume every concern is proof of harm'],0,'Environmental impacts require relevant case-specific evidence.'],
['medicine','Research aims to address an inherited disorder',['Every disorder is already cured','Potential medical benefit needs evidence and ethical consideration','All medical applications are identical'],1,'Research potential is distinct from a universal success claim.'],
['concerns','A long-term health concern is raised',['It is automatically proven harm','No evidence could ever matter','Evaluate the relevant evidence and uncertainty'],2,'A concern and an established harmful effect are different claims.']])],
'engineering-steps':[
{id:'transfer',title:'Build the gene-transfer pathway',kind:'transfer',type:'sequence',route:['isolate','vector','cell','develop'],labels:['Use enzymes to isolate the required gene','Insert the gene into a vector such as a plasmid or virus','Use the vector to insert the gene into recipient cells','Introduce early so development can include the desired characteristic'],why:'Isolation and loading the carrier precede transfer to the recipient cells.'},
cmp('roles','Distinguish gene, vector and product','transfer-evidence',[
['gene','A required DNA segment',['Gene carrying the relevant information','A whole human insulin molecule','A finished adult organism'],0,'The gene is a DNA segment, not the final protein product.'],
['vector','Bacterial plasmid or virus in the process',['Only the final useful protein','Vector carrying genetic information','Only a selected breeding parent'],1,'The vector enables transfer into cells.'],
['product','Useful protein such as insulin',['A whole chromosome by definition','Always an entire bacterium','A product resulting from expression of the gene'],2,'Expression connects genetic information to a protein product.']]),
cmp('limits','Link early introduction and expression','transfer-evidence',[
['early','Gene introduced early in development',['Organism can develop with the desired characteristic','Every attempt must succeed','All other genes are removed'],0,'Early introduction is part of the GCSE summary; success is not guaranteed.'],
['expression','Gene is present but no useful product is made',['The vector must be a whole animal','Expression and biological context still matter','Presence alone guarantees the protein amount'],1,'A transferred gene must be expressed to have its intended effect.']])]
};
export const tasksForEvo=k=>evoTasks[k];
export const validEvo=(c,a)=>a!==''&&a!==null&&a!==undefined&&Number(a)===c[3];
export const advanceEvo=(r,n,v)=>Number.isInteger(n)&&n>=0&&n<r.length&&r[n]===v?n+1:n;
export const numericEvo=(v,a)=>v!==''&&v!==null&&v!==undefined&&Number.isFinite(Number(v))&&Math.abs(Number(v)-a)<.001;
