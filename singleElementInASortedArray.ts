// DESCRIPTION :You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.
// Your solution must run in O(log n) time and O(1) space.

const solution_brute_force = (nums: Array<number>): number => {
  for (let i = 0; i < nums.length; i += 2) {
    let count = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
  return -1;
};

const solution_better = (nums: Array<number>): number => {
  let numMap = new Map<number, number>();
  for (const num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  for (const [key, value] of numMap.entries()) {
    if (value === 1) {
      return key;
    }
  }
  return -1;
};

const solution_better_2 = (nums: Array<number>): number => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      sum += nums[i];
    } else {
      sum -= nums[i];
    }
  }
  return sum;
};
console.log(solution_better_2([3, 3, 7, 7, 10, 11, 11]));

// It was given that the solution needs to be in O(logn) => Binary search
// Observe diff. test cases to find out about the mid%2 and whether to go left side or right side.
const solution_optimal = (nums: Array<number>) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid - 1] !== nums[mid] && nums[mid + 1] !== nums[mid]) {
      return nums[mid];
    } else if (mid % 2 === 0) {
      if (nums[mid - 1] === nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid - 1] === nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
};
