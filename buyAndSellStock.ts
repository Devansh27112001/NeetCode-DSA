const buyAndSell = (nums: Array<number>): number => {
  let min = nums[0];
  let profit = 0;
  for (let i = 0; i < nums.length; i++) {
    let cost = nums[i] - min;
    profit = Math.max(cost, profit);

    // Imp Step
    min = Math.min(min, nums[i]);
  }

  return profit;
};
