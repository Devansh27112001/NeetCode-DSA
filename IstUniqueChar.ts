// DESCRIPTION : Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

const solution_brute_force = (s: string): string | number => {
  for (let i = 0; i < s.length - 1; i++) {
    let unique = true;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        unique = false;
        break;
      }
    }
    if (unique) {
      return i;
    }
  }

  return -1;
};
// console.log(solution_brute_force("loveleetcode"));

const solution_optimal = (s: string): string | number => {
  let chMap = new Map();
  for (const char of s) {
    chMap.set(char, (chMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (chMap.get(s[i]) === 1) return i;
  }

  return -1;
};
// console.log(solution_optimal("description"));

// We have to subtract the ASCII value of each character by 97 => As a: 97 to z:122
// This means first is 97 - 97 = 0 and last is 122 - 97 = 25
const solution_optimal_2 = (s: string): string | number => {
  let chArray = new Array(26).fill(0);

  for (const char of s) {
    chArray[char.charCodeAt(0) - 97]++;
  }

  console.log(chArray);

  for (let i = 0; i < s.length; i++) {
    if (chArray[s.charCodeAt(i) - 97] === 1) return i;
  }
  return -1;
};
console.log(solution_optimal_2("description"));
