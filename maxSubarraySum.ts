// BRUTE FORCE
// TC = O(n^2)
const maxsubArraySum = (nums: Array<number>): number => {
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
};

console.log(maxsubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));

// KADANE'S algorithm
// TC = O(n)
const maxsubArraySum_optimal = (nums: Array<number>): number => {
  let max_Sum = -Infinity;
  let curr_sum = 0;
  for (const number of nums) {
    curr_sum += number;
    max_Sum = Math.max(curr_sum, max_Sum);
    if (curr_sum < 0) {
      curr_sum = 0;
    }
  }
  return max_Sum;
};
console.log(maxsubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));
