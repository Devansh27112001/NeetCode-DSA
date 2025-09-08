/* Remove Digit From Number to Maximize Result:

You are given a string number representing a positive integer and a character digit.

Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.
 */

const solution_optimal = (num: string, digit: string) => {
  let maxNum = BigInt(0);

  for (let i = 0; i < num.length; i++) {
    if (num[i] === digit) {
      let numAfterremoval = BigInt(num.slice(0, i) + num.slice(i + 1));
      if (numAfterremoval > maxNum) {
        maxNum = numAfterremoval;
      }
    }
  }
  return maxNum.toString();
};

console.log(solution_optimal("12343", "3"));
