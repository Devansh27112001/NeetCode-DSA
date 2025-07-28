// TC => O(2 * n * m) ~ O(n * m) => n = rows and m = columns
// SC => O(2 * n * m) ~ O(n * m)

const solution_brute_force = (
  arr: Array<Array<number>>
): Array<Array<number>> => {
  let rowZero = new Set<number>();
  let colZero = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        rowZero.add(i);
        colZero.add(j);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (rowZero.has(i) || colZero.has(j)) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
};

// console.log(
//   solution_brute_force([
//     [1, 1, 1, 1],
//     [1, 0, 1, 1],
//     [1, 0, 0, 1],
//     [1, 0, 0, 1],
//   ])
// );

// TC = O(n*m)
// SC = O(1)
const solution_optimal = (arr: Array<Array<number>>): Array<Array<number>> => {
  let col0 = 1;
  // Mark the first index of each row and column => 0 if there is a 0 at any index for that particular row or column. NOTE: if the first column or 0th index column has zero in it, mark col0 = 0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 0) {
        arr[row][0] = 0;
        if (col === 0) {
          col0 = 0;
        } else {
          arr[0][col] = 0;
        }
      }
    }
  }

  // Apart from 0th row and 0th column mark every element to zero if [row][0] === 0 || [0][col] === 0
  for (let row = 1; row < arr.length; row++) {
    for (let col = 1; col < arr[row].length; col++) {
      if (arr[row][col] !== 0) {
        if (arr[row][0] === 0 || arr[0][col] === 0) {
          arr[row][col] = 0;
        }
      }
    }
  }

  // If [0][0] => 1st elemt is zero, the first row will be zero.
  if (arr[0][0] === 0) {
    for (let col = 0; col < arr[0].length; col++) {
      arr[0][col] = 0;
    }
  }

  // If variable col0 = 0, the first column will be zero.
  if (col0 === 0) {
    for (let row = 0; row < arr.length; row++) {
      arr[row][0] = 0;
    }
  }
  return arr;
};

console.log(
  solution_optimal([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
  ])
);
