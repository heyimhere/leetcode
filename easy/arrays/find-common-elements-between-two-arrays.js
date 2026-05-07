// coding interview sample

/**
 * Find Common Elements Between Two Arrays - LeetCode #2956
 * 
 * Problem Summary:
 * Given two 0-indexed integer arrays nums1 and nums2, return an array of size 2
 * containing:
 *   - answer[0]: The number of indices i such that nums1[i] exists in nums2.
 *   - answer[1]: The number of indices j such that nums2[j] exists in nums1.
 * 
 * Key Insight: We're counting INDICES (with duplicates), not unique elements.
 * If nums1 = [2, 2] and nums2 = [2], answer[0] = 2 (both indices 0 and 1 have 2 which exists in nums2).
 * 
 * Example:
 * nums1 = [4, 3, 2, 3, 1], nums2 = [2, 2, 5, 2, 3, 6]
 * - nums1[0]=4 not in nums2, nums1[1]=3 in nums2 ✓, nums1[2]=2 in nums2 ✓, 
 *   nums1[3]=3 in nums2 ✓, nums1[4]=1 not in nums2
 * - answer[0] = 3 (indices 1, 2, 3)
 * - nums2[0]=2 in nums1 ✓, nums2[1]=2 in nums1 ✓, nums2[2]=5 not in nums1,
 *   nums2[3]=2 in nums1 ✓, nums2[4]=3 in nums1 ✓, nums2[5]=6 not in nums1
 * - answer[1] = 4 (indices 0, 1, 3, 4)
 * - Output: [3, 4]
 * 
 * Possible Approaches:
 * 1. Brute Force: For each element in nums1, search through nums2 to check existence.
 *    - Time: O(n × m), Space: O(1). Inefficient for large arrays.
 * 2. Set Lookup: Convert each array to a Set, then count elements that exist in the other Set.
 *    - Time: O(n + m), Space: O(n + m). Optimal solution.
 * 3. Sorting + Binary Search: Sort both arrays, use binary search for lookups.
 *    - Time: O(n log n + m log m), Space: O(1) if in-place sort. Overkill for this problem.
 * 
 * Chosen Approach: Set Lookup
 * - O(1) lookup for existence check.
 * - Simple and clean implementation.
 * - Handles duplicates correctly (we count indices, not unique values).
 * 
 * Algorithm Steps:
 * 1. Create a Set from nums2 (for O(1) lookup when checking nums1 elements).
 * 2. Create a Set from nums1 (for O(1) lookup when checking nums2 elements).
 * 3. Count how many elements in nums1 exist in set2.
 * 4. Count how many elements in nums2 exist in set1.
 * 5. Return [count1, count2].
 * 
 * Why This Works:
 * - Sets give us O(1) average lookup time.
 * - We iterate through each array once for counting.
 * - Duplicates in the original arrays are counted (we check each index).
 * - Duplicates in Sets don't matter (we only care about existence).
 * 
 * Time Complexity: O(n + m) - Build two Sets + iterate both arrays.
 * Space Complexity: O(n + m) - Two Sets storing unique elements.
 * 
 * Key Patterns: HashSet, Counting, Array Traversal
 * 
 * Edge Cases:
 * - Empty arrays: Returns [0, 0].
 * - No common elements: Returns [0, 0].
 * - All elements common: Returns [nums1.length, nums2.length].
 * - Duplicate values: Each occurrence is counted separately.
 */

/**
 * Finds the count of elements in each array that exist in the other array.
 * @param {number[]} nums1 - First input array
 * @param {number[]} nums2 - Second input array
 * @returns {number[]} - [count from nums1 in nums2, count from nums2 in nums1]
 */
function findIntersectionValues(nums1, nums2) {
  // Step 1: Create Sets for O(1) lookup
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  
  // Step 2: Count elements in nums1 that exist in nums2
  let count1 = 0;
  for (const num of nums1) {
    if (set2.has(num)) {
      count1++;
    }
  }
  
  // Step 3: Count elements in nums2 that exist in nums1
  let count2 = 0;
  for (const num of nums2) {
    if (set1.has(num)) {
      count2++;
    }
  }
  
  return [count1, count2];
}

/**
 * Alternative: Using filter and reduce for a more functional approach
 */
function findIntersectionValuesFunctional(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  
  const count1 = nums1.filter(num => set2.has(num)).length;
  const count2 = nums2.filter(num => set1.has(num)).length;
  
  return [count1, count2];
}

/**
 * Alternative: Single-pass with reduce
 */
function findIntersectionValuesReduce(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  
  return [
    nums1.reduce((count, num) => count + (set2.has(num) ? 1 : 0), 0),
    nums2.reduce((count, num) => count + (set1.has(num) ? 1 : 0), 0)
  ];
}

// ============ Test Cases ============

// Test Case 1: Example from problem
// nums1 = [4, 3, 2, 3, 1], nums2 = [2, 2, 5, 2, 3, 6]
// From nums1: indices 1,2,3 (values 3,2,3) exist in nums2 → 3
// From nums2: indices 0,1,3,4 (values 2,2,2,3) exist in nums1 → 4
console.log('Test 1 - [4,3,2,3,1] & [2,2,5,2,3,6]:', findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); 
// Expected: [3, 4]

// Test Case 2: Another example
// nums1 = [3, 4, 2, 3], nums2 = [1, 5]
// No common elements
console.log('Test 2 - [3,4,2,3] & [1,5]:', findIntersectionValues([3, 4, 2, 3], [1, 5])); 
// Expected: [0, 0]

// Test Case 3: All elements common
console.log('Test 3 - [1,2,3] & [1,2,3]:', findIntersectionValues([1, 2, 3], [1, 2, 3])); 
// Expected: [3, 3]

// Test Case 4: Duplicates matter for counting
// nums1 = [2, 2, 2], nums2 = [2]
// All 3 elements in nums1 exist in nums2 → 3
// The 1 element in nums2 exists in nums1 → 1
console.log('Test 4 - [2,2,2] & [2]:', findIntersectionValues([2, 2, 2], [2])); 
// Expected: [3, 1]

// Test Case 5: Empty arrays
console.log('Test 5 - [] & [1,2,3]:', findIntersectionValues([], [1, 2, 3])); 
// Expected: [0, 0]

// Test Case 6: Single elements
console.log('Test 6 - [1] & [1]:', findIntersectionValues([1], [1])); 
// Expected: [1, 1]

// Test Case 7: Single elements, no match
console.log('Test 7 - [1] & [2]:', findIntersectionValues([1], [2])); 
// Expected: [0, 0]

// Test Case 8: Verify functional version
console.log('Test 8 - Functional version:', findIntersectionValuesFunctional([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); 
// Expected: [3, 4]

// Test Case 9: Verify reduce version
console.log('Test 9 - Reduce version:', findIntersectionValuesReduce([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); 
// Expected: [3, 4]
