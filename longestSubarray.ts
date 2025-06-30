// BRUTE FORCE - Generating all the subarrays
// TC = O(n^2)
const longestSubarrayWithSumK = (nums: Array<number>, k: number): number => {
  let l = 0;
  const tmpArray: Array<Array<number>> = [];
  for (let i = 0; i < nums.length; i++) {
    let s = 0;
    for (let j = i; j < nums.length; j++) {
      s += nums[j];
      if (s === k) {
        tmpArray.push([i, j]);
        l = Math.max(l, j - i + 1);
      }
    }
  }
  console.log(tmpArray);
  return l;
};

console.log(longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 4, 2, 3], 3));
