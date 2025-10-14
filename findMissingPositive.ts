/* First Missing Positive
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
*/

// The brute force way would be to sort the input array and check for the smallest +ve integer starting from 1 and traversing the sorted array.

// TC = O(n log n)
// SC = O(1)
const solution_brute_force = (nums: number[]): number => {
  let smallest = 1;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === smallest) {
      smallest++;
    } else if (nums[i] > smallest) {
      return smallest;
    }
  }
  return smallest;
};
// console.log(solution_brute_force([0, 1, 2]));

// TC = O(n)
// SC = O(n)
const solution_better = (nums: number[]): number => {
  let numHash = new Set<number>(nums);
  let i = 1;
  while (numHash.has(i)) {
    i++;
  }

  return i;
};
// console.log(solution_better([7, 8, 9, 11, 12]));

// Optimal Approach
// TC = O(n)
// SC = O(1)
const solution_optimal = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = 0;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (index >= 0 && index <= nums.length - 1) {
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      } else if (nums[index] === 0) {
        nums[index] = -(nums.length + 1);
      }
    }
  }

  console.log(nums);
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i - 1] >= 0) {
      return i;
    }
  }
  return nums.length + 1;
};
console.log(solution_optimal([1, 2, 0]));
