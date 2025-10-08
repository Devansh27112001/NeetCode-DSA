/* Find Common Characters

Given a string array words, return an array of all characters that show up in all strings within the words (including 
duplicates). You may return the answer in any order.
*/

const solution_brute = (words: string[]): string[] => {
  const baseHashMap = new Map<string, number>();
  for (let char of words[0]) {
    baseHashMap.set(char, (baseHashMap.get(char) || 0) + 1);
  }

  const compareHashMap = new Map<string, number>();

  for (let i = 1; i < words.length; i++) {
    compareHashMap.clear();
    for (const char of words[i]) {
      compareHashMap.set(char, (compareHashMap.get(char) || 0) + 1);
    }
    for (const [key, value] of baseHashMap) {
      if (compareHashMap.has(key)) {
        baseHashMap.set(key, Math.min(value, compareHashMap.get(key)!));
      } else {
        baseHashMap.delete(key);
      }
    }
  }
  console.log(baseHashMap);
  return [];
};

// console.log(solution_brute(["bella", "label", "roller"]));
