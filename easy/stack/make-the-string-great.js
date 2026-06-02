// TODO: implement
// LC #1544 — Make The String Great
//
// A string is "good" if it has NO two adjacent characters s[i] and s[i+1]
// where one is the uppercase form of the other (e.g., 'a' next to 'A').
// Return the string after greedily removing all such "bad" pairs.
//
// Example:
//   "leEeetcode" → "leetcode"
//     ('E' next to 'e' cancels → "leetcode"; nothing left to cancel)
//   "abBAcC"     → ""
//   "s"          → "s"
//
// Approach (stack, mirrors LC #1047):
//   stack = []
//   for c in s:
//     if stack.length && Math.abs(stack[top].charCodeAt(0) - c.charCodeAt(0)) === 32:
//       stack.pop()
//     else:
//       stack.push(c)
//   return stack.join('')
//
// Why "32" works:
//   In ASCII, the lowercase letters are exactly 32 above their uppercase
//   counterparts ('A' = 65, 'a' = 97). So pairs like 'a'/'A' or 'Z'/'z'
//   satisfy |code(a) - code(b)| === 32. Faster than two equality checks.
//
// Time:  O(n)
// Space: O(n)
//
// Edge Cases:
//   - Empty                  → ""
//   - No bad pairs           → unchanged
//   - Cancels cascade        → "abBA" → "" not "aA"
//   - Same case adjacent     → not cancelled (must be opposite case)

/**
 * @param {string} s
 * @returns {string}
 */
const makeGood = (s) => {
  // your code here
};

console.log('=== LC #1544 Make The String Great ===\n');

console.log('Test 1:');
console.log(makeGood('leEeetcode'));
// Expected: 'leetcode'

console.log('\nTest 2 — fully cancels:');
console.log(makeGood('abBAcC'));
// Expected: ''

console.log('\nTest 3 — single char:');
console.log(makeGood('s'));
// Expected: 's'

console.log('\nTest 4 — no bad pairs:');
console.log(makeGood('aA'));
// Expected: ''
