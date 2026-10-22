export const organisationLevels=['cell','tissue','organ','system','organism'];
export const levelNames={cell:'Muscle cell',tissue:'Muscle tissue',organ:'Stomach',system:'Digestive system',organism:'Human organism'};
export const tissueKeys=['muscle','lining','gland'];
export const organComplete=layers=>tissueKeys.every(k=>layers?.includes(k));
export const digestiveStops=[{id:'mouth',name:'Mouth',x:240,y:30,role:'Food enters; chewing and mixing begin.'},{id:'oesophagus',name:'Oesophagus',x:240,y:75,role:'Muscular contractions move food towards the stomach.'},{id:'stomach',name:'Stomach',x:302,y:130,role:'Food is mixed with stomach secretions.'},{id:'small',name:'Small intestine',x:245,y:200,role:'Digestion is completed and small soluble products enter the blood.'},{id:'large',name:'Large intestine',x:150,y:215,role:'Water is absorbed from remaining contents.'},{id:'exit',name:'Rectum and anus',x:240,y:300,role:'Remaining undigested material is stored then egested.'}];
export const digestiveIndex=value=>Math.max(0,Math.min(5,Math.floor(Number(value)||0)));
export const absorptionSupported=size=>size==='small';
export function enzymeState(substrate='fit',step=0){step=Math.max(0,Math.min(3,Math.floor(Number(step)||0)));const fit=substrate==='fit';return{fit,step:fit?step:Math.min(1,step),bound:fit&&step===2,products:fit&&step===3,enzymeChanged:false};}
