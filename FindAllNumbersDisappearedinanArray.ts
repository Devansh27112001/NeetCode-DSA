/* Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 */

const solution_bruteForce = (nums: Array<number>): Array<number> => {
  const sol: Array<number> = [];
  let hashTable: Array<number> = new Array(nums.length + 1).fill(0);
  for (const num of nums) {
    hashTable[num]++;
  }

  for (let i = 1; i < hashTable.length; i++) {
    hashTable[i] === 0 && sol.push(i);
  }

  return sol;
};
// console.log(solution_bruteForce([4, 3, 2, 7, 8, 2, 3, 1]));

const solution_optimal = (nums: Array<number>): Array<number> => {
  return [];
};
