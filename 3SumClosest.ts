// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

const solution_brute_force = (nums: Array<number>, target: number): number => {
  let closest: number = Infinity;
  let diff: number = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (target - sum < diff) {
          diff = target - sum;
          closest = sum;
        }
      }
    }
  }
  return closest;
};

console.log(solution_brute_force([0, 0, 0], 1));
