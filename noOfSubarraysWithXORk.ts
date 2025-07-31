const solution_optimal = (nums: Array<number>, k: number): number => {
  let count = 0;
  let xor = 0;
  // We are string the preXOR and it's frequency.
  let xorMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
    count += xorMap.get(xor) || 0;
    if (xor === k) {
      count++;
    }
    xorMap.set(xor, (xorMap.get(xor) || 0) + 1);
  }
  return count;
};

console.log(solution_optimal([4, 2, 2, 6, 4], 6));
