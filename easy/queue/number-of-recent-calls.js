// TODO: implement
// LC #933 — Number of Recent Calls
//
// Implement a RecentCounter class that counts how many times the method
// ping(t) has been called in the past 3000 milliseconds (inclusive).
// `t` values are strictly increasing.
//
// Operations:
//   ping(t) → returns the number of pings in the window [t - 3000, t]
//
// Example:
//   ping(1)    → 1   (just [1])
//   ping(100)  → 2   ([1, 100])
//   ping(3001) → 3   ([1, 100, 3001])
//   ping(3002) → 3   (1 falls out of [3002-3000, 3002] = [2, 3002])
//
// Approach (FIFO queue):
//   queue = []   (stores ping timestamps in arrival order)
//   ping(t):
//     queue.push(t)
//     while queue[0] < t - 3000:  queue.shift()
//     return queue.length
//
// Why a queue is the right structure:
//   Pings are strictly increasing → old ones expire in FIFO order →
//   removing from the front is exactly what queues do. Each ping enters
//   and exits the queue once across the lifetime of the structure, so
//   the amortized cost is O(1) per ping.
//
// Note on `Array.prototype.shift()`:
//   shift() is technically O(n) in many JS engines. For tight performance
//   use a real circular buffer / deque or maintain a head index. For
//   this problem, shift is fine.
//
// Time:  O(1) amortized per ping
// Space: O(W) where W = number of pings in the 3000ms window
//
// Edge Cases:
//   - Very dense pings    → all kept until they age out
//   - Very sparse pings   → queue stays small
//   - First call          → returns 1

class RecentCounter {
  constructor() {
    // your code here
  }

  /**
   * @param {number} t
   * @returns {number}
   */
  ping(t) {
    // your code here
  }
}

console.log('=== LC #933 Number of Recent Calls ===\n');

const c = new RecentCounter();
console.log(c.ping(1));    // Expected: 1
console.log(c.ping(100));  // Expected: 2
console.log(c.ping(3001)); // Expected: 3
console.log(c.ping(3002)); // Expected: 3
