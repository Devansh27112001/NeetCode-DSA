function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sSorted: string = s.split("").sort().join();
  const tSorted: string = t.split("").sort().join();

  return sSorted === tSorted;
}

console.log(isAnagram("jar", "jam"));
