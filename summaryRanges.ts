// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

const solution_optimal = (nums: Array<number>): Array<string> => {
  let res: Array<string> = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === end) {
      end = nums[i];
    } else {
      start === end ? res.push(`${start}`) : res.push(`${start}->${end}`);
      start = nums[i];
      end = nums[i];
    }
  }

  start === end ? res.push(`${start}`) : res.push(`${start}->${end}`);
  return res;
};

console.log(solution_optimal([0, 1, 2, 4, 5, 8, 9]));
