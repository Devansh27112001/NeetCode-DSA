// DESCRIPTION: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.

// TC: O(nlogn)
// SC: O(1)
const solution_bruteForce = (arr: Array<number>): number => {
  if (arr.length === 0) return 0;
  arr.sort((a, b) => a - b);
  let maxLength = 1;
  let length = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      length++;
      maxLength = Math.max(length, maxLength);
    } else {
      length = 1;
    }
  }
  return maxLength;
};

console.log(solution_bruteForce([102, 4, 100, 1, 101, 3, 2, 1, 1]));

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

// TC = O(n)
// SC = O(x) where x represents unique numbers in input array.
const solution_optimal = (arr: Array<number>): number => {
  let maxLength = 0;
  let numSet = new Set<number>(arr);
  console.log(numSet);
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

// TC = O(nlogn)
// This is faster on leetcode than the above solution.
// REASON:
// The "Why" in Plain English:
//  1. Native Code is King: The sort() function in your second solution is like a professional race car driver (written in C++). The Set operations in your first solution are like a very skilled regular driver (written in JavaScript). For the distances on the LeetCode track (the size of their test arrays), the professional driver's raw speed (sort) wins, even though they have to take a slightly longer route (n log n).
// 2. The CPU Loves Predictability: Imagine finding books in a library.
//      --> The SET METHOD is like having a catalog. For each book (num), you have to look it up in the   catalog (.has(num-1)) to see if the previous one exists. You're constantly running back and forth between your list and the central catalog.
//     --> The SORT METHOD is like arranging all the books on one very long shelf in order of their serial number. To find the longest sequence, you just walk down the shelf and count. This is much faster because everything you need is right next to what you just looked at. This is what CPU caching does—it makes walking down that shelf incredibly fast.
const solution_better_different = (arr: Array<number>): number => {
  if (arr.length === 0) return 0;
  arr.sort((a, b) => a - b);
  let maxLength = 1;
  let length = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      continue;
    } else if (arr[i - 1] !== arr[i] - 1) {
      length = 1;
      continue;
    }
    length++;
    maxLength = Math.max(length, maxLength);
  }
  return maxLength;
};
