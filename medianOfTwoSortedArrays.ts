/* Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
*/

// TC = O((n+m)log(n+m))
// SC = O(n+m)
const solution_brute = (nums1: Array<number>, nums2: Array<number>): number => {
  let median = 0;
  let tmpArray: Array<number> = [...nums1, ...nums2].sort((a, b) => a - b);
  if (tmpArray.length % 2 === 0) {
    console.log("");
    let mid = tmpArray.length / 2;
    median = (tmpArray[mid - 1] + tmpArray[mid]) / 2;
  } else {
    console.log("");
    median = tmpArray[Math.floor(tmpArray.length / 2)];
  }
  return median;
};

console.log(solution_brute([1, 3], [2, 4]));

// TC = O(n+m)
// SC = O(1)
const solution_better = (
  nums1: Array<number>,
  nums2: Array<number>
): number => {
  let count: number = 0;
  let n = nums1.length + nums2.length;
  let index_2 = Math.floor(n / 2);
  let index_1 = index_2 - 1;
  let ele_ind_1 = -1;
  let ele_ind_2 = -1;
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      if (count === index_1) ele_ind_1 = nums1[i];
      if (count === index_2) ele_ind_2 = nums1[i];
      i++;
      count++;
    } else {
      if (count === index_1) ele_ind_1 = nums2[j];
      if (count === index_2) ele_ind_2 = nums2[j];
      j++;
      count++;
    }
  }

  while (i < nums1.length) {
    if (count === index_1) ele_ind_1 = nums1[i];
    if (count === index_2) ele_ind_2 = nums1[i];
    i++;
    count++;
  }

  while (j < nums2.length) {
    if (count === index_1) ele_ind_1 = nums2[j];
    if (count === index_2) ele_ind_2 = nums2[j];
    j++;
    count++;
  }

  if ((nums1.length + nums2.length) % 2 === 0) {
    return (ele_ind_1 + ele_ind_2) / 2;
  } else {
    return ele_ind_2;
  }
};

console.log(solution_better([2, 3, 6, 15], [1, 3, 4, 7, 10, 12]));

// TC = O(log(min(n,m)))
// SC = O(1)
const solution_optimal = (
  nums1: Array<number>,
  nums2: Array<number>
): number => {
  let n1 = nums1.length;
  let n2 = nums2.length;
  if (n1 > n2) return solution_optimal(nums2, nums1);
  let left = Math.floor((n1 + n2 + 1) / 2);
  let low = 0;
  let high = n1;

  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;
    let l1 = Number.MIN_SAFE_INTEGER;
    let l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER;
    let r2 = Number.MAX_SAFE_INTEGER;
    if (mid1 < n1) r1 = nums1[mid1];
    if (mid2 < n2) r2 = nums2[mid2];
    if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];
    if (l1 <= r2 && l2 <= r1) {
      if ((n1 + n2) % 2 === 0) {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      } else {
        return Math.max(l1, l2);
      }
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return 0;
};

console.log(solution_optimal([4, 5, 6, 8, 9], []));
