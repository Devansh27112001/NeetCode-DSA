/* RANSOM NOTE
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

// TC = O(M + N), M is the length of ransomNote and N is the length of magazine
// SC = O(K), k is the no. of unique characters in ransomNote and magazine
const solution = (ransomNote: string, magazine: string): boolean => {
  let ransomNoteMap: { [key: string]: number } = {};
  let magazinMap: { [key: string]: number } = {};

  for (const char of ransomNote) {
    ransomNoteMap[char] = (ransomNoteMap[char] || 0) + 1;
  }

  for (const char of magazine) {
    magazinMap[char] = (magazinMap[char] || 0) + 1;
  }

  console.log(ransomNoteMap, magazinMap);
  for (const key of Object.keys(ransomNoteMap)) {
    if (magazinMap[key] && magazinMap[key] >= ransomNoteMap[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(solution("aa", "ba"));
