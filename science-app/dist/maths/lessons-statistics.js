// Edexcel GCSE (9–1) Mathematics 1MA1 — Statistics (S1–S6).
//   S1 inferring from samples and their limitations · S2 tables, charts and diagrams for categorical and
//   discrete data (bar charts, pictograms, pie charts, line graphs) · S3 (Higher) histograms and
//   cumulative frequency graphs · S4 comparing distributions: averages, range, quartiles and IQR (Higher),
//   box plots (Higher) · S5 applying statistics to describe a population · S6 scatter graphs,
//   correlation and causation, lines of best fit, interpolation and extrapolation.
// All teaching text and questions are original.
import { skillById } from './skills.js?v=20261023-maths-r13';
import { tableFig, pieFig, bars, pictoFig } from './skills-statistics.js?v=20261023-maths-r13';

const S = id => skillById[id];
const geo = (fig, caption) => ({ kind: 'geo', fig, caption });
const g = (spec, caption) => ({ kind: 'g', g: spec, caption });

export const statisticsTopic = {
  id: 'maths.statistics', title: 'Statistics', short: 'Statistics', number: '06', status: 'partial',
  coverage: 'Four lessons covering S1–S6: averages and range from lists and frequency tables, including estimated means; bar charts, pictograms, vertical line charts, time-series graphs and pie charts; sampling, bias and comparing distributions; scatter graphs, correlation and lines of best fit; and (Higher) histograms, cumulative frequency and box plots.',
};

export const statisticsLessons = [
  {
    id: 'maths.statistics.averages',
    topicId: 'maths.statistics',
    title: 'Averages and range',
    refs: ['S4', 'S5'],
    minutes: 45,
    calculator: true,
    model: 'average-balancer',
    prerequisites: ['maths.number.order-of-operations'],
    big: 'The mean is the total ÷ the number of values. The median is the middle value when the data are in order. The mode is the most common value. The range (largest − smallest) measures spread. For a frequency table, the mean is Σfx ÷ Σf; for grouped data, use the midpoint of each class to estimate the mean. Choose the average that fits: the median resists extreme values, and the mode suits categories.',
    learn: [
      { title: 'Four measures.', text: 'For 3, 7, 7, 9, 14: mean = 40 ÷ 5 = 8; median = 7 (the middle of five); mode = 7; range = 14 − 3 = 11. With an even number of values, the median is halfway between the middle two.',
        example: { prompt: 'Median of 4, 9, 2, 8?', steps: ['In order: 2, 4, 8, 9', 'Halfway between 4 and 8: 6'] },
        visual: { kind: 'work', lines: ['mean = {total/how many}', 'median = middle value (in order)', 'mode = most common; range = largest − smallest'] } },
      { title: 'Frequency tables.', text: 'Goals 0, 1, 2, 3 with frequencies 4, 6, 7, 3. Σf = 20 matches; Σfx = 0 + 6 + 14 + 9 = 29 goals; mean = 29 ÷ 20 = 1.45. The median is halfway between the 10th and 11th values. Counting through: 4 zeros, then 6 ones (the 5th to the 10th), so the 10th value is 1 and the 11th is 2: median 1.5.',
        example: { prompt: 'Mode of that table?', steps: ['Highest frequency is 7', 'Mode = 2 goals'] },
        visual: geo(tableFig(['Goals', 0, 1, 2, 3], [['Frequency', 4, 6, 7, 3]], 'Frequency table of goals: 0 goals 4, 1 goal 6, 2 goals 7, 3 goals 3'), 'Σfx = 29, Σf = 20, mean = 1.45') },
      { title: 'Grouped data.', text: 'For times 0 < t ≤ 10 (5 people) and 10 < t ≤ 20 (15 people), the midpoints are 5 and 15: estimated mean = (5 × 5 + 15 × 15) ÷ 20 = 12.5. It is an estimate because you do not know the exact times. The modal class is the class with the highest frequency.',
        example: { prompt: 'Why is this mean only an estimate?', steps: ['The exact values in each class are unknown', 'midpoints are used instead'] },
        visual: { kind: 'work', lines: ['estimated mean = {Σ(midpoint × f)/Σf}', '= {5 × 5 + 15 × 15/20} = 12.5'] } },
    ],
    skills: [S('maths.statistics.averages'), S('maths.statistics.frequency-averages')],
    checkPlan: [['maths.statistics.averages', 1], ['maths.statistics.averages', 1], ['maths.statistics.averages', 2], ['maths.statistics.averages', 3], ['maths.statistics.averages', 3], ['maths.statistics.frequency-averages', 1], ['maths.statistics.frequency-averages', 2], ['maths.statistics.frequency-averages', 2], ['maths.statistics.frequency-averages', 3], ['maths.statistics.frequency-averages', 1]],
    limits: 'Means that are not whole numbers are given to 2 decimal places (or 1 for estimates) and marked with a small tolerance. Written explanations of which average to use are chosen from options.',
  },
  {
    id: 'maths.statistics.charts-sampling',
    topicId: 'maths.statistics',
    title: 'Charts, samples and comparing data',
    refs: ['S2', 'S1', 'S4', 'S5'],
    minutes: 45,
    model: 'pie-maker',
    prerequisites: ['maths.statistics.averages', 'maths.geometry.angles'],
    big: 'Bar charts and pictograms show frequencies of categories; a pie chart shows each category as a fraction of 360°. To draw a pie chart, find the degrees for one item (360 ÷ total) and multiply. A sample should be random and big enough to represent the population; a biased sample leaves some groups out. Compare two distributions with an average (which is higher?) and a measure of spread (which is more consistent?), and say what it means in context.',
    learn: [
      { title: 'Bar charts.', text: 'Read the height of each bar against the frequency scale. Bars are the same width with gaps between them for categories. The mode is the tallest bar.',
        example: { prompt: 'Bars 4, 9, 6. Total?', steps: ['4 + 9 + 6 = 19'] },
        visual: g(bars(['Bus', 'Car', 'Walk'], [4, 9, 6], { ystep: 1 }), 'Car is the modal choice') },
      { title: 'Pictograms, line charts and time series.', text: 'A pictogram needs a key. If one symbol = 4 people, then 2½ symbols = 2.5 × 4 = 10 people, and 6 people need 6 ÷ 4 = 1½ symbols. A vertical line chart shows discrete values (0, 1, 2, … pets) with a line whose height is the frequency. A time-series graph plots a value against time: read the change between two times by subtracting, and the steepest upward segment is the biggest rise.',
        example: { prompt: 'Key: one symbol = 4. A row has 3¼ symbols.', steps: ['3.25 × 4', '= 13 people'] },
        visual: geo(pictoFig(['Bus', 'Car', 'Walk'], [2.5, 4, 1.25], 4, 'people', 'Pictogram: Bus 2½ symbols, Car 4, Walk 1¼; key one symbol = 4 people'), 'Bus 10, Car 16, Walk 5') },
      { title: 'Pie charts.', text: '40 people: 360 ÷ 40 = 9° each. 10 people → 90°, 18 → 162°, 12 → 108°. Check the angles add up to 360°. Back the other way: a 54° sector of 40 people is {54/360} × 40 = 6 people.',
        example: { prompt: '30 people; a 96° sector. How many?', steps: ['{96/360} × 30', '= 8'] },
        visual: geo(pieFig(['Bus', 'Car', 'Walk'], [90, 162, 108], 'Pie chart: Bus 90°, Car 162°, Walk 108°'), '9° per person: 90°, 162°, 108°') },
      { title: 'Samples and comparisons.', text: 'Asking only people leaving a gym about exercise gives a biased sample. A random sample of 50 from 1000 students in which 12 walk suggests about {12/50} × 1000 = 240 walk. When comparing, write two sentences: one comparing an average, one comparing spread, both in context.',
        example: { prompt: 'Median 54 v 48; range 20 v 32. Compare.', steps: ['The first group scored higher on average (median 54 > 48)', 'and was more consistent (range 20 < 32)'] },
        visual: { kind: 'work', lines: ['average: which is higher?', 'spread: which is more consistent?', 'always say it in context'] } },
    ],
    skills: [S('maths.statistics.charts'), S('maths.statistics.charts2'), S('maths.statistics.sampling')],
    checkPlan: [['maths.statistics.charts', 1], ['maths.statistics.charts', 2], ['maths.statistics.charts', 3], ['maths.statistics.charts2', 1], ['maths.statistics.charts2', 2], ['maths.statistics.charts2', 3], ['maths.statistics.sampling', 1], ['maths.statistics.sampling', 2], ['maths.statistics.sampling', 3], ['maths.statistics.sampling', 3]],
    limits: 'Drawing bar charts, pie charts, pictograms and line graphs is not marked; angles, frequencies and the number of symbols are. Comparisons are chosen from options rather than written.',
  },
  {
    id: 'maths.statistics.scatter',
    topicId: 'maths.statistics',
    title: 'Scatter graphs and correlation',
    refs: ['S6'],
    minutes: 40,
    model: 'scatter-fit',
    prerequisites: ['maths.algebra.coordinates-lines'],
    big: 'A scatter graph plots pairs of values. Positive correlation: as one increases, so does the other; negative: as one increases, the other decreases; no correlation: no pattern. A line of best fit follows the trend, with roughly as many points above as below, ignoring outliers. Use it to estimate values inside the data (interpolation); predicting far outside the data (extrapolation) is unreliable. Correlation does not prove that one thing causes the other.',
    learn: [
      { title: 'Correlation.', text: 'Height and shoe size: positive. Age of a car and its value: negative. Shoe size and test score: none. Describe the relationship in words too: "taller people tend to have bigger feet".',
        example: { prompt: 'Temperature and hot-chocolate sales?', steps: ['As temperature rises, sales fall', 'negative correlation'] },
        visual: g({ xr: [0, 12], yr: [0, 20], xstep: 1, ystep: 2, points: [[1, 3], [2, 4.5], [3, 5], [4, 7.5], [5, 8], [6, 9.5], [7, 11], [8, 12.5], [9, 13], [10, 15.5]] }, 'Positive correlation') },
      { title: 'Lines of best fit.', text: 'Draw one straight line through the middle of the points. To estimate y for a given x, go up from x to the line and across. Estimates inside the data range are sensible; outside it the pattern may not continue.',
        example: { prompt: 'Line y = 1.5x + 2. Estimate at x = 6.', steps: ['1.5 × 6 + 2', '= 11'] },
        visual: g({ xr: [0, 12], yr: [0, 20], xstep: 1, ystep: 2, points: [[1, 3], [2, 4.5], [3, 5], [4, 7.5], [5, 8], [6, 9.5], [7, 11], [8, 12.5], [9, 13], [10, 15.5]], fns: [{ expr: '1.4x + 1.4', label: 'line of best fit' }] }, 'Go up to the line, then across') },
      { title: 'Outliers and causation.', text: 'A point far from the pattern is an outlier: check it, and leave it out of the line of best fit. Ice cream sales and sunburn rise together because of hot weather, not because one causes the other.',
        example: { prompt: 'Should you predict a 40-year-old from data on 5 to 12-year-olds?', steps: ['No: that is extrapolation far outside the data'] },
        visual: { kind: 'work', lines: ['interpolation: inside the data, reliable', 'extrapolation: outside the data, risky', 'correlation ≠ causation'] } },
    ],
    skills: [S('maths.statistics.scatter')],
    checkPlan: [['maths.statistics.scatter', 1], ['maths.statistics.scatter', 1], ['maths.statistics.scatter', 1], ['maths.statistics.scatter', 2], ['maths.statistics.scatter', 2], ['maths.statistics.scatter', 2], ['maths.statistics.scatter', 3], ['maths.statistics.scatter', 3], ['maths.statistics.scatter', 3], ['maths.statistics.scatter', 2]],
    limits: 'Lines of best fit are drawn for you in questions; drawing your own is practised in the investigation. Estimates are accepted within half a unit of the line.',
  },
  {
    id: 'maths.statistics.cumulative',
    topicId: 'maths.statistics',
    title: 'Histograms, cumulative frequency and box plots',
    refs: ['S3', 'S4'],
    minutes: 50,
    higherOnly: true,
    model: 'quartile-reader',
    prerequisites: ['maths.statistics.averages'],
    big: 'In a histogram the area of each bar is the frequency, so the height is the frequency density = frequency ÷ class width; this handles unequal class widths. A cumulative frequency graph plots running totals at the upper class boundaries; read the median at half the total and the quartiles at a quarter and three-quarters. The interquartile range (upper quartile − lower quartile) measures the spread of the middle half and ignores extreme values. A box plot shows the minimum, quartiles, median and maximum.',
    learn: [
      { title: 'Histograms.', text: 'A class 20 < t ≤ 40 has width 20; with frequency 30, the frequency density is 30 ÷ 20 = 1.5. Reading back: a bar of height 2.5 over a class of width 10 represents 25 values.',
        example: { prompt: 'Frequency density 0.8, class width 25. Frequency?', steps: ['0.8 × 25 = 20'] },
        visual: g({ xr: [0, 100], yr: [0, 3.5], xstep: 10, ystep: 0.5, xlabel: 'Time (s)', ylabel: 'Frequency density', polys: [{ pts: [[0, 0], [0, 1], [10, 1], [10, 0]] }, { pts: [[10, 0], [10, 2.5], [20, 2.5], [20, 0]] }, { pts: [[20, 0], [20, 1.5], [40, 1.5], [40, 0]] }, { pts: [[40, 0], [40, 0.5], [100, 0.5], [100, 0]] }] }, 'Area = frequency: 10, 25, 30, 30') },
      { title: 'Cumulative frequency.', text: 'Plot each running total at the upper end of its class and join the points. For 80 values, read across from 40 for the median, 20 for the lower quartile and 60 for the upper quartile, then down to the horizontal axis.',
        example: { prompt: 'LQ 24, UQ 41. IQR?', steps: ['41 − 24 = 17'] },
        visual: g({ xr: [0, 60], yr: [0, 80], xstep: 10, ystep: 8, xlabel: 'Mark', ylabel: 'Cumulative frequency', polys: [{ pts: [[0, 0], [10, 5], [20, 18], [30, 42], [40, 63], [50, 75], [60, 80]] }] }, 'Read across at 20, 40 and 60, then down') },
      { title: 'Box plots.', text: 'Draw the box from the lower to the upper quartile with a line at the median, and whiskers to the minimum and maximum. To compare two box plots, compare medians (average) and IQRs (consistency).',
        example: { prompt: 'Min 12, LQ 20, median 26, UQ 31, max 40. Range and IQR?', steps: ['Range 40 − 12 = 28', 'IQR 31 − 20 = 11'] },
        visual: { kind: 'work', lines: ['min — [ LQ | median | UQ ] — max', 'IQR = UQ − LQ', 'compare medians and IQRs'] } },
    ],
    skills: [S('maths.statistics.cumulative')],
    checkPlan: [['maths.statistics.cumulative', 1], ['maths.statistics.cumulative', 1], ['maths.statistics.cumulative', 1], ['maths.statistics.cumulative', 2], ['maths.statistics.cumulative', 2], ['maths.statistics.cumulative', 2], ['maths.statistics.cumulative', 3], ['maths.statistics.cumulative', 3], ['maths.statistics.cumulative', 3], ['maths.statistics.cumulative', 2]],
    limits: 'Higher only. Readings from cumulative frequency graphs are accepted within 1 mark of the drawn curve. Drawing histograms, curves and box plots is not marked.',
  },
];

export const statisticsOrder = ['maths.statistics.averages', 'maths.statistics.charts-sampling', 'maths.statistics.scatter', 'maths.statistics.cumulative'];
export const orderedStatistics = statisticsOrder.map(id => statisticsLessons.find(l => l.id === id));
