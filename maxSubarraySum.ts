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
