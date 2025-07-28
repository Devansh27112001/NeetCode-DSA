// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:
// 0 <= i, j, k, l < n;
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0;

const solution_brute_force = (
  nums1: Array<number>,
  nums2: Array<number>,
  nums3: Array<number>,
  nums4: Array<number>
): number => {
  let count = 0;
  let n = nums1.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
          if (nums1[i] + nums2[j] + nums3[k] + nums4[l] === 0) {
            count++;
          }
        }
      }
    }
  }

  return count;
};

console.log(solution_brute_force([0], [0], [0], [0]));
