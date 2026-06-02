// TODO: implement
// LC #901 — Online Stock Span
//
// Design a streaming stock-span class:
//   next(price) → the SPAN of the current day's stock price, defined as
//                 the maximum number of CONSECUTIVE days (including today)
//                 going BACK in time for which the price was ≤ today's.
//
// Example:
//   next(100) → 1
//   next(80)  → 1
//   next(60)  → 1
//   next(70)  → 2   (60 then 70 — 2 days span)
//   next(60)  → 1
//   next(75)  → 4   (60, 70, 60, 75 → 4 days)
//   next(85)  → 6   (80, 60, 70, 60, 75, 85 → 6 days)
//
// Approach (monotonic decreasing stack of (price, span) pairs):
//   stack = []
//   next(price):
//     span = 1
//     while stack.length && stack[top].price <= price:
//       span += stack.pop().span
//     stack.push({price, span})
//     return span
//
// Why the (price, span) pair:
//   When today's price beats a previous one, we KNOW today's span includes
//   that previous one and ALL the days that previous one had absorbed.
//   Storing each day's already-collected span lets us aggregate in O(1)
//   amortized.
//
// Time:  Amortized O(1) per next (each price enters/exits the stack once)
// Space: O(n) in the worst case (strictly decreasing prices)
//
// Edge Cases:
//   - First call                     → always 1
//   - All increasing prices          → spans = 1, 2, 3, ... n
//   - All decreasing prices          → every span = 1
//   - Equal prices today vs yesterday → today's span includes yesterday

class StockSpanner {
  constructor() {
    // your code here
  }

  /**
   * @param {number} price
   * @returns {number}
   */
  next(price) {
    // your code here
  }
}

console.log('=== LC #901 Online Stock Span ===\n');

const s = new StockSpanner();
console.log(s.next(100)); // Expected: 1
console.log(s.next(80));  // Expected: 1
console.log(s.next(60));  // Expected: 1
console.log(s.next(70));  // Expected: 2
console.log(s.next(60));  // Expected: 1
console.log(s.next(75));  // Expected: 4
console.log(s.next(85));  // Expected: 6
