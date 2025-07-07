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

// console.log(maxsubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));

// KADANE'S algorithm
// TC = O(n)
const maxsubArraySum_optimal = (nums: Array<number>): number => {
  let max_Sum = -Infinity;
  let curr_sum = 0;
  // Only if required to print the subarray
  let start = -1;
  let end = -1;
  // Use the classic for loop. This loop is slower as it used the Symbol.iterator() method which acts as a overhead.
  for (let i = 0; i < nums.length; i++) {
    // Only if required to print the subarray
    if (curr_sum === 0) start = i;
    curr_sum += nums[i];
    // max_Sum = Math.max(curr_sum, max_Sum);
    if (curr_sum > max_Sum) {
      max_Sum = curr_sum;
      // Only if required to print the subarray
      end = i;
    }
    if (curr_sum < 0) {
      curr_sum = 0;
    }
  }
  console.log(nums.slice(start, end + 1));

  return max_Sum;
};
console.log(maxsubArraySum_optimal([-2, 7, -3, 4]));
