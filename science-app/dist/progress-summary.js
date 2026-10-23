import {eligible, isCorrect, updateCompletion} from './progress.js?v=20261023-physicscomplete01';
import {lessonDone, topLevel} from './maths/mastery.js?v=20261023-maths-r9';
import {mark} from './maths/answers.js?v=20261023-maths-r9';
const rate = ({correct,total}) => total ? Math.round(correct / total * 100) : null;
const zero = () => ({correct:0,total:0});
function add(a,b){a.correct+=b.correct;a.total+=b.total;}
export function summarise(rows, topics, now=Date.now()) {
  const practice=zero(),check=zero(),gaps=new Map(),due=new Map();
  const stages=[0,0,0,0];let completed=0,started=0;
  for(const r of rows){r.stages.forEach((yes,i)=>{if(yes)stages[i]++;});if(r.stages.every(Boolean))completed++;else if(r.started)started++;add(practice,r.practice);add(check,r.check);for(const g of r.gaps)if(!gaps.has(g.id))gaps.set(g.id,{...g,lessonId:r.id,topicId:r.topicId});for(const g of r.due)if(!due.has(g.id))due.set(g.id,{...g,lessonId:r.id,topicId:r.topicId});}
  return {total:rows.length,completed,remaining:rows.length-completed,inProgress:started,notStarted:rows.length-completed-started,percent:rows.length?Math.round(completed/rows.length*100):0,stages,practice:{...practice,percent:rate(practice)},check:{...check,percent:rate(check)},gaps:[...gaps.values()],due:[...due.values()],topics:topics.map(t=>{const list=rows.filter(r=>r.topicId===t.id);return {...t,lessons:list,total:list.length,completed:list.filter(r=>r.stages.every(Boolean)).length,gaps:new Set(list.flatMap(r=>r.gaps.map(g=>g.id))).size,due:new Set(list.flatMap(r=>r.due.map(g=>g.id))).size};}).filter(t=>t.total),now};
}
export function scienceSummary(lessons,topics,state,names={},now=Date.now()) {
 const allowed=eligible(lessons,state.route,state.tier), filter=qs=>qs.filter(q=>!q.higher||state.tier==='Higher');
 const rows=allowed.map(l=>{const saved=state.lessons[l.id]||{},p={learnSeen:[],widget:{},widgetDone:false,practice:{},checks:{},...saved};const practice=filter(l.practice),checks=filter(l.check),learn=l.learn.filter(c=>!c.higher||state.tier==='Higher');
  // Completion is derived on a copy; opening progress never grants completion or a review date.
  const copy={...p};updateCompletion(copy,{...l,learn,learnerTier:state.tier},practice,checks,now);
  const a=zero(),b=zero();for(const q of practice){const answer=p.practice[q.id];if(answer){a.total++;if(isCorrect(q,answer.first??answer.choice))a.correct++;}}for(const q of checks)if(p.checks[q.id]!==undefined){b.total++;if(isCorrect(q,p.checks[q.id]))b.correct++;}
  const ids=[...new Set([...practice,...checks].map(q=>q.concept))],gaps=[],due=[];
  for(const id of ids){const c=state.concepts[id];if(!c)continue;const g={id,label:names[id]||id};if(c.needsReview)gaps.push(g);if(c.needsReview||(Number.isFinite(c.due)&&c.due<=now))due.push(g);}
  return {id:l.id,title:l.title,topicId:l.topicId,stages:[learn.every((_,i)=>p.learnSeen.includes(i)),!!copy.widgetDone,practice.every(q=>p.practice[q.id]?.correct),checks.length>0&&b.total===checks.length&&b.correct/checks.length>=.8],started:!!(p.learnSeen.length||p.widgetDone||Object.keys(p.practice).length||Object.keys(p.checks).length||Object.keys(p.widget).length),practice:a,check:b,gaps,due};
 });
 return {...summarise(rows,topics,now),subject:'Science',scope:`AQA ${state.route==='separate'?'Separate sciences':'Combined Science: Trilogy'} · ${state.tier}`,practiceLabel:'Practice first tries',scopeNote:'Lessons in your selected Science course and tier.'};
}
export function mathsSummary(lessons,topics,state,now=Date.now()) {
 const allowed=lessons.filter(l=>state.tier==='Higher'||!l.higherOnly);
 const rows=allowed.map(l=>{const raw=state.lessons[l.id]||{},p={seen:[],widgetDone:false,mixed:{done:false},practice:{},best:0,...raw};const skills=l.skills.filter(sk=>state.tier==='Higher'||!sk.higherOnly),d=lessonDone(p,l,state.tier,state),a=zero(),b=zero(),gaps=[],due=[];
  for(const sk of skills){const k=state.skills[sk.id];if(!k)continue;for(const e of k.log||[])if(e.l<=topLevel(sk,state.tier)&&!e.a){a.total++;if(e.c)a.correct++;}const g={id:sk.id,label:sk.name};if(k.needsReview||(k.log||[]).filter(e=>e.l<=topLevel(sk,state.tier)).at(-1)?.c===false)gaps.push(g);if(k.needsReview||(Number.isFinite(k.due)&&k.due<=now))due.push(g);}
  const c=p.check;for(const it of c?.items||[]){const sk=skills.find(sk=>sk.id===it.skill);if(sk&&it.level<=topLevel(sk,state.tier)&&c.answers[it.id]!==undefined){b.total++;if(mark(it.answer,c.answers[it.id]).status==='correct')b.correct++;}}
  return {id:l.id,title:l.title,topicId:l.topicId,stages:[d.discover,d.investigate,d.practise,d.check],started:!!(p.seen.length||p.widgetDone||p.practice.item||p.history?.length||skills.some(sk=>state.skills[sk.id]?.log?.length)),practice:a,check:b,gaps,due};
 });
 return {...summarise(rows,topics,now),subject:'Maths',scope:`Edexcel GCSE Mathematics · ${state.tier}`,practiceLabel:'Recent unassisted practice',scopeNote:'Built Maths lessons for your tier. Practice uses the retained attempts at eligible levels (up to 60 per skill).'};
}
