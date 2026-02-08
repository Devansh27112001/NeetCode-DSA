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
  solution = [repeatingNumber, missing];

  return solution;
};

console.log(solution_better([4, 3, 6, 2, 1, 1]));

// The optimal will be similar to that of the leetcode version

// USING BIT MANIPULATION
// STEPS:
// --> [arr[i]] ^ (1 ^ 2 ^ ..... ^ n) = num
// --> Find the first differentiating but from the right in num
// --> Put them in to two parts => 0 and 1
// --> XOR the two parts
const solution_optimal_2 = (arr: Array<number>): Array<number> => {
  let res: Array<number> = [];
  let n = arr.length;
  let arrXor = 0;

  for (let i = 0; i < n; i++) {
    arrXor ^= arr[i];
    arrXor ^= i + 1;
  }
  return res;
};
