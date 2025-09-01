/* VALID ANAGRAM
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

const solution_optimal = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  let sMap = new Map<string, number>();
  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }

  let tMap = new Map<string, number>();
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  for (const [key, value] of sMap.entries()) {
    if (tMap.get(key) !== value) {
      return false;
    }
  }
  return true;
};
// console.log(solution_optimal("anagram", "nagaram"));

const solution_optimal_2 = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  let arr = new Array(26).fill(0);
  let base = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - base]++;
    arr[t.charCodeAt(i) - base]--;
  }

  return arr.every((num) => num === 0);
};

console.log(solution_optimal_2("anagram", "nagaram"));
