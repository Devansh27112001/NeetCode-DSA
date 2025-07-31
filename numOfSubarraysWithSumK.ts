// Generating all sub-arrays
const solution_brute_force = (arr: Array<number>, k: number): number => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

// console.log(solution_brute_force([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));

// The solution will work for zeros, -ves and +ves as well.
// TC = O(n)
// SC = O(n)
// The concept is same as the longestSubarray - prefix Sum but the logic is different.
// Key difference to remember: We store <prefixSum, count for that sum> instead of <prefixSum,index>
const solution_optimal = (arr: Array<number>, k: number): number => {
  let count = 0;
  let sum = 0;
  // We are storing the Sum and it's frequency.
  let sumMap = new Map<number, number>();
  sumMap.set(sum, 1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sumMap.get(sum - k)) {
      count += sumMap.get(sum - k)!;
    }

    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }
  return count;
};

console.log(solution_optimal([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));
