const solution_better = (num: number): number => {
  if (num === 0) return 0;
  while (Math.floor(num / 10) !== 0) {
    let firstDigit = Math.floor(num / 10);
    let secondDigit = num % 10;
    num = firstDigit + secondDigit;
  }

  return num;
};

console.log(solution_better(36));

const solution_optimal = (num: number): number => {
  if (num === 0) return 0;
  return 1 + ((num - 1) % 9);
};
