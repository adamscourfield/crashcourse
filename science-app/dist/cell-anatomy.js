export const cellParts={
 nucleus:{name:'Nucleus',description:'Contains genetic material and controls cell activities.',types:['animal','plant'],position:[-.85,.3,.35]},
 cytoplasm:{name:'Cytoplasm',description:'The region where most cell chemical reactions take place.',types:['animal','plant','bacterium'],position:[-1.25,-.65,0]},
 membrane:{name:'Cell membrane',description:'Controls movement of substances into and out of the cell.',types:['animal','plant','bacterium'],position:[2.55,.6,0]},
 mitochondria:{name:'Mitochondria',description:'Sites of aerobic respiration, which transfers energy for cell processes.',types:['animal','plant'],position:[1.45,-1,.25]},
 ribosomes:{name:'Ribosomes',description:'Sites of protein synthesis. These dots are greatly enlarged in the model.',types:['animal','plant','bacterium'],position:[.2,1.25,.4]},
 wall:{name:'Cell wall',description:'Strengthens and supports the cell. Plant cell walls contain cellulose; bacterial cell walls do not.',types:['plant','bacterium'],position:[2.7,1.4,0]},
 chloroplasts:{name:'Chloroplasts',description:'Sites of photosynthesis. Not all plant cells have chloroplasts.',types:['plant'],position:[-1.8,1.3,.2]},
 vacuole:{name:'Permanent vacuole',description:'Contains cell sap and helps support the plant cell.',types:['plant'],position:[.7,0,.1]},
 dna:{name:'Circular DNA',description:'The main bacterial DNA loop is not enclosed in a nucleus.',types:['bacterium'],position:[-.4,0,.25]},
 plasmid:{name:'Plasmid',description:'An additional small ring of DNA. A bacterium may have one or more plasmids.',types:['bacterium'],position:[1.65,-.3,.4]}
};
export const cellType=value=>['animal','plant','bacterium'].includes(value)?value:'animal';
export const partsFor=type=>Object.entries(cellParts).filter(([,p])=>p.types.includes(cellType(type))).map(([id,p])=>({id,...p}));
export const selectedPart=(type,key)=>partsFor(type).some(p=>p.id===key)?key:'';
