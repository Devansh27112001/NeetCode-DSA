// DESCRIPTION : Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.

// TC = O(n^3)
// SC = O(n^2)
const solution_brute_force = (arr: Array<number>): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];
  const seenTriplets = new Set<string>();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          const key = `${[arr[i], arr[j], arr[k]].sort((a, b) => a - b)}`;
          if (!seenTriplets.has(key)) {
            solution.push([arr[i], arr[j], arr[k]]);
          }
          seenTriplets.add(key);
        }
      }
    }
  }
  return solution;
};

// console.log(solution_brute_force([-1, 0, 1, 2, -1, -4]));

const solution_optimal = (arr: Array<number>): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];
  const seenTriplets = new Set<string>();

  for (let i = 0; i < arr.length; i++) {
    // TWO SUM APPROACH - The target will be the -arr[current element at index i]
    let target = -arr[i];
    const hashMap = new Map<number, number>();
    for (let j = i + 1; j < arr.length; j++) {
      let diff = target - arr[j];
      if (hashMap.has(diff)) {
        const key = `${[arr[i], diff, arr[j]].sort((a, b) => a - b)}`;
        if (!seenTriplets.has(key)) {
          solution.push([arr[i], diff, arr[j]]);
        }
        seenTriplets.add(key);
      }
      hashMap.set(arr[j], j);
    }
  }
  console.log(solution);
  return solution;
};
solution_optimal([-1, 0, 1, 2, -1, -4]);
