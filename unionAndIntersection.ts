const unionArrays = (
  arr_1: Array<number>,
  arr_2: Array<number>
): Array<number> => {
  const arrUnion: Array<number> = [];
  const n = arr_1.length;
  const m = arr_2.length;
  let i: number = 0;
  let j: number = 0;

  while (i < n && j < m) {
    if (arr_1[i] <= arr_2[j]) {
      if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_1[i]) {
        arrUnion.push(arr_1[i]);
      }
      i++;
    } else {
      if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_2[j]) {
        arrUnion.push(arr_2[j]);
      }
      j++;
    }
  }

  while (j < m) {
    if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_2[j]) {
      arrUnion.push(arr_2[j]);
    }
    j++;
  }

  while (i < n) {
    if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr_1[i]) {
      arrUnion.push(arr_1[i]);
    }
    i++;
  }
  return arrUnion;
};

console.log(unionArrays([1, 1, 2, 3, 4, 4, 5], [2, 3, 4, 5, 6]));
