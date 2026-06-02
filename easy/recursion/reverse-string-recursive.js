// TODO: implement
// LC #344 — Reverse String  (recursive variant)
//
// Write a recursive function that reverses a string IN PLACE on a char
// array. Must use O(1) extra space beyond the recursion stack.
//
// Example:
//   ['h','e','l','l','o'] → ['o','l','l','e','h']
//   ['H','a','n','n','a','h'] → ['h','a','n','n','a','H']
//
// Approach (recursive two-pointer swap):
//   helper(s, left, right):
//     if left >= right → return
//     swap s[left], s[right]
//     helper(s, left + 1, right - 1)
//
//   Call helper(s, 0, s.length - 1).
//
// Why recursion here:
//   It's an explicit recursion exercise. Iteratively this is trivial
//   (two pointers), but recursion forces you to think in base case +
//   smaller subproblem terms.
//
// Trade-off vs. iterative:
//   Recursive solution uses O(n) stack space. Iterative uses O(1). The
//   problem still calls the input mutation "in place" because we don't
//   allocate a new char array.
//
// Time:  O(n)
// Space: O(n) recursion stack
//
// Edge Cases:
//   - Empty array        → no-op
//   - Single char        → no-op
//   - Even/odd length    → both fine; the base case s.left >= s.right covers both
//   - Unicode surrogate pairs — would need extra care if relevant

/**
 * @param {string[]} s  - char array, mutated in place
 * @returns {void}
 */
const reverseString = (s) => {
  // your code here
};

console.log('=== LC #344 Reverse String (recursive) ===\n');

const a = ['h', 'e', 'l', 'l', 'o'];
reverseString(a);
console.log('Test 1:', a);
// Expected: ['o','l','l','e','h']

const b = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(b);
console.log('Test 2:', b);
// Expected: ['h','a','n','n','a','H']

const c = [];
reverseString(c);
console.log('Test 3 (empty):', c);
// Expected: []

const d = ['x'];
reverseString(d);
console.log('Test 4 (single):', d);
// Expected: ['x']
