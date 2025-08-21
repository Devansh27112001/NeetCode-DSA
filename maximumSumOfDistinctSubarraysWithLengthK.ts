// DESCRIPTION:
// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

const solution_brute_force = (arr: Array<number>, k: number): number => {
  let maxSum = 0;
  let numSet = new Set<number>();
  for (let i = 0; i <= arr.length - k; i++) {
    for (let j = i; j < i + k; j++) {
      numSet.add(arr[j]);
    }
    if (numSet.size === k) {
      let sum = [...numSet].reduce((acc, curr) => acc + curr, 0);
      maxSum = Math.max(sum, maxSum);
    }
    numSet.clear();
  }
  return maxSum;
};

console.log(solution_brute_force([1, 2, 1, 3, 4, 2, 3], 3));
