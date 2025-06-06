function isValidSudoku(board: Array<Array<string>>): boolean {
  let rowsObject: Map<string, number> = new Map();
  let columnObject: Map<string, number> = new Map();

  for (let m = 0; m <= 8; m++) {
    for (let n = 0; n <= 8; n++) {
      // Row check
      if (board[m][n] !== "." && rowsObject.has(board[m][n])) return false;
      else {
        rowsObject.set(board[m][n], 1);
      }
      // Column Check
      if (board[n][m] !== "." && columnObject.has(board[n][m])) return false;
      else {
        columnObject.set(board[n][m], 1);
      }
    }
    console.log(rowsObject, columnObject);
    rowsObject.clear();
    columnObject.clear();
  }

  return true;
}

console.log(
  isValidSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
