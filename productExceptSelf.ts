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
