// TODO: implement
// coding interview sample (Karat-style)

/**
 * Sparse Vector Addition
 *
 * Problem Summary:
 *   A "sparse vector" is one where most entries are 0. Represent each
 *   vector as a Map<index, value> containing ONLY the non-zero entries.
 *   Implement addition: given two sparse vectors A and B, return their
 *   sum as a sparse vector (omit entries that cancel to 0).
 *
 *   This complements the existing `sparse-vector-dot-product.js`. Part 2
 *   (extension): support arbitrary scalar multiplication and linear
 *   combinations: c1*A + c2*B + c3*C.
 *
 *   Karat tests these because they probe map literacy + a "ban dense
 *   representations" constraint (the vectors might be length 10^9).
 *
 * Input / Output:
 *   Vectors are Map<number, number>; indices are non-negative integers.
 *   Result is a Map<number, number> with NO zero-valued entries.
 *
 * Example:
 *   A = Map([[0, 1], [3, 5], [10, -2]])
 *   B = Map([[3, -5], [4, 7]])
 *   add(A, B) → Map([[0, 1], [4, 7], [10, -2]])
 *     (index 3 cancels to 0; omitted)
 *
 * Approach:
 *   Iterate over keys of A ∪ B. For each key k, sum = (A.get(k) ?? 0) +
 *   (B.get(k) ?? 0). If sum !== 0, set in result.
 *
 *   Efficiency: don't materialize the union as a Set; iterate one vector,
 *   then walk the OTHER and only set keys absent from the first.
 *
 * Time:  O(|A| + |B|)
 * Space: O(|A| + |B|)
 *
 * Edge Cases:
 *   - Either input empty (all zeros)    → return a copy of the other
 *   - All entries cancel                → empty Map
 *   - Same key in both                  → cancel or combine carefully
 *   - Negative values                   → handled by simple addition
 */

/**
 * @param {Map<number, number>} a
 * @param {Map<number, number>} b
 * @returns {Map<number, number>}
 */
const sparseAdd = (a, b) => {
  // your code here
};

/**
 * Part 2 — c1*a + c2*b + ...
 * @param {{ coeff: number, vec: Map<number, number> }[]} terms
 * @returns {Map<number, number>}
 */
const sparseLinearCombination = (terms) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Sparse Vector Addition ===\n');

const A = new Map([[0, 1], [3, 5], [10, -2]]);
const B = new Map([[3, -5], [4, 7]]);

console.log('Test 1 — A + B:');
console.log(sparseAdd(A, B));
// Expected: Map { 0 => 1, 4 => 7, 10 => -2 }

console.log('\nTest 2 — empty:');
console.log(sparseAdd(new Map(), B));
// Expected: copy of B

console.log('\nTest 3 — fully cancels:');
console.log(sparseAdd(new Map([[1, 5]]), new Map([[1, -5]])));
// Expected: empty Map

console.log('\nTest 4 — Part 2 linear combo (2A + 3B):');
console.log(sparseLinearCombination([
  { coeff: 2, vec: A },
  { coeff: 3, vec: B },
]));
// Expected: Map { 0 => 2, 3 => -5, 4 => 21, 10 => -4 }
