// TODO: implement
// LC #32 — Longest Valid Parentheses
//
// Given a string containing only '(' and ')', return the LENGTH of the
// longest VALID (well-formed) substring.
//
// Example:
//   "(()"    → 2   "()"
//   ")()())" → 4   "()()"
//   ""       → 0
//   "()(()"  → 2
//
// Approach 1 (stack of indices):
//   stack = [-1]    // sentinel "boundary" before the start
//   best = 0
//   for i in 0..n-1:
//     if s[i] === '(' → stack.push(i)
//     else:
//       stack.pop()
//       if stack empty → stack.push(i)   // new boundary at this unmatched ')'
//       else → best = max(best, i - stack[top])
//
//   The top of the stack is always the index JUST BEFORE the current valid
//   run. The diff (i - top) is the current run's length.
//
// Approach 2 (DP):
//   dp[i] = length of longest valid substring ENDING at i.
//   dp[i] = 0 if s[i] === '(' (open can't end a valid substring).
//   If s[i] === ')':
//     if s[i-1] === '(' → dp[i] = dp[i-2] + 2   ("...()")
//     else if i - dp[i-1] - 1 >= 0 AND s[i - dp[i-1] - 1] === '(':
//       dp[i] = dp[i-1] + 2 + dp[i - dp[i-1] - 2]
//
// Approach 3 (two-pass counter — O(1) extra space):
//   Walk left → right; count opens/closes. If they match, update best;
//   if closes overtake opens, reset both. Then walk right → left
//   with roles swapped.
//
// Why a sentinel in the stack:
//   Lets you compute lengths uniformly without "if first match" special
//   cases. Storing indices (not chars) is also key: subtraction gives
//   the run's length immediately.
//
// Time:  O(n) for all three approaches
// Space: O(n) stack/DP; O(1) for the two-pass counter
//
// Edge Cases:
//   - Empty string             → 0
//   - All opens or all closes  → 0
//   - Nested valid             → "(())" → 4
//   - Discontinuous valid runs → return the longest one

/**
 * @param {string} s
 * @returns {number}
 */
const longestValidParentheses = (s) => {
  // your code here
};

console.log('=== LC #32 Longest Valid Parentheses ===\n');

console.log('Test 1:');
console.log(longestValidParentheses('(()'));
// Expected: 2

console.log('\nTest 2:');
console.log(longestValidParentheses(')()())'));
// Expected: 4

console.log('\nTest 3:');
console.log(longestValidParentheses(''));
// Expected: 0

console.log('\nTest 4:');
console.log(longestValidParentheses('()(()'));
// Expected: 2
