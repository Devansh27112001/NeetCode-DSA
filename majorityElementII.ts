// DESCRIPTION = Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// TC = O(n^2)
// SC = O(1) => We can't consider the space that we use to return the answer.
const solution_brute_force = (arr: Array<number>): Array<number> | number => {
  const majArray = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    let majElement = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (majElement === arr[j]) {
        count++;
      }
    }
    if (count > arr.length / 3) {
      majArray.add(majElement);
    }
  }
  return [...majArray];
};
// console.log(solution_brute_force([1, 2, 3]));

// TC = O(N)
// SC = O(N)
const solution_better = (arr: Array<number>): Array<number> | number => {
  let freqMap = new Map<number, number>();
  const majArray: Array<number> = [];

  for (let i = 0; i < arr.length; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
  }

  for (const [key, value] of freqMap.entries()) {
    if (value > arr.length / 3) {
      majArray.push(key);
    }
  }
  console.log(majArray);
  return majArray;
};
// solution_better([1, 1, 1, 2, 2, 3, 3, 3]);

// TC = O(N)
// SC = O(N)
const solution_betterII = (arr: Array<number>): Array<number> => {
  let freqMap = new Map<number, number>();
  const majArray = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);

    if (freqMap.get(arr[i])! > arr.length / 3) {
      majArray.add(arr[i]);
    }
  }
  return [...majArray];
};
