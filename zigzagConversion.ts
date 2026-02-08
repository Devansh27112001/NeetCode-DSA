/* ZIGZAG CONVERSION
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
*/

// TC = O(n)
// SC = O(n)
const solution_optimal = (s: string, numRows: number): string => {
  if (numRows === 1) return s;
  let res: Array<Array<string>> = Array.from({ length: numRows }, () => []);
  let k = 0,
    i = 0;
  let goingDown = true;
  while (i < s.length) {
    res[k].push(s[i]);
    if (goingDown) {
      k++;
      if (k === numRows - 1) goingDown = false;
    } else {
      k--;
      if (k === 0) goingDown = true;
    }
    i++;
  }
  return res.flat().join("");
};

// TC = O(n)
// SC = O(n)
const solution_optimal_2 = (s: string, numRows: number): string => {
  if (numRows === 1) return s;
  let resArray = new Array(numRows).fill("");
  let k = 0;
  let goingDown = true;
  for (const char of s) {
    resArray[k] += char;

    if (k === numRows - 1) goingDown = false;
    else if (k === 0) goingDown = true;

    k += goingDown ? 1 : -1;
  }
  return resArray.join("");
};
