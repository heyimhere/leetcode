

/**
 * Valid Anagram - LeetCode #242
 * 
 * Problem: Given two strings s and t, return true if t is an anagram of s.
 * An anagram uses the exact same characters with the same frequencies.
 * 
 * Approach: HashMap (Character Frequency Counter)
 * 1. Early exit: If lengths differ, they can't be anagrams.
 * 2. Count character frequencies in string s using a Map.
 * 3. Iterate through string t, decrementing counts.
 * 4. If a character doesn't exist or count goes negative, return false.
 * 
 * Data Structure: Map (HashMap) for O(1) lookups and updates.
 * 
 * Time Complexity: O(n) - We iterate through both strings once.
 * Space Complexity: O(k) - Where k is the number of unique characters (at most 26 for lowercase letters).
 * 
 * Alternative approaches:
 * - Sorting: O(n log n) time, O(n) space - sort both strings and compare.
 * - Array[26]: O(n) time, O(1) space - use fixed array for lowercase letters only.
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
