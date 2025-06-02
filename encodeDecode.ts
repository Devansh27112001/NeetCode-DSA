function encode(strs: Array<string>): string {
  let result: string = "";
  for (const s of strs) {
    result += s.length + "#" + s;
  }
  return result;
}

console.log(encode(["neet", "code", "love", "you"]));
function decode(strs: string): Array<string> {
  const decodedArray: Array<string> = [];

  let i = 0;
  while (i < strs.length) {
    let j = i;
    while (strs[j] !== "#") {
      j++;
    }
    let length = parseInt(strs.substring(i, j));
    let subString = strs.substring(j + 1, length + j + 1);
    decodedArray.push(subString);
    i = length + j + 1;
  }
  return decodedArray;
}

console.log(decode("4#neet4#code4#love3#you"));
