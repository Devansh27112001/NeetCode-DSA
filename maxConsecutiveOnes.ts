/* Max Consecutive Ones
Given a binary array nums, return the maximum number of consecutive 1's in the array. 
*/

const solution_optimal = (nums: Array<number>): number => {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max;
};

console.log(solution_optimal([1, 1, 0, 1, 1, 1]));
