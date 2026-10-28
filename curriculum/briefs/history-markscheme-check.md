# History exam-skill lessons checked against the June 2025 mark schemes

Date: 28 October 2026. Requested by the user after batch 17. Status: corrections implemented and pushed to GitHub `main`. **Not published to the Site.** Not a specialist review: this checks question formats and mark bands, not the quality of the teaching.

## What was checked

The 15 exam-skill lessons, and the practice questions on every History lesson, were compared with Pearson's June 2025 mark schemes for the user's options. These were read through copies hosted by Physics & Maths Tutor:
- Paper 1, Option 11 (Medicine and the Western Front);
- Paper 2, P4 (Cold War) and B4 (Elizabethan England);
- Paper 3, Option 31 (Weimar and Nazi Germany).

The June 2025 Paper 1 question paper was also read, along with the June 2023 and June 2024 Paper 1 mark schemes for the format change below.

## Confirmed as already correct

- Marks per question: Paper 1 Q2(a) 8, Q2(b) 4, Q3 4, Q4 12, Q5/6 16 + 4 SPaG; P4 Q1(a)/(b) 4 each, Q2 8, Q3 two parts of 8; B4 Q2 12, Q3/4 16 with no SPaG; Paper 3 Q1 4, Q2 12, Q3(a) 8, (b) 4, (c) 4, (d) 16 + 4 SPaG.
- Inference: 1 mark per inference plus 1 for support from the source, for two inferences.
- Follow-up: four separate marks for detail, question, source type, and how it would help.
- Interpretations 3(c): accepted reasons include different weight given to the sources, different perspective and different emphasis.

## Corrected

1. **Describe questions changed format in 2025.** Up to June 2024, Paper 1 Q1 (and B4 Q1) was a single "Describe two features of…" question worth 4 marks. From June 2025 it is 1(a) and 1(b): each asks you to "Describe one feature of…" a different topic, for 2 marks (1 for the feature, 1 for supporting information). This matches the Issue 6 specification's "Questions 1 (a) and (b)".
   - 27 practice questions on Western Front and Elizabethan lessons were changed to the current wording at 2 marks.
   - 21 challenge labels were changed to "Describe one feature".
   - The two describe skill lessons were rewritten and retitled ("describe one feature (2 + 2)"). They also note that older past papers use the two-feature format.
2. **The three-aspects cap was missing.**
   - Answers covering fewer than three aspects of content are capped at 8 marks on the 12-mark questions and at 11 on the 16-mark questions, with no access to Level 4.
   - On the P4 narrative they cannot reach Level 3.
   - The lessons had said only that answers using just the stimulus points are "penalised". They now state the cap.
3. **Level bands added where the lessons were vague:**
   - 12-mark questions: 1–3, 4–6, 7–9, 10–12.
   - 16-mark questions: 1–4, 5–8, 9–12, 13–16, with one mark in each level for the judgement and its criteria.
   - 8-mark questions: 1–2, 3–5, 6–8.
   - 4-mark questions: 1–2, 3–4.
   - A description with no analysis cannot rise above Level 1.
4. **Source and interpretation rules added:** contextual knowledge earns credit only when used to evaluate the sources or interpretations, and general comments about provenance earn nothing unless tied to the content.
5. **Overstated claims softened:**
   - "Only one way is credited" (Paper 1 Q3) now reads that the question asks for one way, so a second adds nothing.
   - On the narrative, judging which event mattered most is described as not rewarded rather than as a mistake. The mark scheme does not penalise it.
   - "Chronological order" is now described as a clear sequence leading to an outcome, which is the mark scheme's wording.

## Verification

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` passes for all 208 lessons. Length tells: 10 of 136 and 3 of 119 skill items remain. |
| Interaction | The History flow walked the 41 changed lessons (26 Western Front and Elizabethan lessons with describe questions, plus all 15 skill lessons) through every stage, plus the whole-app checks: 677 checks pass. 789 automated tests pass. |

## Limits

Mark schemes can change year to year. These checks reflect June 2025. Earlier briefs (batches 01–11) still describe the old "Describe two features (4)" format; they are historical records and were not rewritten. Lessons published to the Site before this change still show the old wording there until republished.
