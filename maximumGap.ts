// DESCRIPTION: Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.

// TC = O(nlogn)
// SC = O(1)
const solution_brute_force = (nums: Array<number>): number => {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let maxGap = 0;

  for (let i = 1; i < nums.length; i++) {
    let gap = nums[i] - nums[i - 1];
    maxGap = Math.max(gap, maxGap);
  }

  return maxGap;
};
// console.log(solution_brute_force([3, 6, 9, 1]));

// HELPER FUNCTIONS
/**
 * A helper function to get the digit at a specific place value.
 * @param {number} num - The number to extract the digit from.
 * @param {number} place - The place value (0 for ones, 1 for tens, etc.).
 * @returns {number} The digit at the given place.
 */
function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * A helper function to count the number of digits in a number.
 * @param {number} num - The number to count the digits of.
 * @returns {number} The count of digits.
 */
function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

/**
 * A helper function to find the maximum number of digits among all numbers in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The maximum number of digits.
 */
function getMostDigits(arr: Array<number>): number {
  let mostDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    mostDigits = Math.max(mostDigits, digitCount(arr[i]));
  }
  return mostDigits;
}

/**
 * Sorts an array of non-negative integers using Radix Sort.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
const radixSort = (arr: Array<number>): Array<number> => {
  // EDGE CASES
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }

  let maxDigitCount = getMostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = digitBuckets.flat();
  }
  return arr;
};

const solution_optimal = (nums: Array<number>): number => {
  if (nums.length < 2) return 0;
  const sorted = radixSort(nums);
  let maxGap = 0;

  for (let i = 1; i < sorted.length; i++) {
    maxGap = Math.max(maxGap, sorted[i] - sorted[i - 1]);
  }
  return maxGap;
};

console.log(solution_optimal([170, 45, 75, 90, 802, 24, 2, 66]));
