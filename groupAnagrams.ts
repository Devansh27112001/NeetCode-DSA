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
  let anagramArray: Array<Array<string>> = [];
  for (const value of anagramMap.values()) {
    anagramArray = [...anagramArray, value];
  }

  return anagramArray;
}

console.log(isAnagramsByHashMap(["act", "pots", "tops", "cat", "stop", "hat"]));
