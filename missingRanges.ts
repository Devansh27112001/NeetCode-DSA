// DESCRIPTION: Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.
const solution_optimal = (
  nums: Array<number>,
  { lower, upper }: { lower: number; upper: number }
): Array<string> => {
  if (nums.length === 0) return [`${lower}->${upper}`];
  let res: Array<string> = [];

  if (nums[0] - lower >= 1) {
    nums[0] - lower === 1
      ? res.push(`${lower}`)
      : res.push(`${lower}->${nums[0] - 1}`);
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      nums[i] - nums[i - 1] === 2
        ? res.push(`${nums[i] - 1}`)
        : res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }

  if (upper - nums[nums.length - 1] >= 1) {
    upper - nums[nums.length - 1] === 1
      ? res.push(`${upper}`)
      : res.push(`${nums[nums.length - 1] + 1}->${upper}`);
  }
  return res;
};

console.log(solution_optimal([0, 97], { lower: 0, upper: 99 }));
