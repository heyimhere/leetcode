// TODO: implement
// LC #875 — Koko Eating Bananas
//
// Piles of bananas: piles[i]. Koko can eat at most k bananas per hour from
// ONE pile (she finishes the rest of the next hour, even if pile < k).
// Given h hours total, return the MINIMUM k that lets her finish all piles
// within h hours.
//
// Example:
//   piles = [3,6,7,11], h = 8         → 4
//   piles = [30,11,23,4,20], h = 5    → 30
//   piles = [30,11,23,4,20], h = 6    → 23
//
// Approach (binary search on the ANSWER):
//   lo = 1; hi = max(piles)
//   hoursAt(k) = sum(ceil(pile / k)) for each pile
//   while lo < hi:
//     mid = (lo + hi) >>> 1
//     if hoursAt(mid) <= h → hi = mid    // mid works; try smaller
//     else                 → lo = mid + 1
//   return lo
//
// Why binary search on k:
//   `hoursAt(k)` is monotonically NON-INCREASING in k. So the set of valid
//   speeds forms a contiguous prefix-from-the-right of [1, max(piles)].
//   Find the smallest valid speed by classic "first true" binary search.
//
// Why ceil:
//   Each pile takes ⌈pile / k⌉ hours because Koko can't continue with
//   leftovers from a different pile in the same hour.
//
// Time:  O(n log max(piles))
// Space: O(1)
//
// Edge Cases:
//   - h = piles.length     → k = max(piles) (one pile per hour)
//   - All same pile size   → smooth binary-search behavior
//   - Very large piles     → answer can be up to max(piles)

/**
 * @param {number[]} piles
 * @param {number} h
 * @returns {number}
 */
const minEatingSpeed = (piles, h) => {
  // your code here
};

console.log('=== LC #875 Koko Eating Bananas ===\n');

console.log('Test 1:');
console.log(minEatingSpeed([3, 6, 7, 11], 8));
// Expected: 4

console.log('\nTest 2:');
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
// Expected: 30

console.log('\nTest 3:');
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
// Expected: 23
