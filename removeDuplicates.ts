const removeDuplicates = (nums: Array<number>): number => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return i + 1;
};
