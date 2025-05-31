// nums = [1,2,2,3,3,3]
function topKFrequent(nums: number[], k: number): Array<number> {
  const freqMap: { [key: string]: number } = {};
  nums.forEach((num) => {
    if (freqMap[num]) {
      freqMap[num]++;
    } else {
      freqMap[num] = 1;
    }
  });

  const freqKArray: Array<Array<number>> = Object.entries(freqMap).map(
    ([value, freq]) => [freq, +value]
  );
  freqKArray.sort((a, b) => b[0] - a[0]);
  return freqKArray.slice(0, k).map((pair) => pair[1]);
}
