const solution_bruteforce = (
  intervals: Array<Array<number>>
): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];

  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

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

const solution_better = (
  intervals: Array<Array<number>>
): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];

  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  intervals;
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

console.log(
  solution_better([
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
