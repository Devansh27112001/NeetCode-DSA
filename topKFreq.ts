// nums = [1,2,2,3,3,3]
function topKFrequent(nums: number[], k: number): Array<number> {
  const freqMap: { [key: string]: number } = {};
  // Format: {number:frequency}
  nums.forEach((num) => {
    if (freqMap[num]) {
      freqMap[num]++;
    } else {
      freqMap[num] = 1;
    }
  });

  // Instead of using the typical bucket sort, we made the index the frequency and the value the array of numbers that appear that no. of times.
  const freqArray: Array<Array<number>> = Array.from(
    { length: nums.length + 1 },
    (v, k) => []
  );

  // This will make the indexes of the freqArray the frequencies and each index will have a subarray whuch will contain the numbers that appear that frequently -> index.
  for (const [number, frequency] of Object.entries(freqMap)) {
    freqArray[frequency].push(+number);
  }
  const result: Array<number> = [];

  for (let i = freqArray.length - 1; i > 0; i--) {
    for (let j = 0; j < freqArray[i].length; j++) {
      result.push(freqArray[i][j]);
      if (result.length === k) return result;
    }
  }
  return [];
}

const answer = topKFrequent([1, 2, 2, 3, 3, 3], 2);
console.log(answer);
