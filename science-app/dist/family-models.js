const cmp=(id,title,kind,cases)=>({id,title,kind,type:'compare',cases});
export const canonical=(a,b)=>[a,b].sort().join('');
export const familyCells=(rows,cols)=>rows.flatMap(a=>cols.map(b=>canonical(a,b)));
const sameSet=(a,b)=>Array.isArray(a)&&a.length===2&&a.every(v=>typeof v==='string'&&v.length===1)&&[...a].sort().join('')===[...b].sort().join('');
export const buildValid=(v,t)=>sameSet(v.rows,t.rows)&&sameSet(v.cols,t.cols)&&familyCells(v.rows,v.cols).every((s,i)=>v.cells?.[i]===s);
export const familyGridValid=(v,t)=>familyCells(t.rows,t.cols).every((s,i)=>v.cells?.[i]===s);
export const pedigreeValid=v=>['Aa','Aa','aa','AA or Aa'].every((s,i)=>v.people?.[i]===s);
export const validFamily=(c,a)=>a!==''&&a!==null&&a!==undefined&&Number(a)===c[3];
export const numericFamily=(v,a)=>v!==''&&v!==null&&v!==undefined&&Number.isFinite(Number(v))&&Math.abs(Number(v)-a)<.001;
export const familyTasks={
'construct-crosses':[
{id:'build1',title:'Construct Aa × aa',kind:'cross',type:'build',rowParent:'Aa',colParent:'aa',rows:['A','a'],cols:['a','a'],symbols:['A','a'],why:'Derive one allele per gamete from each parent, then combine every row and column.'},
{id:'build2',title:'Construct Aa × Aa',kind:'cross',type:'build',rowParent:'Aa',colParent:'Aa',rows:['A','a'],cols:['A','a'],symbols:['A','a'],why:'Each heterozygous parent can contribute A or a. Header order may change, but the combinations must follow it.'},
{id:'risk',title:'Calculate a constructed outcome',kind:'cross',type:'numeric',unit:'%',prompt:'For Aa × aa with A dominant, two of four equally likely combinations are aa. Enter the recessive phenotype probability.',answer:50,reasonChoices:['2÷4×100; probability per event','Only the fourth birth can be recessive','50% means exactly half of every family'],reason:0,why:'Two quarters equal50%; probability does not impose a birth quota.'}],
'family-trees':[
cmp('key','Read the family-tree key','pedigree',[
['unfilled','Unfilled symbol labelled unaffected',['Phenotype not affected; carrier status may remain uncertain','Definitely AA in every family','No genetic material'],0,'Unfilled records the phenotype, not automatically non-carrier status.'],
['links','Vertical line from the partner line to generationII',['Unrelated people','Parent-to-offspring relationship','The order of possible gametes'],1,'Trace the descent lines and individual IDs.']]),
{id:'people',title:'Infer the recessive family genotypes',kind:'pedigree',type:'pedigree',why:'Under the stated recessive model both unaffected parents are Aa, affected II-1 is aa, and unaffected II-2 may be AA or Aa.'},
{id:'recessive',title:'Apply the inferred parental cross',kind:'pedigree',type:'numeric',unit:'%',prompt:'The recessive pedigree establishes parents Aa × Aa. Enter the aa probability for another child in this simple model.',answer:25,reasonChoices:['1÷4×100; each event is new','The affected child uses up the risk','All siblings must have the same genotype'],reason:0,why:'One of four equally likely possibilities is aa; the earlier child does not use up a risk.'}],
'inherited-disorders':[
{id:'poly',title:'Complete supplied polydactyly cross',kind:'cross',type:'grid',rows:['P','p'],cols:['p','p'],symbols:['P','p'],why:'P is dominant: Pp is affected, pp unaffected in this supplied GCSE model.'},
{id:'cf',title:'Complete supplied carrier cross',kind:'cross',type:'grid',rows:['F','f'],cols:['F','f'],symbols:['F','f'],why:'FF, Ff, Ff, ff give25% affected,50% carriers and25% unaffected non-carriers.'},
cmp('risk','Distinguish carrier, affected and independent risk','disorders',[
['carrier','Ff in the recessive CF model',['Unaffected carrier','Affected ff','A whole gamete pair'],0,'Ff carries f but also F. CF is recessive.'],
['affected','ff in the supplied model',['Unaffected non-carrier','Affected','Only a polydactyly allele'],1,'Two recessive f alleles produce the CF phenotype in the model.'],
['repeat','Ff × Ff after one affected child',['Next risk is0%','Next risk is100%','Next ff probability remains25%'],2,'Each fertilisation is an independent event in this simple model.']])],
screening:[
cmp('benefits','Separate testing from guaranteed outcomes','screening',[
['information','Test for a specific inherited condition',['Information can support embryo selection','All genes are automatically rewritten','Every future illness is excluded'],0,'Testing obtains information about a specified condition; it is not gene editing.'],
['uncertainty','A result does not identify the tested condition',['Birth is certain','Scope, accuracy and pregnancy uncertainty still matter','No further evidence could ever matter'],1,'Testing and successful birth are different outcomes.']]),
{id:'dataset',title:'Interpret a fictional embryo dataset',kind:'screening-data',type:'numeric',unit:'%',prompt:'In a fictional set of8 tested embryos,6 do not have the tested condition identified. Enter6/8 as a percentage. This is not a clinical success rate.',answer:75,reasonChoices:['6÷8×100; only the tested condition is described','6÷8 guarantees75% live births','Every non-identified result proves lifelong health'],reason:0,why:'6/8=75%. The dataset does not measure birth probability or all future health.'},
cmp('perspectives','Weigh evidence and differing values','screening',[
['access','IVF/testing has cost and access demands',['Consider access, resource use, burdens and potential benefit','Only test accuracy can matter','All people have identical resources'],0,'Social/economic factors matter alongside biological evidence.'],
['values','People differ on embryo selection',['A biological fact settles all ethical values','Consider informed perspectives, including disability and embryo concerns','Ignore affected people'],1,'Evidence informs decisions; ethical perspectives can differ.'],
['therapy','Gene therapy versus embryo testing',['They are identical in all respects','Both guarantee no illness','Gene therapy seeks to change gene function; testing obtains information'],2,'The approaches have distinct purposes and ethical questions.']])],
'sex-inheritance':[
{id:'sexgrid',title:'Complete the supplied XX × XY cross',kind:'sex-grid',type:'grid',rows:['X','X'],cols:['X','Y'],symbols:['X','Y'],why:'An X egg combines with X or Y sperm, giving two XX and two XY cells.'},
cmp('sets','Distinguish pairs from gamete sets','sex',[
['body','Typical ordinary body cell',['23 chromosome pairs:22 autosome pairs plus a sex pair','23 chromosomes total in every body cell','46 pairs'],0,'A typical body cell has46 chromosomes in23 pairs.'],
['gamete','Gamete sex-chromosome contribution',['A full XX or XY pair','One sex chromosome within a23-chromosome set','No autosomes'],1,'Gametes carry one chromosome from each pair.']]),
{id:'sexchance',title:'Interpret independent chromosome outcomes',kind:'sex-grid',type:'numeric',unit:'%',prompt:'The supplied XX × XY model has two XY cells out of four. Enter the XY probability for each fertilisation.',answer:50,reasonChoices:['2÷4×100; earlier outcomes do not force the next','Three XX outcomes force the next XY','The ratio describes every biological variation and identity'],reason:0,why:'Two quarters equal50% under the model assumptions, independently of earlier events.'}]
};
export const tasksForFamily=k=>familyTasks[k];
