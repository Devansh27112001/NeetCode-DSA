// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:
// 0 <= i, j, k, l < n;
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0;

// TC = O(n ^ 4)
// SC = O(1)
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

// console.log(solution_brute_force([0], [0], [0], [0]));

// TC = O(n ^ 2)
// SC = O(n ^ 2)
// The arrays are of n length. You can add upto n * n unique entries in the map while doing the first nested loop. For example, let a = [1,2] and b = [4,6]. The keys will be 4,7,6,8.
const solution_optimal = (
  nums1: Array<number>,
  nums2: Array<number>,
  nums3: Array<number>,
  nums4: Array<number>
): number => {
  let count = 0;
  let hashMap = new Map<number, number>();

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let curr = nums1[i] + nums2[j];

      hashMap.set(curr, (hashMap.get(curr) || 0) + 1);
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let curr = nums3[i] + nums4[j];

      if (hashMap.has(-curr)) {
        count += hashMap.get(-curr)!;
      }
    }
  }
  return count;
};

console.log(solution_optimal([2, 2], [2, 2], [-2, -2], [-2, -2]));
