// Given a string s, find the length of the longest substring without duplicate characters.
const solution_better = (strs: string): number => {
  let maxLen = 1;
  let strSet = new Set<string>();
  for (let i = 0; i < strs.length - 1; i++) {
    let length = 1;
    strSet.add(strs[i]);
    for (let j = i + 1; j < strs.length; j++) {
      if (strSet.has(strs[j])) {
        strSet.clear();
        break;
      }
      length++;
      strSet.add(strs[j]);
    }
    maxLen = Math.max(length, maxLen);
  }
  return maxLen;
};
