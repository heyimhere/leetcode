// LC #76 — Minimum Window Substring   (HARD)
//
// Given strings s and t, return the SHORTEST substring of s that contains every
// character of t, INCLUDING duplicates. If no such window exists, return "".
//
// Examples:
//   s = "ADOBECODEBANC", t = "ABC"  -> "BANC"   (shortest window with A, B, C)
//   s = "a",             t = "a"    -> "a"
//   s = "a",             t = "aa"   -> ""        (need two a's, s has only one)
//   s = "a",             t = "b"    -> ""        (b never appears)
//   s = "ab",            t = "b"    -> "b"
//
// Intuition:
//   This is a VARIABLE-size sliding window, like #424 — the window both grows and
//   shrinks. The twist vs #567 (fixed width) is that we don't know the answer's
//   length ahead of time; we hunt for the smallest width that still "covers" t.
//
//   Two moves:
//     - EXPAND right to pull characters in until the window is VALID (contains all
//       of t's letters with enough duplicates).
//     - Once valid, CONTRACT from the left as far as possible while STAYING valid,
//       recording the width each time — the tightest valid window is a candidate.
//     The moment contracting breaks validity, go back to expanding right. Repeat
//     to the end; the smallest valid window ever recorded is the answer.
//
//   The hard part is checking "is the window valid?" in O(1) instead of re-scanning
//   t every step. The trick is a HAVE-vs-NEED counter:
//     - need = char counts of t.  required = number of DISTINCT chars in t.
//     - formed = how many of those distinct chars are currently satisfied, i.e.
//       the window holds AT LEAST as many of that char as t needs.
//     - The window is valid exactly when formed === required.
//   `formed` ticks up by one only at the instant a char's window count first hits
//   its needed count, and ticks down only when contracting drops it back below.
//   So validity is a single integer comparison, updated in O(1) per move.
//
//   Note `formed` counts DISTINCT requirements met, not total characters — that's
//   what lets one comparison stand in for "every letter of t is covered."
//
// Approach (variable window + have/need + formed/required counters):
//   - need = counts of t; required = need.size; window = {}; formed = 0; left = 0
//   - track bestLen = Infinity, bestStart = 0
//   - for right in s:
//       add s[right] to window
//       if it just reached need's count for that char -> formed++
//       while formed === required:              // valid — try to shrink
//         record [left..right] if it's the smallest so far
//         remove s[left] from window
//         if that drops it below need's count -> formed--
//         left++
//   - return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen)
//   Time: O(|s| + |t|)   Space: O(distinct chars)
//
// Alternate approaches:
//   1) Brute force: try every (start, end) pair, check each contains t. O(|s|^2 · |t|)
//      or so — correct but far too slow.
//   2) "Filtered s" optimization: pre-extract only the indices of s that appear in
//      t and slide over those. Helps when t's alphabet is tiny vs a huge s, but the
//      plain window above is already O(|s|) and the clearest to recall.
//
// Complexity of the chosen solution:
//   Time:  O(|s| + |t|)  — building `need` is O(|t|); then right advances |s| times
//                          and left advances at most |s| times total, each step O(1).
//   Space: O(|t|)        — the two maps hold at most one entry per distinct char of
//                          t (bounded by the alphabet), independent of |s|.

const minWindow = (s, t) => {
  if (t.length === 0 || s.length < t.length) return '';

  const need = new Map();
  for (const c of t) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }

  const required = need.size; // distinct chars we must fully cover
  const window = new Map();
  let formed = 0; // distinct chars currently satisfied
  let left = 0;

  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right++) {
    const cIn = s[right];
    window.set(cIn, (window.get(cIn) ?? 0) + 1);

    // This char just completed one of t's requirements.
    if (need.has(cIn) && window.get(cIn) === need.get(cIn)) {
      formed++;
    }

    // Valid window — shrink from the left as far as we can while staying valid.
    while (formed === required) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }

      const cOut = s[left];
      window.set(cOut, window.get(cOut) - 1);
      if (need.has(cOut) && window.get(cOut) < need.get(cOut)) {
        formed--;
      }
      left++;
    }
  }

  return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen);
};

console.log('"ADOBECODEBANC","ABC" ->', minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
console.log('"a","a"               ->', minWindow('a', 'a'));               // "a"
console.log('"a","aa"              ->', minWindow('a', 'aa'));              // ""
console.log('"a","b"               ->', minWindow('a', 'b'));               // ""
console.log('"ab","b"              ->', minWindow('ab', 'b'));              // "b"
