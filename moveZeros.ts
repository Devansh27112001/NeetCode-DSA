const moveZeros = (nums: Array<number>): Array<number> => {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    }
  }
  return nums;
};

// This will not preserve order of the non-zero elements
const moveZerosTwo = (nums: Array<number>): Array<number> => {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    if (nums[low] === 0) {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
        high--;
      } else {
        high--;
      }
    } else {
      low++;
    }
  }

  return nums;
};

const moveZerosTwoPreserveOrder = (nums: Array<number>): Array<number> => {
  let low = 0;
  for (let high = 0; high < nums.length; high++) {
    if (nums[high] !== 0) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
      low++;
    }
  }
  return nums;
};
