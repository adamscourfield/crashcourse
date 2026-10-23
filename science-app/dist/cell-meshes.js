import {cellType,selectedPart,cellParts}from './cell-anatomy.js?v=20261023-physicscomplete01';
export function buildCellMeshes(group,T,{type='animal',highlight=''}={}){
 type=cellType(type);highlight=selectedPart(type,highlight);const clip=new T.Plane(new T.Vector3(0,0,-1),0),parts={};
 const material=(key,color,clipped=false)=>new T.MeshStandardMaterial({color:highlight===key?0xf18a76:color,roughness:.4,metalness:.04,side:T.DoubleSide,clippingPlanes:clipped?[clip]:[],emissive:highlight===key?0x5f251d:0x000000,emissiveIntensity:.16});
 const add=(key,geometry,color,position=[0,0,0],scale=[1,1,1],clipped=false,parent=group)=>{const mesh=new T.Mesh(geometry,material(key,color,clipped));mesh.position.set(...position);mesh.scale.set(...scale);mesh.userData.organelle=key;parent.add(mesh);(parts[key]??=[]).push(mesh);return mesh;};
 const ball=(key,color,p,s,parent=group)=>add(key,new T.SphereGeometry(1,40,24),color,p,s,false,parent);
 const tube=(key,points,color,r=.035,parent=group)=>add(key,new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),48,r,8,false),color,[0,0,0],[1,1,1],false,parent);
 const rim=(key,rx,ry,z,color)=>tube(key,Array.from({length:49},(_,i)=>{const a=i*Math.PI/24;return [rx*Math.cos(a),ry*Math.sin(a),z];}),color,.035);
 function roundedShape(w,h,r){const s=new T.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s;}
 if(type==='animal'){add('membrane',new T.SphereGeometry(1,64,40),0x9ab4bd,[0,0,0],[2.7,1.95,1.65],true);add('cytoplasm',new T.SphereGeometry(1,64,40),0x6d929d,[0,0,-.04],[2.62,1.87,1.56],true);rim('membrane',2.7,1.95,0,0xc4d5d4);}
 if(type==='plant'){
  const box=(key,w,h,depth,z,color)=>add(key,new T.ExtrudeGeometry(roundedShape(w,h,.3),{depth,steps:1,bevelEnabled:true,bevelSegments:3,bevelSize:.06,bevelThickness:.06}),color,[0,0,z],[1,1,1],true);
  box('wall',5.5,4.1,2.2,-1.2,0xc7c0a7);box('membrane',5.18,3.78,2.08,-1.1,0xa7c5bf);box('cytoplasm',5.05,3.65,1.95,-1.0,0x6e929d);
  const border=(key,w,h,z,color)=>{const pts=roundedShape(w,h,.3).getPoints(48).map(p=>[p.x,p.y,z]);tube(key,pts,color,key==='wall'?.06:.028);};border('wall',5.5,4.1,.02,0xd7d0b6);border('membrane',5.18,3.78,.03,0xc4d9ce);
  ball('vacuole',0x91bdcf,[.65,0,-.12],[1.45,1.40,.72]);
 }
 if(type==='bacterium'){
  const shell=(key,r,length,color)=>{const mesh=add(key,new T.CapsuleGeometry(r,length,12,48),color,[0,0,-.05],[1,1,1],true);mesh.rotation.z=Math.PI/2;};shell('wall',1.05,3.2,0xabc1b9);shell('membrane',.96,3.2,0xc0d1cb);shell('cytoplasm',.90,3.18,0x779daa);
  const outline=(key,r,color)=>{const pts=[];for(let i=0;i<=24;i++){const a=-Math.PI/2+i*Math.PI/24;pts.push([1.6+r*Math.cos(a),r*Math.sin(a),0]);}for(let i=0;i<=24;i++){const a=Math.PI/2+i*Math.PI/24;pts.push([-1.6+r*Math.cos(a),r*Math.sin(a),0]);}pts.push(pts[0]);tube(key,pts,color,.03);};outline('wall',1.05,0xd3ddd1);outline('membrane',.96,0xbed2cb);
  const loop=Array.from({length:65},(_,i)=>{const a=i*Math.PI/32;return [-.5+1.0*Math.cos(a),.45*Math.sin(a)+.15*Math.sin(a*3),.12+.08*Math.sin(a*2)];});tube('dna',loop,0xe2b59e,.06);
  const plasmid=add('plasmid',new T.TorusGeometry(.23,.045,10,40),0xe2b59e,[1.65,-.3,.22]);plasmid.rotation.x=.4;
 }
 if(type!=='bacterium'){
  const p=type==='plant'?[-1.8,-.1,.15]:[-.85,.3,.25];ball('nucleus',0xbd8290,p,[.64,.72,.57]);ball('nucleus',0xe5b5a2,[p[0]-.12,p[1]+.13,p[2]+.48],[.2,.23,.13]);
  const mitochondrial=type==='plant'?[[1.5,-1.5,.15],[-1.9,-1.25,.1]]:[[1.45,-1,.2],[1.55,.9,.05],[-1.4,-1.1,.1]];
  for(const p of mitochondrial){const g=new T.Group();g.position.set(...p);g.rotation.z=.3;group.add(g);ball('mitochondria',0xd7ac7b,[0,0,0],[.45,.23,.20],g);tube('mitochondria',[[-.3,.02,.17],[-.22,.11,.17],[-.12,-.1,.18],[-.02,.12,.19],[.08,-.1,.18],[.2,.1,.17],[.3,0,.15]],0x8c6d65,.024,g);}
  if(type==='plant')for(const p of [[-1.8,1.3,.15],[2.13,.75,.12],[-.85,-1.6,.1]]){const g=new T.Group();g.position.set(...p);g.rotation.z=-.25;group.add(g);ball('chloroplasts',0x6e9d8b,[0,0,0],[.52,.26,.20],g);for(let j=0;j<4;j++)add('chloroplasts',new T.CylinderGeometry(.12,.12,.045,16),0xc1d4aa,[-.3+j*.2,0,.17],[1,1,1],false,g).rotation.x=Math.PI/2;}
 }
 const dots=type==='plant'?[[-2.25,.75,.18],[-1.3,1.55,.1],[1.5,1.5,.1],[2.2,-.7,.2],[-1.3,-1.55,.12]]:type==='bacterium'?[[-1.9,.4,.15],[-1.1,-.65,.2],[.5,.6,.22],[.8,-.55,.24],[2,.35,.2]]:[[-1.7,.8,.3],[.2,1.25,.4],[.8,-.8,.3],[-.3,-1.4,.2],[1.8,-.2,.3],[.5,.75,.3]];
 for(const p of dots){ball('ribosomes',0x27495e,p,[.075,.06,.06]);ball('ribosomes',0x365b6b,[p[0]+.07,p[1]-.03,p[2]],[.05,.04,.04]);}
 if(highlight){const raw=cellParts[highlight].position,p=highlight==='nucleus'&&type==='plant'?[-1.8,-.1,.5]:highlight==='ribosomes'?dots[1]:highlight==='mitochondria'&&type==='plant'?[1.5,-1.5,.15]:highlight==='wall'&&type==='bacterium'?[2.35,.73,0]:highlight==='membrane'&&type==='bacterium'?[2.4,.4,0]:raw;const arrow=new T.ArrowHelper(new T.Vector3(0,-1,0),new T.Vector3(p[0],p[1]+.65,p[2]+1.2),.65,0xffffff,.12,.08);arrow.userData.selectionMarker=true;group.add(arrow);}
 return parts;
}
