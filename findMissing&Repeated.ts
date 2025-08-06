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
