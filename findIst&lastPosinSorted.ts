// TC = O(n)
// SC = O(1)
const solution_brute_force = (
  nums: Array<number>,
  target: number
): Array<number> => {
  let res = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res[0] = i;
      res[1] = i + 1;
      break;
    }
  }
  return res;
};
// console.log(solution_brute_force([], 0));

// TC = O(n)
// SC = O(1)

const find_first_occurence = (nums: Array<number>, target: number): number => {
  let low = 0,
    high = nums.length - 1;
  let firstPos = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // Search the left portion of the array.
    if (nums[mid] === target) {
      firstPos = mid;
      high = mid - 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return firstPos;
};
const find_last_occurence = (nums: Array<number>, target: number): number => {
  let low = 0,
    high = nums.length - 1;
  let lastPos = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // Search the right portion of the array.
    if (nums[mid] === target) {
      lastPos = mid;
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return lastPos;
};
const solutin_optimal = (
  nums: Array<number>,
  target: number
): Array<number> => {
  let firstPos = find_first_occurence(nums, target);
  if (firstPos === -1) return [-1, -1];
  let lastPos = find_last_occurence(nums, target);
  return [firstPos, lastPos];
};

console.log(solutin_optimal([5, 7, 8, 8, 8, 10], 8));
