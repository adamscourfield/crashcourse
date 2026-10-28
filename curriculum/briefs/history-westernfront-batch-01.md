# History batch 11: The British sector of the Western Front, 1914–18 (11 HE1–HE5). Paper 1 is complete

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Lessons

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| Battles, trenches and terrain | 11 HE1 | Ypres, the Somme, Arras, Cambrai; the trench system; clay and chalk; transport and communications | Describe two features… (4) |
| Illness and injury | 11 HE2 | Trench foot, trench fever, shell shock; shrapnel, bullets, gas gangrene; head injuries and the Brodie helmet; chlorine, phosgene, mustard gas | Describe two features… (4) |
| The RAMC, the FANY and evacuation | 11 HE3 | RAMC and FANY roles; Regimental Aid Post, Dressing Stations, CCS and triage, base hospitals; the underground hospital at Arras | Describe two features… (4) |
| Surgery and medicine | 11 HE4 | Context of asepsis, X-rays and blood groups; debridement and Carrel-Dakin; the Thomas splint; mobile X-rays; sodium citrate and Robertson's blood depot at Cambrai | Describe two features… (4) |
| Using sources | 11 HE5 | National and local sources; usefulness through content and provenance (NOP); planning a follow-up enquiry; using contextual knowledge | How useful… (8) |

All 38 rows in `curriculum/history-requirements.csv` are now marked built: B4, P4 and Option 11, which together cover Papers 1 and 2. History has 46 lessons.

## Gaps that matter

- **The real exam's source questions use printed sources.** The app describes source types and asks students to judge them; it does not reproduce real sources. Paper 1 Q2(a) and Q2(b) practice is therefore partial.
- **The FANY wording** and other paraphrased specification text still need re-checking against the Issue 6 PDF.
- **Figures** such as the Thomas splint death rates (about 80% down to about 20%) and Somme first-day casualties are the commonly cited ones and are marked as such where they appear.
- **Paper 3 has not been started;** the option has not been chosen.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 46 lessons. 31 distractors and 1 short explanation were rewritten after the length checks. |
| Interaction | The History flow runs all 46 lessons through every stage: 757 checks pass. |
| Regression | 774 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
