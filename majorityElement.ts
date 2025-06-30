// Better
// TC: O(n)
const majaorityElement = (nums: Array<number>): number => {
  let freqMap = new Map<number, number>();
  for (const number of nums) {
    freqMap.set(number, (freqMap.get(number) || 0) + 1);
  }

  console.log(freqMap);
  let maxFreq = 0;

  let majorityEle: number = 0;
  for (const [key, value] of freqMap.entries()) {
    if (value > maxFreq) {
      maxFreq = value;
      majorityEle = key;
    }
  }
  return majorityEle;
};

console.log(majaorityElement([2, 2, 1, 1, 1, 2, 2]));
