// TODO: implement
// LC #973 — K Closest Points to Origin
//
// Given an array `points` where points[i] = [x, y], return the k closest
// points to the origin (0, 0) by Euclidean distance. Answer in any order.
//
// Example:
//   points = [[1,3],[-2,2]], k = 1            → [[-2,2]]
//   points = [[3,3],[5,-1],[-2,4]], k = 2     → [[3,3],[-2,4]]
//
// Approach 1 (max-heap of size k):
//   for p in points:
//     heap.push(p)  // ordered by squared distance, max on top
//     if heap.size > k → heap.pop()
//   return heap.toArray()
//
//   Use SQUARED distance to avoid sqrt (monotonic in distance).
//
// Approach 2 (Quickselect on squared distance):
//   Same partition idea as kth-largest. Average O(n), worst O(n²).
//
// Approach 3 (sort all by distance):
//   points.sort((a,b) => dist(a) - dist(b)); return points.slice(0, k).
//   O(n log n) — simplest, but slower for very large n with small k.
//
// Why squared distance:
//   We only need to RANK points, and sqrt is monotonic. Skipping it is
//   a free constant-factor (and floating-point precision) win.
//
// Time:
//   - Heap: O(n log k)
//   - Quickselect: O(n) avg
//   - Sort: O(n log n)
// Space: O(k) heap; O(1) quickselect; O(1) sort
//
// Edge Cases:
//   - k = 1                → just the closest point
//   - k = n                → all points
//   - Duplicate distances  → any tie-break is fine

/**
 * @param {number[][]} points
 * @param {number} k
 * @returns {number[][]}
 */
const kClosest = (points, k) => {
  // your code here
};

console.log('=== LC #973 K Closest Points to Origin ===\n');

console.log('Test 1:');
console.log(kClosest([[1, 3], [-2, 2]], 1));
// Expected: [[-2,2]]

console.log('\nTest 2:');
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
// Expected: [[3,3],[-2,4]]  (in any order)

console.log('\nTest 3 — k = n:');
console.log(kClosest([[1, 1], [2, 2]], 2));
// Expected: [[1,1],[2,2]]  (in any order)
