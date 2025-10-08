/* Find Common Characters

Given a string array words, return an array of all characters that show up in all strings within the words (including 
duplicates). You may return the answer in any order.
*/

// TC = O(N * M) - N is number of words and M is average length of each word
// SC = O(1) - since we are only dealing with lowercase letters
const solution_better = (words: string[]): string[] => {
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

  let tmp: string[] = [];
  for (const [key, value] of baseHashMap) {
    for (let i = 0; i < value; i++) {
      tmp.push(key);
    }
  }
  return tmp;
};

console.log(solution_better(["cool", "lock", "cook"]));

const solution_optimal = (words: string[]): string[] => {
  let res: string[] = [];

  for (let char of words[0]) {
    if (words.every((el) => el.includes(char))) {
      res.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }
  return res;
};

console.log(solution_optimal(["cool", "lock", "cook"]));
