// coding interview sample
const number = 88;
const climbingStairs = function (n, memo) {
  memo = memo || {};
  if (memo[n]) return memo[n];

  if (n <= 1) return 1;

  return (memo[n] = climbingStairs(n - 1, memo) + climbingStairs(n - 2, memo));
};

const climbStairs = (nums) => {
  if (nums === 1) return 1;

  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= nums; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[nums];
};

console.log("climbing stairs", climbingStairs(number));
