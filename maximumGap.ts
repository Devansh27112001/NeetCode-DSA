// DESCRIPTION: Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.

// TC = O(nlogn)
// SC = O(1)
const solution_brute_force = (nums: Array<number>): number => {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let maxGap = 0;

  for (let i = 1; i < nums.length; i++) {
    let gap = nums[i] - nums[i - 1];
    maxGap = Math.max(gap, maxGap);
  }

  return maxGap;
};

console.log(solution_brute_force([3, 6, 9, 1]));
