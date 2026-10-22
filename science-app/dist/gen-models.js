const cmp=(id,title,kind,cases)=>({id,title,kind,type:'compare',cases});
export const genotype=(a,b)=>[a,b].sort().join('');
export const crossCells=(rows,cols)=>rows.flatMap(a=>cols.map(b=>genotype(a,b)));
export const gridValid=(v,t)=>crossCells(t.rows,t.cols).every((s,i)=>v.cells?.[i]===s);
export const editedDNA=mode=>mode==='insert'?'AATACCCGGG':mode==='delete'?'AACCCGGG':'AAACCCGGG';
export const triplets=s=>s.match(/.{1,3}/g)||[];
export const complement=s=>s.split('').map(c=>({A:'T',T:'A',C:'G',G:'C'})[c]||'?').join('');
export const genTasks={
'dna-nucleotides':[cmp('parts','Interpret the nucleotide diagram','nucleotide',[
['sugar','Pentagon marked S',['Sugar','Phosphate','Whole protein'],0,'S identifies the sugar; the base attaches to it.'],['phosphate','Circle marked P',['Base','Phosphate','Gene'],1,'P marks phosphate.'],['base','Lettered block attached to S',['Only phosphate','Amino acid','Base'],2,'A,C,G,T identify the four base types.']]),
{id:'order',title:'Connect sequence to a protein',kind:'triplet',type:'sequence',route:['nucleotides','bases','triplets','amino'],labels:['Nucleotides form the polymer','Their base order carries information','Read the sequence in groups of three','Triplet order specifies amino-acid order'],why:'Base order, not just letter totals, carries the information.'},
{id:'length',title:'Count complete coding triplets',kind:'triplet',type:'numeric',unit:'amino-acid positions',prompt:'In this simplified coding segment,12 bases form complete triplets with no stop signal shown. How many amino-acid positions are specified?',answer:4,reasonChoices:['12÷3','12×3','12÷4 because four base types exist'],reason:0,why:'Twelve bases make four groups of three; this short teaching segment omits starts/stops.'}],
'protein-synthesis':[cmp('pairs','Match complementary DNA bases','pairing',[
['A','A on one strand',['T on the opposite strand','C','A'],0,'A pairs with T.'],['C','C on one strand',['A','G on the opposite strand','T'],1,'C pairs with G.']]),
{id:'build',title:'Assemble and fold the chain',kind:'synthesis',type:'sequence',route:['template','carrier','join','fold'],labels:['A gene provides template information','Carriers deliver specific amino acids to a ribosome','Amino acids join in the specified order','The completed chain folds into its functional shape'],why:'Carriers deliver amino acids; they do not move whole genes through the ribosome.'},
cmp('function','Link shape with protein function','function',[
['enzyme','An enzyme active site changes shape',['Substrate binding may change','All DNA disappears','Function can never change'],0,'Shape contributes to binding and catalytic activity.'],['structure','A structural protein folds differently',['It must work better','Its strength or function may change','It becomes a sugar'],1,'Structural proteins such as collagen depend on appropriate structure.']])],
'coding-variants':[cmp('edit','Compare insertion and deletion','edit',[
['insert','Insert T after the first two bases of AAACCCGGG',['Extra base can alter following triplet groups','Every codon remains identical','It removes a base'],0,'An insertion adds material and can change subsequent grouping.'],['delete','Delete the second A from AAACCCGGG',['Adds three new chromosomes','One base is removed and later groups can change','Always leaves every group unchanged'],1,'A deletion removes material; effects depend on position and extent.']]),
cmp('outcomes','Avoid assuming every variant is harmful','variants',[
['neutral','A mutation leaves protein function unchanged',['A possible common outcome','Impossible for every mutation','Proof the DNA cannot differ'],0,'Most mutations do not alter the protein or do not change its appearance/function.'],['coding','A coding change alters an enzyme shape',['Always harmless','Activity may change','It must change every gene'],1,'Some variants alter protein shape and activity.']]),
cmp('switch','Distinguish coding from regulatory effects','expression',[
['off','A non-coding switch reduces expression',['Less product may be made without changing its sequence','Every amino acid must change','Non-coding DNA has no possible role'],0,'Some non-coding regions regulate gene expression.'],['coding','An amino-acid sequence changes',['Only expression amount can ever differ','A coding variant is a possible cause','This cannot involve DNA'],1,'Coding variants can change the encoded protein.']])],
alleles:[cmp('terms','Match gene, allele and phenotype','alleles',[
['allele','A version of a gene',['Allele','Chromosome number','Whole genome'],0,'An allele is a gene variant.'],['genotype','The pair Aa',['Phenotype','Genotype','No genetic information'],1,'The allele combination is a genotype.'],['phenotype','The expressed fur characteristic',['Whole chromosome','Only genotype','Phenotype'],2,'Phenotype is the expressed characteristic.']]),
cmp('pairs','Classify allele pairs','alleles',[
['AA','AA',['Homozygous dominant','Heterozygous','Homozygous recessive'],0,'Both alleles match and are dominant A.'],['Aa','Aa',['Homozygous','Heterozygous','A single allele'],1,'The pair contains two different alleles.'],['aa','aa',['Heterozygous','Homozygous dominant','Homozygous recessive'],2,'Both are recessive a.']]),
cmp('phenotypes','Apply the bounded dominant/recessive model','alleles',[
['Aa','A is dominant: phenotype of Aa',['Dominant phenotype','Recessive phenotype','No possible expression'],0,'One A is enough in this simple model.'],['aa','A is dominant: phenotype of aa',['Dominant phenotype','Recessive phenotype','Both genes absent'],1,'The recessive phenotype appears without dominant A.'],['polygenic','Most characteristics',['One gene only without exception','No genetic effects','Multiple genes interact'],2,'The simple single-gene model has limits.']])],
crosses:[{id:'grid1',title:'Complete Aa × Aa',kind:'cross',type:'grid',rows:['A','a'],cols:['A','a'],why:'Combine the supplied row and column allele in each cell.'},
{id:'grid2',title:'Complete Aa × aa',kind:'cross',type:'grid',rows:['a','a'],cols:['A','a'],why:'Each aa parent gamete carries a; combine with A or a from Aa.'},
{id:'chance',title:'Calculate and interpret a probability',kind:'cross',type:'numeric',unit:'%',prompt:'In Aa × Aa, one of four equally likely cells is aa. Enter the recessive phenotype probability as a percentage.',answer:25,reasonChoices:['1÷4×100; probability per event, not an exact birth quota','Exactly the fourth birth must be recessive','3÷4×100 counts the recessive cells'],reason:0,why:'One quarter is25%; independent events do not guarantee an exact family ratio.'}]
};
export const tasksForGen=k=>genTasks[k];
export const validGen=(c,a)=>a!==''&&a!==null&&a!==undefined&&Number(a)===c[3];
export const advanceGen=(r,n,v)=>Number.isInteger(n)&&n>=0&&n<r.length&&r[n]===v?n+1:n;
export const numericGen=(v,a)=>v!==''&&v!==null&&v!==undefined&&Number.isFinite(Number(v))&&Math.abs(Number(v)-a)<.001;
