const rotateArrayByOnePlace = (nums: Array<number>): Array<number> => {
  const temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums[nums.length - 1] = temp;
  return nums;
};

// console.log(rotateArrayByOnePlace([1, 2, 3, 4, 5]));

// TIME COMPLEXITY: O(d) + O(n-d) + O(d)
// SPACE COMPLEXITY : O(d)
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

// console.log(rotateArrayByKPlaces([1, 2, 3, 4, 5, 7, 8, 9], 6));

// TIME COMPLEXITY: O(2n)
// SPACE COMPLEXITY : O(1)
const rotateArrayByKPlacesOptimized = (nums: Array<number>, k: number) => {
  k = k % nums.length;
  const reverseArray = (arr: Array<any>, start: number, end: number) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);
  reverseArray(nums, 0, nums.length - 1);
  return nums;
};

// console.log(rotateArrayByKPlacesOptimized([1, 2, 3, 4, 5, 6, 7], 3));

const rotateRightKPlaces = (nums: Array<number>, k: number): Array<number> => {
  k %= nums.length;
  const tmp = nums.slice(-k);
  tmp;

  for (let i = nums.length - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  nums;

  for (let i = 0; i < tmp.length; i++) {
    nums[i] = tmp[i];
  }
  return nums;
};
// console.log(rotateRightKPlaces([1, 2, 3, 4, 5, 6, 7, 8], 3));

const rotateRightKPlacesOptimized = (
  nums: Array<number>,
  k: number
): Array<number> => {
  k %= nums.length;

  const reverseArray = (arr: Array<number>, start: number, end: number) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverseArray(nums, 0, nums.length - 1);
  nums;
  reverseArray(nums, 0, k - 1);
  nums;
  reverseArray(nums, k, nums.length - 1);
  nums;
  return nums;
};

console.log(rotateRightKPlacesOptimized([1, 2, 3, 4, 5, 6, 7, 8], 4));
