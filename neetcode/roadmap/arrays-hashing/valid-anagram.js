

/**
 * Valid Anagram - LeetCode #242
 * 
 * Problem Summary:
 * Given two strings s and t, return true if t is an anagram of s.
 * An anagram is a word formed by rearranging the letters of another word,
 * using all original letters exactly once (same characters, same frequencies).
 * 
 * Possible Approaches:
 * 1. Sorting: Sort both strings and compare character by character.
 *    - Time: O(n log n), Space: O(n) for sorted copies.
 * 2. HashMap (Frequency Counter): Count chars in s, decrement for t.
 *    - Time: O(n), Space: O(k) where k = unique characters.
 * 3. Array[26]: Use fixed-size array for lowercase letters only.
 *    - Time: O(n), Space: O(1) constant 26 slots.
 * 4. Two HashMaps: Build frequency maps for both, then compare.
 *    - Time: O(n), Space: O(k) but requires extra comparison step.
 * 
 * Chosen Approach: HashMap (Single Frequency Counter)
 * - Optimal O(n) time with minimal passes through the data.
 * - Works for any character set (not limited to lowercase a-z).
 * - Early termination possible when mismatch is found.
 * 
 * Algorithm Steps:
 * 1. Early exit: If lengths differ, return false immediately.
 * 2. Build frequency map: Iterate through s, count each character.
 * 3. Validate against t: For each char in t:
 *    - If char doesn't exist in map → not an anagram → return false.
 *    - Decrement the count for that character.
 *    - If count goes negative → t has more of this char → return false.
 * 4. If all checks pass, return true (guaranteed valid due to equal lengths).
 * 
 * Why This Works:
 * - Equal lengths + all chars in t found in s with matching counts = anagram.
 * - The length check ensures we don't need to verify remaining counts are zero.
 * - HashMap provides O(1) lookup and update for each character.
 * 
 * Time Complexity: O(n) - Single pass through each string (2n operations).
 * Space Complexity: O(k) - Map stores at most k unique characters.
 *   - For lowercase letters only: O(26) = O(1).
 *   - For Unicode: O(n) worst case if all chars are unique.
 * 
 * Key Patterns: HashMap, Frequency Counter, String Comparison
 * 
 * Edge Cases:
 * - Different lengths: Early return false (handled by length check).
 * - Empty strings: Both empty → true (0 === 0, no iterations needed).
 * - Single character: Works correctly with single iteration.
 * - Repeated characters: Frequency counting handles duplicates properly.
 * - Character not in s: Map.has() check catches this immediately.
 */

const isAnagram = (s, t) => {
  if(s.length !== t.length) return false;
  const count = new Map();
  for(const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  for(const char of t) {
    if(!count.has(char)) return false;
    count.set(char, count.get(char) - 1);
    if(count.get(char) < 0) return false;
  }
  return true;
}

console.log('is anagram', isAnagram("racecar", "carrace"));
