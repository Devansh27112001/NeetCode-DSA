// BRUTE FORCE
const mergeArrays = (
  nums1: Array<number>,
  m: number,
  nums2: Array<number>,
  n: number
) => {
  nums1 = nums1
    .filter((num) => num !== 0)
    .concat(nums2)
    .sort((a, b) => a - b);
  console.log(nums1);
};

mergeArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

const mergeArraysTwoPointers = (
  nums1: Array<number>,
  m: number,
  nums2: Array<number>,
  n: number
) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
    i--;
  }
};

mergeArraysTwoPointers([2, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
