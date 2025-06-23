const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(
  nums
    .splice(0, 4)
    .reverse()
    .concat(...nums.reverse())
    .reverse()
);
