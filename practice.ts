const tmpArray = [2, 20, 4, 10, 3, 4, 5];
const tmpHash: Map<number, number> = new Map();
for (const num of tmpArray) {
  if (!tmpHash.get(num)) {
    tmpHash.set(num, num);
  }
}

console.log(tmpHash);
