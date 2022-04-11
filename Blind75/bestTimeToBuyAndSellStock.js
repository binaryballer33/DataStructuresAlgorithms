// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// more efficient solution
var maxProfit = function (prices) {
  // input is a arr of int

  let leftPointer = 0;
  let rightPointer = 1;
  let maxProfit = 0;

  while (rightPointer < prices.length) {
    if (prices[leftPointer] < prices[rightPointer]) {
      let profit = prices[rightPointer] - prices[leftPointer];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      leftPointer = rightPointer;
    }
    rightPointer += 1;
  }
  return maxProfit;
};

console.log(maxProfit([1, 2, 6, 7, 2]));
console.log(maxProfit([5, 2, 6, 7, 1]));

// var maxProfit = function (prices) {
//   // input is a arr of int

//   // create return variable
//   let profit = null;

//   // create min and max index variable
//   let min = Infinity;
//   let minIndex = 0;
//   let max = -Infinity;

//   // iterate through the arr
//   for (let i = 0; i < prices.length; i++) {
//     // get the min
//     if (prices[i] < min) {
//       min = prices[i];
//       minIndex = i;
//     }
//   }

//   // check for edge case, if min is last element in the arr, then return 0
//   if (minIndex === prices.length - 1) return 0;

//   for (let i = minIndex + 1; i < prices.length; i++) {
//     if (prices[i] > max) {
//       max = prices[i];
//     }
//   }

//   // return profit
//   profit = max - min;
//   return profit;
// };

// console.log(maxProfit([1, 2, 6, 7, 2]));
// console.log(maxProfit([5, 2, 6, 7, 1]));
