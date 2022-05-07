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

