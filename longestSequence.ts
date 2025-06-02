function longestSeqence(nums: Array<number>): number {
  // Sorting in ascending order
  const sorted = nums.sort((a, b) => a - b);
  let k: number = 0;
  let currentK: number = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      currentK++;
      if (currentK > k) {
        k = currentK;
      }
    }
  }
  return k;
}
