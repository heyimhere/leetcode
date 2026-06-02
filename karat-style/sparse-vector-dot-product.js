// TODO: implement
// coding interview sample (Karat-style)

/**
 * Sparse Vector Dot Product
 *
 * Problem Summary:
 * Implement a `SparseVector` class that stores a vector of length n in which
 * most entries are zero. Provide a `dotProduct(other)` method that returns
 * the dot product with another SparseVector.
 *
 * Example:
 *   v1 = SparseVector([1, 0, 0, 2, 3])
 *   v2 = SparseVector([0, 3, 0, 4, 0])
 *   v1.dotProduct(v2) → 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
 *
 * Karat / Meta / LinkedIn favorite — variants ask follow-ups like
 *   - "what if one vector is much sparser than the other?"
 *   - "what if vectors are streamed/too large to fit in memory?"
 *   - "what if you can't iterate the dense form at all?"
 *
 * Approach (HashMap of nonzero entries):
 *   - In the constructor, scan the input array once and store only
 *     `index → value` pairs where value !== 0 into a Map.
 *   - For dotProduct(other):
 *       - Pick the smaller map (call it A).
 *       - For each [idx, val] in A: if other.map has idx, add val * other.map[idx].
 *       - Return the running sum.
 *
 * Why a Map (not an array):
 *   - The dense form wastes O(n) memory when 99% of entries are 0.
 *   - Iterating only nonzero indices gives O(nonzero) time per dot product.
 *
 * Alternative: parallel arrays of (index, value) pairs sorted by index,
 *   then merge them with two pointers. Same big-O, cache-friendlier,
 *   handles streaming better.
 *
 * Time:
 *   - constructor: O(n)
 *   - dotProduct:  O(min(nonzero(A), nonzero(B)))   with the Map approach
 *                  (we iterate the smaller, do O(1) lookups in the larger)
 * Space:
 *   - O(nonzero) per vector
 *
 * Edge Cases:
 *   - All-zero vector              → dotProduct returns 0
 *   - Vectors of different lengths → out-of-bounds indices simply won't match
 *   - Negative values              → still works (math is math)
 */

class SparseVector {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    // your code here
  }

  /**
   * @param {SparseVector} other
   * @returns {number}
   */
  dotProduct(other) {
    // your code here
  }
}

// ============ Test Cases ============

console.log('=== Sparse Vector Dot Product ===\n');

console.log('Test 1 — Classic:');
console.log(new SparseVector([1, 0, 0, 2, 3]).dotProduct(
  new SparseVector([0, 3, 0, 4, 0])
));
// Expected: 8

console.log('\nTest 2 — Orthogonal (no overlap of nonzero):');
console.log(new SparseVector([1, 0, 0]).dotProduct(
  new SparseVector([0, 0, 1])
));
// Expected: 0

console.log('\nTest 3 — Both all zero:');
console.log(new SparseVector([0, 0, 0]).dotProduct(
  new SparseVector([0, 0, 0])
));
// Expected: 0

console.log('\nTest 4 — Identical dense vectors:');
console.log(new SparseVector([1, 2, 3]).dotProduct(
  new SparseVector([1, 2, 3])
));
// Expected: 14   (1 + 4 + 9)

console.log('\nTest 5 — Negative values:');
console.log(new SparseVector([0, -1, 0, 2]).dotProduct(
  new SparseVector([3, 4, 0, -5])
));
// Expected: 0*3 + -1*4 + 0*0 + 2*-5 = -14

console.log('\nTest 6 — Very sparse, large vector:');
const big1 = new Array(10000).fill(0); big1[42] = 7; big1[9999] = 3;
const big2 = new Array(10000).fill(0); big2[42] = 2; big2[100] = 5;
console.log(new SparseVector(big1).dotProduct(new SparseVector(big2)));
// Expected: 14   (only index 42 overlaps)
