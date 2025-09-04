/* REVERSE STRING
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
 */

const solution_optimal = (s: Array<string>) => {
  let low: number = 0,
    high: number = s.length - 1;
  while (low < high) {
    [s[low], s[high]] = [s[high], s[low]];
    low++;
    high--;
  }
};
