const maxArea = (heights: Array<number>): number => {
  let maxArea = 1;
  let low = 0;
  let high = heights.length - 1;
  while (low < high) {
    const currArea = (high - low) * Math.min(heights[low], heights[high]);
    maxArea = Math.max(maxArea, currArea);
    heights[low] <= heights[high] ? low++ : high--;
  }
  return maxArea;
};

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
