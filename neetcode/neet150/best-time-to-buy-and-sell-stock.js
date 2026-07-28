// LC #121 — Best Time to Buy and Sell Stock
//
// You are given an array `prices` where prices[i] is the price of a stock on
// day i. You want to BUY on one day and SELL on a LATER day. Return the maximum
// profit you can make. If no profit is possible, return 0.
//
// Examples:
//   prices = [7,1,5,3,6,4]  -> 5   (buy day 1 at 1, sell day 4 at 6: 6-1=5)
//   prices = [7,6,4,3,1]     -> 0   (prices only fall — never buy, profit 0)
//   prices = [1,2]           -> 1   (buy at 1, sell at 2)
//   prices = [2,4,1]         -> 2   (buy at 2, sell at 4; the later 1 is too late)
//
// Intuition:
//   The one rule that shapes everything: you must BUY BEFORE you SELL. So on any
//   given day, the best sale you could make today is:
//     today's price - the cheapest price seen on any earlier day
//   That earlier minimum is the best price you *could have* bought at.
//
//   So sweep left to right tracking two things:
//     - minPrice : the lowest price seen so far (best day to have bought)
//     - maxProfit: the best (price - minPrice) seen so far
//   For each price, first ask "if I sell today, what's my profit?" using the
//   running minimum, then update the minimum for future days. One pass — the
//   minimum only ever looks backward, which is exactly the buy-before-sell rule.
//
//   This is the sliding-window view: the "window" is [buy day .. today]. We keep
//   the left edge (buy) parked at the cheapest price seen, and slide the right
//   edge (sell) forward one day at a time, recording the widest profit.
//
//   Why not track the max price and subtract the min? Because the max might come
//   BEFORE the min (e.g. [7,1,5]), which would be an illegal sell-then-buy. The
//   min-so-far approach bakes the ordering constraint in for free.
//
// Approach (single pass, track min-so-far):
//   - minPrice = Infinity, maxProfit = 0
//   - for each price p:
//       if p < minPrice        minPrice = p          // cheaper buy day found
//       else                   maxProfit = max(maxProfit, p - minPrice)
//   - return maxProfit
//   Time: O(n)   Space: O(1)
//
// Alternate approaches:
//   1) Brute force every (buy, sell) pair with buy < sell.
//      Time: O(n^2)   Space: O(1). Correct but too slow for large n; it's the
//      obvious baseline the single-pass min-tracking improves on.
//   2) Kadane's / max-subarray on the daily deltas (prices[i]-prices[i-1]).
//      Time: O(n)   Space: O(1). Same complexity, cleverer framing (max profit =
//      max sum of a contiguous run of price changes), but less intuitive to
//      recall under pressure than min-so-far.
//
// Complexity of the chosen solution:
//   Time:  O(n)  — one left-to-right pass, constant work per day.
//   Space: O(1)  — two scalars (minPrice, maxProfit); no auxiliary structure.

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const p of prices) {
    if (p < minPrice) {
      minPrice = p;
    } else {
      maxProfit = Math.max(maxProfit, p - minPrice);
    }
  }

  return maxProfit;
};

console.log('[7,1,5,3,6,4] ->', maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log('[7,6,4,3,1]   ->', maxProfit([7, 6, 4, 3, 1]));     // 0
console.log('[1,2]         ->', maxProfit([1, 2]));              // 1
console.log('[2,4,1]       ->', maxProfit([2, 4, 1]));           // 2
console.log('[3,3,3]       ->', maxProfit([3, 3, 3]));           // 0
