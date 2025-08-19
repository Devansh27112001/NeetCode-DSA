function isValidSudoku(board: Array<Array<string>>): boolean {
  let rows: Set<string> = new Set();

  let columns: Array<Set<string>> = Array.from(
    { length: 9 },
    () => new Set<string>()
  );
  let squares: Map<string, Set<string>> = new Map();
  for (let m = 0; m <= 8; m++) {
    for (let n = 0; n <= 8; n++) {
      const cellValue = board[m][n];
      if (cellValue === ".") continue;

      // ROW CHECK
      if (rows.has(cellValue)) return false;
      rows.add(cellValue);

      // COLUMN CHECK
      if (columns[n].has(cellValue)) return false;
      columns[n].add(cellValue);

      // SQUARE CHECK
      const squareKey = `${Math.floor(m / 3)},${Math.floor(n / 3)}`;
      if (!squares.has(squareKey)) squares.set(squareKey, new Set<string>());
      if (squares.get(squareKey)?.has(cellValue)) return false;
      squares.get(squareKey)?.add(cellValue);
    }
    rows.clear();
  }
  return true;
}

// console.log(
//   isValidSudoku([
//     [".", ".", "4", ".", ".", ".", "6", "3", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["5", ".", ".", ".", ".", ".", ".", "9", "."],
//     [".", ".", ".", "5", "6", ".", ".", ".", "."],
//     ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
//     [".", ".", ".", "7", ".", ".", ".", ".", "."],
//     [".", ".", ".", "5", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   ])
// );
