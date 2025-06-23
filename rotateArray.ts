const rotateArrayByOnePlace = (nums: Array<number>): Array<number> => {
  const temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums[nums.length - 1] = temp;
  return nums;
};

// console.log(rotateArrayByOnePlace([1, 2, 3, 4, 5]));

const rotateArrayByKPlaces = (
  nums: Array<number>,
  k: number
): Array<number> => {
  k = k % nums.length;
  console.log(k);
  const tmp = nums.slice(0, k);

  for (let i = k; i < nums.length; i++) {
    nums[i - k] = nums[i];
  }
  nums;
  let m = 0;
  for (let j = nums.length - k; j < nums.length; j++) {
    nums[j] = tmp[j - (nums.length - k)];
    m++;
  }
  return nums;
};

console.log(rotateArrayByKPlaces([1, 2, 3, 4, 5, 7, 8, 9], 6));
