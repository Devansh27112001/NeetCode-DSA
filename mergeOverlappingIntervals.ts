// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// TC = O(nlogn + n^2)
// SC = O(1), Not counting the space required to return the solution.
const solution_bruteforce = (
  intervals: Array<Array<number>>
): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];

  // This will sort [2,4] and [2,6] as ... , [2,6], [2,4],..... We dont need it to be sorted according to the [0][1] as we are taking Math.max for the end values.
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    if (
      solution[solution.length - 1] &&
      end <= solution[solution.length - 1][1]
    ) {
      continue;
    }

    for (let j = i + 1; j < intervals.length; j++) {
      let start_2 = intervals[j][0];
      let end_2 = intervals[j][1];
      if (start_2 <= end) {
        end = Math.max(end, end_2);
      } else {
        break;
      }
    }
    solution.push([start, end]);
  }
  return solution;
};

// console.log(
//   solution_bruteforce([
//     [1, 3],
//     [2, 6],
//     [8, 9],
//     [9, 11],
//     [8, 10],
//     [2, 4],
//     [15, 18],
//     [16, 17],
//   ])
// );

// TC = O(nlogn + n)
// SC = O(1), Not counting the space required to return the solution.
const solution_better = (
  intervals: Array<Array<number>>
): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];

  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    let curr_start = intervals[i][0];
    let curr_end = intervals[i][1];

    if (curr_start <= end) {
      end = Math.max(end, curr_end);
    } else {
      solution.push([start, end]);
      start = curr_start;
      end = curr_end;
    }
  }
  solution.push([start, end]);
  return solution;
};
// console.log(
//   solution_better([
//     [1, 3],
//     [2, 6],
//     [8, 9],
//     [9, 11],
//     [8, 10],
//     [2, 4],
//     [15, 18],
//     [16, 17],
//   ])
// );

const solution_optimal = (
  intervals: Array<Array<number>>
): Array<Array<number>> => {
  let solution: Array<Array<number>> = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    if (solution.length === 0 || start > solution[solution.length - 1][1]) {
      solution.push([start, end]);
    } else {
      solution[solution.length - 1][1] = Math.max(
        solution[solution.length - 1][1],
        end
      );
    }
  }
  return solution;
};
console.log(
  solution_optimal([
    [1, 3],
    [2, 6],
    [8, 9],
    [9, 11],
    [8, 10],
    [2, 4],
    [15, 18],
    [16, 17],
  ])
);
