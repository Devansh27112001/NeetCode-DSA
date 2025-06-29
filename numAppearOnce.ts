const numAppearOnce = (nums: Array<number>): number => {
  return nums.reduce((acc, curr) => acc ^ curr, 0);
};

console.log(numAppearOnce([1, 2, 2, 3, 3, 4, 4, 5, 5]));
