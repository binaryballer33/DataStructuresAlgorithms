// https://leetcode.com/problems/product-of-array-except-self/

// solved this problem with O(n^2) T & O(n) Space
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {

  // create return array
  let productArr = [];
  // iterate through the nums array
  for(let index1 = 0; index1 < nums.length; index1++) {
    let productTotal = 1;
    for(let index2 = 0; index2 < nums.length; index2++) {
      if(index2 !== index1) {
        productTotal *= nums[index2];
      }
    }
    productArr.push(productTotal);
  }
  // return return arr
  return productArr;  
};


// =============TESTING=======================
let array = [1, 2, 3, 4]; // --> [24, 12, 8, 6]
console.log(productExceptSelf(array));
array = [0, 0]; // --> [24, 12, 8, 6]
console.log(productExceptSelf(array));
array = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(array));