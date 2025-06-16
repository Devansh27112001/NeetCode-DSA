function twoSumSortedArray(
  numbers: Array<number>,
  target: number
): Array<number> {
  let low: number = 0;
  let high: number = numbers.length - 1;
  while (low < high) {
    const sum: number = numbers[low] + numbers[high];
    if (sum === target) {
      return [low + 1, high + 1];
    } else if (sum > target) {
      high--;
    } else {
      low++;
    }
  }
  return [];
}
