// BRUTE FORCE
function productExceptSelf(nums: Array<number>): Array<number> {
  const product: Array<number> = [];
  for (const num1 of nums) {
    let result: number = 1;
    for (const num2 of nums) {
      if (num1 !== num2) {
        result *= num2;
      }
    }
    product.push(result);
  }
  return product;
}
// console.log(productExceptSelf([1, 2, 3, 4]));

// Using DIVISION method
function productExceptSelfDivision(nums: Array<number>): Array<number> {
  const product: Array<number> = [];
  const multiProduct = nums.reduce((acc, num) => num * acc, 1);
  for (const num of nums) {
    product.push(multiProduct / num);
  }
  return product;
}
// console.log(productExceptSelfDivision([1, 2, 3, 4]));

function productExceptSelfPrefixSuffix(nums: Array<number>): Array<number> {
  const product: Array<number> = [];
  const prefixArray: Array<number> = Array.from(
    { length: nums.length },
    () => 1
  );
  const suffixArray: Array<number> = Array.from(
    { length: nums.length },
    () => 1
  );
  for (let i = 1; i < nums.length; i++) {
    prefixArray[i] = nums[i - 1] * prefixArray[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixArray[i] = nums[i + 1] * suffixArray[i + 1];
  }
  console.log("prefixArray: ", prefixArray);
  console.log("suffixArray: ", suffixArray);

  for (let i = 0; i < nums.length; i++) {
    product[i] = prefixArray[i] * suffixArray[i];
  }
  return product;
}

console.log(productExceptSelfPrefixSuffix([1, 2, 3, 4]));
