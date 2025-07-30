// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

// TC = O(n ^ 2)
// SC = O(1)
const solution_bruteforce = (nums: Array<number>, k: number): number => {
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
};

// console.log(solution_bruteforce([4, 5, 0, -2, -3, 1], 5));

// INTUITION: Store the remainder: freqForthatRemainder in the hashMap.
// TC = O(n)
// SC = O(k) , k = distinct remainders
const solution_optimal = (nums: Array<number>, k: number): number => {
  let count = 0;
  let remFreq = new Map<number, number>();
  remFreq.set(0, 1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remainder = sum % k;
    let prev_reamin_occu = remFreq.get(remainder) || 0;
    count += prev_reamin_occu;
    remFreq.set(remainder, (remFreq.get(remainder) || 0) + 1);
  }
  count;
  return count;
};

solution_optimal([4, 5, 0, -2, -3, 1], 5);
