// DESCRIPTION: Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

const solution_brute_force = (
  nums1: Array<number>,
  nums2: Array<number>
): Array<number> => {
  let res: Array<number> = [];
  let interSet = new Set<number>();
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      if (num1 === num2) {
        interSet.add(num1);
      }
    }
  }
  return [...interSet];
};
// console.log(solution_brute_force([4, 9, 5], [9, 4, 9, 8, 4]));

const solution_optimal = (
  nums1: Array<number>,
  nums2: Array<number>
): number[] => {
  const nums1Set = new Set<number>(nums1);
  const nums2Set = new Set<number>(nums2);
  let intersectionArray: Array<number> = [];

  for (const num of nums1Set) {
    if (nums2Set.has(num)) {
      intersectionArray.push(num);
    }
  }

  return intersectionArray;
};
console.log(solution_optimal([4, 9, 5], [9, 4, 9, 8, 4]));

// Two Pointer approach
const solution_optimal_2 = (
  nums1: Array<number>,
  nums2: Array<number>
): number[] => {
  nums1 = [...new Set(nums1)].sort((a, b) => a - b);
  nums2 = [...new Set(nums2)].sort((a, b) => a - b);
  let res: Array<number> = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return res;
};

console.log(solution_optimal_2([4, 9, 5], [9, 4, 9, 8, 4]));
