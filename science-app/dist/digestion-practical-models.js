export const foodAssays=[
 {id:'sugar',name:'Reducing sugar',reagent:'benedict',method:'bath',positive:'Brick-red precipitate',negative:'Solution remains blue',positiveColour:0xca715f,negativeColour:0x739db4},
 {id:'starch',name:'Starch',reagent:'iodine',method:'room',positive:'Blue-black colour',negative:'Iodine remains orange-brown',positiveColour:0x243348,negativeColour:0xbf8b50},
 {id:'protein',name:'Protein',reagent:'biuret',method:'room',positive:'Lilac/purple colour',negative:'Solution remains blue',positiveColour:0x9681ae,negativeColour:0x739db4},
 {id:'lipid',name:'Lipid',reagent:'ethanol',method:'extract',positive:'White/cloudy emulsion',negative:'Clear; no emulsion',positiveColour:0xece9df,negativeColour:0xaac5d0}
];
export function assayResult(assayId,sample,reagent,method){const a=foodAssays.find(x=>x.id===assayId);if(!a||a.reagent!==reagent||a.method!==method)return {valid:false,observation:'Method cannot support a conclusion'};const positive=sample==='positive';return {valid:true,positive,observation:positive?a.positive:a.negative,colour:positive?a.positiveColour:a.negativeColour};}
export const amylaseEndpoints={4:180,6:90,8:150};
export function starchSample(ph,time){const endpoint=amylaseEndpoints[ph];return {time,present:time<endpoint,observation:time<endpoint?'Blue-black: starch detected':'Orange-brown: no starch detected'};}
export function endpointInterval(ph){const upper=amylaseEndpoints[ph];return {after:upper-30,by:upper};}
export function meanTime(values){return values.reduce((a,b)=>a+b,0)/values.length;}
export function reciprocalRate(time){return time>0?1/time:null;}
export function graphRateValid(ph,rate){return Number.isFinite(Number(rate))&&Math.abs(Number(rate)-1/amylaseEndpoints[ph])<.0001;}
