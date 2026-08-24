// LC #322 — Coin Change   [Medium]   Pattern: Dynamic Programming
//
// You are given an array coins of distinct denominations and an integer
// amount. Return the FEWEST number of coins needed to make up amount.
//
// You have an infinite supply of each denomination. If the amount cannot be
// made up by any combination, return -1.
//
// Example 1:
//   Input:  coins = [1,2,5], amount = 11
//   Output: 3        (5 + 5 + 1)
// Example 2:
//   Input:  coins = [2], amount = 3
//   Output: -1
// Example 3:
//   Input:  coins = [1], amount = 0
//   Output: 0
//
// Constraints:
//   1 <= coins.length <= 12
//   1 <= coins[i] <= 2^31 - 1
//   0 <= amount <= 10^4

const coinChange = (coins, amount) => {

};

console.log(coinChange([1, 2, 5], 11)); // expected: 3
console.log(coinChange([2], 3));        // expected: -1
console.log(coinChange([1], 0));        // expected: 0
