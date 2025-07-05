// DESCRIPTION: The array contains 0's, 1's and 2's only and we have to sort it.
// BRUTE FORCE: O(nlogn)
const sortTheArray_bruteforce = (nums: Array<number>): Array<number> => {
  return nums.sort((a, b) => a - b);
};

// BETTER : O(2N) => O(N) and O(1) space
// Count sort
const sortTheArray_better = (nums: Array<number>): Array<number> => {
  let count = [0, 0, 0];
  for (const number of nums) {
    number === 0 && count[0]++;
    number === 1 && count[1]++;
    number === 2 && count[2]++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (count[0] > 0) {
      nums[i] = 0;
      count[0]--;
    } else if (count[1] > 0) {
      nums[i] = 1;
      count[1]--;
    } else {
      nums[i] = 2;
      count[2]--;
    }
  }
  return nums;
};

// console.log(sortTheArray_better([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

// One pass solution - Dutch national flag algorithm
// TC: O(n)
// SC: O(1)
const sortTheArray_optimal = (nums: Array<number>): Array<number> => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      let tmp = nums[mid];
      nums[mid] = nums[low];
      nums[low] = tmp;
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      let tmp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = tmp;
      high--;
    } else {
      mid++;
    }
  }
  return nums;
};

console.log(sortTheArray_optimal([0, 1, 2, 0, 1, 2]));
