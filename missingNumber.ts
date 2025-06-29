// BRUTE FORCE : [0 , n = length of the array]
const missingNumber_HashMap = (nums: Array<number>): number => {
  let i = 0;
  const hashSet = new Map<number, number>();
  while (i <= nums.length) {
    hashSet.set(i, i);
    i++;
  }
  console.log(hashSet);

  for (const item of nums) {
    if (hashSet.has(item)) {
      hashSet.delete(item);
    }
  }
  const missing = hashSet.values().next().value;
  console.log(missing);
  return 0;
};

const missingNumber_Set = (nums: Array<number>): number => {
  const num_set = new Set<number>(nums); // TC = O(n)
  for (let i = 0; i <= nums.length; i++) {
    if (!num_set.has(i)) {
      return i;
    }
  } // TC = O(n)

  // Total TC = O(2n), SC = O(1) + O(n) = O(n)
  return -1;
};

const missingNumber_HashArray = (nums: Array<number>) => {
  const hashArray = Array.from({ length: nums.length + 1 }, () => 0);
  for (const item of nums) {
    hashArray[item] = 1;
  }

  const missing = hashArray.findIndex((element) => element === 0);
  return missing;
};

// -----------------------------------------OPTIMAL----------------------------
// VERY CLEVER WAY TO DO IT
// TC = O(n)
// SC - O(1)
const missingNumber_math = (nums: Array<number>): number => {
  let num_sum = (nums.length * (nums.length + 1)) / 2;
  for (const item of nums) {
    num_sum -= item;
  }

  return num_sum;
};

console.log(missingNumber_math([3, 0, 1]));

// Here in the problem statement the numbers will be in the range of [0,n] and n will be the length of the array
// However, in another version, the range is [1,N] and N will be another input to the array. The for loop in the below function goes from 0 to (length of array)-1, so we have to do XOR_1 = XOR ^ N. Here n and N are different. N is the range and n = length of the array.
const missingNumber_Xor = (nums: Array<number>): number => {
  let XOR_1 = 0;
  let XOR_2 = 0;

  for (let i = 0; i < nums.length; i++) {
    XOR_1 ^= i + 1;
    XOR_2 ^= nums[i];
  }

  return XOR_1 ^ XOR_2;
};

console.log(missingNumber_Xor([3, 0, 1]));
