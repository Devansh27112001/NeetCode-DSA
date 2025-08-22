// DESCRIPTION : Given an integer x, return true if x is a palindrome, and false otherwise.
const solution_brute_force = (x: number): boolean => {
  if (x < 0) return false;
  let str = `${x}`;
  let low = 0;
  let high = str.length - 1;

  while (low <= high) {
    if (str[low] !== str[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
};

const solution_optimal = (x: number): boolean => {
  if (x < 0) return false;
  let reversedNum: number = 0;
  let tmp: number = x;
  while (x !== 0) {
    reversedNum = reversedNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (reversedNum !== tmp) {
    return false;
  }
  return true;
};

console.log(solution_optimal(124));
