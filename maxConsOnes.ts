const maxConsOnes = (nums: Array<number>): number => {
  let maxOnes = 0;
  let curr = 0;
  for (const item of nums) {
    if (item === 1) {
      curr++;
    } else {
      maxOnes = Math.max(maxOnes, curr);
      curr = 0;
    }
  }

  return maxOnes;
};

console.log(maxConsOnes([1, 1, 0, 1, 1, 1, 0, 1, 1]));
