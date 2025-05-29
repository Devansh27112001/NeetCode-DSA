// BRUTE FORCE
function twoSumBrute(nums: Array<number>, target: number): Array<number> {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// TWO POINTERS
function twoSumPointers(nums: Array<number>, target: number): Array<number> {
  const tempArray: Array<[number, number]> = [];

  // Pushing the [value,index]
  for (let i = 0; i < nums.length; i++) {
    tempArray.push([nums[i], i]);
  }

  // Sorting the array according to value.
  tempArray.sort((a, b) => a[0] - b[0]);
  let low: number = 0;
  let high: number = nums.length - 1;

  while (low < high) {
    let currTotal = tempArray[low][0] + tempArray[high][0];
    if (currTotal === target) {
      return [tempArray[low][1], tempArray[high][1]];
    } else if (currTotal < target) {
      low++;
    } else {
      high--;
    }
  }
  return [];
}

// Using HashMap
function twoSumHashMap(nums: Array<number>, target: number): Array<number> {
  let numObj: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    let difference: number = target - nums[i];
    if (numObj.has(difference)) {
      return [numObj.get(difference)!, i];
    } else {
      numObj.set(nums[i], i);
    }
  }
  return [];
}
