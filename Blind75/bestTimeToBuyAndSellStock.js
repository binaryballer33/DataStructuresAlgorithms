// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  // input is a arr of int

  // create return variable
  let profit = null;

  // create min and max index variable
  let min = Infinity;
  let minIndex = 0;
  let max = -Infinity;

  // iterate through the arr
  for (let i = 0; i < prices.length; i++) {
    // get the min
    if (prices[i] < min) {
      min = prices[i];
      minIndex = i;
    }
  }

  // check for edge case, if min is last element in the arr, then return 0
  if (minIndex === prices.length - 1) return 0;

  for (let i = minIndex + 1; i < prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i];
    }
  }

  // return profit
  profit = max - min;
  return profit;
};
