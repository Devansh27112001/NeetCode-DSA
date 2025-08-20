// DESCRIPTION : You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// TC = O(nlogn + n)
// SC = O(1)
const solution_brute_force = (
  nums: Array<number>,
  target: number
): Array<number> => {
  nums.sort((a, b) => a - b);
  let res: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }
  return res;
};

// TC = O(n)
// SC = O(1)
const solution_optimal = (
  nums: Array<number>,
  target: number
): Array<number> => {
  let res: Array<number> = [];
  let countSmaller: number = 0;
  let countTarget = 0;
  for (let num of nums) {
    if (num === target) countTarget++;
    if (num < target) countSmaller++;
  }

  while (countTarget !== 0) {
    res.push(countSmaller);
    countSmaller++;
    countTarget--;
  }
  res;
  return res;
};

solution_optimal([1, 2, 5, 2, 3], 2);
