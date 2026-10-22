export const chromosomeIDs=['A1','A2','B1','B2'];
export const copyIDs=chromosomeIDs.flatMap(id=>[id+'.a',id+'.b']);
export function allocationValid(assignments={}){return chromosomeIDs.every(id=>{const sides=[assignments[id+'.a'],assignments[id+'.b']];return sides.includes('L')&&sides.includes('R');});}
export const nucleusInventory=(assignments={},side)=>copyIDs.filter(id=>assignments[id]===side).map(id=>id.split('.')[0]);
export const stageIndex=value=>Math.max(0,Math.min(4,Math.floor(Number(value)||0)));
export const chromosomeChallenges=[
 {id:'dna',title:'Find the material',prompt:'Explore the nucleus and a chromosome, then identify the material chromosomes are made from.',views:['nucleus','chromosome'],answer:'dna',options:[['protein','Only a cell membrane'],['dna','DNA molecules'],['cell','Whole cells']],why:'Chromosomes are made of DNA. The nucleus contains chromosomes; it is not made of chromosomes alone.'},
 {id:'gene',title:'Highlight a gene',prompt:'Open the DNA view, choose region B and zoom into the highlighted gene. What is a gene in relation to DNA?',views:['dna','gene'],answer:'section',options:[['nucleus','An entire nucleus'],['section','A section of DNA'],['chromosome','A whole set of chromosomes']],why:'A gene is a section of DNA. A chromosome carries many genes; the three regions shown are illustrative, not a real gene count.'},
 {id:'pairs',title:'Compare the chromosome pairs',prompt:'Return to the nucleus. A1/A2 form one pair and B1/B2 another. What does the paired arrangement mean?',views:['nucleus'],answer:'pairs',options:[['identical','Every chromosome is an identical copy of every other one'],['pairs','Body-cell chromosomes are normally in pairs'],['four','Every living organism has exactly four chromosomes']],why:'Chromosomes in body cells are normally paired. This deliberately small model has two pairs; it does not set a chromosome count for all organisms or imply every version of each gene is identical.'}
];
