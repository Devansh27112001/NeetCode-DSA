// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// => 0 <= a, b, c, d < n
// => a, b, c, and d are distinct.
// => nums[a] + nums[b] + nums[c] + nums[d] == target
// => You may return the answer in any order.
const solution_brute_force = (
  nums: Array<number>,
  target: number
): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];
  const seenQuad = new Set<string>();
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          const sum = nums[i] + nums[j] + nums[k] + nums[l];
          const key = `${[nums[i], nums[j], nums[k], nums[l]].sort(
            (a, b) => a - b
          )}`;
          if (sum === target && !seenQuad.has(key)) {
            solution.push([nums[i], nums[j], nums[k], nums[l]]);
            seenQuad.add(key);
          }
        }
      }
    }
  }
  return solution;
};
// console.log(solution_brute_force([1, 0, -1, 0, -2, 2], 0));
