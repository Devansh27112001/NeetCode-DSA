// TC = O(n^2)
// SC = O(unique pairs)
// Time Limit Exceeds on Leetcode
const solution_better = (nums: Array<number>, k: number): number => {
  let count = 0;
  let seenNum = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const key = `${[nums[i], nums[j]].sort((a, b) => a - b)}`;
      if (Math.abs(nums[i] - nums[j]) === k && !seenNum.has(key)) {
        count++;
        seenNum.set(key, 1);
      }
    }
  }
  return count;
};

const solution_optimal = (nums: Array<number>, k: number): number => {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }
  return count;
};
