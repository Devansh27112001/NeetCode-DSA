const solution_optimal = (
  intervals: Array<Array<number>>,
  newInterval: Array<number>
): Array<Array<number>> => {
  if (intervals.length === 0) return [newInterval];
  let solution: Array<Array<number>> = [];

  for (const interval of intervals) {
    let start = interval[0];
    let end = interval[1];

    if (newInterval[1] < start) {
      solution.push(newInterval);
      newInterval = interval;
    } else if (newInterval[0] > end) {
      solution.push(interval);
    } else {
      newInterval[0] = Math.min(newInterval[0], start);
      newInterval[1] = Math.max(newInterval[1], end);
    }
  }

  return solution;
};

// console.log(
//   solution_optimal(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8]
//   )
// );
