// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

const solution_optimal = (nums: Array<number>): number => {
  let firstMax = Number.MAX_SAFE_INTEGER;
  let secondMax = Number.MAX_SAFE_INTEGER;
  let thirdMax = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    if (num === firstMax || num === secondMax || num === thirdMax) continue;
    if (num > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num > thirdMax) {
      thirdMax = num;
    }
  }
  return thirdMax === Number.MIN_SAFE_INTEGER ? firstMax : thirdMax;
};
