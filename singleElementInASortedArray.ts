// DESCRIPTION :You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.
// Your solution must run in O(log n) time and O(1) space.

const solution_brute_force = (nums: Array<number>): number => {
  for (let i = 0; i < nums.length; i += 2) {
    let count = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
  return -1;
};

const solution_better = (nums: Array<number>): number => {
  let numMap = new Map<number, number>();
  for (const num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  for (const [key, value] of numMap.entries()) {
    if (value === 1) {
      return key;
    }
  }
  return -1;
};

const solution_optimal = (nums: Array<number>) => {
  let low = 0;
  let high = nums.length - 1;
};
