const c = [1, 2, 5];
const a = 11;

// DP bottom up tabulation
const coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log("coin change", coinChange(c, a));
