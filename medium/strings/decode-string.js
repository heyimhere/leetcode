// TODO: implement
// LC #394 — Decode String
//
// Given an encoded string, return the decoded form. The encoding rule is:
//   k[encoded_string]  → the encoded_string repeated k times.
// k is a positive integer (possibly multi-digit). Brackets may NEST.
//
// Example:
//   "3[a]2[bc]"       → "aaabcbc"
//   "3[a2[c]]"        → "accaccacc"
//   "2[abc]3[cd]ef"   → "abcabccdcdcdef"
//   "abc3[cd]xyz"     → "abccdcdcdxyz"
//
// Approach (stack of (count, prevString)):
//   stack = []     // each entry: [count, strBuiltBeforeOpen]
//   curr = ''
//   k = 0
//   for c in s:
//     if c is digit → k = k * 10 + (c - '0')   // accumulate multi-digit
//     elif c === '['  → stack.push([k, curr]); k = 0; curr = ''
//     elif c === ']'  → [n, prev] = stack.pop(); curr = prev + curr.repeat(n)
//     else            → curr += c
//   return curr
//
// Why stack:
//   Brackets nest, and the meaning of "what to repeat" depends on the
//   most recent unmatched [. Saving (k, builtSoFar) on [ and restoring on
//   ] gives the right nesting semantics.
//
// Alternative (recursion):
//   Parse with a global index pointer. Each '[' starts a recursive call
//   that returns when ']' is hit. Cleaner expression of the grammar but
//   uses call stack.
//
// Time:  O(N) where N is the length of the DECODED output (bounded by it)
// Space: O(N) for the result and stack
//
// Edge Cases:
//   - Multi-digit k (e.g. "10[a]")     → must accumulate digits
//   - Nested deep (e.g. "2[2[2[a]]]")  → stack handles it
//   - Letters mixed with bracketed     → curr handles plain chars
//   - Empty input                      → ""

/**
 * @param {string} s
 * @returns {string}
 */
const decodeString = (s) => {
  // your code here
};

console.log('=== LC #394 Decode String ===\n');

console.log('Test 1:');
console.log(decodeString('3[a]2[bc]'));
// Expected: 'aaabcbc'

console.log('\nTest 2:');
console.log(decodeString('3[a2[c]]'));
// Expected: 'accaccacc'

console.log('\nTest 3:');
console.log(decodeString('2[abc]3[cd]ef'));
// Expected: 'abcabccdcdcdef'

console.log('\nTest 4 — multi-digit:');
console.log(decodeString('10[a]'));
// Expected: 'aaaaaaaaaa'
