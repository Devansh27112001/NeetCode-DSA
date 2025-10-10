/* First Missing Positive
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
*/

const solution_brute_force = (nums: number[]): number => {
  let found = false;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        found = true;
        break;
      }
    }
    if (!found) return i;
  }
  return 0;
};

console.log(solution_brute_force([0, 1, 2]));

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
