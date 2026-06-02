// TODO: implement
// LC #746 — Min Cost Climbing Stairs
//
// You're given `cost`, where cost[i] is the cost of stepping ON step i.
// Once you pay the cost, you can climb 1 or 2 steps. You can START on step
// 0 or step 1. Return the MIN cost to reach the top (past the last index).
//
// Example:
//   cost = [10,15,20]            → 15  (start at 1, climb 2 to top)
//   cost = [1,100,1,1,1,100,1,1,100,1]  → 6
//
// Approach (1D bottom-up DP):
//   dp[i] = min cost to ARRIVE at step i, paying cost[i] on entry.
//   Recurrence: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
//   Base: dp[0] = cost[0], dp[1] = cost[1]
//   Answer: min(dp[n-1], dp[n-2])    (the top is "past" the last step)
//
// Space-optimized: keep only the last two values (rolling pair).
//
// Why it works:
//   To stand on step i you must have entered from i-1 or i-2. The minimum
//   arrival cost is the cost of i plus whichever predecessor was cheaper.
//   The top is reachable from either of the last two steps.
//
// Time:  O(n)
// Space: O(1) (with rolling) or O(n) (full dp array)
//
// Edge Cases:
//   - Length 2                  → min(cost[0], cost[1])
//   - All equal costs           → answer = cost[0] * ceil(n/2) roughly
//   - Costs include 0           → still works; 0 just means a free step
//   - Length 1 (not in LC but)  → cost[0]

/**
 * @param {number[]} cost
 * @returns {number}
 */
const minCostClimbingStairs = (cost) => {
  // your code here
};

console.log('=== LC #746 Min Cost Climbing Stairs ===\n');

console.log('Test 1:');
console.log(minCostClimbingStairs([10, 15, 20]));
// Expected: 15

console.log('\nTest 2:');
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
// Expected: 6

console.log('\nTest 3 — length 2:');
console.log(minCostClimbingStairs([3, 5]));
// Expected: 3

console.log('\nTest 4 — all same:');
console.log(minCostClimbingStairs([2, 2, 2, 2]));
// Expected: 4
