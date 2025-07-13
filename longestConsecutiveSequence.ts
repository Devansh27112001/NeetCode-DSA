// DESCRIPTION: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.

// TC: O(nlogn)
// SC: O(1)
const solution_bruteForce = (arr: Array<number>): number => {
  arr.sort((a, b) => a - b);
  let maxLength = 0;
  let length = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      length++;
      maxLength = Math.max(length, maxLength);
    } else {
      length = 0;
    }
  }
  return length !== 0 ? maxLength + 1 : maxLength;
};

// console.log(solution_bruteForce([102, 4, 100, 1, 101, 3, 2, 1, 1]));

// TC = O(n) but O(n^2) if array is sorted or too big
// SC = O(n)
const solution_better = (arr: Array<number>): number => {
  let maxLength = 0;
  let numMap = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    let length = 0;
    let pos = 1;
    let neg = 1;
    while (numMap.has(arr[i] - neg)) {
      length++;
      neg++;
    }
    while (numMap.has(arr[i] + pos)) {
      length++;
      pos++;
    }
    maxLength = Math.max(length, maxLength);
    numMap.set(arr[i], arr[i]);
  }
  return maxLength > 0 ? maxLength + 1 : maxLength;
};

// console.log(solution_better([1, 2, 0, 1]));

//
const solution_optimal = (arr: Array<number>): number => {
  let maxLength = 0;
  let numSet = new Set<number>(arr);
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 1;
      while (numSet.has(num + length)) {
        length++;
      }
      maxLength = Math.max(length, maxLength);
    }
  }
  return maxLength;
};
console.log(solution_optimal([1, 2, 0, 1]));
