// BRUTE FORCE
// TC: O(n^2)
const majaorityElement_bruteForce = (nums: Array<number>): number => {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      nums[i] === nums[j] && count++;
    }
    if (count > nums.length / 2) {
      return nums[i];
    }
  }
  return -1;
};

// Better
// TC: O(n)
const majaorityElement_hashMap = (nums: Array<number>): number => {
  let freqMap = new Map<number, number>();
  for (const number of nums) {
    freqMap.set(number, (freqMap.get(number) || 0) + 1);
  }

  for (const [key, value] of freqMap.entries()) {
    if (value > nums.length / 2) {
      return key;
    }
  }
  return -1;
};

console.log(majaorityElement_hashMap([2, 2, 1, 1, 1, 2, 2]));
