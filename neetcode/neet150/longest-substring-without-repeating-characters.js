// LC #3 — Longest Substring Without Repeating Characters
//
// Given a string s, return the length of the longest SUBSTRING (contiguous run
// of characters) that contains no repeating characters.
//
// Examples:
//   s = "abcabcbb"  -> 3   ("abc", then it repeats)
//   s = "bbbbb"      -> 1   ("b" — every char is the same)
//   s = "pwwkew"     -> 3   ("wke"; note "pwke" is a subsequence, not a substring)
//   s = ""           -> 0   (empty string)
//   s = "au"         -> 2   ("au")
//
// Intuition:
//   Keep a WINDOW [left, right] over the string whose invariant is: every
//   character inside the window is unique. Push `right` forward one char at a
//   time to try to grow the window. Track what's inside with a Set for O(1)
//   "have I already got this char?" checks.
//
//   When the incoming char s[right] is ALREADY in the set, the uniqueness
//   invariant just broke. Fix it by shrinking from the LEFT: remove s[left] from
//   the set and advance left, repeating until the offending duplicate is gone.
//   Only then add s[right] and the window is valid again.
//
//   After each step the window [left..right] is guaranteed duplicate-free, so
//   record its width (right - left + 1) as a candidate for the answer.
//
//   This is a *real* sliding window (contrast with Best Time to Buy/Sell Stock,
//   where left teleported to a running min). Here left genuinely inches forward
//   in a while-loop to restore validity — the window both grows and contracts.
//
//   Why it's still O(n): left never moves backward, and right never moves
//   backward. Each character is added to the set once and removed at most once,
//   so total work is bounded by 2n even though there's a nested while-loop.
//
// Approach (sliding window + Set):
//   - seen = new Set(), left = 0, best = 0
//   - for right from 0 to n-1:
//       while s[right] is in seen:        // duplicate — shrink from the left
//         seen.delete(s[left]); left++
//       seen.add(s[right])
//       best = max(best, right - left + 1)
//   - return best
//   Time: O(n)   Space: O(min(n, k)), k = alphabet size
//
// Alternate approaches:
//   1) Brute force: check every substring for uniqueness.
//      Time: O(n^3) (or O(n^2) with a per-start set)   Space: O(min(n,k)).
//      Correct but far too slow; the sliding window is the fix.
//   2) Map of char -> last index, "jump" left instead of crawling.
//      When s[right] was seen at index j >= left, set left = j + 1 in one step
//      rather than deleting one char at a time. Same O(n) time, fewer
//      iterations, but the Set-crawl version is easier to reason about and is
//      the clearest illustration of a contracting window.
//
// Complexity of the chosen solution:
//   Time:  O(n)  — right advances n times; left advances at most n times total
//                  across the whole run, so the nested loop is amortized O(1).
//   Space: O(min(n, k))  — the set holds at most one of each distinct character,
//                  bounded by the alphabet size k (e.g. 26, 128 ASCII, etc.).

const lengthOfLongestSubstring = (s) => {
  const seen = new Set();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    best = Math.max(best, right - left + 1);
  }

  return best;
};

console.log('"abcabcbb" ->', lengthOfLongestSubstring('abcabcbb')); // 3
console.log('"bbbbb"    ->', lengthOfLongestSubstring('bbbbb'));    // 1
console.log('"pwwkew"   ->', lengthOfLongestSubstring('pwwkew'));   // 3
console.log('""         ->', lengthOfLongestSubstring(''));         // 0
console.log('"au"       ->', lengthOfLongestSubstring('au'));       // 2
console.log('"dvdf"     ->', lengthOfLongestSubstring('dvdf'));     // 3
