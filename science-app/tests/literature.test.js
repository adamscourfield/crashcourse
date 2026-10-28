import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {lessons,topics} from '../dist/literature/content.js';
import {restore,literatureGates,choiceIndices,viewHTML,draftVersionsHTML} from '../dist/literature/studio.js';
import {subjects} from '../dist/progress.js';
test('Literature has five scene-scoped lessons and 35 stable question IDs',()=>{
 assert.equal(lessons.length,5);assert.equal(new Set(lessons.map(l=>l.id)).size,5);
 const ids=new Set();for(const l of lessons){assert(topics.some(t=>t.id===l.topicId));assert.equal(l.cards.length,3);assert.equal(l.practice.length,3);assert.equal(l.check.length,4);assert.equal(l.views[0].kind,'language');assert.equal(l.views[0].words.length,3);assert(l.writing&&l.rubric.length===3);for(const q of [...l.practice,...l.check]){assert(!ids.has(q.id));ids.add(q.id);assert(q.options[q.answer]);assert(q.why);}}
 assert.equal(ids.size,35);assert.equal(subjects.find(s=>s.id==='english-literature').status,'available');
});
test('Knowledge gates require all language details, practice and independent answers; writing is separate',()=>{
 const l=lessons[0],p={seen:[0,1,2],passed:[0],observed:[0,1,2],wordSeen:[0,1],practice:Object.fromEntries(l.practice.map(q=>[q.id,{correct:true}])),checks:Object.fromEntries(l.check.map(q=>[q.id,q.answer])),draft:'A long draft is not a mark.'};
 assert.deepEqual(literatureGates(l,p),[true,false,true,true]);p.wordSeen.push(2);assert(literatureGates(l,p).every(Boolean));p.checks[l.check[0].id]=1;assert.equal(literatureGates(l,p)[3],false);p.practice[l.practice[0].id].correct=false;assert.equal(literatureGates(l,p)[2],false);
});
test('Resume preserves writing versions, first attempts and recall',()=>{
 const id=lessons[0].id,v={version:1,lessonId:id,lessons:{[id]:{draft:'My <interpretation>',drafts:[{text:'First draft',at:1}],practice:{q:{first:2,choice:0,correct:true}}}},concepts:{},review:{ids:[lessons[0].check[0].id],answers:{},index:0}};
 const s=restore(JSON.stringify(v));assert.equal(s.lessons[id].draft,v.lessons[id].draft);assert.equal(s.lessons[id].drafts[0].text,'First draft');assert.equal(s.lessons[id].practice.q.first,2);assert.equal(s.review.ids[0],v.review.ids[0]);assert.equal(restore('broken').lessonId,id);assert.equal(restore(JSON.stringify({...v,version:2})).lessonId,id);
});
test('Language views escape markup and all answer permutations are valid',()=>{
 const v={...lessons[0].views[0],content:'<script>unsafe</script>'};const html=viewHTML(v);assert(!html.includes('<script>'));assert(html.includes('&lt;script&gt;'));assert.equal((html.match(/data-lit-word=/g)||[]).length,3);
 for(const q of lessons.flatMap(l=>l.check)){const a=choiceIndices(q.id,q.options.length);assert.deepEqual([...a].sort(),[0,1,2]);assert.deepEqual(a,choiceIndices(q.id,q.options.length));}
 for(const l of lessons)for(const v of l.views)assert(viewHTML(v).length>100);
});
test('Main subject navigation connects all Literature entry points and hides tier controls',()=>{
 const app=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');const index=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
 for(const method of ['openLessons','openMap','startReview','openProgressLesson','reviewTopic'])assert(app.includes('literatureStudio().'+method));assert(index.includes('id="literatureContent"'));assert(app.includes("$('#literatureContent').hidden=state.subject!=='english-literature'"));assert(app.includes("$('#tier').hidden=!science"));
});

test('Writing versions remain readable and escape student HTML',()=>{const html=draftVersionsHTML([{text:'<img onerror=alert(1)>',at:1}]);assert(html.includes('Version 1'));assert(html.includes('&lt;img'));assert(!html.includes('<img'));assert.equal(draftVersionsHTML([]),'');});
