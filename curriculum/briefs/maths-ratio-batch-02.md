# Maths Ratio batch 02: proportion equations and graphs, scale and similarity, rates of change

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`, together with Ratio batch 01. **Not published to the Site** and **not specialist-reviewed**.

This batch completes the Ratio, proportion and rates of change topic (R1–R16). Every statement now has teaching and practice; see `curriculum/maths-ratio-requirements.csv`.

## Lessons (Ratio 6–8)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.ratio.proportion-algebra | Direct and inverse proportion: equations and graphs | R10, R13, R14 | prop-equation (2 + H2: powers and roots; write the formula), prop-graphs (3: recognise graphs, test a table, inverse tables) | Tune k so y = kx passes through (3, 12); complete an inverse table (x × y = 24); pick the inverse graph |
| maths.ratio.scale-similarity | Scale drawings, maps and similar shapes | R2, R12 | scale-maps (3: map to real, real to map, 1 : n), similar-ratio (1 + H2: areas, volumes and the reverse) | A three-leg walk on a 1 : 25 000 map; enlarge a rectangle and watch the area grow by k² |
| maths.ratio.rates | Compound units and rates of change | R1, R11, R14, R15 | unit-convert (3: km/h and m/s, density and flow, area and volume units), rates-graphs (1 + H2: average rate from a chord; average or instantaneous) | Shrink a chord towards t = 7 on d = t² + 5 and watch its gradient approach the tangent's 14 m/s; convert 72 km/h |

The engine now has 116 skills. Ratio has 8 lessons at both tiers.

## Tier decisions

- Constructing proportion formulae, and proportion to powers and roots, are Higher (R13 Higher wording).
- Area and volume scale factors are Higher (with G19).
- R15 average and instantaneous rates are Higher.

## Misconceptions targeted

**Proportion equations**
- Inverse proportion treated as direct, and the reverse.
- The power or root not applied to x.
- y = k/x and y = kx swapped in formulae.

**Proportion graphs and tables**
- An increasing line taken as direct proportion when it does not pass through the origin.
- Inverse tables treated additively.

**Maps and similar shapes**
- Map distances left in metres or centimetres.
- Mixing up 10 000 and 100 000 cm per km.
- Similar shapes enlarged by adding.
- Length factors used for areas.
- Square instead of cube for volumes.
- Volume factors used for lengths.

**Units and rates**
- 60 used for an hour.
- × 1000 against ÷ 1000 for density.
- Area units scaled by 100 instead of 10 000.
- The intercept included in a rate.
- Instantaneous and average speed confused.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-ratio.test.js` now has 9 tests.<br>• **Generation:** all 17 Ratio skills (200 items each) are deterministic, JSON-safe and self-marking; traps are wrong and explained.<br>• **New independent re-solves:**<br>&nbsp;&nbsp;– proportion answers and typed formulae, by computing k from the printed pair;<br>&nbsp;&nbsp;– proportion-graph descriptions;<br>&nbsp;&nbsp;– direct-proportion table judgements (y ÷ x constant);<br>&nbsp;&nbsp;– inverse tables (x × y);<br>&nbsp;&nbsp;– map distances;<br>&nbsp;&nbsp;– 1 : n scales;<br>&nbsp;&nbsp;– similar lengths, areas and volumes (including cube roots);<br>&nbsp;&nbsp;– every unit conversion;<br>&nbsp;&nbsp;– gradients from the drawn line;<br>&nbsp;&nbsp;– chord gradients from the drawn curve;<br>&nbsp;&nbsp;– average against instantaneous rate by numerical differentiation.<br>• **Records and models:** visual dispatch and the stale-redraw guard, covering all eight Ratio models. |
| Interaction | `science-app/tools/maths-browser-flow-10.mjs`, 46 checks pass:<br>• Ratio has 8 lessons;<br>• every card has a visual;<br>• all three investigations, including 8 wrong paths;<br>• reload keeps a part-filled table;<br>• Foundation proportion practice stays at levels 1–2, reaches mastery and checks at 10/10;<br>• Higher rungs;<br>• a Higher formula typed as "y = …" is accepted;<br>• 390px: 9 screens with no overflow;<br>• no console errors.<br>Flow 9 now reads the Ratio lesson count from the page. |
| Regression | 518 automated tests pass. All ten Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 70 and 46 checks, 691 in total. Flow 9's money check now uses any 2 d.p. item, typed with three decimal places. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Known limitations

- **Not marked:**
  - measuring on printed maps and drawing scale diagrams;
  - drawn tangents (estimating a tangent gradient is practised in Algebra).
- **Typed formulae.** Formulae with √x are used in questions but are not typed as answers.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261022-maths-r7`. **Publishing needs a global version bump.**

## Next

Geometry and measures (G1–G25).
