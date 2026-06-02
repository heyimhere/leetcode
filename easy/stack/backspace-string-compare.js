// TODO: implement
// LC #844 — Backspace String Compare
//
// Given two strings s and t, return true iff they become equal after being
// typed into empty editors. '#' represents a BACKSPACE (delete the last
// typed character; a backspace on an empty editor is a no-op).
//
// Example:
//   s = "ab#c",     t = "ad#c"    → true   (both become "ac")
//   s = "ab##",     t = "c#d#"    → true   (both become "")
//   s = "a#c",      t = "b"       → false  ("c" vs "b")
//
// Approach 1 (build with a stack):
//   build(str):
//     stack = []
//     for c in str:
//       if c === '#': stack.pop()
//       else:         stack.push(c)
//     return stack.join('')
//   return build(s) === build(t)
//
//   Clean and obvious. O(n) time, O(n) space.
//
// Approach 2 (two pointers from the END — O(1) space):
//   Walk both strings backward, counting pending backspaces, skipping
//   characters that would be deleted. Compare survivors as we encounter
//   them. Stop when both pointers fall off the left edge.
//
//   This is the "follow-up: can you do it in O(1) space" answer.
//
// Why backwards:
//   Backspaces affect characters BEFORE them, so left-to-right requires
//   knowing the future. Right-to-left lets us account for them locally
//   (count the run, then skip that many real chars to the left).
//
// Time:  O(n + m)
// Space: O(1) with two pointers; O(n + m) with stacks
//
// Edge Cases:
//   - Backspace on empty             → no-op
//   - Both strings reduce to ""      → true
//   - Long runs of backspaces        → make sure to consume them
//   - Mismatched but lengths "look right" → must check char by char

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const backspaceCompare = (s, t) => {
  // your code here
};

console.log('=== LC #844 Backspace String Compare ===\n');

console.log('Test 1:');
console.log(backspaceCompare('ab#c', 'ad#c'));
// Expected: true

console.log('\nTest 2:');
console.log(backspaceCompare('ab##', 'c#d#'));
// Expected: true

console.log('\nTest 3:');
console.log(backspaceCompare('a#c', 'b'));
// Expected: false

console.log('\nTest 4 — empty after backspace:');
console.log(backspaceCompare('y#fo##f', 'y#f#o##f'));
// Expected: true
