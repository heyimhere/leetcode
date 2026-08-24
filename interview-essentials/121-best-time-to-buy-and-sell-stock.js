// LC #121 — Best Time to Buy and Sell Stock   [Easy]   Pattern: Sliding Window
//
// You are given an array prices where prices[i] is the price of a stock on
// day i. You may choose ONE day to buy and a LATER day to sell.
//
// Return the maximum profit achievable. If no profitable trade exists,
// return 0.
//
// Example 1:
//   Input:  prices = [7,1,5,3,6,4]
//   Output: 5        (buy on day 1 at 1, sell on day 4 at 6)
// Example 2:
//   Input:  prices = [7,6,4,3,1]
//   Output: 0        (prices only fall — no trade)
// Example 3:
//   Input:  prices = [2,4,1]
//   Output: 2
//
// Constraints:
//   1 <= prices.length <= 10^5
//   0 <= prices[i] <= 10^4

const maxProfit = (prices) => {

};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // expected: 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // expected: 0
console.log(maxProfit([2, 4, 1]));          // expected: 2
