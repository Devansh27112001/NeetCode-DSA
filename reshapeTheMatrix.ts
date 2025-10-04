/* Reshape the Matrix
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix. 
*/

const solution_better = (
  mat: Array<Array<number>>,
  r: number,
  c: number
): Array<Array<number>> => {
  if (r * c !== mat.length * mat[0].length) return mat;
  let res = Array.from({ length: r }, () => new Array(c).fill(0));
  let tmpArray = mat.flat();
  let i = 0;
  for (let row = 0; row < res.length; row++) {
    for (let col = 0; col < res[0].length; col++) {
      res[row][col] = tmpArray[i++];
    }
  }
  return res;
};

console.log(
  solution_better(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    3
  )
);
