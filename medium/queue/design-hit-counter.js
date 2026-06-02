// TODO: implement
// LC #362 — Design Hit Counter
//
// Design a HitCounter that counts hits in the past 5 MINUTES (300 seconds).
//   hit(timestamp)          — record a hit at the given second
//   getHits(timestamp)      — return how many hits were made in (now-300, now]
//
// Timestamps arrive in NON-DECREASING order.
//
// Example:
//   counter.hit(1); counter.hit(2); counter.hit(3);
//   counter.getHits(4)   → 3
//   counter.hit(300);
//   counter.getHits(300) → 4
//   counter.getHits(301) → 3   (the hit at t=1 has aged out)
//
// Approach 1 (queue of timestamps):
//   queue of recent hit times. On getHits, dequeue anything ≤ t - 300.
//   Return queue.length.
//   - hit: O(1)
//   - getHits: amortized O(1)
//   - Memory: proportional to #hits in window
//
// Approach 2 (circular buffer of 300 buckets — Twitter classic):
//   times[300], counts[300]
//   hit(t):
//     i = t % 300
//     if times[i] !== t → times[i] = t; counts[i] = 1
//     else → counts[i]++
//   getHits(t):
//     sum counts[i] where times[i] > t - 300
//
//   O(1) hit; O(300) = O(1) getHits. Fixed memory.
//
// Why circular buckets:
//   Constant memory, no allocation per hit. Great for VERY high throughput
//   streams. The queue version is friendlier when hit counts within the
//   window are bounded.
//
// Time:  see per-approach
// Space: O(300) bucket version; O(window hits) queue version
//
// Edge Cases:
//   - getHits before any hit       → 0
//   - All hits at the same timestamp → counted by occurrence
//   - Bursts beyond window         → old hits dropped on next getHits
//   - Timestamps that skip ahead   → still works; buckets stale-check

class HitCounter {
  constructor() {
    // your code here
  }

  /**
   * @param {number} timestamp
   * @returns {void}
   */
  hit(timestamp) {
    // your code here
  }

  /**
   * @param {number} timestamp
   * @returns {number}
   */
  getHits(timestamp) {
    // your code here
  }
}

console.log('=== LC #362 Design Hit Counter ===\n');

const c = new HitCounter();
c.hit(1); c.hit(2); c.hit(3);
console.log(c.getHits(4));   // Expected: 3
c.hit(300);
console.log(c.getHits(300)); // Expected: 4
console.log(c.getHits(301)); // Expected: 3
