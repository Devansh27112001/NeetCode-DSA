const getSecondOrderElements = (arr: Array<number>): Array<number> => {
  const n: number = arr.length;
  const secLargest = getSecondLargest(arr, n);
  const secSmallest = getSecondSmallest(arr, n);
  return [secLargest, secSmallest];
};

function getSecondLargest(array: Array<number>, n: number): number {
  let largest = array[0];
  let secLargest = -1;
  for (let i = 1; i < n; i++) {
    if (array[i] > largest) {
      secLargest = largest;
      largest = array[i];
    } else if (array[i] > secLargest && array[i] < largest) {
      secLargest = array[i];
    }
  }
  return secLargest;
}

function getSecondSmallest(array: Array<number>, n: number): number {
  let smallest = array[0];
  let secSmallest = Infinity;
  for (let i = 1; i < n; i++) {
    if (array[i] < smallest) {
      secSmallest = smallest;
      smallest = array[i];
    } else if (array[i] < secSmallest && array[i] !== smallest) {
      secSmallest = array[i];
    }
  }
  return secSmallest;
}

// console.log(getSecondLargest([1, 2, 3, 4, 5], 5));
// console.log(getSecondSmallest([5, 2, 8, 3, 1, 7], 5));
