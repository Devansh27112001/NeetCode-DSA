function isValidSudoku(board: Array<Array<string>>): boolean {
  let rows: Array<Set<string>> = Array.from(
    { length: 9 },
    () => new Set<string>()
  );
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
      if (rows[m].has(cellValue)) return false;
      rows[m].add(cellValue);

      // COLUMN CHECK
      if (columns[n].has(cellValue)) return false;
      columns[n].add(cellValue);

      // SQUARE CHECK
      const squareKey = `${Math.floor(m / 3)},${Math.floor(n / 3)}`;
      if (!squares.has(squareKey)) squares.set(squareKey, new Set<string>());
      if (squares.get(squareKey)?.has(cellValue)) return false;
      squares.get(squareKey)?.add(cellValue);
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
