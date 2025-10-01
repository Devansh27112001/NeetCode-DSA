/* Array Partition
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
*/

const solution_brute = (nums: Array<number>): number => {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    sum += Math.min(nums[i], nums[i + 1]);
  }
  return sum;
};
// console.log(solution_brute([6, 2, 6, 5, 1, 2]));

const solution_optimal = (nums: Array<number>): number => {
  let offset = 10000;
  let count = new Array(20001).fill(0);
  let sum = 0;
  for (const num of nums) {
    count[num + offset]++;
  }

  let take = true;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      if (take) {
        sum += i - offset;
      }
      take = !take;
      count[i]--;
    }
  }
  return sum;
};

console.log(solution_optimal([6, 2, 6, 5, 1, 2]));
