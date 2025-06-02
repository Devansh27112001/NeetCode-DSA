// Time complexity: O(nlogn)
function longestSeqence(nums: Array<number>): number {
  // The nums array can contain duplicate elements.
  const uniqueArray: Array<number> = [...new Set(nums)];

  // Sorting in ascending order
  uniqueArray.sort((a, b) => a - b);

  let k: number = 0;
  let currentK: number = 0;
  for (let i = 1; i < uniqueArray.length; i++) {
    if (uniqueArray[i] - uniqueArray[i - 1] === 1) {
      currentK++;
      if (currentK > k) {
        k = currentK;
      }
    } else {
      currentK = 0;
    }
  }
  return k + 1;
}

console.log(longestSeqence([2, 20, 4, 10, 3, 4, 5]));

// Time complexity: O(n)
function longestSeqenceUsingSet(nums: Array<number>): number {
  // The nums array can contain duplicate elements.
  if (nums.length === 0) return 0;

  let k: number = 0;
  const numsSet: Set<number> = new Set(nums);

  for (const value of numsSet) {
    if (!numsSet.has(value - 1)) {
      let length = 1;
      while (numsSet.has(value + length)) {
        length++;
      }
      k = Math.max(k, length);
    }
  }
  return k;
}

console.log(longestSeqenceUsingSet([0, 3, 2, 5, 4, 6, 1, 1]));
