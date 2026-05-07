const rob = (arr) => {
  if (arr.length === 1) return arr[0];

  const dp = [];
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[arr.length - 1];
};

const rob2 = (arr, i = arr.length - 1, memo = {}) => {
  if (i < 0) return 0;
  if (i === 0) return arr[0];

  if (memo[i] !== undefined) return memo[i];

  memo[i] = Math.max(arr[i] + rob(arr, i - 2, memo), rob(arr, i - 1, memo));
  return memo[i];
};

console.log("rob 1", rob([1, 2, 3, 1]));
console.log("rob 2", rob([2, 7, 9, 3, 1]));
console.log("rob 3", rob([2, 1, 1, 2]));
