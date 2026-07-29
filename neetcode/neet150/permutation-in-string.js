// LC #567 — Permutation in String
//
// Given two strings s1 and s2, return true if s2 contains a PERMUTATION of s1
// as a substring. In other words: does some contiguous slice of s2, of length
// exactly s1.length, use the same letters as s1 with the same counts?
//
// Examples:
//   s1 = "ab",  s2 = "eidbaooo"  -> true   ("ba" at index 3 is a permutation of "ab")
//   s1 = "ab",  s2 = "eidboaoo"  -> false  (no window is "ab" or "ba")
//   s1 = "a",   s2 = "ab"        -> true   ("a")
//   s1 = "adc", s2 = "dcda"      -> true   ("dca" is a permutation of "adc")
//   s1 = "abc", s2 = "ab"        -> false  (s1 longer than s2 — impossible)
//
// Intuition:
//   A permutation is just a REARRANGEMENT — order doesn't matter, only WHICH
//   letters and HOW MANY of each. So "s2 contains a permutation of s1" really
//   means: is there a length-|s1| window in s2 whose character counts exactly
//   match s1's character counts?
//
//   That's a FIXED-SIZE sliding window. Unlike #424 (where the window grew and
//   shrank), here the window is always exactly k = s1.length wide. We slide it
//   one character at a time across s2: add the incoming char on the right, drop
//   the outgoing char on the left, keeping the width pinned at k. At each stop we
//   ask: does this window's count map equal s1's count map? If yes, we found one.
//
//   Building s1's target counts is a fingerprint ("need"). The window keeps its
//   own live count map. A match means every letter s1 needs appears the same
//   number of times in the window.
//
//   Nice shortcut on the match test: because the window is always exactly k wide
//   AND s1 is exactly k long, we only need to check that every letter in `need`
//   has the right count in the window. We DON'T have to separately check for
//   "extra" letters — if all of need's counts are satisfied, they already sum to
//   k, which fills the whole window, leaving no room for any stray character.
//
// Approach (fixed-size sliding window + two count Maps):
//   - if s1 longer than s2 -> false (can't fit)
//   - need = char counts of s1
//   - window = new Map(), k = s1.length
//   - for right from 0 to n-1:
//       add s2[right] to window
//       if right >= k:  remove s2[right - k] from window   // keep width = k
//       if right >= k-1 and window matches need:  return true
//   - return false
//   Time: O(n)   Space: O(1) (maps bounded by 26 letters)
//
// Alternate approaches:
//   1) Sort each length-k window and compare to sorted s1. Simple to reason
//      about but O(n * k log k) — the count-map window is strictly better.
//   2) True O(n) with a single "matches" counter: track how many of the (<=26)
//      distinct letters currently have window count === need count, and update
//      that counter by +/-1 as chars enter/leave, instead of re-scanning `need`
//      every step. Same big-O in practice (the scan is O(26) = O(1)), but avoids
//      the per-step 26-key loop. More bookkeeping; the map-compare below is the
//      clearest to recall.
//
// Complexity of the chosen solution:
//   Time:  O(n)  — one pass over s2; each step does O(26) = O(1) map work for the
//                  match check, so linear overall (n = s2.length).
//   Space: O(1)  — `need` and `window` each hold at most 26 distinct letters,
//                  independent of input size.

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const need = new Map();
  for (const c of s1) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }

  const window = new Map();
  const k = s1.length;

  // Every letter s1 needs must appear the same number of times in the window.
  const matches = () => {
    for (const [c, cnt] of need) {
      if ((window.get(c) ?? 0) !== cnt) return false;
    }
    return true;
  };

  for (let right = 0; right < s2.length; right++) {
    const cIn = s2[right];
    window.set(cIn, (window.get(cIn) ?? 0) + 1);

    // Once the window is wider than k, drop the leftmost char to pin width at k.
    if (right >= k) {
      const cOut = s2[right - k];
      window.set(cOut, window.get(cOut) - 1);
    }

    // Only test once the window is a full k characters wide.
    if (right >= k - 1 && matches()) {
      return true;
    }
  }

  return false;
};

console.log('"ab","eidbaooo"  ->', checkInclusion('ab', 'eidbaooo')); // true
console.log('"ab","eidboaoo"  ->', checkInclusion('ab', 'eidboaoo')); // false
console.log('"a","ab"         ->', checkInclusion('a', 'ab'));        // true
console.log('"adc","dcda"     ->', checkInclusion('adc', 'dcda'));    // true
console.log('"abc","ab"       ->', checkInclusion('abc', 'ab'));      // false
