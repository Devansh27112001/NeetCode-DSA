/* RANSOM NOTE
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

// TC = O(M + N), M is the length of ransomNote and N is the length of magazine
// SC = O(K), k is the no. of unique characters in ransomNote and magazine
const solution_optimal = (ransomNote: string, magazine: string): boolean => {
  let ransomNoteMap: { [key: string]: number } = {};
  let magazinMap: { [key: string]: number } = {};

  for (const char of ransomNote) {
    ransomNoteMap[char] = (ransomNoteMap[char] || 0) + 1;
  }

  for (const char of magazine) {
    magazinMap[char] = (magazinMap[char] || 0) + 1;
  }

  for (const key of Object.keys(ransomNoteMap)) {
    if (magazinMap[key] && magazinMap[key] >= ransomNoteMap[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
// console.log(solution_optimal("aa", "ba"));

const solution_optimal_2 = (ransomNote: string, magazine: string): boolean => {
  const ransomNoteMap: { [key: string]: number } = {};

  for (const char of ransomNote) {
    ransomNoteMap[char] = (ransomNoteMap[char] || 0) + 1;
  }

  for (const char of magazine) {
    if (!ransomNoteMap[char]) continue;
    ransomNoteMap[char] > 0 && ransomNoteMap[char]--;
  }
  console.log(ransomNoteMap);
  return Object.values(ransomNoteMap).every((value) => value === 0);
};
// console.log(solution_optimal_2("aab", "baa"));

const solution_optimal__3 = (ransomNote: string, magazine: string): boolean => {
  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote[i];
    if (magazine.indexOf(letter) === -1) return false;
    magazine = magazine.replace(letter, "0");
  }
  return true;
};

console.log(solution_optimal__3("aab", "baa"));
