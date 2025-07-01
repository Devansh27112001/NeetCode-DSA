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

// console.log(longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 4, 2, 3], 3));

// BETTER -> for array having zeros and positives.
// OPTIMAL -> for array having negatives as well.
// TC:O(n)
// SC: O(n)
// Only valid if the array has positives and no zeros as well.
const longestSubarrayWithSumKHashMap = (
  nums: Array<number>,
  k: number
): number => {
  let l = 0;
  let sum = 0;
  let sumHash = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) {
      l = Math.max(l, i + 1);
    }
    if (sumHash.has(sum - k)) {
      l = Math.max(l, i - sumHash.get(sum - k)!);
    }

    if (!sumHash.get(sum)) {
      sumHash.set(sum, i);
    }
  }
  console.log(l);
  return l;
};

// longestSubarrayWithSumKHashMap([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3);

// OPTIMAL => For array with postives only.

const longestSubarrayWithSumKTwoPinters = (
  nums: Array<number>,
  k: number
): number => {
  let i = 0;
  let j = 0;
  let maxLen = 0;
  let sum = nums[0];
  while (j < nums.length) {
    while (sum > k && i <= j) {
      sum -= nums[i];
      i++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
    j++;
    if (j < nums.length) {
      sum += nums[j];
    }
  }
  return maxLen;
};

console.log(longestSubarrayWithSumKTwoPinters([1, 2, 3, 1, 1, 1, 1, 3, 3], 6));
