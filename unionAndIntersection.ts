// TC : O(n + m)
// SC : O(n + m) => Space used by the unionArray that is returned from the function.
const unionArrays = (
  arr_1: Array<number>,
  arr_2: Array<number>
): Array<number> => {
  const arrUnion: Array<number> = [];
  const n = arr_1.length;
  const m = arr_2.length;
  let i: number = 0;
  let j: number = 0;

  while (i < n && j < m) {
    if (arr_1[i] <= arr_2[j]) {
      if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_1[i]) {
        arrUnion.push(arr_1[i]);
      }
      i++;
    } else {
      if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_2[j]) {
        arrUnion.push(arr_2[j]);
      }
      j++;
    }
  }

  while (j < m) {
    if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_2[j]) {
      arrUnion.push(arr_2[j]);
    }
    j++;
  }

  while (i < n) {
    if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_1[i]) {
      arrUnion.push(arr_1[i]);
    }
    i++;
  }
  return arrUnion;
};

// console.log(unionArrays([1, 1, 2, 3, 4, 4, 5], [2, 3, 4, 5, 6]));

const intersectionArrays = (
  a: Array<number>,
  b: Array<number>
): Array<number> => {
  const intersecArray: Array<number> = [];
  const n = a.length;
  const m = b.length;
  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    if (a[i] === b[j]) {
      if (
        intersecArray.length === 0 ||
        intersecArray[intersecArray.length - 1] !== a[i]
      ) {
        intersecArray.push(a[i]);
      }
      i++;
      j++;
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }
  return intersecArray;
};

// console.log(
//   intersectionArrays([1, 1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7])
// );

//------------------------------------------------- UNSORTED ARRAYS-----------------------------------------------
// UNIQUE INTERSECTION
const intersectionUnsortedArrayUnique = (
  a: Array<number>,
  b: Array<number>
): Array<number> => {
  const intersecArray: Array<number> = [];
  const uniqueA = new Set(a);
  for (const item of b) {
    if (uniqueA.has(item)) {
      intersecArray.push(item);
      uniqueA.delete(item);
    }
  }
  return intersecArray;
};

console.log(intersectionUnsortedArrayUnique([1, 2, 2, 1], [2, 2]));

// Find the intersection, and if a number appears k times in a and j times in b, it should appear min(k, j) times in the result"?
const intersectionUnsortedArray = (
  a: Array<number>,
  b: Array<number>
): Array<number> => {
  const intersecArray: Array<number> = [];
  const freqA = new Map<number, number>();
  for (const item of a) {
    freqA.set(item, (freqA.get(item) || 0) + 1);
  }

  for (const item of b) {
    const count: number | undefined = freqA.get(item);

    if (count && count > 0) {
      intersecArray.push(item);
      freqA.set(item, count - 1);
    }
  }

  return intersecArray;
};

console.log(intersectionUnsortedArray([1, 2, 2, 1], [2, 2]));
