// DESCRIPTION : Given an integer array nums, return the most frequent even element. If there is a tie, return the smallest one. If there is no such element, return -1.
const mostFreqEvenEle = (nums: Array<number>): number => {
  const countFreq = new Map<number, number>();
  for (const number of nums) {
    number % 2 === 0 && countFreq.set(number, (countFreq.get(number) || 0) + 1);
  }
  console.log(countFreq);
  let freq = 0;
  let mostFreqEle = -1;
  for (const [key, value] of countFreq.entries()) {
    if (value > freq) {
      freq = value;
      mostFreqEle = key;
    } else if (value === freq && key < mostFreqEle) {
      mostFreqEle = key;
    }
  }
  return mostFreqEle;
};

console.log(mostFreqEvenEle([0, 1, 2, 2, 4, 4, 1]));
