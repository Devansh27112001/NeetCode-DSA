// DESCRIPTION: Return all the numbers in the array whose right side has smaller numbers than itself
// TC = O(n^2) => Worst-case when the array is sorted in descending order
const leadersInArray = (nums: Array<number>): Array<number> | number => {
  const leaders: Array<number> = [];
  for (let i = 0; i < nums.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        console.log(nums[i], nums[j]);
        isLeader = false;
        break;
      }
    }
    isLeader && leaders.push(nums[i]);
  }
  return leaders.length > 0 ? leaders : -1;
};

// console.log(leadersInArray([10, 22, 12, 3, 0, 6]));

//
const leadersInArray_optimal = (nums: Array<number>): Array<number> => {
  const leaders: Array<number> = [];
  let maxOnRight = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > maxOnRight) {
      leaders.push(nums[i]);
      maxOnRight = Math.max(maxOnRight, nums[i]);
    }
  }
  return leaders;
};

console.log(leadersInArray_optimal([10, 22, 12, 3, 0, 6]));
