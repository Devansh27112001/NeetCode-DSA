// TYPES OF PROBLEMS:
// -> Given row and column number,print the element at that place.
//    ==> Use formula = (r-1)C(c-1)
// -> Print the nth row of the pascal triangle.
//    ==> Initialize prev as [1]
//    ==> Use formula = prev * (row - col + 1) / (col - 1) => push this to the array
// -> Given n , print the entire triangle.

// -----------------------TYPE 1-----------------------------
// The below function takes parameters as function solution_optimal_type1(row - 1, col - 1)
// TC = O(col)
// SC = O(1)
const solution_optimal_type1 = (row: number, col: number): number => {
  let ans: number = 1;
  // let count = 1;
  // let colFac = 1;
  // row--;
  // col--;
  // while (count <= col) {
  //   ans *= row;
  //   row--;
  //   count++;
  // }

  // while (col > 0) {
  //   colFac *= col;
  //   col--;
  // }

  for (let i = 0; i < col; i++) {
    ans *= row - i;
    ans /= i + 1;
  }

  return ans;
};
// console.log(solution_optimal_type1(3, 2));

// ---------------------TYPE 2-----------------------
// TC = O(row * col)
// SC = O(1)
const solution_brute_type2 = (row: number) => {
  for (let col = 1; col <= row; col++) {
    console.log(solution_optimal_type1(row - 1, col - 1));
  }
};

// solution_brute_type2(5);

// TC = O(row)
// SO = O(row)
const solution_optimal_type2 = (row: number): Array<number> => {
  let ansArray: Array<number> = [1];
  if (row === 1) return ansArray;
  for (let i = 2; i < row; i++) {
    let prev = ansArray[ansArray.length - 1];
    let next = (prev * (row - i + 1)) / (i - 1);
    ansArray.push(next);
  }
  ansArray.push(1);
  console.log(ansArray);
  return ansArray;
};

solution_optimal_type2(6);

// -------------------------------------------------TYPE 3-------------------------------------
// TC = O(row * row)
// SC = O(1). We are using ans array just to store the solution of the problem
// This solution is optimal according to striver but it is a suboptimal solution.
const solution_sub_optimal_type3 = (row: number): Array<Array<number>> => {
  let ans: Array<Array<number>> = [[1]];
  if (row === 1) return ans;
  for (let i = 2; i <= row; i++) {
    ans.push(solution_optimal_type2(i));
  }
  return ans;
};
// console.log(solution_sub_optimal_type3(6));

const solution_optimal_type3 = (row: number) => {
  let ans: Array<Array<number>> = [[1]];
  if (row === 1) return ans;
  for (let i = 1; i < row; i++) {
    ans.push([]);
    for (let j = 0; j <= i; j++) {
      ans[i][j] = (ans[i - 1][j - 1] || 0) + (ans[i - 1][j] || 0);
    }
  }
  // console.log(ans);
  return ans;
};

solution_optimal_type3(6);
