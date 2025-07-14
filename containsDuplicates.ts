// DESCRIPTION: Given an array, return true if the array as duplicates
// TC = O(n^2)
const solution_brute_force = (arr: Array<number>): boolean => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
        break;
      }
    }
  }
  return false;
};
// console.log(solution_brute_force([1, 2, 3, 3]));

// TC = O(n)
// SC = O(n)
const solution_optimal = (arr: Array<number>): boolean => {
  const numSet = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    if (numSet.has(arr[i])) {
      return true;
    } else {
      numSet.add(arr[i]);
    }
  }
  return false;
};
// console.log(solution_optimal([1, 2, 3, 5]));

const solution_optimal_diff = (arr: Array<number>): boolean => {
  const numSet = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    if (numSet.has(arr[i])) {
      return true;
    } else {
      numSet.set(arr[i], arr[i]);
    }
  }
  return false;
};

// console.log(solution_optimal_diff([1, 2, 3]));
