// TODO: implement
// LC #438 — Find All Anagrams in a String
//
// Given strings s and p, return an array of the START INDICES of all
// substrings of s that are anagrams of p.
//
// Example:
//   s = "cbaebabacd", p = "abc"   → [0, 6]
//     (s[0..2] = "cba" and s[6..8] = "bac" are both anagrams of "abc")
//   s = "abab", p = "ab"          → [0, 1, 2]
//
// Approach (fixed-size frequency window — same as LC #567):
//   1. Build need[26] from p. Track `required` = number of distinct chars
//      whose counts must match.
//   2. Slide a window of size |p| over s, maintaining have[26] and a
//      running `matched` counter (number of buckets whose count === need).
//   3. When matched === 26 (or your bucketed equivalent), record the
//      window's start index.
//
//   Simpler: directly compare have[] vs need[] each step — O(26) per
//   shift, still O(n).
//
// Why this beats sorting each window:
//   Sorting per window is O(k log k) per shift, O(nk log k) overall.
//   Frequency window is O(n).
//
// Time:  O(n)
// Space: O(1) — two 26-int arrays + output
//
// Edge Cases:
//   - |p| > |s|             → []
//   - s and p identical     → [0]
//   - No anagrams           → []
//   - Overlapping anagrams  → all start indices included (e.g. "abab","ab")

/**
 * @param {string} s
 * @param {string} p
 * @returns {number[]}
 */
const findAnagrams = (s, p) => {
  if (p.length > s.length) return [];
  const need = new Map();
  const have = new Map();
  const k = p.length;

  for (let c of p) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }

  const ans = [];
  const required = need.size;
  let matched = 0;

  for (let i = 0; i < s.length; i++) {
    const cIn = s[i];
    have.set(cIn, (have.get(cIn) ?? 0) + 1);

    if (need.has(cIn)) {
      if (have.get(cIn) === need.get(cIn)) matched++;
      else if (have.get(cIn) === need.get(cIn) + 1) matched--;
    }

    if (i >= k) {
      const cOut = s[i - k];
      if (need.has(cOut)) {
        if (have.get(cOut) === need.get(cOut)) matched--;
        else if (have.get(cOut) === need.get(cOut) + 1) matched++;
      }

      have.set(cOut, have.get(cOut) - 1);
      if (have.get(cOut) === 0) have.delete(cOut);
    }

    if (i >= k - 1 && matched === required) ans.push(i - k + 1);
  }

  return ans;
};

console.log('=== LC #438 Find All Anagrams in a String ===\n');

console.log('Test 1:');
console.log(findAnagrams('cbaebabacd', 'abc'));
// Expected: [0, 6]

console.log('\nTest 2 — overlapping:');
console.log(findAnagrams('abab', 'ab'));
// Expected: [0, 1, 2]

console.log('\nTest 3 — none:');
console.log(findAnagrams('xyz', 'abc'));
// Expected: []

console.log('\nTest 4 — p longer:');
console.log(findAnagrams('a', 'abc'));
// Expected: []
