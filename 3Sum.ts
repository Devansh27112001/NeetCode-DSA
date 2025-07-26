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
  return solution;
};
// solution_optimal([-1, 0, 1, 2, -1, -4]);

// TC = O(nlogn) + O(n^2) ~ O(n^2)
// SC = O(1)
const solution_optimal_2 = (arr: Array<number>): Array<Array<number>> => {
  const solution: Array<Array<number>> = [];
  // SORT THE ARRAY
  arr.sort((a, b) => a - b);

  // IF THE FIRST ELEMENT IS > 0, THE SUM WILL ALWAYS BE > 0 AS WE HAVE SORTED THE ARRAY.
  if (arr[0] > 0) return solution;
  for (let i = 0; i < arr.length; i++) {
    // FOR i AND i - 1 ELEMENTS BEING THE SAME, SKIP THE CURRENT ELEMENT. FOR EXAMPLE : [-4 , -1 , -1, ......]
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    // IF, WHILE ITERATING, WE GET ANY ELEMENT > 0 , WE CAN STOP ITERTING THE ARRAY.
    if (i > 0 && arr[i] > 0) {
      break;
    }

    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum === 0) {
        solution.push([arr[i], arr[j], arr[k]]);
        j++;

        // FOR EXAMPLE: [-4, -1 , -1, ........]
        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return solution;
};

solution_optimal_2([-1, 0, 1, 2, -1, -4]);
