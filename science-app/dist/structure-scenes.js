import {phaseKinds} from './model-geometry.js?v=20261023-physicscomplete01';
import {enable3D,renderModel,renderDiagram} from './visual.js?v=20261023-physicscomplete01';
const label=(x,y,s,size=13)=>`<text x="${x}" y="${y}" fill="#d4dfe7" font-family="sans-serif" font-size="${size}" text-anchor="middle">${s}</text>`;
const svg=(body,aria)=>`<svg class="lab-svg" viewBox="0 0 440 285" role="img" aria-label="${aria}">${body}</svg>`;
export function showPhase(state){
 const phases=phaseKinds(state),kind=phases[0];const atoms=[];for(let i=0;i<18;i++){let x,y,z;if(kind==='solid'){x=(i%3-1)*.7;y=(Math.floor(i/3)%3-1)*.7;z=(Math.floor(i/9)-.5)*.7;}else if(kind==='liquid'){x=(i%5-2)*.55+(i%2)*.15;y=(Math.floor(i/5)-1.5)*.53;z=Math.sin(i*2.3)*.45;}else{x=Math.sin(i*2.4)*2.2;y=Math.cos(i*1.8)*1.6;z=Math.sin(i*1.3)*1.3;}if(phases.length===2){if(i<9)x-=1.4;else if(phases[1]==='gas'){x=1.8+Math.sin(i*2.4)*1.1;y=Math.cos(i*1.8)*1.6;z=Math.sin(i*1.3)*1.3;}else{x=1.2+(i%3-1)*.6;y=(Math.floor(i/3)%3-1)*.55+(i%2)*.15;z=Math.sin(i*2.3)*.4;}}atoms.push(['X',x,y,z]);}
 const rows={solid:['Close, regular arrangement','Particles vibrate about fixed positions'],liquid:['Close, irregular arrangement','Particles move past one another'],gas:['Widely separated particles','Particles move freely in all directions']};const desc=state.includes('+')?'Two phases coexist: '+phases.join(' and ')+'. The displayed proportions are arbitrary.':rows[kind].join('. ');
 const art=atoms.map((a,i)=>`<circle cx="${220+a[1]*65}" cy="${125+a[2]*60}" r="10" fill="#b7c8d6"/>`).join('')+label(220,252,state.includes('+')?state+' · illustrative proportions':rows[kind][0])+label(220,275,'Positions shown at one instant; no motion is simulated',10);
 enable3D();renderModel({zoom:11,name:state.includes('+')?'At the transition':kind[0].toUpperCase()+kind.slice(1)+' arrangement',formula:state,kicker:'SCHEMATIC · FIXED PRESSURE · SYMBOLIC',atoms,bonds:[],diagram:svg(art,desc)});
}
export function showMolecular(apart=false){
 const atoms=[],bonds=[];const locations=apart?[[-2.6,-1,0],[2.6,-1,0],[0,1.8,0]]:[[-1.4,-.5,0],[1.4,-.5,0],[0,1.4,0]];
 for(const [x,y,z] of locations){const i=atoms.length;atoms.push(['O',x,y,z],['H',x-.8,y-.55,z+.2],['H',x+.8,y-.55,z+.2]);bonds.push([i,i+1],[i,i+2]);}
 let art='';locations.forEach(([x,y])=>{const u=220+x*60,v=135-y*50;art+=`<path d="M${u-25} ${v+25}L${u} ${v}L${u+25} ${v+25}" stroke="#d4dfe7" stroke-width="3"/>${label(u,v,'O',18)}${label(u-28,v+35,'H',15)}${label(u+28,v+35,'H',15)}`;});if(!apart)art+='<path d="M170 155L270 155M200 100L175 130M240 100L265 130" stroke="#f0b4a6" stroke-dasharray="4 5"/>';art+=label(220,268,'Solid lines: covalent · dashed: intermolecular forces',10);
 enable3D();renderModel({zoom:13,name:apart?'Separated, intact molecules':'Neighbouring molecules',formula:'3 × H₂O',kicker:'COVALENT BONDS STAY INTACT · SCHEMATIC',atoms,bonds,diagram:svg(art,apart?'Three separated intact water molecules':'Three water molecules with covalent bonds and dashed intermolecular attractions')});
}
export function repeatSVG(v={cc:1,ch:4,left:1,right:1}){
 const bond=(x,y,u,z,n)=>Array.from({length:n},(_,i)=>`<path d="M${x} ${y+i*5}L${u} ${z+i*5}" stroke="#d4dfe7" stroke-width="2"/>`).join('');
 let art=label(180,145,'C',22)+label(270,145,'C',22)+bond(195,138,255,138,v.cc);
 for(let i=0;i<4;i++){const x=i<2?180:270,y=i%2?205:75;art+=label(x,y,'H',18);if(i<v.ch)art+=bond(x,i%2?155:92,x,i%2?185:120,1);}
 art+=bond(110,138,160,138,v.left)+bond(290,138,340,138,v.right)+'<path d="M145 55H135V225H145M305 55H315V225H305" fill="none" stroke="#f0b4a6" stroke-width="2"/>'+label(335,233,'n',18)+label(220,270,'One line = one shared electron pair',11);return svg(art,'Polyethene repeating unit with '+v.cc+' C–C bonds, '+v.ch+' C–H bonds and '+v.left+'/'+v.right+' continuation bonds');
}
export function networkSVG(){let art='';const nodes=[[100,140,'Si'],[220,140,'Si'],[340,140,'Si']];for(const [x,y,e] of nodes){art+=`<path d="M${x-48} ${y}H${x-17}M${x+17} ${y}H${x+48}M${x} ${y-52}V${y-20}M${x} ${y+20}V${y+52}" stroke="#d4dfe7" stroke-width="2"/>`+label(x,y+5,e,17)+label(x,y-60,'O',16)+label(x,y+70,'O',16);art+=`<path d="M${x} 25V55M${x} 220V245" stroke="#d4dfe7" stroke-width="2" stroke-dasharray="4 4"/>`;}
 art+=label(40,145,'O',16)+label(160,145,'O',16)+label(280,145,'O',16)+label(400,145,'O',16)+'<path d="M10 140H25M415 140H435" stroke="#d4dfe7" stroke-dasharray="4 4"/>'+label(220,275,'Connectivity fragment · bonds continue beyond edges',11);return svg(art,'Silica connectivity fragment: each Si links four O; oxygen links continue into the network. Flat layout is not the 3D shape.');}
export function showStructure(kind){if(kind==='network'){renderDiagram('A covalent network','Silica · SiO₂ ratio',networkSVG(),'CONNECTIVITY ONLY · NOT THE 3D ARRANGEMENT');return;}
 const atoms=[],bonds=[];for(let r=0;r<3;r++)for(let c=0;c<6;c++){const i=atoms.length;atoms.push(['C',(c-2.5)*.95,(r-1)*1.65+(c%2)*.3,(r-1)*.3]);if(c)bonds.push([i-1,i]);}enable3D();renderModel({zoom:15,name:'Separate polymer chains',formula:'Carbon skeletons · H omitted',kicker:'SCHEMATIC CHAIN FRAGMENTS · H OMITTED',atoms,bonds,diagram:repeatSVG()});}
