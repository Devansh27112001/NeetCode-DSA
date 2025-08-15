// DESCRIPTION :
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// TC = O(n)
// SC = O(n)
const solution_optimal = (digits: Array<number>): Array<number> => {
  let res: Array<number> = [];
  let sum = digits[digits.length - 1] + 1;

  if (sum === 10) {
    let carry = 1;
    res.push(0);
    for (let i = digits.length - 2; i >= 0; i--) {
      sum = digits[i] + carry;
      carry = 0;
      if (sum === 10) {
        carry = 1;
        res.push(0);
      } else {
        res.push(sum);
      }
    }

    if (carry === 1) {
      res.push(1);
    }
    res.reverse();
  } else {
    for (let i = 0; i < digits.length - 1; i++) {
      res.push(digits[i]);
    }
    res.push(sum);
  }
  return res;
};
// console.log(solution_optimal([9]));

// TC = O(n)
// SC = O(n)
const solution = (digits: Array<number>): Array<number> => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits = new Array(digits.length + 1).fill(0);
  digits[0] = 1;
  return digits;
};
console.log(solution([5, 4]));
