const solution = (intervals: Array<Array<number>>): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];

  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

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
        if (end < end_2) {
          end = end_2;
        }
      } else {
        break;
      }
    }
    solution.push([start, end]);
  }
  console.log(solution);
  return [];
};

console.log(
  solution([
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
