const nums: Array<number> = [1];

if (nums[nums.length - 1] !== 1) {
  nums.push(1);
} else {
  nums.push(2);
}

console.log(nums);
