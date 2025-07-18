// // DESCRIPTION:
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the the array follows the given conditions:
// 1. Every consecutive pair of integers have opposite signs.
// 2. For all integers with the same sign, the order in which they were present in nums is preserved.
// 3. The rearranged array begins with a positive integer.

// BRUTE FORCE:
// TC = O(n)
// SC = O(n/2) + O(n/2) = O(n)
const rearrangeArray_bruteForce = (
  nums: Array<number>
): Array<number> | number => {
  const posArray: Array<number> = [];
  const negArray: Array<number> = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= 0) {
      posArray.push(nums[i]);
    } else {
      negArray.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i += 2) {
    nums[i] = posArray.pop()!;
    nums[i + 1] = negArray.pop()!;
  }
  return nums;
};
// console.log(rearrangeArray_bruteForce([3, 1, -2, -5, 2, -4]));

// BETTER - In terms of space
// Runs a little slower than above algoritnm if:
//          const ansArray = new Array(nums.length);
// TC = O(n)
// SC = O(n)
const rearrangeArray_better = (nums: Array<number>): Int32Array | number => {
  const ansArray = new Int32Array(nums.length);
  let pos = 0;
  let neg = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      ansArray[pos] = nums[i];
      pos += 2;
    } else {
      ansArray[neg] = nums[i];
      neg += 2;
    }
  }
  return ansArray;
};
// console.log(rearrangeArray_better([3, 1, -2, -5, 2, -4]));

// IInd variant => When the no. of +ves and -ves are not same
const rearrangeArray_bruteForceVariantTwo = (
  nums: Array<number>
): Array<number> | number => {
  const posArray: Array<number> = [];
  const negArray: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      posArray.push(nums[i]);
    } else {
      negArray.push(nums[i]);
    }
  }
  posArray;
  negArray;
  if (posArray.length > negArray.length) {
    for (let i = 0; i < negArray.length; i++) {
      nums[2 * i] = posArray[i];
      nums[2 * i + 1] = negArray[i];
    }

    let index = 2 * negArray.length;
    for (let j = negArray.length; j < posArray.length; j++) {
      nums[index] = posArray[j];
      index++;
    }
  } else {
    for (let i = 0; i < posArray.length; i++) {
      nums[2 * i] = posArray[i];
      nums[2 * i + 1] = negArray[i];
    }
    let index = 2 * posArray.length;
    for (let j = 2 * posArray.length; j < negArray.length; j++) {
      nums[index] = negArray[j];
      index++;
    }
  }

  nums;
  return nums;
};
console.log(rearrangeArray_bruteForceVariantTwo([3, 1, 2, 4, -2, -5]));
