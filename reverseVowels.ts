/*REVERSE VOWELS
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

const solution_optimal = (s: string): string => {
  let sArray: Array<string> = s.split("");
  let low = 0,
    high = sArray.length - 1;
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  while (low < high) {
    while (low < high && !vowelsSet.has(sArray[low].toLowerCase())) low++;
    while (low < high && !vowelsSet.has(sArray[high].toLowerCase())) high--;
    [sArray[low], sArray[high]] = [sArray[high], sArray[low]];
    low++;
    high--;
  }
  return sArray.join("");
};

console.log(solution_optimal("leetcode"));
