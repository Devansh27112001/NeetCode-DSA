// Consider only alphanumeric characters
// SOLUTION 1: Brute Force
function isAlphaNumeric(c: string) {
  return (
    (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")
  );
}
function validPalindrome(s: string): boolean {
  let modifiedString: string = "";
  for (const character of s) {
    if (isAlphaNumeric(character)) {
      modifiedString += character.toLowerCase();
    }
  }
  const reversedString = modifiedString.split("").reverse().join("");
  return reversedString === modifiedString;
}
console.log(validPalindrome("tab a cat"));

// SOLUTION 2: Using two pointers
function validPalindromeTwoPointers(s: string): boolean {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    // Any alphanumberic characters at start.
    if (start < end && !isAlphaNumeric(s[start])) {
      start++;
    }
    // Any alphanumberic characters at end.
    if (start < end && !isAlphaNumeric(s[end])) {
      end--;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
console.log(validPalindromeTwoPointers("tab a cat"));
