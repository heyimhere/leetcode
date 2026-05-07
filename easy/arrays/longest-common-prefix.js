const arrOfStrings = ["flower","flow","flight"];
// coding interview sample

/**
 * Longest Common Prefix - LeetCode #14
 * 
 * Problem Summary:
 * Given an array of strings, find the longest common prefix shared by all strings.
 * If no common prefix exists, return an empty string "".
 * 
 * Possible Approaches
 * 1. Horizontal Scanning: Compare first two strings, find prefix, then compare with next string.
 *    - Time: O(S) where S = sum of all characters, Space: O(1).
 * 2. Vertical Scanning: Compare characters column by column across all strings.
 *    - Time: O(S), Space: O(1). Stops early when mismatch found.
 * 3. Divide and Conquer: Split array, find prefix in each half, merge results.
 *    - Time: O(S), Space: O(m log n) for recursion stack.
 * 4. Binary Search: Binary search on prefix length using the shortest string.
 *    - Time: O(S log m) where m = min string length, Space: O(1).
 * 5. Trie: Build trie from all strings, traverse until branch or end.
 *    - Time: O(S), Space: O(S). Overkill for this problem.
 * 
 * Chosen Approach: Vertical Scanning
 * - Simple and intuitive: check character by character across all strings.
 * - Early termination: stops as soon as a mismatch is found.
 * - No extra space needed beyond the result string.
 * 
 * Algorithm Steps:
 * 1. Handle edge case: if array is empty, return "".
 * 2. Use the first string as the reference for comparison.
 * 3. Iterate through each character index (i) of the first string:
 *    - Get the character at position i from the first string.
 *    - Compare this character with the character at position i in every other string.
 *    - If any string is shorter than i, or has a different character → return prefix so far.
 * 4. If all characters of the first string match across all strings, return the first string.
 * 
 * Why This Works:
 * - The common prefix cannot be longer than the shortest string.
 * - By checking vertically, we find the exact point where strings diverge.
 * - Using the first string as reference is safe; if it's longer than others, we catch it.
 * 
 * Time Complexity: O(S) - Where S is the sum of all characters in all strings.
 *   - Worst case: all strings are identical, we check every character.
 *   - Best case: first character differs, we return immediately.
 * Space Complexity: O(1) - Only using pointers/indices, no extra data structures.
 *   - Note: The returned substring may use O(m) space where m = prefix length.
 * 
 * Key Patterns: String Comparison, Vertical Scanning, Early Termination
 * 
 * Edge Cases:
 * - Empty array: Return "" (no strings to compare).
 * - Single string: Return the string itself (it's its own prefix).
 * - Empty string in array: Return "" (common prefix with empty string is empty).
 * - No common prefix: Return "" (first character differs across strings).
 * - All identical strings: Return the entire string.
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  
  // Find the minimum length string to avoid out-of-bounds
  const minLen = Math.min(...strs.map(s => s.length));
  
  for (let i = 0; i < minLen; i++) {
    const char = strs[0][i];
    
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  
  // Return prefix up to the minimum length, not the entire first string
  return strs[0].substring(0, minLen);
};

console.log('longest common prefix', longestCommonPrefix(arrOfStrings));
