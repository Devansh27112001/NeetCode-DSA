//DESCRIPTION: Given a string s, return the longest palindromic substring in s.

const isPalindrome = (str: string): boolean => {
  let low = 0,
    high = str.length - 1;

  while (low <= high) {
    if (str[low] !== str[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
};

// console.log(isPalindrome("abccba"));
const solution_brute_force = (str: string): string => {
  let longestPalindrome = "";

  for (let i = 0; i < str.length; i++) {
    let subString: string = str[i];
    for (let j = i + 1; j < str.length; j++) {
      subString += str[j];
      if (isPalindrome(subString)) {
        if (subString.length > longestPalindrome.length) {
          longestPalindrome = subString;
        }
      }
    }
  }
  return longestPalindrome;
};

console.log(solution_brute_force("babad"));
