function threeSum(numbers: Array<number>): Array<Array<number>> {
  numbers.sort();
  let res: Array<Array<number>> = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;
    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      const threeSum = numbers[i] + numbers[left] + numbers[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        res.push([numbers[i], numbers[left], numbers[right]]);
        left++;
        right--;
        while (numbers[left] === numbers[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
