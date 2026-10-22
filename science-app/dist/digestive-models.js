export const enzymeCases=[
 {id:'amylase',name:'Amylase',food:'Starch',product:'Sugars',sites:['salivary','pancreas','intestine'],siteText:'Salivary glands, pancreas, small intestine'},
 {id:'protease',name:'Protease',food:'Protein',product:'Amino acids',sites:['stomach','pancreas','intestine'],siteText:'Stomach, pancreas, small intestine'},
 {id:'lipase',name:'Lipase',food:'Lipid',product:'Glycerol + fatty acids',sites:['pancreas','intestine'],siteText:'Pancreas, small intestine'}
];
export const temperatureData=[[10,1],[20,3],[30,6],[40,9],[50,3],[60,0]];
export const phData={pepsin:[[2,9],[4,3],[6,1],[8,0]],amylase:[[2,0],[4,2],[6,8],[8,4]]};
export function conditionResult(temp,heated=false){return {rate:heated?0:(temperatureData.find(d=>d[0]===Number(temp))?.[1]??0),denatured:heated||Number(temp)>=60};}
export function foodMatch(enzyme,food){return enzymeCases.find(e=>e.id===enzyme)?.food===food;}
export function validSites(enzyme,sites){let expected=enzymeCases.find(e=>e.id===enzyme)?.sites;return !!expected&&sites.length===expected.length&&expected.every(s=>sites.includes(s));}
export function fatGeometry(split){const n=split?8:1,side=split?1:2;return {count:n,side,volume:n*side**3,area:n*6*side**2};}
export function fatOutcome(alkaline,split,lipase){return {products:lipase?(alkaline?(split?8:4):(split?2:1)):0,units:'illustrative product units / equal interval'};}
export function reactionRate(amount,time){return time>0?amount/time:null;}
