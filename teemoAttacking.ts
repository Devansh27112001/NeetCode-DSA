/*Teemo Attacking 

Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

Return the total number of seconds that Ashe is poisoned.
*/
const solutin_brute_force = (nums: Array<number>, duration: number): number => {
  const count = 0;
  let pSet = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < duration; j++) {
      pSet.add(nums[i] + j);
    }
  }
  return pSet.size;
};
// console.log(solutin_brute_force([1, 2], 2));

const solution_optimal = (nums: Array<number>, duration: number): number => {
  let count = duration;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + duration > nums[i]) {
      count += nums[i] - nums[i - 1];
    } else {
      count += duration;
    }
  }
  return count;
};
// console.log(solution_optimal([1, 3, 4], 3));
