// TODO: implement
// LC #118 — Pascal's Triangle
//
// Given an integer `numRows`, return the first `numRows` of Pascal's
// Triangle. Each row's entries are the binomial coefficients; each
// interior entry is the sum of the two directly above it.
//
// Example:
//   numRows = 5 → [
//     [1],
//     [1,1],
//     [1,2,1],
//     [1,3,3,1],
//     [1,4,6,4,1]
//   ]
//
// Approach (build row by row):
//   triangle = []
//   for r in 0..numRows-1:
//     row = new Array(r + 1).fill(1)
//     for i in 1..r-1:
//       row[i] = triangle[r-1][i-1] + triangle[r-1][i]
//     triangle.push(row)
//   return triangle
//
// Why this works:
//   By definition, the edges are 1 and the interior cells follow the
//   binomial recurrence C(r, i) = C(r-1, i-1) + C(r-1, i). Building each
//   row from the previous gives every coefficient in O(r) time.
//
// Alternative: compute C(r, i) directly via factorials. Overkill for the
// triangle output; the row-recurrence above is the natural approach.
//
// Time:  O(numRows²)
// Space: O(numRows²) for the output
//
// Edge Cases:
//   - numRows = 0   → []
//   - numRows = 1   → [[1]]
//   - numRows = 2   → [[1],[1,1]]
//   - Large numRows (e.g. 30): values grow but remain within JS Number range

/**
 * @param {number} numRows
 * @returns {number[][]}
 */
const generate = (numRows) => {
  // your code here
};

console.log("=== LC #118 Pascal's Triangle ===\n");

console.log('Test 1:');
console.log(generate(5));
// Expected: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

console.log('\nTest 2:');
console.log(generate(1));
// Expected: [[1]]

console.log('\nTest 3 — zero rows:');
console.log(generate(0));
// Expected: []
