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
// TC = O(n^3)
// SC = O(n)
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

const solution_optimal = (str: string): string => {
  if (str.length <= 1) return str;
  let maxStr = str[0];

  const expandBothSides = (
    str: string,
    left: number,
    right: number
  ): string => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  };
  for (let i = 0; i < str.length - 1; i++) {
    // ODD LENGTH
    let odd = expandBothSides(str, i, i);

    // EVEN LENGTH
    let even = expandBothSides(str, i, i + 1);

    if (odd.length > maxStr.length) {
      maxStr = odd;
    }
    if (even.length > maxStr.length) {
      maxStr = even;
    }
  }
  return maxStr;
};

console.log(solution_optimal("bb"));
