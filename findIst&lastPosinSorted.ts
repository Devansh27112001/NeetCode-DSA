const solution_brute_force = (
  nums: Array<number>,
  target: number
): Array<number> => {
  let res = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res[0] = i;
      res[1] = i + 1;
      break;
    }
  }
  return res;
};

// console.log(solution_brute_force([], 0));
