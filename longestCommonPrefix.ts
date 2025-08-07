// DESCRIPTION: Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// TC = O(n * m), where m is the strung with min length.
// SC = O(1)
const solution_optimal = (strs: Array<string>): string => {
  let res = "";
  let minLength = Infinity;
  for (const str of strs) {
    minLength = Math.min(minLength, str.length);
  }

  for (let i = minLength; i > 0; i--) {
    res = strs[0].slice(0, i);
    for (let j = 1; j < strs.length; j++) {
      const comparePrefixString = strs[j].slice(0, i);
      if (res !== comparePrefixString) {
        res = "";
        break;
      }
    }
    if (res !== "") {
      return res;
    }
  }
  return res;
};

console.log(solution_optimal(["dog", "racecar", "car"]));
