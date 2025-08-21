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
// console.log(solution_brute_force([1, 2, 1, 3, 4, 2, 3], 3));

const solution_better = (arr: Array<number>, k: number): number => {
  let maxSum = 0;

  let numMap = new Map<number, number>();
  for (let i = 0; i < k; i++) {
    numMap.set(arr[i], (numMap.get(arr[i]) || 0) + 1);
  }

  if (numMap.size === k) {
    let currSum = [...numMap.keys()].reduce((acc, curr) => acc + curr, 0);
    maxSum = Math.max(currSum, maxSum);
  }

  for (let i = k; i < arr.length; i++) {
    // The element that needs to be removed
    let leavingElement = arr[i - k];
    let freqLeavingElement = numMap.get(leavingElement);

    // Remove or delete the i-k'th element
    freqLeavingElement === 1
      ? numMap.delete(leavingElement)
      : numMap.set(leavingElement, freqLeavingElement! - 1);

    // add the current element;
    numMap.set(arr[i], (numMap.get(arr[i]) || 0) + 1);

    if (numMap.size === k) {
      let currSum = [...numMap.keys()].reduce((acc, curr) => acc + curr, 0);
      maxSum = Math.max(currSum, maxSum);
    }
  }

  return maxSum;
};
console.log(solution_better([4, 4, 4], 3));

const solution_optimal = (arr: Array<number>, k: number): number => {
  let maxSum = 0;
  let sum = 0;
  let l = 0;
  let numMap = new Map<number, number>();

  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];
    numMap.set(arr[r], (numMap.get(arr[r]) || 0) + 1);
    if (r - l + 1 === k) {
      if (numMap.size === k) {
        maxSum = Math.max(sum, maxSum);
      }
      sum -= arr[l];
      numMap.set(arr[l], numMap.get(arr[l])! - 1);
      if (numMap.get(arr[l]) === 0) numMap.delete(arr[l]);
      l++;
    }
  }
  return maxSum;
};
console.log(solution_optimal([4, 4, 4], 3));
