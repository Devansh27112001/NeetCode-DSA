// DESCRIPTION:Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1. After doing so, return the array.

const solution_optimal = (arr: Array<number>): Array<number> => {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    max = Math.max(curr, max);
  }
  return arr;
};
