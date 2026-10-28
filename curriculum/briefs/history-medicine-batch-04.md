# History batch 10: Medicine in Britain, key topic 4 (11 4.1–4.3). The thematic study is complete

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Lessons

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| Modern ideas: genetics, lifestyle and diagnosis | 11 4.1 | Continuity of germ theory; DNA 1953 (Crick, Watson, Franklin, Wilkins); Human Genome Project; lifestyle factors; X-rays, blood tests, CT/MRI, monitors | Explain why… (12) |
| Magic bullets, the NHS and high-tech medicine | 11 4.2 | Salvarsan 606, Prontosil; Beveridge and Bevan; the NHS 1948; dialysis, transplants, keyhole surgery; limits and costs | "How far…" (16) |
| Modern prevention | 11 4.2 | Liberal reforms; mass vaccination (diphtheria, polio, MMR and the discredited 1998 study); Clean Air Act 1956; seat belts; smoking ban; lifestyle campaigns | Explain one similarity… (4) |
| Case study: penicillin | 11 4.3 (and 4.2) | Fleming 1928; Florey and Chain; Albert Alexander; US mass production; D-Day; Nobel 1945; resistance | Explain why… (12) |
| Case study: lung cancer | 11 4.3 | Smoking and other causes; diagnosis (CT, bronchoscopy, biopsy, genetic testing); treatment; government action 1965–2017 | Explain one difference… (4) |

All twelve Option 11 thematic-study rows are now marked built. History has 41 lessons. The historic environment (the Western Front, HE1–HE5) is not built.

## Accuracy notes

- The Liberal reforms go slightly beyond the paraphrased 4.2 wording ("government action"); they are included as context for prevention after 1900.
- The lung-cancer government measures are listed with dates as commonly given; teacher review should confirm the dates against a current textbook.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 41 lessons. 18 distractors and 9 short explanations were rewritten after the length checks. |
| Interaction | The History flow runs all 41 lessons through every stage: 677 checks pass. |
| Regression | 768 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
