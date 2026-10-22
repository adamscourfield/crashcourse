// Outer-shell electron accounting; shared electrons count once in the total.
export const valence={H:1,C:4,N:5,O:6,Cl:7};
export const moleculeTasks=[
{id:'H2',formula:'H₂',atoms:['H','H'],edges:[[0,1]],orders:[1],lone:[0,0]},
{id:'Cl2',formula:'Cl₂',atoms:['Cl','Cl'],edges:[[0,1]],orders:[1],lone:[3,3]},
{id:'HCl',formula:'HCl',atoms:['Cl','H'],edges:[[0,1]],orders:[1],lone:[3,0]},
{id:'O2',formula:'O₂',atoms:['O','O'],edges:[[0,1]],orders:[2],lone:[2,2]},
{id:'N2',formula:'N₂',atoms:['N','N'],edges:[[0,1]],orders:[3],lone:[1,1]},
{id:'H2O',formula:'H₂O',atoms:['O','H','H'],edges:[[0,1],[0,2]],orders:[1,1],lone:[2,0,0]},
{id:'NH3',formula:'NH₃',atoms:['N','H','H','H'],edges:[[0,1],[0,2],[0,3]],orders:[1,1,1],lone:[1,0,0,0]},
{id:'CH4',formula:'CH₄',atoms:['C','H','H','H','H'],edges:[[0,1],[0,2],[0,3],[0,4]],orders:[1,1,1,1],lone:[0,0,0,0,0]}
];
export function checkMolecule(t,orders,lone){
 if(orders.length!==t.edges.length||lone.length!==t.atoms.length||[...orders,...lone].some(v=>!Number.isInteger(v)||v<0||v>4))return {ok:false,message:'Use whole numbers from zero to four.'};
 const budget=t.atoms.reduce((n,a)=>n+valence[a],0),total=2*([...orders,...lone].reduce((a,b)=>a+b,0));
 if(total!==budget)return {ok:false,message:`You placed ${total} distinct electrons. These atoms supply ${budget} outer electrons altogether. Count shared electrons only once in the molecule.`};
 for(let i=0;i<t.atoms.length;i++){const shared=t.edges.reduce((n,e,j)=>n+(e.includes(i)?orders[j]:0),0),shell=2*(shared+lone[i]),target=t.atoms[i]==='H'?2:8;if(shell!==target)return {ok:false,message:`Atom ${i+1} (${t.atoms[i]}) has access to ${shell} electrons. It needs ${target} in this molecule. Shared pairs count in both bonded atoms’ shells.`};if(shared+2*lone[i]!==valence[t.atoms[i]])return {ok:false,message:`Check electron origins at atom ${i+1}: each bond pair contains one electron from each atom.`};}
 if(orders.some((n,i)=>n!==t.orders[i])||lone.some((n,i)=>n!==t.lone[i]))return {ok:false,message:'Check which atoms are bonded and retain the non-bonding pairs.'};
 return {ok:true,message:`Correct: ${t.formula}, ${budget} distinct outer electrons. Each shared pair contains one electron from each bonded atom.`};
}
