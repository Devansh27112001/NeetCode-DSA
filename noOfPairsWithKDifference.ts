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

// TC = O(n^2)
// SC = O(logn) to O(n)
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

// TC = O(n)
// SC = O(n) OR O(u), u being the number of unique numbers
const solution_optimal_2 = (nums: Array<number>, k: number): number => {
  let count = 0;

  if (k === 0) {
    let freqCount = new Map<number, number>();
    nums.forEach((num) => freqCount.set(num, (freqCount.get(num) || 0) + 1));
    for (const value of freqCount.values()) {
      value > 1 && count++;
    }
  } else {
    const numSet = new Set<number>(nums);
    for (const num of numSet) {
      if (numSet.has(num + k)) {
        count++;
      }
    }
  }
  return count;
};

console.log(solution_optimal_2([3, 1, 4, 1, 5], 2));
