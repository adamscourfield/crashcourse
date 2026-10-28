// Offline handler tests with an intentionally small DOM double. These do not render a browser,
// measure layout, or constitute visual/mobile/assistive-technology QA.
import test from 'node:test';
import assert from 'node:assert/strict';
import {lessons} from '../dist/literature/content.js';
import {createLiteratureStudio,KEY,literatureGates} from '../dist/literature/studio.js';
import {cancelQuestionAdvance} from '../dist/question-flow.js';
function harness(seed){
 const nodes=[],extra=new Map(),storage=new Map(seed?[[KEY,JSON.stringify(seed)]]:[]);
 class Element{
  constructor(attrs=''){this.attrs=attrs;this.children=[];this.dataset={};this.hidden=false;this.isConnected=true;this.classList={toggle(){},add(){},remove(){}};for(const m of attrs.matchAll(/data-([\w-]+)="([^"]*)"/g))this.dataset[m[1].replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]=m[2];this.id=attrs.match(/\bid="([^"]*)"/)?.[1];}
  set innerHTML(html){const remove=x=>{for(const c of x.children)remove(c);const i=nodes.indexOf(x);if(i>=0)nodes.splice(i,1);};for(const c of this.children)remove(c);this.children=[];this.html=html;for(const m of html.matchAll(/<[a-z][\w-]*\b([^>]*)>/gi)){const e=new Element(m[1]);nodes.push(e);this.children.push(e);}}
  get innerHTML(){return this.html||'';}
  querySelector(sel){if(sel==='b')return this.bold??=new Element();return root.querySelector(sel);}
  setAttribute(k,v){(this.setAttrs??={})[k]=v;}
  before(){} remove(){} focus(){} click(){this.onclick?.();} closest(){return root;}
 }
 const root=new Element();root.querySelector=sel=>sel.startsWith('#')?nodes.find(n=>n.id===sel.slice(1)):nodes.find(n=>n.attrs.match(/class="([^"]*)"/)?.[1].split(' ').includes(sel.slice(1)));
 root.querySelectorAll=sel=>{const name=sel.match(/^\[data-([\w-]+)\]$/)?.[1]?.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());return name?nodes.filter(n=>name in n.dataset):[];};
 globalThis.document={hidden:false,querySelectorAll:()=>[],querySelector:()=>null,createElement:()=>new Element(),getElementById:id=>root.querySelector('#'+id)||extra.get(id)||(()=>{const e=new Element();extra.set(id,e);return e;})()};
 globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
 let modalText='';const studio=createLiteratureStudio({root,modal:html=>{modalText=html;},closeModal(){}});
 return {root,studio,storage,$:s=>root.querySelector(s),all:s=>root.querySelectorAll(s),modal:()=>modalText,extra};
}
test('All ten new lessons exercise actual handlers: wrong/retry, stages, checks, drafts and resume',()=>{
 const oldDoc=globalThis.document,oldStorage=globalThis.localStorage;
 try{
  for(const l of lessons.slice(5)){
   const h=harness();h.studio.openProgressLesson(l.id,0);
   for(let i=0;i<3;i++)h.$('#hContinue').click();
   assert.equal(h.studio.state().lessons[l.id].stage,1);
   for(const b of h.all('[data-lit-word]'))b.click();
   for(let i=1;i<3;i++)h.all('[data-hview]').find(b=>Number(b.dataset.hview)===i).click();
   h.all('[data-htask]').find(b=>Number(b.dataset.htask)!==l.tasks[0][2]).click();
   assert.equal(h.$('#hFeedback').textContent,l.tasks[0][4]);assert.deepEqual(h.studio.state().lessons[l.id].passed,[]);
   h.all('[data-htask]').find(b=>Number(b.dataset.htask)===l.tasks[0][2]).click();h.$('#hContinue').click();
   assert.equal(h.studio.state().lessons[l.id].stage,2);
   for(const q of l.practice){
    h.all('[data-hanswer]').find(b=>Number(b.dataset.hanswer)!==q.answer).click();
    const first=h.studio.state().lessons[l.id].practice[q.id].first;assert.notEqual(first,q.answer);
    h.all('[data-hanswer]').find(b=>Number(b.dataset.hanswer)===q.answer).click();
    assert.equal(h.studio.state().lessons[l.id].practice[q.id].first,first);h.$('#hContinue').click();
   }
   assert.equal(h.studio.state().lessons[l.id].stage,3);
   for(const q of l.check){h.all('[data-hanswer]').find(b=>Number(b.dataset.hanswer)===q.answer).click();assert.equal(h.$('#hFeedback').textContent,'Answer recorded.');assert(!h.$('#hBody').innerHTML.includes(q.why));h.$('#hContinue').click();}
   assert(h.modal().includes('100%'));assert(literatureGates(l,h.studio.state().lessons[l.id]).every(Boolean));
   const area=h.$('#litDraft');area.value='My <supported> reading of '+l.id;area.oninput();h.$('#litSaveDraft').click();
   assert.equal(h.studio.state().lessons[l.id].drafts.length,1);assert(h.$('#litVersions').innerHTML.includes('&lt;supported&gt;'));
   const saved=JSON.parse(h.storage.get(KEY)),resumed=harness(saved);resumed.studio.render();assert.equal(resumed.$('#litDraft').value,area.value);assert.equal(resumed.studio.getProgress().total,15);assert.equal(resumed.studio.getProgress().completed,1);
  }
 }finally{cancelQuestionAdvance();globalThis.document=oldDoc;globalThis.localStorage=oldStorage;}
});
test('Wrong independent first answer stays locked and retake archives it',()=>{
 const oldDoc=globalThis.document,oldStorage=globalThis.localStorage;
 try{const h=harness(),l=lessons[5];h.studio.openProgressLesson(l.id,3);const q=l.check[0],wrong=(q.answer+1)%3;h.all('[data-hanswer]').find(b=>Number(b.dataset.hanswer)===wrong).click();h.all('[data-hanswer]').find(b=>Number(b.dataset.hanswer)===q.answer).click();assert.equal(h.studio.state().lessons[l.id].checks[q.id],wrong);
 for(let i=0;i<4;i++){if(i>0)h.all('[data-hanswer]').find(b=>Number(b.dataset.hanswer)===l.check[i].answer).click();h.$('#hContinue').click();}
 assert(h.modal().includes('75%'));h.extra.get('hRetake').click();const p=h.studio.state().lessons[l.id];assert.equal(p.history[0][q.id],wrong);assert.deepEqual(p.checks,{});assert.equal(p.ci,0);
 }finally{cancelQuestionAdvance();globalThis.document=oldDoc;globalThis.localStorage=oldStorage;}
});
test('A learner from the five-lesson release resumes the same question and writing after expansion',()=>{
 const oldDoc=globalThis.document,oldStorage=globalThis.localStorage;
 try{const l=lessons[0],q=l.practice[0],p={stage:2,card:2,seen:[0,1,2],observed:[0,1,2],viewIndex:0,wordSeen:[0,1,2],task:0,passed:[0],practice:{[q.id]:{choice:q.answer,first:1,correct:true}},pi:0,checks:{},ci:0,draft:'An existing interpretation',drafts:[{text:'Earlier version',at:1}]};
 const h=harness({version:1,lessonId:l.id,lessons:{[l.id]:p},concepts:{}});h.studio.render();assert.equal(h.studio.state().lessonId,l.id);assert.equal(h.$('#litDraft').value,p.draft);assert.equal(h.studio.state().lessons[l.id].practice[q.id].first,1);assert(h.$('#litVersions').innerHTML.includes('Earlier version'));assert.equal(h.studio.getProgress().total,15);h.$('#hContinue').click();assert.equal(h.studio.state().lessons[l.id].pi,1);
 }finally{cancelQuestionAdvance();globalThis.document=oldDoc;globalThis.localStorage=oldStorage;}
});
