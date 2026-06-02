// TODO: implement
// LC #22 — Generate Parentheses
//
// Given n, generate all combinations of well-formed parentheses with n
// pairs.
//
// Example:
//   n = 3  → ["((()))","(()())","(())()","()(())","()()()"]
//   n = 1  → ["()"]
//   n = 0  → [""]
//
// Approach (backtracking with open/close counters):
//   backtrack(curr, openUsed, closeUsed):
//     if curr.length === 2 * n → result.push(curr); return
//     if openUsed < n:                                  // can still open
//       backtrack(curr + "(", openUsed + 1, closeUsed)
//     if closeUsed < openUsed:                          // can close
//       backtrack(curr + ")", openUsed, closeUsed + 1)
//
//   Start with backtrack("", 0, 0).
//
// Why these two rules suffice for "valid":
//   1. We never produce more than n opens.
//   2. We close only when we have an open to match.
//   These two invariants together guarantee a well-formed string at the
//   leaf (length === 2n with balanced counts).
//
// Why this isn't a "stack" problem (despite the folder):
//   The recursion stack IS the bracket stack — each recursive frame
//   corresponds to a position in the string.
//
// Alternative (closure-number recurrence):
//   For each first matched pair "(" ... ")", recurse on the inside and
//   the outside. Generates the same set with a different combinatorial
//   structure (Catalan number recurrence).
//
// Time:  O(4^n / sqrt(n))   — n-th Catalan number
// Space: O(n)               — recursion depth (output excluded)
//
// Edge Cases:
//   - n = 0     → [""]   (the empty string is valid)
//   - n = 1     → ["()"]
//   - Large n   → exponential growth — stick to small n

/**
 * @param {number} n
 * @returns {string[]}
 */
const generateParenthesis = (n) => {
  // your code here
};

console.log('=== LC #22 Generate Parentheses ===\n');

console.log('Test 1 — n=3:');
console.log(generateParenthesis(3));
// Expected: ["((()))","(()())","(())()","()(())","()()()"]

console.log('\nTest 2 — n=1:');
console.log(generateParenthesis(1));
// Expected: ["()"]

console.log('\nTest 3 — n=0:');
console.log(generateParenthesis(0));
// Expected: [""]
