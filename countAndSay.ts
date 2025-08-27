/* DESCRIPTION : COUNT AND SAY

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

  countAndSay(1) = "1"
  countAndSay(n) is the run-length encoding of countAndSay(n - 1).
Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".
Given a positive integer n, return the nth element of the count-and-say sequence.
*/

/**
 * @param {string} str
 * @return {str}
 */
// 1211 => 111221
const convertStr = (str: string): string => {
  let count = 1;
  let currNum = str[0];
  let res = "";
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currNum) {
      count++;
    } else {
      res += `${count}${currNum}`;
      count = 1;
      currNum = str[i];
    }
  }
  res += `${count}${currNum}`;
  return res;
};

/**
 * @param {number} n
 * @return {string}
 */
const solution_optimal = (n: number): string => {
  if (n === 1) return "1";
  let finRes = "1";
  for (let i = 2; i <= n; i++) {
    finRes = convertStr(finRes);
  }
  return finRes;
};

// console.log(solution_optimal(5));
