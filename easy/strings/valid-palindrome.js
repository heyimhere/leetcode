// coding interview sample

/**
 * Valid Palindrome - LeetCode #125
 * 
 * Problem Summary:
 * A phrase is a palindrome if, after converting all uppercase letters to lowercase
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Possible Approaches:
 * 1. Two Pointers (In-Place): Use left and right pointers, skip non-alphanumeric chars,
 *    compare characters while moving inward.
 *    - Time: O(n), Space: O(1). Most efficient approach.
 * 2. Clean and Reverse: Remove non-alphanumeric, lowercase, then compare with reversed.
 *    - Time: O(n), Space: O(n). Simple but uses extra space for cleaned string.
 * 3. Clean and Two Pointers: Clean the string first, then use two pointers on cleaned version.
 *    - Time: O(n), Space: O(n). Combines both approaches but still uses extra space.
 * 
 * Chosen Approach: Two Pointers (In-Place)
 * - Most space-efficient with O(1) extra space.
 * - Single pass through the string.
 * - Handles edge cases naturally (empty strings, single characters).
 * - No need to create intermediate strings.
 * 
 * Algorithm Steps:
 * 1. Initialize two pointers: left at start (0), right at end (length - 1).
 * 2. While left < right:
 *    a. Move left pointer forward while it points to non-alphanumeric character.
 *    b. Move right pointer backward while it points to non-alphanumeric character.
 *    c. If pointers cross (left >= right), we're done - it's a palindrome.
 *    d. Compare characters at both pointers (case-insensitive).
 *       - If they don't match, return false.
 *       - If they match, move both pointers inward (left++, right--).
 * 3. If loop completes, return true (all characters matched).
 * 
 * Why This Works:
 * - We only compare alphanumeric characters by skipping others.
 * - Case-insensitive comparison handles mixed case.
 * - Two pointers meet in the middle, ensuring we check all relevant pairs.
 * - Early exit on mismatch provides optimal performance.
 * 
 * Time Complexity: O(n) - Each character is visited at most once.
 * Space Complexity: O(1) - Only using two pointer variables.
 * 
 * Key Patterns: Two Pointers, String Manipulation
 * 
 * Edge Cases:
 * - Empty string: Returns true (vacuously a palindrome).
 * - Single character: Returns true.
 * - Only non-alphanumeric chars: Returns true (nothing to compare).
 * - Mixed case: Handled by case-insensitive comparison.
 * - Numbers in string: Treated as valid alphanumeric characters.
 */

/**
 * Helper function to check if a character is alphanumeric.
 * @param {string} char - Single character to check
 * @returns {boolean} - True if letter (a-z, A-Z) or digit (0-9)
 */
const isAlphanumeric = (char) => {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||  // 0-9
    (code >= 65 && code <= 90) ||  // A-Z
    (code >= 97 && code <= 122)    // a-z
  );
};

/**
 * Determines if a string is a valid palindrome.
 * @param {string} s - The input string
 * @returns {boolean} - True if palindrome, false otherwise
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    // Skip non-alphanumeric characters from the left
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    
    // Skip non-alphanumeric characters from the right
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }
    
    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    
    // Move pointers inward
    left++;
    right--;
  }
  
  return true;
}

// ============ Test Cases ============

// Test Case 1: Classic palindrome with spaces and punctuation
// Expected: true ("amanaplanacanalpanama")
console.log('Test 1 - "A man, a plan, a canal: Panama":', isPalindrome('A man, a plan, a canal: Panama'));

// Test Case 2: Not a palindrome
// Expected: false
console.log('Test 2 - "race a car":', isPalindrome('race a car'));

// Test Case 3: Empty string
// Expected: true
console.log('Test 3 - "":', isPalindrome(''));

// Test Case 4: Single character
// Expected: true
console.log('Test 4 - "a":', isPalindrome('a'));

// Test Case 5: Only non-alphanumeric characters
// Expected: true (nothing to compare)
console.log('Test 5 - " ":', isPalindrome(' '));

// Test Case 6: Palindrome with numbers
// Expected: true
console.log('Test 6 - "12321":', isPalindrome('12321'));

// Test Case 7: Mixed alphanumeric palindrome
// Expected: true
console.log('Test 7 - "A1b2B1a":', isPalindrome('A1b2B1a'));

// Test Case 8: Special characters only with letters
// Expected: false
console.log('Test 8 - "0P":', isPalindrome('0P'));
