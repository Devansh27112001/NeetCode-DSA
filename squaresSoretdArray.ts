// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

//Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

const solution_trivial = (nums: Array<number>): Array<number> => {
  return nums.map((num) => num * num).sort((a, b) => a - b);
};

console.log(solution_trivial([-4, -1, 0, 3, 10]));

const solution_optimal = (nums: Array<number>): Array<number> => {
  let solution: Array<number> = new Array(nums.length).fill(0);

  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      solution[i] = nums[left] ** 2;
      left++;
    } else {
      solution[i] = nums[right] ** 2;
      right--;
    }
  }
  return solution;
};

console.log(solution_optimal([-4, -1, 2, 3, 10]));
