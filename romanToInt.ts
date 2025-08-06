const solution_optimal = (s: string): number => {
  let res = 0;
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = 0; i < s.length; i++) {
    if (romanMap[s[i]] < romanMap[s[i + 1]]) {
      res -= romanMap[s[i]];
    } else {
      res += romanMap[s[i]];
    }
  }
  return res;
};
