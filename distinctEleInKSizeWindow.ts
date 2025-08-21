// DESCRIPTION: Given an array arr[] of size n and an integer k, return the count of distinct numbers in all windows of size k.

// TC = O(kn)
// SC = O(k)
const solution_brute_force = (
  nums: Array<number>,
  k: number
): Array<number> => {
  let res: Array<number> = [];
  let uniqueKSet: Set<number> = new Set();
  for (let i = 0; i <= nums.length - k; i++) {
    for (let j = i; j < i + k; j++) {
      uniqueKSet.add(nums[j]);
    }
    res.push(uniqueKSet.size);
    uniqueKSet.clear();
  }
  return res;
};
// console.log(solution_brute_force([1, 2, 1, 3, 4, 2, 3], 4));

// TC = O(N)
// SC = O(K)
const solution_optimal = (arr: Array<number>, k: number): Array<number> => {
  let res: Array<number> = [];

  let numMap = new Map<number, number>();
  let i = 0;
  while (i < arr.length) {
    if (i >= k) {
      res.push(numMap.size);
      let eleMapValue = numMap.get(arr[i - k]);
      eleMapValue === 1
        ? numMap.delete(arr[i - k])
        : numMap.set(arr[i - k], numMap.get(arr[i - k])! - 1);
    }
    numMap.set(arr[i], (numMap.get(arr[i]) || 0) + 1);
    // numMap;
    i++;
  }
  res.push(numMap.size);
  return res;
};

console.log(solution_optimal([1, 4, 1], 2));
