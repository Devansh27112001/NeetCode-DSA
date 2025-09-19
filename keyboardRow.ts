/*  Keyboard Row
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

The first row consists of the characters "qwertyuiop",
The second row consists of the characters "asdfghjkl", and
The third row consists of the characters "zxcvbnm".

*/

const solution_optimal = (words: Array<string>): Array<string> => {
  let sol: Array<string> = [];
  const keyboardRow: { [key: number]: Set<string> } = {
    1: new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]),
    2: new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]),
    3: new Set(["z", "x", "c", "v", "b", "n", "m"]),
  };

  for (let word of words) {
    let tmpword = word.toLowerCase();
    for (let i = 1; i <= 3; i++) {
      let sameRow = true;
      for (const char of tmpword) {
        if (!keyboardRow[i].has(char)) {
          sameRow = false;
          break;
        }
      }
      if (sameRow) {
        sol.push(word);
        break;
      }
    }
  }
  return sol;
};
console.log(solution_optimal(["adsdf", "sfd"]));
