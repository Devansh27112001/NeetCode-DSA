/* UGLY NUMBER:
An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.
Given an integer n, return true if n is an ugly number.
*/

const solution_brute_force = (n: number): boolean => {
  const uglySet: Set<number> = new Set([
    1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36, 40,
    45, 48, 50, 54, 60, 64, 72, 75, 80, 81, 90, 96, 100, 108, 120, 125, 128,
    135, 144, 150, 160, 162, 180, 192, 200, 216, 225, 240, 243, 250, 256, 270,
    288, 300, 320, 324, 360, 375, 384, 400, 405, 432, 450, 480, 486, 500,
    2123366400,
  ]);
  return uglySet.has(n) ? true : false;
};

const solution_optimal = (n: number): boolean => {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
};
