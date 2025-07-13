const solution_brute_force = (
  arr: Array<Array<number>>
): Array<Array<number>> | number => {
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
  console.log(rowZero, colZero);
  console.log(arr);
  return -1;
};

console.log(
  solution_brute_force([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
