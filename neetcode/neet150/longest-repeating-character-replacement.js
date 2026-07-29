// LC #424 — Longest Repeating Character Replacement
//
// Given a string s (uppercase letters) and an integer k, you may replace AT
// MOST k characters in s with any uppercase letter. Return the length of the
// longest SUBSTRING (contiguous run) that consists of a single repeating
// character after doing those replacements.
//
// Examples:
//   s = "ABAB",   k = 2  -> 4   (replace the two A's -> "BBBB", or two B's -> "AAAA")
//   s = "AABABBA", k = 1  -> 4   (window "AABA": fix the one B -> "AAAA", length 4)
//   s = "AAAA",   k = 0  -> 4   (already all same, no replacements needed)
//   s = "ABCDE",  k = 1  -> 2   (any two adjacent differ by one replacement)
//
// Intuition:
//   Slide a WINDOW [left, right] over the string. Inside the window we're allowed
//   to repaint up to k characters. The window is "makeable into all-one-letter"
//   exactly when the number of characters we'd have to repaint is <= k.
//
//   How many would we repaint? Keep the MOST FREQUENT character as-is and repaint
//   everything else. So:
//       replacements needed = windowLength - (count of the most frequent char)
//   The window is VALID when:
//       (right - left + 1) - maxFreq <= k
//
//   Grow the window by pushing `right` forward and bumping that char's count.
//   Whenever the window goes invalid (needs more than k repaints), slide `left`
//   forward by one to shrink it back into legality. Every valid window is a
//   candidate answer, so track the widest one seen.
//
//   The clever bit: we never bother DECREASING maxFreq when left moves. maxFreq
//   is allowed to be stale/too-high — that only ever makes a window look MORE
//   valid than it is, so it can't shrink our answer. And the answer only grows
//   when a genuinely-higher maxFreq shows up. So the window size never decreases;
//   it either holds or expands, which is exactly what we want for a max-length
//   query. This keeps the whole thing single-pass with no inner reset loop.
//
// Approach (sliding window + freq Map + running maxFreq):
//   - count = new Map(), left = 0, maxFreq = 0, best = 0
//   - for right from 0 to n-1:
//       c = s[right]
//       count[c]++                         // extend window on the right
//       maxFreq = max(maxFreq, count[c])   // best single-char count seen
//       if (windowLen - maxFreq) > k:       // too many repaints needed
//         count[s[left]]--; left++          // shrink from the left by one
//       best = max(best, right - left + 1)
//   - return best
//   Time: O(n)   Space: O(k) distinct letters (<= 26)
//
// Alternate approaches:
//   1) Brute force: for every substring, count its chars, check if
//      (len - maxCount) <= k. Time O(n^2) (or worse). Correct but slow.
//   2) "Honest" sliding window that recomputes/decrements maxFreq as left moves
//      and uses a while-loop to fully restore validity each step. Same O(n)
//      asymptotically, but more bookkeeping. The stale-maxFreq version above is
//      the standard, tighter formulation.
//
// Complexity of the chosen solution:
//   Time:  O(n)  — right advances n times; left advances at most n times total.
//                  Each step is O(1) Map work, so linear overall.
//   Space: O(k)  — the Map holds at most one entry per distinct uppercase letter,
//                  bounded by the 26-letter alphabet (i.e. effectively O(1)).

const characterReplacement = (s, k) => {
  const count = new Map();
  let left = 0;
  let maxFreq = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    count.set(c, (count.get(c) || 0) + 1);
    maxFreq = Math.max(maxFreq, count.get(c));

    // windowLen - maxFreq = chars we'd need to repaint. If that exceeds k the
    // window is illegal, so slide left forward once to shrink it back.
    if (right - left + 1 - maxFreq > k) {
      const leftChar = s[left];
      count.set(leftChar, count.get(leftChar) - 1);
      left++;
    }

    best = Math.max(best, right - left + 1);
  }

  return best;
};

console.log('"ABAB", 2    ->', characterReplacement('ABAB', 2));    // 4
console.log('"AABABBA", 1 ->', characterReplacement('AABABBA', 1)); // 4
console.log('"AAAA", 0    ->', characterReplacement('AAAA', 0));    // 4
console.log('"ABCDE", 1   ->', characterReplacement('ABCDE', 1));   // 2
console.log('"", 2        ->', characterReplacement('', 2));        // 0
