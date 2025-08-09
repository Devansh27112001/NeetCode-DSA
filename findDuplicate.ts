// This solution only works if the repeated number is appearing twice only.
// Given an array of integers nums containing n + 1 integers where each integer is in the range
// [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space.
const solution_bruteForce = (nums: Array<number>): number => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i];
    }
  }
  return -1;
};
// console.log(solution_optimal([1, 3, 4, 2, 2]));

// TC = O(n)
// SC = O(1)
// FLOYD's cycle detection => HARE AND TORTOISE ALGORITHM
const solution_optimal = (nums: Array<number>): number => {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  fast = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
};

console.log(solution_optimal([1, 3, 4, 2, 2]));
