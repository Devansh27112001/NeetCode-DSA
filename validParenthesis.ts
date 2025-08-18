//DESCRIPTION: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const solution = (str: string): boolean => {
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
  return brackStack.length === 0 ? true : false;
};

console.log(solution("(("));
