// You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].
// Return the total number of bad pairs in nums.

// TC = O(n^2)
// SC = O(1)
const solution_bruteforce = (nums: Array<number>): number => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (j - i !== nums[j] - nums[i]) {
        count++;
      }
    }
  }
  return count;
};
// console.log(solution_bruteforce([1, 2, 3, 4, 5]));

// Solution Optimal:
// Store nums[i] - i in hashMap in one go. For each value > 1, calculate (value * (value - 1) / 2) => This will be the total good pairs. Subtract that value from the total possible pairs which will yield the value of bad pairs.
const solution_optimal = (nums: Array<number>): number => {
  let totalPairs = (nums.length * (nums.length - 1)) / 2;
  let goodPair = 0;
  let goodPairMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    goodPairMap.set(nums[i] - i, (goodPairMap.get(nums[i] - i) || 0) + 1);
  }

  console.log(goodPairMap);
  for (const value of goodPairMap.values()) {
    if (value > 1) {
      goodPair += (value * (value - 1)) / 2;
    }
  }
  console.log(totalPairs, goodPair);
  return totalPairs - goodPair;
};

console.log(solution_optimal([4, 1, 6, 3]));
