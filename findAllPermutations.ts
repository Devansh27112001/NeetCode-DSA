const permute = (
  nums: Array<number>,
  arr: Array<number> = [],
  res: Array<Array<number>> = []
): Array<Array<number>> => {
  // BASE CASE:
  if (nums.length === 0) {
    res.push([...arr]);
  }

  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((n, index) => index !== i);
    arr.push(nums[i]);
    permute(rest, arr, res);
    arr.pop();
  }
  return res;
};

console.log(permute([1, 2, 3]));
