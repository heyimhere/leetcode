// TODO: implement
// LC #1011 — Capacity To Ship Packages Within D Days
//
// `weights[i]` is the weight of the i-th package; they must be shipped IN
// ORDER. Given `days`, return the LEAST ship capacity that lets you ship
// all packages within `days` days. Each day you load contiguous packages
// up to capacity.
//
// Example:
//   weights = [1,2,3,4,5,6,7,8,9,10], days = 5  → 15
//   weights = [3,2,2,4,1,4],         days = 3  → 6
//   weights = [1,2,3,1,1],           days = 4  → 3
//
// Approach (binary search on capacity):
//   lo = max(weights)        // capacity must hold at least the heaviest pkg
//   hi = sum(weights)        // 1-day ship fits everything
//
//   canShip(cap):
//     days = 1; load = 0
//     for w in weights:
//       if load + w > cap → days++; load = 0
//       load += w
//     return days <= D
//
//   while lo < hi:
//     mid = (lo + hi) >>> 1
//     if canShip(mid) → hi = mid
//     else            → lo = mid + 1
//   return lo
//
// Why max(weights) as lower bound:
//   The capacity must be ≥ the heaviest single package (otherwise that
//   package can never ship).
//
// Why this is monotonic in cap:
//   Larger capacity ⇒ ship takes fewer or equal days. So valid capacities
//   form a contiguous upper interval; find the smallest.
//
// Time:  O(n log(sum - max))
// Space: O(1)
//
// Edge Cases:
//   - days >= n           → answer is max(weights) (1 pkg per day)
//   - days = 1            → answer is sum(weights)
//   - Equal-weight packages → standard binary search

/**
 * @param {number[]} weights
 * @param {number} days
 * @returns {number}
 */
const shipWithinDays = (weights, days) => {
  // your code here
};

console.log('=== LC #1011 Capacity To Ship Packages ===\n');

console.log('Test 1:');
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// Expected: 15

console.log('\nTest 2:');
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
// Expected: 6

console.log('\nTest 3:');
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
// Expected: 3

console.log('\nTest 4 — days = 1:');
console.log(shipWithinDays([1, 2, 3], 1));
// Expected: 6
