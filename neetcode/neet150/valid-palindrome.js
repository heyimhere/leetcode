// LC #125 — Valid Palindrome
//
// Given a string s, return true if it is a palindrome after converting all
// uppercase letters to lowercase and removing all non-alphanumeric characters.
// An empty string is considered a palindrome.
//
// Examples:
//   "A man, a plan, a canal: Panama" -> true
//   "race a car"                     -> false
//   " "                              -> true
//
// Intuition:
//   A palindrome reads the same forwards and backwards. If we ignore the
//   junk (spaces, punctuation, case), we just need to walk one pointer in
//   from each end and confirm each pair matches. Non-alphanumerics are
//   invisible for this problem, so we skip past them on either side before
//   comparing. If any mismatched pair shows up, it's not a palindrome; if
//   the pointers cross without a mismatch, it is.
//
// Approach (two pointers):
//   1. l = 0, r = s.length - 1.
//   2. While l < r:
//        a. Advance l while s[l] isn't alphanumeric.
//        b. Retreat r while s[r] isn't alphanumeric.
//        c. If lower(s[l]) !== lower(s[r]) -> return false.
//        d. l++, r--.
//   3. Return true.
//
// Alternate approaches:
//   1. Filter + reverse (fnB) — build a cleaned lowercase string, compare
//      to its reversed self. O(n) time, O(n) space. Trivial to write; the
//      right pick when the interviewer just wants correctness fast.
//   2. Filter + two pointers on cleaned (fnC) — preprocess once, then run
//      simple two-pointers with no skip logic. O(n) time, O(n) space.
//      Splits the problem into "cleanup" and "check" — easier to reason
//      about but loses the O(1)-space win.
//
// Complexity of the chosen solution:
//   Time:  O(n) — each character is visited at most once by either pointer;
//          the inner skip loops never rewind, so total work across all
//          outer iterations stays linear.
//   Space: O(1) — only the two indices. No cleaned copy of the string.

const isAlnum = (c) => /[a-z0-9]/i.test(c);

const validPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l < r && !isAlnum(s[l])) l++;
    while (l < r && !isAlnum(s[r])) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

// ---
// fnB: filter + reverse. Cleanest one-liner style — build a normalized
// string and compare to its reverse. Costs O(n) extra space but is the
// hardest to get wrong under pressure; good "get correctness first" pick.

const validPalindromeB = (s) => {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
};

// ---
// fnC: preprocess to a cleaned string, then two pointers with no skip
// logic. The check loop is dead simple since the noise is gone up front;
// tradeoff is O(n) space for the cleaned copy. Nice middle ground when
// the skip-in-place version feels fiddly in the moment.

const validPalindromeC = (s) => {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let l = 0;
  let r = cleaned.length - 1;
  while (l < r) {
    if (cleaned[l] !== cleaned[r]) return false;
    l++;
    r--;
  }
  return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama")); // true
console.log(validPalindrome("race a car"));                     // false
console.log(validPalindrome(" "));                              // true
console.log(validPalindrome("0P"));                             // false
console.log(validPalindrome("ab_a"));                           // true
