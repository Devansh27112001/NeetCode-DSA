function encode(strs: Array<string>): string {
  let result: string = "";
  for (const s of strs) {
    result += s.length + "#" + s;
  }
  return result;
}

console.log(encode(["neet", "code", "love", "you"]));
function decode(strs: string): Array<string> {
  return [];
}
