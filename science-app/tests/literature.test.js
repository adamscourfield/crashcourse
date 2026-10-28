import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {lessons,topics} from '../dist/literature/content.js';
import {restore,literatureGates,choiceIndices,viewHTML,draftVersionsHTML} from '../dist/literature/studio.js';
import {subjects} from '../dist/progress.js';
test('Literature has 95 text-scoped lessons and 665 stable question IDs',()=>{
 assert.equal(lessons.length,95);assert.equal(new Set(lessons.map(l=>l.id)).size,95);
 const ids=new Set();for(const l of lessons){assert(topics.some(t=>t.id===l.topicId));assert.equal(l.cards.length,3);assert.equal(l.practice.length,3);assert.equal(l.check.length,4);assert.equal(l.views[0].kind,'language');assert.equal(l.views[0].words.length,3);assert(l.writing&&l.rubric.length===3);for(const q of [...l.practice,...l.check]){assert(!ids.has(q.id));ids.add(q.id);assert(q.options[q.answer]);assert(q.why);}}
 assert.equal(ids.size,665);assert.equal(subjects.find(s=>s.id==='english-literature').status,'available');
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
 const {batch03}=await import('../dist/literature/content-batch03.js');assert.equal(batch03.length,10);assert.equal(batch03.filter(l=>l.topicId==='english-literature.macbeth').length,5);assert.equal(batch03.filter(l=>l.topicId==='english-literature.christmas-carol').length,5);assert.equal(topics.length,6);
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
test('Batch 5 contains ten original-summary Inspector lessons with stable unique items',async()=>{
 const {batch05}=await import('../dist/literature/content-batch05.js');assert.equal(batch05.length,10);assert.deepEqual(batch05.map(l=>l.id),Array.from({length:10},(_,i)=>`lit.inspector.lesson-${String(i+2).padStart(2,'0')}`));for(const l of batch05){assert.equal(l.rights,'protected_summary_only');assert.equal(l.refs[0],'3.2.1');assert(l.views[0].originalSummary);assert(!viewHTML(l.views[0]).includes('<blockquote'));assert(l.tasks[0][4]);assert.equal(new Set([...l.practice,...l.check].map(q=>q.prompt)).size,7);for(const q of [...l.practice,...l.check])assert(q.concept.startsWith('lit.inspector.'));}
});
test('Batch 6 adds seven public-domain anthology units and completes original Inspector core',async()=>{
 const {batch06}=await import('../dist/literature/content-batch06.js');assert.equal(batch06.length,10);const poems=batch06.filter(l=>l.topicId==='english-literature.power-conflict');assert.equal(poems.length,7);assert.equal(lessons.filter(l=>l.topicId==='english-literature.inspector-calls').length,14);assert.equal(topics.find(t=>t.id===poems[0].topicId).unit,'8702-poetry');
 for(const l of poems){assert.equal(l.refs[0],'3.2.2');assert.equal(l.rights,'public_domain');assert(l.readingURL.includes('#page='));assert(l.textTitle);assert(l.author!=='William Shakespeare');assert.equal(l.views[1].label,'Voice & perspective');for(const q of [...l.practice,...l.check])assert(q.concept.startsWith('lit.power-conflict.'));}
 const w=batch06.find(l=>l.independentWriting);assert.equal(w.independentTaskType,'whole-text');assert.equal(w.independentExtract,'');assert(w.independentPrompt.includes('whole'));for(const l of batch06){assert(l.tasks[0][4]);assert.equal(new Set([...l.practice,...l.check].map(q=>q.prompt)).size,7);}
});
test('All forty-five earlier lesson records remain unchanged',async()=>{
 const {createHash}=await import('node:crypto');const sorted=v=>Array.isArray(v)?v.map(sorted):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sorted(v[k])])):v;assert.equal(createHash('sha256').update(JSON.stringify(sorted(lessons.slice(0,45)))).digest('hex'),'4c2964bae4d0db39581fb07183db087b9a2a8fd95d13a7faa4efeb9186e25e04');
});
test('Batch 7 follows the next ten anthology IDs with clear protected-poem handling',async()=>{
 const {batch07}=await import('../dist/literature/content-batch07.js');assert.deepEqual(batch07.map(l=>l.id.split('.').pop()),['poem-04-2','poem-05-1','poem-05-2','poem-06-1','poem-06-2','poem-07-1','poem-07-2','poem-08-1','poem-08-2','poem-09-1']);assert.equal(lessons.filter(l=>l.topicId==='english-literature.power-conflict').length,36);assert.equal(batch07.filter(l=>l.rights==='protected_summary_only').length,5);
 for(const l of batch07){assert.equal(l.refs[0],'3.2.2');assert.equal(l.textType,'poem');assert(l.readingURL.includes('#page='));assert(l.tasks[0][4]);assert.equal(new Set([...l.practice,...l.check].map(q=>q.prompt)).size,7);for(const q of [...l.practice,...l.check])assert(q.concept.startsWith('lit.power-conflict.'));if(l.rights==='protected_summary_only'){assert(l.views[0].originalSummary);assert.equal(l.views[0].label,'Poem lenses');const html=viewHTML(l.views[0]);assert(html.includes('NOT A POEM QUOTATION'));assert(!html.includes('NOT A PLAY'));assert(!html.includes('<blockquote'));assert(html.includes('poetic feature'));}}
});
test('All fifty-five earlier lesson records remain unchanged in batch 7',async()=>{
 const {createHash}=await import('node:crypto');const sorted=v=>Array.isArray(v)?v.map(sorted):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sorted(v[k])])):v;assert.equal(createHash('sha256').update(JSON.stringify(sorted(lessons.slice(0,55)))).digest('hex'),'7884ea865d1085265ae32431be1cb1a209eef3da3783f11120dd72c93eca621e');
});

test('Batch 8 adds the next ten protected-poem units with stable scoped questions and qualified methods',async()=>{
 const {batch08}=await import('../dist/literature/content-batch08.js');
 assert.deepEqual(batch08.map(l=>l.id.split('.').pop()),['poem-09-2','poem-10-1','poem-10-2','poem-11-1','poem-11-2','poem-12-1','poem-12-2','poem-13-1','poem-13-2','poem-14-1']);
 const poetry=lessons.filter(l=>l.topicId==='english-literature.power-conflict');assert.equal(poetry.length,36);assert.equal(poetry.filter(l=>/poem-\d\d-1$/.test(l.id)).length,15);
 for(const l of batch08){assert.equal(l.rights,'protected_summary_only');assert.equal(l.textType,'poem');assert.deepEqual(l.refs,['3.2.2','3.3']);assert.equal(l.cards.length,3);assert(l.cards.every(c=>c[1].length>190));assert.equal(l.views.length,3);assert.equal(l.views[0].words.length,3);assert.equal(l.views[2].events.length,4);assert(l.views[0].originalSummary);const html=viewHTML(l.views[0]);assert(html.includes('NOT A POEM QUOTATION'));assert(!html.includes('<blockquote'));assert(!html.includes('NOT A PLAY'));assert.equal(l.tasks[0][1].length,3);assert(l.tasks[0][4].length>40);assert(l.readingURL.includes('#page='));assert.equal(new Set([...l.practice,...l.check].map(q=>q.prompt)).size,7);assert.equal(new Set([...l.practice,...l.check].map(q=>q.answer)).size,3);for(const q of [...l.practice,...l.check]){assert(q.concept.startsWith('lit.power-conflict.'));assert.equal(new Set(q.options).size,3);assert(q.why.length>35);}assert(l.rubric.every(c=>c.length>45));}
 const by=s=>batch08.find(l=>l.id.endsWith(s));assert(by('poem-10-1').cards.some(c=>c[1].includes('not explicitly confirmed')));assert(by('poem-12-1').sources.includes('https://www.imtiazdharker.com/gcse'));assert(by('poem-14-1').cards.some(c=>c[1].includes('Caribbean Creole')));assert(by('poem-13-2').cards.some(c=>c[1].includes('eight, eight and nine')));
});
test('All sixty-five earlier lesson records remain unchanged in batch 8',async()=>{
 const {createHash}=await import('node:crypto');const sorted=v=>Array.isArray(v)?v.map(sorted):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sorted(v[k])])):v;assert.equal(createHash('sha256').update(JSON.stringify(sorted(lessons.slice(0,65)))).digest('hex'),'d9817d5b47f330968d8854c1b0402eb14b9068dee3bbac8c5a0d3e4a1ffe13b1');
});

test('Batch 9 follows twenty stable roadmap units across anthology, unseen and writing skills',async()=>{
 const {batch09}=await import('../dist/literature/content-batch09.js');assert.equal(batch09.length,20);
 assert.deepEqual(batch09.slice(0,3).map(l=>l.id),['lit.power-conflict.poem-14-2','lit.power-conflict.poem-15-1','lit.power-conflict.poem-15-2']);
 assert.deepEqual(batch09.slice(3,9).map(l=>l.id),Array.from({length:6},(_,i)=>`lit.power-conflict.comparison-${String(i+1).padStart(2,'0')}`));
 assert.deepEqual(batch09.slice(9,15).map(l=>l.id),Array.from({length:6},(_,i)=>`lit.unseen.lesson-${String(i+1).padStart(2,'0')}`));
 assert.deepEqual(batch09.slice(15).map(l=>l.id),Array.from({length:5},(_,i)=>`lit.skills.lesson-${String(i+1).padStart(2,'0')}`));
 for(const l of batch09){assert(l.sourceNote);assert.equal(l.cards.length,3);assert(l.cards.every(c=>c[1].length>170));assert.equal(l.views[0].words.length,3);assert.equal(l.views[2].events.length,4);assert(l.tasks[0][4].length>45);assert(l.rubric.every(x=>x.length>45));assert.equal(new Set([...l.practice,...l.check].map(q=>q.prompt)).size,7);for(const q of [...l.practice,...l.check])assert(q.concept.startsWith(l.id.split('.').slice(0,2).join('.')+'.'));}
 assert.equal(lessons.filter(l=>l.topicId==='english-literature.power-conflict').length,36);assert.equal(lessons.filter(l=>l.topicId==='english-literature.unseen').length,6);assert.equal(lessons.filter(l=>l.topicId==='english-literature.reading-writing').length,5);
});
test('Unfamiliar poetry includes complete attributed public-domain texts, correct editions and fresh independent stimuli',async()=>{
 const {readings,wholeReading}=await import('../dist/literature/reading-texts09.js');const lengths={adlestrop:16,uphill:16,thrush:32,rains:13,barter:18,remember:14,glass:12,hope:12,sympathy:21};for(const[k,n]of Object.entries(lengths)){assert.equal(readings[k].text.split('\n').filter(x=>x.trim()).length,n,k);assert(readings[k].url.startsWith('https://'));assert(readings[k].author);assert(readings[k].note.includes('public-domain'));}
 assert(readings.hope.note.includes('early edited'));assert(readings.hope.note.includes('1891'));assert(readings.barter.note.includes('ecstacy'));
 const unseen=lessons.filter(l=>l.topicId==='english-literature.unseen');for(const l of unseen){assert(l.views[0].fullText);assert(!l.views[0].originalSummary);assert(viewHTML(l.views[0]).includes('lit-complete-poem'));assert.equal(l.refs[0],'3.2.3');assert(l.sourceNote.includes('unfamiliar-reading'));}
 const a=unseen[3],b=unseen[5];assert(a.independentExtract.includes(readings.barter.text));assert(!a.views[0].content.includes(readings.barter.text));assert(b.independentExtract.includes(readings.hope.text));assert(b.independentExtract.includes(readings.sympathy.text));assert(!b.views[0].content.includes(readings.sympathy.text));assert(b.independentIntro.includes('not enforced'));assert(wholeReading('remember','glass').includes('Thomas Hardy'));
});
test('All seventy-five earlier lesson records remain unchanged in batch 9',async()=>{
 const {createHash}=await import('node:crypto');const sorted=v=>Array.isArray(v)?v.map(sorted):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sorted(v[k])])):v;assert.equal(createHash('sha256').update(JSON.stringify(sorted(lessons.slice(0,75)))).digest('hex'),'d5a03a6fda631b045776894e4dd2b2f586915c389e92655913a2b273cbc1c06f');
});
