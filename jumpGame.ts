/** JUMP GAME
DESCRIPTION: 
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
 */

// TC = O(2^n)
// TC = O(n)
const solution_brute_force = (nums: Array<number>): boolean => {
  function canReachEnd(position: number) {
    // Base case 1: If we have reached or passed the last index, we succeeded
    if (position >= nums.length - 1) {
      return true;
    }

    // Base case 2: If we are at a position with a 0 jump and not at the end, we are stuck
    if (nums[position] === 0) {
      return false;
    }

    // Try all possible jump lengths from the current position
    let maxJumpLength = nums[position];
    for (let i = 1; i <= maxJumpLength; i++) {
      // Recursively check if we can reach the end from the next position
      if (canReachEnd(position + i)) return true;
    }
    // If no path from the current position leads to the end, return false
    return false;
  }
  // Start the recursion from the first position (index 0)
  return canReachEnd(0);
};
// console.log(solution_brute_force([3, 2, 1, 0, 4]));

// TC = O(n)
// SC = O(1)
const solution_optimal = (nums: Array<number>): boolean => {
  if (nums[0] === 0) return false;
  let currDes = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    let maxJumpLength = nums[i];
    if (i + maxJumpLength >= currDes) {
      currDes = i;
    }
  }
  return currDes === 0;
};

console.log(solution_optimal([0]));
