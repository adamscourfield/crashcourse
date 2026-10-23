# Maths Statistics batch 01: S1–S6

Date: 23 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This batch opens the sixth and last Maths topic, Statistics (`maths.statistics`). There are three lessons at both tiers and one Higher-only lesson (histograms, cumulative frequency and box plots). Every statement S1–S6 has teaching and practice; see `curriculum/maths-statistics-requirements.csv`. That statement list is paraphrased and was not re-fetched from Pearson in this batch, so re-check its wording at review.

With this batch every 1MA1 content area (N, A, R, G, P, S) has lessons.

## Lessons

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.statistics.averages | Averages and range | S4, S5 | averages (3: from a list, working back from the mean, which average / effect of a change), frequency-averages (3: mean from a table, median and mode from a table, estimated mean from grouped data) | Make one value extreme and watch the mean move while the median stays; a missing value from the mean; mean from a frequency table |
| maths.statistics.charts-sampling | Charts, samples and comparing data | S2, S1, S4, S5 | charts (3: read a bar chart, pie chart angles, pie chart back to frequencies), sampling (3: biased sample, estimate from a sample, compare two distributions) | Build a pie chart (degrees per person, then a sector); compare two classes by median and range |
| maths.statistics.scatter | Scatter graphs and correlation | S6 | scatter (3: type of correlation, predict with a line of best fit, outliers / causation / extrapolation) | Choose the best of three lines; estimate from it; decide whether to extrapolate |
| maths.statistics.cumulative (Higher only) | Histograms, cumulative frequency and box plots | S3, S4 | cumulative (H3: frequency density and histograms, median and IQR from cumulative frequency, box plots and comparing) | Frequency density; read the median from a cumulative frequency curve; IQR from quartiles |

The engine now has 160 skills. The averages lesson allows a calculator; the others are non-calculator.

## Answers and figures

- **New figures, drawn by `geomfig.js` and `graphSVG`:** frequency tables, bar charts, pie charts, scatter graphs (with and without a line of best fit), histograms, cumulative frequency curves and box plots.
- **Scatter data is regenerated** until the drawn correlation is clear (|r| > 0.85) or clearly absent (|r| < 0.3), so the "type of correlation" answer is never borderline.
- **Screenshot review found two drawing faults, both fixed:**
  - bar charts named their bars in a colour-coded legend that reused colours (with four bars, two shared a colour), so the bars could not be told apart. Category names are now written under each bar (a new `xcats` option in `graph.js`), and the test checks each name is drawn once under its own bar;
  - in frequency tables the word "Frequency" spilled out of its cell. The first column is now sized to its longest label.
- **Box plots are labelled with their five values**, so the box-plot median item is a recognition check (which line is the median), not a scale reading.
- **Readings from graphs** (median from a cumulative frequency curve, estimates from a line of best fit) accept a tolerance, as mark schemes do.

## Misconceptions targeted

**Averages**
- Giving the mean as the missing value.
- Dividing Σfx by the number of rows instead of Σf.
- Taking the median of the frequencies instead of the data; giving the highest frequency as the mode.
- Using upper class boundaries instead of midpoints.
- Confusing mean and median, and range with the largest value.

**Charts and sampling**
- Pie charts out of 100 instead of 360.
- Giving the frequency when the angle is asked, and the reverse.
- A larger range read as more consistent.
- Convenience samples treated as fair.

**Scatter graphs**
- Lines through the first and last points (too steep).
- Giving the x-value as the estimate.
- Trusting extrapolation; correlation read as causation.

**Higher: histograms and cumulative frequency**
- Plotting frequency instead of frequency density.
- Reading the wrong axis of a cumulative frequency graph.
- Range given for the IQR.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-statistics.test.js` has 7 tests.<br>• **Generation:** all 6 skills, 200 items per level: deterministic, JSON-safe, self-marking. Traps are wrong and explained. Charts render without NaN.<br>• **Independent re-solves:**<br>&nbsp;&nbsp;– averages from the printed lists and the drawn tables;<br>&nbsp;&nbsp;– chart frequencies from the drawn bar heights and pie angles;<br>&nbsp;&nbsp;– estimates from the printed sample;<br>&nbsp;&nbsp;– correlation from the drawn points and estimates from the drawn line;<br>&nbsp;&nbsp;– histogram, cumulative frequency and box plot answers from the drawn bars, curve and box.<br>• **Records:** S1–S6 references, tiers, calculator flags and models; stale callbacks cannot write to a previous view. |
| Interaction | `science-app/tools/maths-browser-flow-15.mjs`, 55 checks pass:<br>• course map lists all six topics;<br>• Foundation shows 3 lessons and hides the Higher-only lesson;<br>• card visuals;<br>• all four investigations with their wrong paths;<br>• reload keeps a typed answer;<br>• charts practice draws its chart;<br>• the scatter lesson practised to mastery and checked at 10/10;<br>• Higher shows the cumulative lesson and its practice is answered from the chart;<br>• 390px: 12 screens with no overflow;<br>• no console errors. |
| Regression | 650 automated tests pass after merging the Probability publication (649 before). All fifteen Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 70, 46, 77, 72, 67, 59 and 55 checks, 1021 in total. Flows 1, 13, 14 and 15 re-run after the merge and pass. Flow 14 now expects Statistics on the course map. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Known limitations

- **Not marked on screen:** constructing charts, histograms, cumulative frequency graphs, box plots and freehand lines of best fit (the investigation offers three lines to choose from).
- **Thin practice:** pictograms, vertical line charts and time-series graphs (S2) are taught in the cards but not generated as practice items.
- **Written comparisons** of distributions and sampling judgements are chosen from options, not written.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261023-maths-r12`. **Publishing needs a global version bump.**

## Next

Specialist review across all six topics; fill the S2 practice gap (pictograms, line charts, time series); publish Statistics.
