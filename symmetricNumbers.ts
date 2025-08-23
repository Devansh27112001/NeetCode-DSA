// DESCRIPTION: You are given two positive integers low and high.

// An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. Numbers with an odd number of digits are never symmetric.

// Return the number of symmetric integers in the range [low, high].

const solution_optimal = (low: number, high: number): number => {
  let count = 0;
  for (let i = low; i <= high; i++) {
    let currnum = `${i}`;
    if (currnum.length % 2 === 0) {
      let mid = currnum.length / 2;
      const leftSum = [...currnum.slice(0, mid)].reduce(
        (acc, curr) => acc + +curr,
        0
      );
      const rightSum = [...currnum.slice(mid)].reduce(
        (acc, curr) => acc + +curr,
        0
      );
      leftSum === rightSum && count++;
    }
  }
  return count;
};
