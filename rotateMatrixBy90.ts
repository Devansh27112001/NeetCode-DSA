// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// TC = O(n^2)
// SC = O(n^2)
const solution_brute_force = (
  arr: Array<Array<number>>
): Array<Array<number>> => {
  // TC & SC = O(n^2)
  let tmpArray = Array.from({ length: arr.length }, () =>
    Array.from({ length: arr.length }, () => 0)
  );

  // TC = O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      tmpArray[j][arr.length - 1 - i] = arr[i][j];
    }
  }
  return tmpArray;
};

// console.log(
//   solution_brute_force([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );

const solution_optimal = (arr: Array<Array<number>>): Array<Array<number>> => {
  // STEP 1: Transpose the matrix => (0,1) <-> (1,0) , (0,2) <-> (2,0) , (0,3) <-> (3,0)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }

  // STEP 2: Reverse each row.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length / 2; j++) {
      [arr[i][j], arr[i][arr.length - 1 - j]] = [
        arr[i][arr.length - 1 - j],
        arr[i][j],
      ];
    }
  }
  return arr;
};

console.log(
  solution_optimal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
