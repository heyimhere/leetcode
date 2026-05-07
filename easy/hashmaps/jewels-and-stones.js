// coding interview sample

/**
 * Jewels and Stones - LeetCode #771
 * 
 * Problem Summary:
 * You're given strings `jewels` representing the types of stones that are jewels,
 * and `stones` representing the stones you have. Each character in `stones` is a
 * type of stone you have. You want to know how many of your stones are also jewels.
 * Letters are case sensitive, so "a" is a different type of stone from "A".
 * 
 * Example:
 * jewels = "aA", stones = "aAAbbbb"
 * Output: 3 (stones has 'a', 'A', 'A' which are jewels)
 * 
 * Possible Approaches:
 * 1. Brute Force: For each stone, iterate through all jewels to check if it matches.
 *    - Time: O(J × S), Space: O(1). Inefficient for large inputs.
 * 2. Set Lookup: Store jewels in a Set, then check each stone against the Set.
 *    - Time: O(J + S), Space: O(J). Optimal solution.
 * 3. Array as Hash (ASCII): Use character codes as indices in a boolean array.
 *    - Time: O(J + S), Space: O(1) fixed 128 slots. Fast but less readable.
 * 
 * Chosen Approach: Set Lookup
 * - O(1) lookup for each stone check.
 * - Clean and readable code.
 * - Easy to understand and explain in interviews.
 * - Minimal space (only stores unique jewel characters).
 * 
 * Algorithm Steps:
 * 1. Create a Set from the jewels string (each character becomes a Set entry).
 * 2. Initialize a counter to 0.
 * 3. Iterate through each character in stones:
 *    - If the character exists in the jewels Set, increment counter.
 * 4. Return the counter.
 * 
 * Why This Works:
 * - Set.has() is O(1) average time complexity.
 * - We check each stone exactly once.
 * - Case sensitivity is handled automatically (Set treats 'a' and 'A' as different).
 * 
 * Time Complexity: O(J + S) - O(J) to build Set, O(S) to check each stone.
 * Space Complexity: O(J) - Set stores at most J unique jewel characters.
 * 
 * Key Patterns: HashSet, String Iteration, Counting
 * 
 * Edge Cases:
 * - Empty jewels: Returns 0 (no jewels to match).
 * - Empty stones: Returns 0 (no stones to check).
 * - No matches: Returns 0.
 * - All stones are jewels: Returns stones.length.
 * - Duplicate jewels in input: Set handles naturally (stores unique only).
 */

/**
 * Counts how many stones are also jewels.
 * @param {string} jewels - String of jewel types (each char is a jewel type)
 * @param {string} stones - String of stones you have (each char is a stone)
 * @returns {number} - Count of stones that are jewels
 */
function numJewelsInStones(jewels, stones) {
  // Step 1: Create a Set of jewel characters for O(1) lookup
  const jewelSet = new Set(jewels);
  
  // Step 2: Count stones that are jewels
  let count = 0;
  
  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  
  return count;
}

/**
 * Alternative: One-liner using Array methods
 * More concise but slightly less readable for beginners.
 */
function numJewelsInStonesOneLiner(jewels, stones) {
  const jewelSet = new Set(jewels);
  return [...stones].filter(stone => jewelSet.has(stone)).length;
}

/**
 * Alternative: Using reduce
 * Functional programming style.
 */
function numJewelsInStonesReduce(jewels, stones) {
  const jewelSet = new Set(jewels);
  return [...stones].reduce((count, stone) => 
    count + (jewelSet.has(stone) ? 1 : 0), 0
  );
}

// ============ Test Cases ============

// Test Case 1: Basic example from problem
// jewels = "aA", stones = "aAAbbbb"
// 'a' appears 1 time, 'A' appears 2 times = 3 jewels
console.log('Test 1 - jewels="aA", stones="aAAbbbb":', numJewelsInStones('aA', 'aAAbbbb')); // Expected: 3

// Test Case 2: Another basic example
// jewels = "z", stones = "ZZ"
// 'z' !== 'Z' (case sensitive), so 0 matches
console.log('Test 2 - jewels="z", stones="ZZ":', numJewelsInStones('z', 'ZZ')); // Expected: 0

// Test Case 3: Empty jewels
console.log('Test 3 - jewels="", stones="abc":', numJewelsInStones('', 'abc')); // Expected: 0

// Test Case 4: Empty stones
console.log('Test 4 - jewels="abc", stones="":', numJewelsInStones('abc', '')); // Expected: 0

// Test Case 5: All stones are jewels
console.log('Test 5 - jewels="abc", stones="aabbcc":', numJewelsInStones('abc', 'aabbcc')); // Expected: 6

// Test Case 6: No stones are jewels
console.log('Test 6 - jewels="abc", stones="xyz":', numJewelsInStones('abc', 'xyz')); // Expected: 0

// Test Case 7: Single character each
console.log('Test 7 - jewels="a", stones="a":', numJewelsInStones('a', 'a')); // Expected: 1

// Test Case 8: Verify one-liner gives same result
console.log('Test 8 - One-liner version:', numJewelsInStonesOneLiner('aA', 'aAAbbbb')); // Expected: 3

// Test Case 9: Verify reduce version gives same result
console.log('Test 9 - Reduce version:', numJewelsInStonesReduce('aA', 'aAAbbbb')); // Expected: 3
