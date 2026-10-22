export const population=(initial,generations)=>{initial=Number(initial);generations=Number(generations);return Number.isInteger(initial)&&initial>0&&Number.isInteger(generations)&&generations>=0&&generations<=20?initial*2**generations:null;};
export const generationCount=(minutes,division)=>Number(minutes)>=0&&Number(division)>0&&Number.isInteger(Number(minutes)/Number(division))?Number(minutes)/Number(division):null;
export const circleArea=diameter=>Number(diameter)>=0?Math.PI*(Number(diameter)/2)**2:null;
export const clearRingArea=(outer,disc)=>Number(outer)>=Number(disc)&&Number(disc)>=0?circleArea(outer)-circleArea(disc):null;
export const zoneRuns=[{id:'A',name:'Treatment A',diameters:[18,20,22],disc:6},{id:'B',name:'Treatment B',diameters:[12,14,16],disc:6},{id:'control',name:'Solvent control',diameters:[6,6,6],disc:6}];
export const culturePlanValid=w=>w.media==='sterile'&&w.loop==='sterile'&&w.tape==='strips'&&w.inverted===true&&Number(w.temperature)<=25&&Number(w.temperature)>0;
export const growthAssumptions=w=>w.nutrients==='enough'&&w.conditions==='suitable';
