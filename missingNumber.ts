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

const missingNumber_Xor = (nums: Array<number>): number => {
  let XOR_1 = 0;
  for (let i = 0; i <= nums.length; i++) {
    XOR_1 = XOR_1 ^ i;
  }

  let XOR_2 = 0;
  for (const item of nums) {
    XOR_2 ^= item;
  }

  return XOR_1 ^ XOR_2;
};

console.log(missingNumber_Xor([3, 0, 1]));
