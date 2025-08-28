/* COUNT PRIMES LESS THAN n

DESCRIPTION:
Given an integer n, return the number of prime numbers that are strictly less than n.
*/

// The solution to this question needs to be memorized.
// This algorithm is called Sieve of Eratosthenes, specifically designed to count the no. of primes.
// TC = O(nloglogn)
// SC = O(n)

const solution_optimal = (n: number): number => {
  if (n < 2) return 0;
  let tmpArray: number[] = new Array(n).fill(0);
  tmpArray[0] = tmpArray[1] = 1;

  for (let i = 2; i * i < n; i++) {
    if (tmpArray[i] === 0) {
      for (let j = i * i; j < n; j += i) {
        tmpArray[j] = 1;
      }
    }
  }
  return tmpArray.filter((num) => num === 0).length;
};

console.log(solution_optimal(10));
