//DESCRIPTION: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// TC = O(n^2)
// SC = O(n)
const solution_brute_force = (str: string): boolean => {
  if (str.length % 2 !== 0) return false;

  let prevLength = -1;

  // O(n/2)
  while (str.length !== prevLength) {
    prevLength = str.length;

    // O(n)
    str = str.replace("()", "");
    str = str.replace("[]", "");
    str = str.replace("{}", "");
  }
  return str.length === 0;
};
// TC = O(n)
// SC = O(n) , when the string has only opening brackets
const solution_optimal = (str: string): boolean => {
  let brackStack: Array<string> = [];
  let bracMap = { "[": "]", "{": "}", "(": ")" };
  let i = 0;
  while (i < str.length) {
    const currEle = str[i];
    if (currEle === "[" || currEle === "{" || currEle === "(") {
      brackStack.push(currEle);
    } else {
      let bracket = brackStack.pop();
      if (currEle !== bracMap[bracket!]) {
        return false;
      }
    }
    i++;
  }
  return brackStack.length === 0;
};

console.log(solution_optimal("(("));
