/* Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.
 */

const solution_optimal = (s: string): number => {
  let oddCount = 0;
  let charMap: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = (charMap[s[i]] || 0) + 1;
  }

  for (const freq of Object.values(charMap)) {
    if (freq % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount > 1 ? s.length + 1 - oddCount : s.length;
};

console.log(solution_optimal("a"));
