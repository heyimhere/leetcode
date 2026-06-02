// TODO: implement
// LC #1899 — Merge Triplets to Form Target Triplet
//
// You're given `triplets[i] = [a, b, c]` and a `target = [x, y, z]`.
// You may MERGE any two triplets a, b component-wise into [max(a[i], b[i])].
// Return true iff you can produce `target` through any sequence of merges.
//
// Example:
//   triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]   → true
//   triplets = [[3,4,5],[4,5,6]],         target = [3,2,5]   → false
//   triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5] → true
//
// Approach (greedy filter + component-wise max):
//   1. Filter out any triplet that EXCEEDS target on ANY coordinate (using
//      it would push a coordinate over the target).
//   2. Take the component-wise max of the SURVIVING triplets.
//   3. Return true iff that max equals target.
//
// Why this works:
//   - Surviving triplets are all ≤ target component-wise, so merging never
//     overshoots.
//   - To MATCH target, you need at least one triplet that equals target on
//     each coordinate. The component-wise max captures whether such
//     triplets exist (one per coordinate is enough).
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - target equals some triplet directly         → true
//   - No triplet survives filtering               → false
//   - Single coordinate consistently mismatched   → false

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @returns {boolean}
 */
const mergeTriplets = (triplets, target) => {
  // your code here
};

console.log('=== LC #1899 Merge Triplets to Form Target ===\n');

console.log('Test 1:');
console.log(mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5]));
// Expected: true

console.log('\nTest 2:');
console.log(mergeTriplets([[3, 4, 5], [4, 5, 6]], [3, 2, 5]));
// Expected: false

console.log('\nTest 3:');
console.log(mergeTriplets([[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]], [5, 5, 5]));
// Expected: true
