// TODO: implement
// LC #452 — Minimum Number of Arrows to Burst Balloons
//
// `points[i] = [xStart, xEnd]` are intervals along a number line. An arrow
// shot vertically at x bursts every balloon whose interval contains x.
// Return the MINIMUM number of arrows to burst all balloons.
//
// Example:
//   [[10,16],[2,8],[1,6],[7,12]]   → 2
//   [[1,2],[3,4],[5,6],[7,8]]       → 4
//   [[1,2],[2,3],[3,4],[4,5]]       → 2
//
// Approach (greedy by END):
//   1. Sort balloons by their END coordinate ascending.
//   2. shoot at the FIRST balloon's end. arrows = 1.
//   3. For each subsequent balloon:
//        if balloon.start > lastShot → arrow needed; shoot at this end.
//        else → already burst.
//   4. Return arrows.
//
// Why "shoot at the earliest end":
//   The arrow must pierce SOMETHING, and choosing the earliest end maxes
//   the chance it also pierces neighbors. Activity-selection style proof.
//
// Subtle point — touching counts as overlap:
//   The problem treats balloons that share a boundary as simultaneously
//   burstable. Use `>` (NOT `>=`) when comparing.
//
// Time:  O(n log n)
// Space: O(1) extra
//
// Edge Cases:
//   - Empty input             → 0
//   - All balloons overlap    → 1
//   - All disjoint            → n
//   - Single balloon          → 1

/**
 * @param {number[][]} points
 * @returns {number}
 */
const findMinArrowShots = (points) => {
  // your code here
};

console.log('=== LC #452 Minimum Number of Arrows to Burst Balloons ===\n');

console.log('Test 1:');
console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]));
// Expected: 2

console.log('\nTest 2 — all disjoint:');
console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]));
// Expected: 4

console.log('\nTest 3:');
console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]));
// Expected: 2

console.log('\nTest 4 — empty:');
console.log(findMinArrowShots([]));
// Expected: 0
