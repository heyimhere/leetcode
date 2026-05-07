// coding interview sample

/**
 * Flatten Deeply Nested Array - LeetCode #2625
 * 
 * Problem Summary:
 * Given a multi-dimensional array `arr` and a depth `n`, return a flattened
 * version of that array. A flattened array is a version of the original array
 * with some or all of the sub-arrays removed and replaced with their elements.
 * The flattening should only go up to `n` levels deep.
 * 
 * Key Insight: The depth parameter controls HOW MANY levels we flatten.
 * - depth = 0: No flattening, return as-is
 * - depth = 1: Flatten only the first level
 * - depth = Infinity: Flatten completely (like the previous problem)
 * 
 * Example:
 * arr = [1, 2, [3, [4, 5]], 6], n = 1
 * Output: [1, 2, 3, [4, 5], 6]  (only first level flattened)
 * 
 * arr = [1, 2, [3, [4, 5]], 6], n = 2
 * Output: [1, 2, 3, 4, 5, 6]  (both levels flattened)
 * 
 * Possible Approaches:
 * 1. Recursion with Depth Tracking: Decrement depth as we go deeper, stop when depth = 0.
 *    - Time: O(n), Space: O(d) call stack. Clean and intuitive.
 * 2. Iterative with Stack: Track both elements and their remaining depth.
 *    - Time: O(n), Space: O(n). Avoids recursion, more complex.
 * 3. Recursive with Concat: Return new arrays at each level.
 *    - Time: O(n), Space: O(n). Functional style, creates more arrays.
 * 
 * Chosen Approach: Recursion with Depth Tracking
 * - Intuitive depth decrement matches the problem's mental model.
 * - Clean separation: outer function for setup, helper for recursion.
 * - When depth reaches 0, arrays are pushed as-is (no more flattening).
 * 
 * Algorithm Steps:
 * 1. Initialize an empty result array.
 * 2. Define a helper function that takes items and current allowed depth:
 *    a. Iterate through each element.
 *    b. If element is an array AND depth > 0:
 *       - Recurse with (element, depth - 1).
 *    c. Else (not an array OR depth = 0):
 *       - Push element to result as-is.
 * 3. Call helper with (arr, n).
 * 4. Return result.
 * 
 * Why This Works:
 * - depth > 0 check ensures we stop flattening at the specified level.
 * - Decrementing depth on each recursion tracks how deep we can still go.
 * - When depth = 0, even arrays are pushed without flattening.
 * - The closure allows result to accumulate across recursive calls.
 * 
 * Time Complexity: O(n) - Each element visited once.
 * Space Complexity: O(d) - Call stack depth equals min(max nesting, n).
 * 
 * Key Patterns: Recursion, Depth-Limited Traversal, Closure
 * 
 * Edge Cases:
 * - depth = 0: Returns array with same structure (no flattening).
 * - Empty array: Returns [].
 * - Already flat array: Returns copy regardless of depth.
 * - depth > actual nesting: Fully flattens (depth becomes irrelevant).
 */

/**
 * Flattens an array to a specified depth.
 * @param {any[]} arr - The input array (may contain nested arrays)
 * @param {number} depth - Maximum depth to flatten (0 = no flattening)
 * @returns {any[]} - Array flattened to the specified depth
 */
const flat = (arr, depth) => {
  const result = [];

  const flatten = (items, d) => {
    for (let i = 0; i < items.length; i++) {
      if (Array.isArray(items[i]) && d > 0) {
        // Can still flatten: recurse with decremented depth
        flatten(items[i], d - 1);
      } else {
        // Either not an array, or depth exhausted: push as-is
        result.push(items[i]);
      }
    }
  };

  flatten(arr, depth);
  return result;
};

/**
 * Alternative: Recursive with concat (functional style)
 * Returns new arrays at each level instead of using closure.
 */
const flatConcat = (arr, depth) => {
  if (depth === 0) return arr.slice(); // Return shallow copy
  
  let result = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten with decremented depth, then concat
      result = result.concat(flatConcat(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  
  return result;
};

/**
 * Alternative: Using reduce (more concise)
 */
const flatReduce = (arr, depth) => {
  return depth > 0
    ? arr.reduce((acc, item) => 
        acc.concat(Array.isArray(item) ? flatReduce(item, depth - 1) : item), [])
    : arr.slice();
};

// ============ Test Cases ============

// Test Case 1: Depth = 1 (flatten only first level)
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// Becomes: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log('Test 1 - depth=1:', flat(arr1, 1));
// Expected: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Test Case 2: Depth = 2 (flatten two levels)
const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log('Test 2 - depth=2:', flat(arr2, 2));
// Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Test Case 3: Depth = 0 (no flattening)
console.log('Test 3 - depth=0:', flat([1, [2, [3]]], 0));
// Expected: [1, [2, [3]]] (unchanged structure)

// Test Case 4: LeetCode Example 1
// arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0
console.log('Test 4 - LeetCode ex1:', flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
// Expected: [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Test Case 5: LeetCode Example 2
// arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1
console.log('Test 5 - LeetCode ex2:', flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
// Expected: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Test Case 6: Empty array
console.log('Test 6 - empty:', flat([], 5));
// Expected: []

// Test Case 7: Already flat
console.log('Test 7 - already flat:', flat([1, 2, 3], 10));
// Expected: [1, 2, 3]

// Test Case 8: Deeply nested with high depth
console.log('Test 8 - deep nesting:', flat([1, [2, [3, [4, [5]]]]], 10));
// Expected: [1, 2, 3, 4, 5]

// Test Case 9: Verify concat version
console.log('Test 9 - concat version:', flatConcat([1, [2, [3, [4]]]], 2));
// Expected: [1, 2, 3, [4]]

// Test Case 10: Verify reduce version
console.log('Test 10 - reduce version:', flatReduce([1, [2, [3, [4]]]], 2));
// Expected: [1, 2, 3, [4]]
