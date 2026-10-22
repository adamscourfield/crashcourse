export const extractionTasks=[{metal:'Iron',evidence:'Iron is below carbon; supplied iron oxide needs a chemical extraction.',method:'carbon',reason:'below'},{metal:'Aluminium',evidence:'Aluminium is above carbon; the starting material is aluminium oxide.',method:'other',reason:'above'},{metal:'Gold',evidence:'This sample contains native gold metal mixed with sand, not a gold compound.',method:'physical',reason:'native'}];
export const electronTasks=['Zn','Mg','Fe'];
export function normaliseEquation(text){return String(text).trim().replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).replace(/⁺/g,'+').replace(/[⁻−–]/g,'-').replace(/⟶|→|⇒|=>/g,'->').replace(/\^/g,'').replace(/\s/g,'');}
export function validElectronAccount(metal,oxidation,reduction,ionic){
 if(!electronTasks.includes(metal))return false;
 const o=normaliseEquation(oxidation),r=normaliseEquation(reduction),i=normaliseEquation(ionic);
 const ox=[`${metal}->${metal}2++2e-`,`${metal}->2e-+${metal}2+`];
 const red=['Cu2++2e-->Cu','2e-+Cu2+->Cu'];
 const net=[`${metal}+Cu2+->${metal}2++Cu`,`${metal}+Cu2+->Cu+${metal}2+`,`Cu2++${metal}->${metal}2++Cu`,`Cu2++${metal}->Cu+${metal}2+`];
 return ox.includes(o)&&red.includes(r)&&net.includes(i);
}
