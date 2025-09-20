/* Relative Ranks
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.

*/
const solution_brute_force = (nums: Array<number>): Array<string | number> => {
  // We're asserting `nums` as `Array<string | number>` here.
  // This tells TypeScript that from this point forward, `nums` might contain strings or numbers.
  // This is necessary because we're going to assign strings ("Gold Medal") to elements
  // that were originally typed as `number`.
  const modifiableNums: Array<string | number> = nums as Array<string | number>;

  // Sorting the array in descending order.
  // This still works correctly with the original `nums` (which are numbers).
  const sortedArray = [...nums].sort((a, b) => b - a);
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], i);
  }

  for (let i = 0; i < sortedArray.length; i++) {
    let originalIndex = numMap.get(sortedArray[i])!;

    if (i === 0) {
      modifiableNums[originalIndex] = "Gold Medal";
    } else if (i === 1) {
      modifiableNums[originalIndex] = "Silver Medal";
    } else if (i === 2) {
      modifiableNums[originalIndex] = "Bronze Medal";
    } else {
      modifiableNums[originalIndex] = i + 1;
    }
  }

  return modifiableNums; // Return the modified array
};

console.log(solution_brute_force([10, 3, 8, 9, 4]));
