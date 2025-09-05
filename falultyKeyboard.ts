/** FAULTY KEYBOARD
 Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

Return the final string that will be present on your laptop screen.
 */
const solution_optimal = (s: string): string => {
  let resArray: Array<string> = [];

  for (const char of s) {
    if (char !== "i") {
      resArray.push(char);
    } else {
      resArray.reverse();
    }
  }

  return resArray.join("");
};

console.log(solution_optimal("string"));
