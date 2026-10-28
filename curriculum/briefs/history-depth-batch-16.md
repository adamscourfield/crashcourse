# History batch 16: the Cold War leaders' attitudes and the first 8 exam-skill lessons

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Specification: Issue 6 PDF (checked). Plan: `curriculum/history-remaining-plan.md`.

## Lessons

| Lesson | Ref | What it teaches | Practice question (not marked) |
|---|---|---|---|
| The attitudes of Stalin, Truman and Churchill | P4 1.1 | Stalin's security aims; Truman's firmness; Churchill, the percentages deal and the Fulton speech; mutual suspicion | Two consequences (8) |
| Paper 1: explain one similarity or difference (4) | 11 skills | Question, marking, four-step plan, mistakes | 4-mark question |
| Paper 1: explain why (12) | 11 skills | Point–evidence–explain; own knowledge beyond the stimulus | 12-mark question |
| Paper 1: how far do you agree (16) | 11 skills | Agree, challenge, weigh, judge; SPaG | 16-mark question |
| Western Front: describe two features (4) | 11 HE skills | Feature plus detail, twice | 4-mark question |
| Western Front: source utility (8) and follow-up (4) | 11 HE skills | Content, provenance, context; the four follow-up steps | 8 + 4 |
| Cold War: explain two consequences (8) | P4 skills | Consequence, link, evidence; two distinct points | 8-mark question |
| Cold War: narrative account (8) | P4 skills | Sequence and connections; staying within the dates | 8-mark question |
| Cold War: explain the importance (8) | P4 skills | Difference made, short and long term, tied to the focus | 2 × 8 |

History has 201 lessons. Seven are left: two B4 skill lessons and five Paper 3 skill lessons.

## Sources for the skill lessons

- **Question types and what each targets:** taken from the Issue 6 specification's assessment information (pages 50–52 of the PDF the user supplied), including the requirement to add points beyond the stimulus.
- **Durations and totals:** also from the specification: Paper 1 is 1 hour 20 minutes for 52 marks; Paper 2 is 1 hour 50 minutes for 64.
- **Per-question marks and level bands:** the specification gives section totals only. The 4/8/12/16 split and the descriptions of levels follow Pearson's published sample assessments and mark schemes as I know them. **They have not been checked against the current mark schemes in this session, and a teacher should confirm them.** The lessons describe levels qualitatively and do not reproduce mark-scheme wording.
- **Timing advice** ("about a minute and a half per mark") is labelled as a common guide, not an official rule.

## Records

- Five requirement rows were added to `curriculum/history-requirements.csv` for the skill refs (`11 skills`, `11 HE skills`, `P4 skills`, `B4 skills`, `31 skills`). The B4 and Paper 3 rows are `planned` until their lessons are built.
- The planned B4 judgement lesson was retitled. Its old title claimed it included "an interpretation", but interpretations are assessed only in Paper 3.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 201 lessons. 69 questions and 49 task options were rewritten after the length checks (11 of 136 skill items remain strong length tells). |
| Interaction | The History flow walked the 9 new lessons through every stage, plus the whole-app checks: 165 checks pass. 789 automated tests pass. |
| Accuracy | `leaders-attitudes` was checked against standard accounts. The skill lessons are subject to the mark-scheme caveat above. |

## Not done

Not published; no specialist review; written answers are not marked. The skill lessons practise recognising strong answers through selected-response tasks; they do not mark extended writing.
