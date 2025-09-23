/*
Given an integer array nums, find a subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
*/

const solution_brute_force = (nums: Array<number>): Array<number> => {
  let maxProduct = -Infinity;
  let start = 0;
  let end = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let currProduct = 1;
    for (let j = i; j < nums.length; j++) {
      currProduct *= nums[j];

      if (currProduct > maxProduct) {
        start = i;
        end = j;
        maxProduct = currProduct;
      }
    }
  }

  return nums.slice(start, end + 1);
};

console.log(solution_brute_force([-1, 4, -4, 5, -2, -1, -1, -2, -3]));

const solution_optimal = (nums: Array<number>): number => {
  let max: number = Number.MIN_SAFE_INTEGER;
  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < nums.length; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;

    prefix *= nums[i];
    suffix *= nums[nums.length - i - 1];

    max = Math.max(max, Math.max(suffix, prefix));
  }

  return max;
};

console.log(solution_optimal([-1, 4, -4, 5, -2, -1, -1, -2, -3]));
