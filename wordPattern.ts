/* Word Pattern
// SIMILAR TO ISISOMORPHIC

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. 

-> Specifically:
  -- Each letter in pattern maps to exactly one unique word in s.
  -- Each unique word in s maps to exactly one letter in pattern.
  -- No two letters map to the same word, and no two words map to the same letter.
*/

const solution_optimal = (s: string, word: string): boolean => {
  let wordArray: Array<string> = word.split(" ");
  if (s.length !== wordArray.length) return false;

  let charMap: { [key: string]: string } = {};
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      if (charMap[s[i]] !== wordArray[i]) {
        return false;
      }
    } else if (Object.values(charMap).includes(wordArray[i])) {
      return false;
    }
    charMap[s[i]] = wordArray[i];
  }
  return true;
};

console.log(solution_optimal("abba", "dog cat cat dog"));
