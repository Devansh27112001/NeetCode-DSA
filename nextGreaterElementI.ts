/* Next Greater Element I:
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

// TC = O(nums1 + nums2^2)
// SC = O(nums2 + nums1)
const solution_brute = (
  nums1: Array<number>,
  nums2: number[]
): Array<number> => {
  let sol: Array<number> = [];
  let maxRnum2 = new Map<number, number>();

  for (let i = 0; i < nums2.length - 1; i++) {
    let maxFound = false;
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[i]) {
        maxRnum2.set(nums2[i], nums2[j]);
        maxFound = true;
        break;
      }

      if (!maxFound) {
        maxRnum2.set(nums2[i], -1);
      }
    }
  }
  maxRnum2.set(nums2[nums2.length - 1], -1);

  for (const num of nums1) {
    sol.push(maxRnum2.get(num)!);
  }
  return sol;
};
// console.log(solution_brute([2, 4], [1, 2, 3, 4]));

const solution_optimal = (
  nums1: Array<number>,
  nums2: number[]
): Array<number> => {
  let montonicStack: Array<number> = [];
  let nums2Map = new Map<number, number>();

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (
      montonicStack.length &&
      montonicStack[montonicStack.length - 1] <= nums2[i]
    ) {
      montonicStack.pop();
    }

    nums2Map.set(
      nums2[i],
      montonicStack.length === 0 ? -1 : montonicStack[montonicStack.length - 1]
    );
    montonicStack.push(nums2[i]);
  }

  montonicStack = [];
  for (const num of nums1) {
    montonicStack.push(nums2Map.get(num)!);
  }
  return montonicStack;
};

console.log(solution_optimal([4, 1, 2], [1, 3, 4, 2]));
