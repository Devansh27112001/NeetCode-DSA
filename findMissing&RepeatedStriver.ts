// The only difference here is that the array is 1d and not 2d unlike the problem in leetcode

const solution_better = (arr: Array<number>): Array<number> => {
  const numSet = new Set<number>(arr);
  let solution: Array<number> = [];
  let repeatingNumber = 0;
  let expectedSum = (arr.length * (arr.length + 1)) / 2;
  for (const num of numSet) {
    repeatingNumber ^= num;
  }

  let actualSum = 0;
  for (const num of arr) {
    repeatingNumber ^= num;
    actualSum += num;
  }

  let missing = expectedSum - actualSum + repeatingNumber;
  return solution;
};

console.log(solution_better([4, 3, 6, 2, 1, 1]));

// The optimal will be similar to that of the leetcode version
