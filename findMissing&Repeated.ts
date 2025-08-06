// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n^2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.
// TC = O(n^2)
// SC = O(n^2)
const sol_better = (grid: Array<Array<number>>): Array<number> => {
  let freqArray = new Array(grid.length ** 2 + 1).fill(0);
  let solArray = [0, 0];

  for (const row of grid) {
    for (const num of row) {
      freqArray[num]++;
    }
  }

  for (let i = 1; i < freqArray.length; i++) {
    if (freqArray[i] === 2) solArray[0] = i;
    if (freqArray[i] === 0) solArray[1] = i;
  }
  return solArray;
};

console.log(
  sol_better([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);

// TC = O(n^2)
// SC = O(1)
const solution_optimal = (grid: Array<Array<number>>): Array<number> => {
  let n = grid.length * grid.length;
  let actualSum = (n * (n + 1)) / 2;
  let actualSqSum = (n * (n + 1) * (2 * n + 1)) / 6;

  let expSum = 0;
  let expSqSum = 0;

  for (let row of grid) {
    for (let num of row) {
      expSum += num;
      expSqSum += num * num;
    }
  }

  // Let a be missing number and b = duplicate number
  // diff = a - b and diff = actualSum - expSum
  // a - b
  let diff = actualSum - expSum;
  // sq_diff = a^2 - b^2 and sq_diff = expSqSum - actualSqSum => (a-b)(a+b) = sq_diff => a + b = sq_diff / (a-b)
  let sumAB = (actualSqSum - expSqSum) / diff;

  let a = (diff + sumAB) / 2;
  let b = a - diff;
  return [b, a];
};

// console.log(
//   solution_optimal([
//     [9, 1, 7],
//     [8, 9, 2],
//     [3, 4, 6],
//   ])
// );

const solution_optimal_2 = (grid: Array<Array<number>>): Array<number> => {
  // let a = duplicate and b = missing
  let n = grid.length ** 2;
  let a: number = -1,
    b: number = -1;
  let numSet = new Set<number>();
  let actualSum = 0;

  for (const row of grid) {
    for (const num of row) {
      actualSum += num;
      if (numSet.has(num)) {
        a = num;
      }
      numSet.add(num);
    }
  }

  let expSum = (n * (n + 1)) / 2;
  b = expSum + a - actualSum;
  return [a, b];
};

console.log(
  solution_optimal_2([
    [1, 3],
    [2, 2],
  ])
);
