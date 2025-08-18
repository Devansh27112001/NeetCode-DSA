const solution_optimal = (nums: Array<Array<number>>): Array<number> => {
  let res: Array<number> = [];
  let numMap = new Map<number, number>();
  nums.forEach((num) => {
    for (let i = 0; i < num.length; i++) {
      numMap.set(num[i], (numMap.get(num[i]) || 0) + 1);
    }
  });

  for (const [key, value] of numMap.entries()) {
    if (value === nums.length) {
      res.push(key);
    }
  }

  return res;
};
// console.log(
//   solution_optimal([
//     [3, 1, 2, 4, 5],
//     [1, 2, 3, 4],
//     [3, 4, 5, 6],
//   ])
// );

const solution_optimal_2 = (nums: Array<Array<number>>): Array<number> => {
  let first = new Set(nums[0]);

  for (let i = 0; i < nums.length; i++) {
    let current = new Set(nums[i]);
    first = new Set([...first].filter((val) => current.has(val)));
  }
  return [...first].sort((a, b) => a - b);
};

console.log(
  solution_optimal_2([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
