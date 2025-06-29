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

// VERY CLEVER WAY TO DO IT
const missingNumber_math = (nums: Array<number>): number => {
  const num_length: number = nums.length;
  const sum = (num_length * (num_length + 1)) / 2;
  const nums_sum: number = nums.reduce((acc, curr) => acc + curr, 0);

  return sum - nums_sum;
};

console.log(missingNumber_math([3, 0, 1]));

const missingNumber_HashArray = (nums: Array<number>) => {
  const hashArray = Array.from({ length: nums.length + 1 }, () => 0);
  for (const item of nums) {
    hashArray[item] = 1;
  }

  console.log(hashArray);
  const missing = hashArray.findIndex((element) => element === 0);
  return missing;
};

console.log(missingNumber_HashArray([3, 0, 1]));
