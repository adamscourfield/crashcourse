import test from 'node:test';
import assert from 'node:assert/strict';
import {questionFlow,guidedFlow,cancelQuestionAdvance} from '../dist/question-flow.js';
function environment(){
 const nodes=[],prefs=new Map();
 const button={hidden:false,isConnected:true,textContent:'Continue',before(n){nodes.push(n);},closest(){return null;}};
 globalThis.localStorage={getItem:k=>prefs.get(k),setItem:(k,v)=>prefs.set(k,v)};
 globalThis.document={hidden:false,activeElement:null,getSelection:()=>({toString:()=>''}),querySelector:()=>null,querySelectorAll:()=>nodes.slice(),createElement:()=>({dataset:{},setAttribute(){},remove(){nodes.splice(nodes.indexOf(this),1);}})};
 return {button,nodes,prefs,pause:()=>nodes.find(n=>'flowPause' in n.dataset)};
}
test('Pause persists across steps; resume starts one timer; no synthetic answers',t=>{
 const doc=globalThis.document,storage=globalThis.localStorage;t.mock.timers.enable({apis:['setTimeout']});
 try{const e=environment();let moves=0;const route=()=>guidedFlow(e.button,{text:'A reading',label:'Next explanation',next:()=>moves++});route();e.pause().onclick();t.mock.timers.tick(12001);assert.equal(moves,0);assert.equal(e.pause().textContent,'Resume auto');route();t.mock.timers.tick(12001);assert.equal(moves,0);e.pause().onclick();t.mock.timers.tick(12001);assert.equal(moves,1);assert.equal(e.button.textContent,'Next explanation →');}
 finally{cancelQuestionAdvance();t.mock.timers.reset();globalThis.document=doc;globalThis.localStorage=storage;}
});
test('Modal, hidden context, active writing and selected text prevent timed movement',t=>{
 const doc=globalThis.document,storage=globalThis.localStorage;t.mock.timers.enable({apis:['setTimeout']});
 try{for(const block of ['modal','hidden','writing','selection']){const e=environment();let moves=0;questionFlow(e.button,{answered:true,next:()=>moves++});if(block==='modal')document.querySelector=()=>({open:true});if(block==='hidden')document.hidden=true;if(block==='writing')document.activeElement={matches:()=>true};if(block==='selection')document.getSelection=()=>({toString:()=> 'selected passage'});t.mock.timers.tick(3000);assert.equal(moves,0,block);cancelQuestionAdvance();}}
 finally{t.mock.timers.reset();globalThis.document=doc;globalThis.localStorage=storage;}
});
test('Wrong or unanswered questions do not schedule; submitted number answers can advance',t=>{
 const doc=globalThis.document,storage=globalThis.localStorage;t.mock.timers.enable({apis:['setTimeout']});
 try{const e=environment();let moves=0;questionFlow(e.button,{answered:false,next:()=>moves++});assert(e.button.hidden);t.mock.timers.tick(3000);assert.equal(moves,0);questionFlow(e.button,{answered:true,automatic:false,next:()=>moves++});assert(!e.button.hidden);t.mock.timers.tick(3000);assert.equal(moves,0);document.activeElement={matches:()=>false};questionFlow(e.button,{answered:true,next:()=>moves++});t.mock.timers.tick(3000);assert.equal(moves,1);}
 finally{cancelQuestionAdvance();t.mock.timers.reset();globalThis.document=doc;globalThis.localStorage=storage;}
});
