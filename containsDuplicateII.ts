// DESCRIPTION : Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

const solution_optimal = (nums: Array<number>, k: number): boolean => {
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i]) && i - numMap.get(nums[i])! <= k) {
      return true;
    } else {
      numMap.set(nums[i], i);
    }
  }
  return false;
};
console.log(solution_optimal([1, 2, 3, 1], 3));
