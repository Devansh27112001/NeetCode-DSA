const buyAndSell_bruteForce = (nums: Array<number>): number => {
  let profit = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      profit = Math.max(profit, nums[j] - nums[i]);
    }
  }

  return profit;
};

// console.log(buyAndSell_bruteForce([7, 1, 5, 3, 6, 4]));
// OPTIMAL
// TC = O(n)
// SC = O(1)
const buyAndSell_optimal = (nums: Array<number>): number => {
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
