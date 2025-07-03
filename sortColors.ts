// DESCRIPTION: The array contains 0's, 1's and 2's only and we have to sort it.
// BRUTE FORCE: O(nlogn)
const sortTheArray_bruteforce = (nums: Array<number>): Array<number> => {
  return nums.sort((a, b) => a - b);
};

// BETTER : O(2N) => O(N) and O(1) space
// Count sort
const sortTheArray_better = (nums: Array<number>): Array<number> => {
  let count_0 = 0;
  let count_1 = 0;
  let count_2 = 0;
  for (const number of nums) {
    number === 0 && count_0++;
    number === 1 && count_1++;
    number === 2 && count_2++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (count_0 > 0) {
      nums[i] = 0;
      count_0--;
    } else if (count_1 > 0) {
      nums[i] = 1;
      count_1--;
    } else {
      nums[i] = 2;
      count_2--;
    }
  }
  return nums;
};

// console.log(sortTheArray_better([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
const sortTheArray_optimal = (nums: Array<number>): Array<number> => {
  let i = 0;
  let j = nums.length - 1;
  let k = 0;
  while (k < nums.length) {
    if (nums[k] === 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      i++;
    } else if (nums[k] === 2) {
      [nums[j], nums[k]] = [nums[k], nums[j]];
      j--;
    }
    k++;
  }
  return nums;
};

console.log(sortTheArray_optimal([0, 1, 2, 0, 1, 2]));
