// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

const solution_brute_force = (nums: Array<number>, target: number): number => {
  let closest: number = Infinity;
  let diff: number = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const curr_diff = Math.abs(sum - target);
        if (curr_diff < diff) {
          diff = curr_diff;
          closest = sum;
        }
      }
    }
  }
  return closest;
};
// console.log(solution_brute_force([0, 0, 0], 1));

const solution_better = (nums: Array<number>, target: number): number => {
  let closest: number = Infinity;
  let diff: number = Infinity;

  if (nums.length === 3) return nums.reduce((acc, curr) => curr + acc, 0);

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const curr_diff = Math.abs(sum - target);
      if (curr_diff < diff) {
        closest = sum;
        diff = curr_diff;
      }
      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return closest;
};
// console.log(solution_better([1, 1, 1, 5, 5, 5, 5, 5, 5], 14));
