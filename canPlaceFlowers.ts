/* Can Place Flowers
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

const solution_optimal = (flowerbed: Array<number>, n: number): boolean => {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (i > 0 && i < flowerbed.length - 1) {
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1;
          n > 0 && n--;
        }
      } else if (i === 0) {
        if (flowerbed.length === 1 || flowerbed[i + 1] === 0) {
          flowerbed[i] = 1;
          n > 0 && n--;
        }
      } else {
        if (flowerbed[i - 1] === 0) {
          flowerbed[i] = 1;
          n > 0 && n--;
        }
      }
    }
  }
  return n === 0;
};

console.log(solution_optimal([1, 0, 0, 0, 0, 1], 2));
