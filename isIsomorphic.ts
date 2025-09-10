/* ISOMORPHIC STRINGS

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */

const solution_optimal = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  const charMap: { [key: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      if (charMap[s[i]] !== t[i]) {
        return false;
      }
    } else if (Object.values(charMap).includes(t[i])) {
      return false;
    }
    charMap[s[i]] = t[i];
  }
  return true;
};

console.log(solution_optimal("badc", "baba"));
