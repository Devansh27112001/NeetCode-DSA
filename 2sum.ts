// TIME COMPLEXITY: O(n^2)
const twoSum_bruteforce = (
  nums: Array<number>,
  target: number
): Array<number> | number => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return -1;
};

// console.log(twoSum_bruteforce([2, 6, 5, 8, 11], 14));

// TIME COMPLEXITY: O(nlogn)
// SPACE COMPLEXITY: O(n)
const twoSum_better = (
  nums: Array<number>,
  target: number
): Array<number> | number => {
  const tmpArray: Array<Array<number>> = [];
  for (let i = 0; i < nums.length; i++) {
    tmpArray.push([nums[i], i]);
  }

  tmpArray.sort((a, b) => a[0] - b[0]);
  let i = 0;
  let j = tmpArray.length - 1;
  while (i < j) {
    const sum = tmpArray[i][0] + tmpArray[j][0];
    if (sum === target) {
      return [tmpArray[i][1] + 1, tmpArray[j][1] + 1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return -1;
};

// console.log(twoSum_better([2, 6, 5, 8, 11], 14));
