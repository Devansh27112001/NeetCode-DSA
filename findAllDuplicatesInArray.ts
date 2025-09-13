/*Find All Duplicates in an Array
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

*/

const sol_optimal = (arr: Array<number>): Array<number> => {
  let sol: Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    let num = Math.abs(arr[i]);

    if (arr[num - 1] < 0) sol.push(num);
    arr[num - 1] = -arr[num - 1];
  }
  return sol;
};
console.log(sol_optimal([4, 3, 2, 2]));
