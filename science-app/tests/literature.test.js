import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {lessons,topics} from '../dist/literature/content.js';
import {restore,literatureGates,choiceIndices,viewHTML,draftVersionsHTML} from '../dist/literature/studio.js';
import {subjects} from '../dist/progress.js';
test('Literature has 35 text-scoped lessons and 245 stable question IDs',()=>{
 assert.equal(lessons.length,35);assert.equal(new Set(lessons.map(l=>l.id)).size,35);
 const ids=new Set();for(const l of lessons){assert(topics.some(t=>t.id===l.topicId));assert.equal(l.cards.length,3);assert.equal(l.practice.length,3);assert.equal(l.check.length,4);assert.equal(l.views[0].kind,'language');assert.equal(l.views[0].words.length,3);assert(l.writing&&l.rubric.length===3);for(const q of [...l.practice,...l.check]){assert(!ids.has(q.id));ids.add(q.id);assert(q.options[q.answer]);assert(q.why);}}
 assert.equal(ids.size,245);assert.equal(subjects.find(s=>s.id==='english-literature').status,'available');
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

test('Original five lesson records and their stable IDs are unchanged',async()=>{
 const {createHash}=await import('node:crypto');
 const sorted=v=>Array.isArray(v)?v.map(sorted):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sorted(v[k])])):v;
 assert.equal(createHash('sha256').update(JSON.stringify(sorted(lessons.slice(0,5)))).digest('hex'),'0b979bd04aa8761ed791c40b1192ca8968cf72958e66b8fe5f494cd0b63494f1');
});
test('Batch 2 follows the next ten roadmap IDs with keys, targeted feedback and primary scene links',async()=>{
 const {batch02}=await import('../dist/literature/content-batch02.js');assert.equal(batch02.length,10);
 assert.deepEqual(batch02.map(l=>l.id.split('.').pop()),['discovery','crown','banquet','apparitions','resistance','unravelling','ending','macbeth-character','lady-macbeth','kingship']);
 for(const l of batch02){assert(l.tasks[0][4].length>35);assert(l.sources.length);for(const url of l.sources)assert.match(url,/^https:\/\/www.folger.edu\/explore\/shakespeares-works\/macbeth\/read\/[1-5]\/[1-8]\/$/);assert.equal(new Set([...l.practice,...l.check].map(q=>q.prompt)).size,7);assert(l.rubric.every(x=>x.length>20));}
 const ending=batch02.find(l=>l.id.endsWith('.ending'));assert(ending.scope.includes('5.8/5.9'));assert.equal(batch02.find(l=>l.id.endsWith('.kingship')).views[0].content,'The king-becoming graces');
});
test('Batch 3 has five Macbeth and five Carol units with separate topics and specification refs',async()=>{
 const {batch03}=await import('../dist/literature/content-batch03.js');assert.equal(batch03.length,10);assert.equal(batch03.filter(l=>l.topicId==='english-literature.macbeth').length,5);assert.equal(batch03.filter(l=>l.topicId==='english-literature.christmas-carol').length,5);assert.equal(topics.length,3);
 for(const l of batch03){const carol=l.id.startsWith('lit.carol.');assert.equal(l.refs[0],carol?'3.1.2':'3.1.1');assert.equal(l.author,carol?'Charles Dickens':'William Shakespeare');for(const q of [...l.practice,...l.check])assert(q.concept.startsWith(carol?'lit.carol.':'lit.macbeth.'));}
 const l=batch03.find(l=>l.independentWriting);assert(l.independentPrompt.includes('elsewhere'));assert(l.independentExtract.includes('double trust'));assert(l.rubric.some(x=>x.startsWith('AO2:')));
});
test('All fifteen previously published lesson records remain byte-equivalent after normalised serialisation',async()=>{
 const {createHash}=await import('node:crypto');const sorted=v=>Array.isArray(v)?v.map(sorted):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sorted(v[k])])):v;
 assert.equal(createHash('sha256').update(JSON.stringify(sorted(lessons.slice(0,15)))).digest('hex'),'4956f724dcd4f67fd68884b8e515648062be6dc42f3a1391d2e5ef50936c88c6');
});
test('Batch 4 has nine Carol units and one Inspector unit with original-summary rights metadata',async()=>{
 const {batch04}=await import('../dist/literature/content-batch04.js');assert.equal(batch04.length,10);assert.equal(batch04.filter(l=>l.id.startsWith('lit.carol.')).length,9);
 const inspector=batch04.find(l=>l.id.startsWith('lit.inspector.'));assert.equal(inspector.refs[0],'3.2.1');assert.equal(inspector.rights,'protected_summary_only');assert.equal(inspector.views[0].originalSummary,true);const html=viewHTML(inspector.views[0]);assert(html.includes('NOT A PLAY QUOTATION'));assert(!html.includes('<blockquote'));assert(html.includes('dramatic feature'));
 const writing=batch04.find(l=>l.independentWriting);assert.equal(writing.id,'lit.carol.lesson-14');assert(writing.independentExtract.includes('Scrooge'));assert.equal(topics.find(t=>t.id===inspector.topicId).unit,'8702-modern');
 for(const l of batch04){assert(l.tasks[0][4]);assert.equal(new Set([...l.practice,...l.check].map(q=>q.prompt)).size,7);for(const q of [...l.practice,...l.check])assert(q.concept.startsWith(l.id.startsWith('lit.carol.')?'lit.carol.':'lit.inspector.'));}
});
test('All twenty-five earlier lesson records are preserved in batch 4',async()=>{
 const {createHash}=await import('node:crypto');const sorted=v=>Array.isArray(v)?v.map(sorted):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sorted(v[k])])):v;assert.equal(createHash('sha256').update(JSON.stringify(sorted(lessons.slice(0,25)))).digest('hex'),'28fdda9ec1b194fbb1854185afcb4317b2ba4340481595429741f977a4d61b9c');
});
