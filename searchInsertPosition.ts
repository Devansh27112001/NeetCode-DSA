// DESCRIPTION: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
const solution_optimal = (nums: Array<number>, target: number): number => {
  if (target < nums[0]) return 0;
  else if (target > nums[nums.length - 1]) return nums.length;
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end + 1;
};

console.log(solution_optimal([1, 3, 5, 6], 7));
