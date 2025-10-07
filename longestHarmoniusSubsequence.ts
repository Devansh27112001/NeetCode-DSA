/* Longest Harmonious Subsequence
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
 */

// The brute force way would be to generate all the subsequences and then check whether it is harmonius.
// TC = O(n * 2^n)
// SC = O(n)

function solution_better(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let maxLength = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let currMax = 1;
    let max = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[i] > 1) continue;
      if (nums[j] - nums[i] === 1) {
        max = nums[j];
      }
      currMax++;
    }
    if (max - nums[i] === 1) {
      maxLength = Math.max(maxLength, currMax);
    }
  }
  return maxLength;
}

// console.log(
//   solution_better([
//     3, 2, 2, 3, 2, 1, 3, 3, 3, -2, 0, 3, 2, 1, 0, 3, 1, 0, 1, 3, 0, 3, 3,
//   ])
// );

const solution_optimal = (nums: number[]): number => {
  let maxLength = 0;
  let hashMap = new Map<number, number>();
  for (const num of nums) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }

  for (const key of hashMap.keys()) {
    if (hashMap.get(key + 1)) {
      maxLength = Math.max(
        maxLength,
        hashMap.get(key)! + hashMap.get(key + 1)!
      );
    }
  }

  return maxLength;
};

console.log(
  solution_optimal([
    3, 2, 2, 3, 2, 1, 3, 3, 3, -2, 0, 3, 2, 1, 0, 3, 1, 0, 1, 3, 0, 3, 3,
  ])
);
