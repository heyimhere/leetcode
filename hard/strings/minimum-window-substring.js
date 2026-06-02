// TODO: implement
// LC #76 — Minimum Window Substring
//
// Given strings s and t, return the MINIMUM-LENGTH substring of s that
// contains EVERY character of t (with multiplicity). If none exists, "".
//
// Example:
//   s = "ADOBECODEBANC", t = "ABC"   → "BANC"
//   s = "a",             t = "a"     → "a"
//   s = "a",             t = "aa"    → ""
//
// Approach (sliding window with frequency tracking):
//   need: Map<char, count> built from t.
//   required = need.size (distinct chars to match).
//
//   left = 0; formed = 0; have: Map<char, count>
//   best = (length, l, r) = (Infinity, 0, 0)
//
//   for right in 0..n-1:
//     c = s[right]; have.set(c, (have.get(c) ?? 0) + 1)
//     if need.has(c) && have.get(c) === need.get(c):
//       formed++
//     while formed === required:               // valid window — try to shrink
//       update best with (right - left + 1, left, right)
//       lc = s[left]; have.set(lc, have.get(lc) - 1)
//       if need.has(lc) && have.get(lc) < need.get(lc):
//         formed--
//       left++
//
//   return best.len === Infinity ? "" : s.slice(best.l, best.r + 1)
//
// Why "formed" instead of comparing maps every step:
//   Comparing the two Maps each shift would be O(σ) per step. Maintaining
//   a count of "buckets satisfied" updates in O(1) per move.
//
// Time:  O(|s| + |t|)
// Space: O(σ) (σ = distinct chars)
//
// Edge Cases:
//   - |t| > |s|                  → ""
//   - t duplicates (e.g. "aa")   → need multiple occurrences in window
//   - s contains all of t in different orders → shortest valid wins
//   - t empty                    → "" (or "" depending on spec)

/**
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
const minWindow = (s, t) => {
  // your code here
};

console.log('=== LC #76 Minimum Window Substring ===\n');

console.log('Test 1:');
console.log(minWindow('ADOBECODEBANC', 'ABC'));
// Expected: 'BANC'

console.log('\nTest 2:');
console.log(minWindow('a', 'a'));
// Expected: 'a'

console.log('\nTest 3:');
console.log(minWindow('a', 'aa'));
// Expected: ''

console.log('\nTest 4:');
console.log(minWindow('xyzabcdefxyabxyzab', 'abz'));
// Expected: 'xyzab' or similar minimum-length window
