const lengthOfLastWord = (s: string): number => {
  let lenLastWord = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (!/\s/.test(s[i])) {
      lenLastWord++;
    }

    if (lenLastWord > 0 && /\s/.test(s[i])) {
      break;
    }
  }
  return lenLastWord;
};

console.log(lengthOfLastWord("this is a boy  "));
