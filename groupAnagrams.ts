// Kind of brute force approach
// TIME COMPLEXITY: O(N * KlogK) => K : Maximum string L and N is the length of the array
function groupAnagramsByObject(strs: Array<string>): Array<Array<string>> {
  const anagrams: { [key: string]: Array<string> } = {};
  for (let string of strs) {
    const sorted = string.split("").sort().join("");
    if (anagrams[sorted]) {
      anagrams[sorted].push(string);
    } else {
      anagrams[sorted] = [string];
    }
  }
  return Object.values(anagrams);
}

// Same time complexity as above
function isAnagramsByHashMap(strs: string[]): Array<Array<string>> {
  let anagramMap: Map<string, Array<string>> = new Map();
  for (const string of strs) {
    const sorted = string.split("").sort().join("");
    if (anagramMap.has(sorted)) {
      anagramMap.get(sorted)?.push(string);
    } else {
      anagramMap.set(sorted, [string]);
    }
  }

  return Array.from(anagramMap.values());
}

// TC = O(m * n)
// SC = O(m * n)
const solution_optimal_2 = (strs: Array<string>): Array<Array<string>> => {
  let ans: { [key: string]: Array<string> } = {};

  for (const str of strs) {
    let count = new Array(26).fill(0);

    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let key = count.join("#");
    if (!ans[key]) {
      ans[key] = [];
    }

    ans[key].push(str);
  }
  return Object.values(ans);
};
console.log(solution_optimal_2(["eat", "tea", "tan", "ate", "nat", "bat"]));
