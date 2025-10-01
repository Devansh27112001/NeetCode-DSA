/* Power of Three
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.
*/

const solution_brute = (n: number): boolean => {
  if (n > 0) {
    while (n % 3 === 0) {
      n /= 3;
    }
  }
  return n === 1;
};

const solution_optimal = (n: number): boolean => {
  return n > 0 && 1162261467 % n === 0;
};
