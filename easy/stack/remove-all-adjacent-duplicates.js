// TODO: implement
// LC #1047 — Remove All Adjacent Duplicates in String
//
// Given a string s of lowercase letters, repeatedly remove ANY two adjacent
// IDENTICAL letters until no such adjacent pair remains. Return the final
// string. The answer is unique.
//
// Example:
//   "abbaca" → "ca"
//     (remove "bb" → "aaca"; remove "aa" → "ca")
//   "azxxzy" → "ay"
//
// Approach (stack):
//   stack = []
//   for c in s:
//     if stack.length && stack[top] === c → stack.pop()  // cancel pair
//     else                                → stack.push(c)
//   return stack.join('')
//
// Why a stack:
//   The leftmost element we'd cancel against is always the most recently
//   added survivor — exactly LIFO behavior. Pairs cancel "from the inside
//   out," which is what stack popping naturally simulates.
//
// Alternative: simulate with repeated `replace(/(.)\1/, '')` until no
// change. Correct but quadratic in the worst case.
//
// Time:  O(n)
// Space: O(n) for the stack
//
// Edge Cases:
//   - "" → ""
//   - All identical (e.g. "aaaa") → "" if length even, "a" if odd
//   - No adjacent dupes (e.g. "abc") → unchanged
//   - Long runs cancel cascade-style ("aabb" → "" not "ab")

/**
 * @param {string} s
 * @returns {string}
 */
const removeDuplicates = (s) => {
  // your code here
};

console.log('=== LC #1047 Remove All Adjacent Duplicates ===\n');

console.log('Test 1:');
console.log(removeDuplicates('abbaca'));
// Expected: 'ca'

console.log('\nTest 2:');
console.log(removeDuplicates('azxxzy'));
// Expected: 'ay'

console.log('\nTest 3 — all cancel:');
console.log(removeDuplicates('aabb'));
// Expected: ''

console.log('\nTest 4 — nothing cancels:');
console.log(removeDuplicates('abc'));
// Expected: 'abc'
