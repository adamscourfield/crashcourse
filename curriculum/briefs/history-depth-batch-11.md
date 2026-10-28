# History depth batch 11: the Western Front historic environment (11 HE1–HE5)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Specification: Issue 6 PDF (checked). Plan: `curriculum/history-remaining-plan.md`.

## Scope change: 13 planned lessons cut to 8

The roadmap had 13 Western Front depth lessons. Five would have repeated their overviews, so they were dropped and the roadmap went from 213 to 208:
- `wf-trenches`, `wf-transport` and `wf-chain` repeat `wf-context` and `wf-evacuation`, which already give a card to the trench system, terrain, transport and each stage of the chain;
- `wf-usefulness` and `wf-follow-up` repeat `wf-sources` and the planned exam-skill lesson `skills.he-sources`.

The historic environment carries 16 of Paper 1's 52 marks. That leaves 15 lessons for it: 5 overviews, 8 depth lessons and 2 skill lessons.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Ypres, the Somme, Arras and Cambrai | 11 HE1 | What each battle meant for the wounded | Describe two features… (4) |
| Illnesses from trench conditions | 11 HE2 | Trench foot and its prevention; trench fever; shell shock | Describe two features… (4) |
| Wounds, head injuries and gas attacks | 11 HE2 | Shells and shrapnel; bullets; Brodie helmets and Gillies; gas and masks | Describe two features… (4) |
| The RAMC and nurses | 11 HE3 | RAMC growth; stretcher bearers; QAIMNS and VADs; the FANY at Pervyse | Describe two features… (4) |
| The underground hospital at Arras | 11 HE3 | The tunnels; the hospital; working underground; what it shows | Describe two features… (4) |
| Treating wounds, infection and fractures | 11 HE4 | Gas gangrene and tetanus; debridement and Carrel-Dakin; amputation; the Thomas splint | Describe two features… (4) |
| X-rays, blood transfusion and the Cambrai blood bank | 11 HE4 | Mobile X-ray units; clotting; citrate and storage; Robertson's depot | Describe two features… (4) |
| National and local sources | 11 HE5 | Types of national and local source; censorship; archives | Follow-up (4) |

History has 152 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 152 lessons. 64 questions and 4 exam-skill tasks were rewritten after the length checks (14 of 136 items remain strong length tells). |
| Overlap | Shared vocabulary with the overview is 25–39% for each new lesson, below the 50–60% recorded for the event-level Cold War and Armada lessons. |
| Interaction | The History flow walked the 8 new lessons through every stage, plus the whole-app checks: 149 checks pass. 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Figures are the commonly cited approximations: Somme first day about 57,000 and planned capacity about 10,000 a day; Arras about 24,000 sheltered and about 700 beds; trench foot about 20,000 in winter 1914–15; shell shock about 80,000; gas about 186,000; RAMC about 9,000 rising to over 110,000; limb loss over 40,000. Elsie Knocker and Mairi Chisholm's link to the FANY is as given in common GCSE accounts. Their post at Pervyse also had other affiliations; a teacher should check this. |

## Not done

Not published; no specialist review; written answers are not marked; sources are described, not printed. The 8-mark utility question is practised only through selected-response tasks, not marked writing.
