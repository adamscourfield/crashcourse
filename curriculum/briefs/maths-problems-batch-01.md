# Maths Problem solving batch 01: four exam-style problem lessons (AO2, AO3)

Date: 23 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Why

Every 1MA1 content statement now has lessons, but those lessons practise one skill at a time. Exam questions rarely do that. A large share of the marks (assessment objectives AO2, reasoning, and AO3, solving problems) goes to multi-step problems that join content areas and are set in context.

This batch adds a seventh Maths topic, **Problem solving** (`maths.problems`). It is not a content area of its own: each lesson lists the statements its problems draw on, and `curriculum/maths-problems-coverage.csv` maps it to AO2/AO3.

## Lessons

| Lesson | Draws on | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|
| Problems with area, volume and cost | G16, G17, N13, R11, G19 | area-cost (paint a wall minus a door → whole tins → cost; tile an L-shaped floor with cm tiles in boxes; gravel a path round a pond), volume-time (fill a tank at a rate; full glasses from a cylinder; H similar containers) | paint planner |
| Money problems: ratio, percentages and interest | R5, R9, R16, N13, N12 | money-ratio (share then spend a % of the share; % off against buy-3-pay-for-2; price before VAT), money-percent (overtime; simple against compound interest; H years until a depreciating value falls below a target) | share planner |
| Problems solved with equations | A17, A21, A19, A18, G3, G16 | form-solve (triangle angles as expressions → largest angle; rectangle sides from a perimeter → area; quadrilateral angles → smallest), word-equations (ages; tickets by simultaneous equations; H rectangle area as a quadratic → perimeter) | angle planner |
| Problems with averages and probability | S4, P3, P8, P2, R5 | mean-problems (combined mean of two groups; someone joins; a missing frequency from the mean), probability-problems (expected profit of a game; counters from a probability and a ratio; expected number from two events) | game planner |

All four lessons are for both tiers and allow a calculator. Three levels are Higher only. The engine has 172 skills.

## Design

- **One final answer, stage traps.** Each item has one answer. Its traps are the values a student reaches by stopping part-way (the area instead of the cost, x instead of the angle asked for, the share before spending) or by one wrong step (rounding down tins, × 0.8 to reverse VAT, the mean of two means). The feedback names that stage. So the feedback works like a method mark without marking the working.
- **Rounding in context.** Buying enough (tins, boxes, bags) rounds up. Counting complete things (full glasses) rounds down. Both appear, and the wrong direction is a trap.
- **Planner investigations.** Each lesson works one problem in three parts:
  - Part A, the plan: what to find first. Each wrong plan is explained.
  - Part B, the first stage.
  - Part C, the finish.
  
  Every wrong value in B and C has its own stage feedback.
- **Diagrams** (wall and door, L-shaped floor, pond and path, tank, a triangle and a rectangle with algebraic labels) are drawn from the question's numbers.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-problems.test.js` has 7 tests.<br>• **Generation:** all 8 skills, 200 items per level: deterministic, JSON-safe, self-marking. Every item has at least one stage trap and at least two steps. Every trap is wrong and explained. Exactly three levels are Higher.<br>• **Independent re-solves:**<br>&nbsp;&nbsp;– from the drawn dimensions: wall, door, L-shape, pond and path, tank;<br>&nbsp;&nbsp;– from the printed rates and prices;<br>&nbsp;&nbsp;– equations formed here from the algebraic labels on the diagrams and solved;<br>&nbsp;&nbsp;– simultaneous and quadratic problems solved here;<br>&nbsp;&nbsp;– means through totals, expected frequency and two-branch probability.<br>• **Planner investigations:** the right plan is unique, every wrong value differs from the answer, and the arithmetic is rechecked.<br>• **Records:** topic on the course map, prerequisites, tiers, calculator flags. |
| Interaction | `science-app/tools/maths-browser-flow-17.mjs`, 57 checks pass:<br>• the course map links Problem solving; 4 lessons at Foundation; 12 card visuals;<br>• all four planners, each with a wrong plan and wrong stage values explained;<br>• resume of the stage and a typed answer after a reload;<br>• a stopped-early answer in practice gets stage feedback;<br>• the averages and probability lesson practised to mastery and checked at 10/10;<br>• the Foundation money check has no Higher depreciation item; the Higher equations check has the quadratic problem, answered correctly after a resume;<br>• 390px: 12 screens with no overflow; no console errors. |
| Regression | 669 automated tests pass (671 after merging the latest release, with flows 1, 15, 16 and 17 re-run and passing). All seventeen Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 70, 46, 78, 72, 67, 59, 60, 46 and 57 checks, 1130 in total. Flow 15 now allows the seventh topic on the course map. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

Screenshot review fixed two things:
- the rectangle's width label overlapped its edge, and the door-width label sat on the wall's top edge; both labels were moved;
- the planner's confirmation showed "£40.5"; it now shows "£40.50".

## Known limitations

- **Only final answers are marked.** The stage feedback recognises common partial answers, but written method is not marked, so a student cannot earn method marks here.
- **No "show that" or proof questions** in this batch; AO2 reasoning is practised through interpreting each stage.
- **Contexts are invented.** Item difficulty against real papers has not been calibrated.
- **Not reviewed** by a maths teacher.

## Cache

Maths modules are at `20261023-maths-r15`. **Publishing needs a global version bump.**

## Next

More problem lessons, if wanted: geometry with trigonometry and Pythagoras in context, graphs and rates in context, and reasoning items (which statement is true and why).
