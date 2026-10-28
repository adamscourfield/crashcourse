const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function feedbackHTML(record){
 if(!record?.feedback)return '';const f=record.feedback;
 return `<div class="ai-review"><p class="eyebrow">AI PRACTICE FEEDBACK · ${esc(new Date(record.at).toLocaleString())}</p><p>${esc(f.summary)}</p><h4>What’s working</h4><ul>${f.strengths.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="ai-criteria">${f.criteria.map(c=>`<article><b>${esc(c.label)}</b><span class="ai-status">${esc({secure:'Secure in this paragraph',developing:'Developing',not_yet:'Not yet shown'}[c.status]||'Review')}</span>${c.evidence?`<blockquote>${esc(c.evidence)}</blockquote>`:''}<p>${esc(c.feedback)}</p></article>`).join('')}</div><h4>Your next edit</h4><p>${esc(f.next_step)}</p><p>${esc(f.reflection_question)}</p><details><summary>Paragraph reviewed</summary><p class="ai-reviewed-text">${esc(record.paragraph)}</p></details><p class="micro-note">AI feedback can miss things. Check quotations against your assigned text and discuss judgments with your teacher. This does not change your knowledge score.</p></div>`;
}
export function mountAIFeedback({root,lessonId,area,state,save,kind='guided',fetcher=fetch}){
 if(!root)return;
 root.innerHTML=`<section class="ai-feedback"><h3>Paragraph feedback</h3><p class="micro-note">Select a paragraph, or review your current draft. Your writing, question and review criteria will be sent to OpenAI.</p><button class="secondary" data-ai-review disabled>Get AI feedback</button><p role="status" aria-live="polite" data-ai-status>Checking feedback availability…</p><div data-ai-result></div></section>`;
 const button=root.querySelector('[data-ai-review]'),status=root.querySelector('[data-ai-status]'),result=root.querySelector('[data-ai-result]');
 if(!button||!status||!result)return;
 const previous=(state.aiReviews||[]).filter(r=>r.kind===kind).at(-1);result.innerHTML=feedbackHTML(previous);
 const active=()=>root.isConnected;
 fetcher('/api/marking/status',{credentials:'same-origin',cache:'no-store'}).then(async r=>{if(!r.ok)throw Error();const data=await r.json();if(!active())return;button.disabled=!data.available;status.textContent=data.available?'Practice feedback, not an official mark or GCSE grade.':'AI feedback isn’t connected yet. You can keep writing and saving drafts.';}).catch(()=>{if(active())status.textContent='AI feedback isn’t connected yet. You can keep writing and saving drafts.';});
 button.onclick=async()=>{
  const start=area.selectionStart||0,end=area.selectionEnd||0;const paragraph=(end>start?area.value.slice(start,end):area.value).trim();
  if(paragraph.length<60||paragraph.length>6000){status.textContent='Choose a paragraph between 60 and 6,000 characters.';return;}
  button.disabled=true;status.textContent='Reading your paragraph…';const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),35000);
  try{const r=await fetcher('/api/marking',{method:'POST',credentials:'same-origin',headers:{'content-type':'application/json'},signal:controller.signal,body:JSON.stringify({lessonId,paragraph,kind})});const data=await r.json();if(!r.ok)throw Error(data.error||'Feedback could not be completed. Your draft is safe.');
   if(!data.feedback||!Array.isArray(data.feedback.criteria)||!Array.isArray(data.feedback.strengths))throw Error('The review could not be read. Your draft is safe.');
   const record={paragraph,feedback:data.feedback,at:data.at||Date.now(),model:data.model,kind};state.aiReviews=[...(state.aiReviews||[]),record].slice(-3);const ok=save();if(active()){result.innerHTML=feedbackHTML(record);status.textContent=ok?'Feedback saved with this lesson.':'Feedback received but could not be saved on this device.';}
  }catch(error){if(active())status.textContent=error.name==='AbortError'?'The review took too long. Your draft is safe; try again.':error.message;}finally{clearTimeout(timer);if(active())button.disabled=false;}
 };
}
